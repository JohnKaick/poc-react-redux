import React from 'react'
import emitter from './../../../../module/globals/emitter'
import Component from './component'

import { vincular } from './../../module/api/participante'
import { obterTodos, obter } from './../../../../module/api/colaborador'

export default class extends React.Component {

    constructor(props) {
        super(props)
        this.eventLoad = null
        this.onChange = this.onChange.bind(this)
        this.onParticipanteChange = this.onParticipanteChange.bind(this)
        this.onVincular = this.onVincular.bind(this)
        this.onOpen = this.onOpen.bind(this)
        this.close = this.close.bind(this)
        this.state = {
            open: false,
            participantes: [],
            participante: null,
            analiseId: null,
            projetoId: null,
            responsavel: true,
            nome: '',
            sobrenome: '',
            email: '',
            cliente: '',
            area: '',
            cargo: ''
        }
    }

    onChange(e, { name, value, checked }) {
        this.setState({
            [name]: value || checked
        })
    }

    onParticipanteChange(e, { value }) {
        obter(value).then(response => {
            let part = response.data
            this.setState({
                participante: value,
                nome: part.nome || '',
                sobrenome: part.sobrenome || '',
                email: part.email || '',
                cliente: part.cliente || '',
                area: part.area || '',
                cargo: part.cargo || ''
            })
        })
    }

    close() {
        this.eventLoad.remove()
        this.setState({
            participantes: [],
            participante: null,
            open: false
        })
    }

    onOpen() {

        let participanteIds = this.props.participantes.map(p => p.colaborador)
        obterTodos(participanteIds).then(response => {
            let parts = response.data
            this.setState({
                analiseId: this.props.analiseId || null,
                projetoId: this.props.projetoId || null,
                participantes: parts || []
            })
        }).catch(err => {
            console.log(err)
        })

        this.eventLoad = emitter.addListener('participantes-load', () => {
            obterTodos(participanteIds).then(response => {
                let parts = response.data
                this.setState({
                    analiseId: this.props.analiseId || null,
                    projetoId: this.props.projetoId || null,
                    participantes: parts || []
                })
            })
            if (this.state.participante) {
                obter(this.state.participante).then(response => {
                    let part = response.data
                    this.setState({
                        nome: part.nome || '',
                        sobrenome: part.sobrenome || '',
                        email: part.email || '',
                        cliente: part.cliente || '',
                        area: part.area || '',
                        cargo: part.cargo || ''
                    })
                })
            }
        })

        this.setState({ open: true })
    }

    onVincular() {
        vincular({
            analiseId: this.state.analiseId,
            participanteId: this.state.participante,
            responsavel: this.state.responsavel,
        }).then(response => {
            emitter.emit('analise-participante-load')
            emitter.emit('mensagem-sucesso', 'Participante adicionado com sucesso.')
            this.close()
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        return <Component
            {...this.props}
            { ...this.state }
            close={this.close}
            onVincular={this.onVincular}
            onOpen={this.onOpen}
            onChange={this.onChange}
            onParticipanteChange={this.onParticipanteChange}
        />
    }

}