import React from 'react'
import emitter from './../../../../module/globals/emitter'
import Component from './component'
import { Link, NavLink } from 'react-router-dom'
import { cadastrar } from './../../module/api/item'

export default class extends React.Component {

    constructor(props) {
        super(props)
        this.state = { open: false }
        this.onChange = this.onChange.bind(this)
        this.onSituacaoChange = this.onSituacaoChange.bind(this)
        this.onSalvar = this.onSalvar.bind(this)
        this.onOpen = this.onOpen.bind(this)
        this.close = this.close.bind(this)
        this.state = {
            open: false,
            projetoId: null,
            analiseId: null,
            assunto: '',
            escopo: '',
            situacao: '',
            anomalia: '',
        }
    }

    onChange(e, { name, value }) {
        this.setState({ [name]: value })
    }

    onSituacaoChange(e, { value }) {
        this.setState({
            situacao: value
        })
    }

    close() {
        this.setState({ open: false })
    }

    onOpen() {
        this.setState({
            projetoId: this.props.projetoId,
            analiseId: this.props.analiseId,
        })
        this.setState({ open: true })
    }

    onSalvar() {
        cadastrar({
            analiseId: this.state.analiseId,
            projetoId: this.state.projetoId,
            assunto: this.state.assunto,
            escopo: this.state.escopo,
            situacao: this.state.situacao,
            anomalia: this.state.anomalia
        }).then(response => {
            emitter.emit('analise-item-load')
            emitter.emit('mensagem-sucesso', 'Item adicionado com sucesso.')
            this.setState({
                projetoId: null,
                analiseId: null,
                assunto: '',
                escopo: '',
                situacao: '',
                anomalia: ''
            })
            this.close()
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        return <Component
            {...this.state}
            {...this.props}
            close={this.close}
            onSalvar={this.onSalvar}
            onOpen={this.onOpen}
            onChange={this.onChange}
            onSituacaoChange={this.onSituacaoChange}
        />
    }

}
