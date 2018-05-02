import React from 'react'
import emitter from './../../../../module/globals/emitter'
import Component from './component'

import { Link, NavLink } from 'react-router-dom'

import { obter, cadastrar, editar } from './../../module/api/registro'

export default class extends React.Component {

    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this)
        this.onSalvar = this.onSalvar.bind(this)
        this.onOpen = this.onOpen.bind(this)
        this.close = this.close.bind(this)
        this.state = {
            open: false,
            id: null,
            local: '',
            dataHora: null,
            descricao: '',
            tempoManha: '',
            tempoTarde: '',
            tempoNoite: ''
        }
    }

    onChange(e, { name, value }) {
        this.setState({ [name]: value })
    }

    close() {
        this.setState({ open: false })
    }

    onOpen() {
        if (this.props.id) {
            obter(this.props.id).then(response => {
                let ata = response.data
                this.setState({
                    id: ata._id,
                    local: ata.local || '',
                    dataHora: ata.dataHora || null,
                    descricao: ata.descricao || '',
                    tempoManha: ata.tempoManha || '',
                    tempoTarde: ata.tempoTarde || '',
                    tempoNoite: ata.tempoNoite || '',
                })
            }).catch(err => {
                console.log(err)
            })
        } else {
            this.setState({
                local: '',
                dataHora: null,
                descricao: '',
                tempoManha: '',
                tempoTarde: '',
                tempoNoite: ''
            })
        }
        this.setState({ open: true })
    }

    onSalvar() {
        if (this.state.id) {
            editar({
                id: this.state.id,
                local: this.state.local,
                dataHora: this.state.dataHora,
                descricao: this.state.descricao,
                tempoManha: this.state.tempoManha,
                tempoTarde: this.state.tempoTarde,
                tempoNoite: this.state.tempoNoite,
            }).then(response => {
                emitter.emit('diario-load')
                emitter.emit('mensagem-sucesso', 'Diário editado com sucesso.')
                this.close()
            }).catch(err => {
                console.log(err)
            })
        } else {
            cadastrar({
                projetoId: this.props.projetoId,
                local: this.state.local,
                dataHora: this.state.dataHora,
                descricao: this.state.descricao,
                tempoManha: this.state.tempoManha,
                tempoTarde: this.state.tempoTarde,
                tempoNoite: this.state.tempoNoite,
            }).then(response => {
                emitter.emit('diarios-load')
                emitter.emit('mensagem-sucesso', 'Diário cadastrado com sucesso.')
                this.setState({
                    projetoId: null,
                    local: '',
                    dataHora: null,
                    descricao: '',
                    tempoManha: '',
                    tempoTarde: '',
                    tempoNoite: ''
                })
                this.close()
            }).catch(err => {
                console.log(err)
            })
        }
    }

    render() {
        return <Component
            {...this.state}
            {...this.props}
            close={this.close}
            onSalvar={this.onSalvar}
            onOpen={this.onOpen}
            onChange={this.onChange}
        />
    }

}