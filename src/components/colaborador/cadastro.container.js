import React from 'react'
import emitter from './../../module/globals/emitter'
import Component from './cadastro.component'

import { obter, cadastrar, editar } from './../../module/api/colaborador'

export default class extends React.Component {

    constructor(props) {
        super(props)
        this.onSalvar = this.onSalvar.bind(this)
        this.onOpen = this.onOpen.bind(this)
        this.close = this.close.bind(this)
        this.onChange = this.onChange.bind(this)
        this.state = {
            open: false,
            projetoId: null,
            id: null,
            nome: '',
            sobrenome: '',
            email: '',
            cliente: '',
            area: '',
            cargo: ''
        }
    }

    onChange(e, { name, value }) {
        this.setState({
            [name]: value
        })
    }

    onOpen() {
        if (this.props.id) {
            obter(this.props.id).then(response => {
                let participante = response.data
                this.setState({
                    id: participante.id || this.props.id,
                    nome: participante.nome || '',
                    sobrenome: participante.sobrenome || '',
                    email: participante.email || '',
                    cliente: participante.cliente || '',
                    area: participante.area || '',
                    cargo: participante.cargo || ''
                })
            }).catch(err => {
                console.log(err)
            })
        } else {
            this.setState({ projetoId: this.props.projetoId })
        }
        this.setState({ open: true })
    }

    close() {
        this.setState({
            projetoId: null,
            nome: '',
            sobrenome: '',
            email: '',
            cliente: '',
            area: '',
            cargo: '',
            open: false
        })
    }

    onSalvar() {
        if (this.props.id) {
            editar({
                id: this.props.id || this.state.id,
                nome: this.state.nome,
                sobrenome: this.state.sobrenome,
                email: this.state.email,
                cliente: this.state.cliente,
                area: this.state.area,
                cargo: this.state.cargo
            }).then(response => {
                emitter.emit('participantes-load')
                emitter.emit('mensagem-sucesso', 'Participante editado com sucesso.')
                this.close()
            }).catch(err => {
                console.log(err)
            })
        } else {
            cadastrar({
                projetoId: this.props.projetoId || this.state.projetoId,
                nome: this.state.nome,
                sobrenome: this.state.sobrenome,
                email: this.state.email,
                cliente: this.state.cliente,
                area: this.state.area,
                cargo: this.state.cargo
            }).then(response => {
                emitter.emit('participantes-load')
                emitter.emit('mensagem-sucesso', 'Participante cadastrado com sucesso.')
                this.close()
            }).catch(err => {
                console.log(err)
            })
        }
    }

    render() {
        return <Component
            {...this.props}
            {...this.state}
            open={this.state.open}
            close={this.close}
            onSalvar={this.onSalvar}
            onOpen={this.onOpen}
            onChange={this.onChange}
        />
    }

}
