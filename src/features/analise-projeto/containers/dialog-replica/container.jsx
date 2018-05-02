import React from 'react'
import emitter from './../../../../module/globals/emitter'
import Component from './component'
import { Link, NavLink } from 'react-router-dom'
import { cadastrar } from './../../module/api/replica'

export default class extends React.Component {

    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this)
        this.onSituacaoChange = this.onSituacaoChange.bind(this)
        this.onSalvar = this.onSalvar.bind(this)
        this.onOpen = this.onOpen.bind(this)
        this.close = this.close.bind(this)
        this.state = {
            open: false,
            itemId: null,
            situacaoSugerida: '',
            mensagem: '',
        }
    }

    onChange(e, { name, value }) {
        this.setState({ [name]: value })
    }

    onSituacaoChange(e, { value }) {
        this.setState({
            situacaoSugerida: value
        })
    }

    close() {
        this.setState({ open: false })
    }

    onOpen() {
        this.setState({
            itemId: this.props.itemId,
            situacaoSugerida: '',
            mensagem: '',
        })
        this.setState({ open: true })
    }

    onSalvar() {
        cadastrar({
            itemId: this.state.itemId,
            situacaoSugerida: this.state.situacaoSugerida,
            mensagem: this.state.mensagem,
        }).then(response => {
            emitter.emit('analise-item-load')
            emitter.emit('mensagem-sucesso', 'Resposta efetuada com sucesso.')
            this.setState({
                itemId: null,
                situacaoSugerida: '',
                mensagem: '',
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