import React from 'react'
import emitter from './../../../../module/globals/emitter'
import Component from './component'

import { Link, NavLink } from 'react-router-dom'

import { obter, cadastrar, editar, remover } from './../../module/api/item'

export default class extends React.Component {

    constructor(props) {
        super(props)
        this.state = { open: false }
        this.onChange = this.onChange.bind(this)
        this.onSituacaoChange = this.onSituacaoChange.bind(this)
        this.onSalvar = this.onSalvar.bind(this)
        this.onDeletar = this.onDeletar.bind(this)
        this.onOpen = this.onOpen.bind(this)
        this.close = this.close.bind(this)
        this.state = {
            open: false,
            analiseId: null,
            id: null,
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
        if (this.props.id) {
            obter(this.props.id).then(response => {
                let analise = response.data
                this.setState({
                    id: analise._id,
                    assunto: analise.assunto || '',
                    escopo: analise.escopo || '',
                    situacao: analise.situacao || '',
                    anomalia: analise.anomalia || ''
                })
            }).catch(err => {
                console.log(err)
            })
        } else {
            this.setState({
                analiseId: this.props.analiseId,
                id: null,
                assunto: this.props.assunto,
                escopo: '',
                situacao: '',
                anomalia: '',
            })
        }
        this.setState({ open: true })
    }

    onSalvar() {
        if (this.state.id) {
            editar({
                id: this.state.id,
                assunto: this.state.assunto,
                escopo: this.state.escopo,
                situacao: this.state.situacao,
                anomalia: this.state.anomalia
            }).then(response => {
                emitter.emit('analise-item-load')
                emitter.emit('mensagem-sucesso', 'Item editado com sucesso.')
                this.close()
            }).catch(err => {
                console.log(err)
            })
        } else {
            cadastrar({
                analiseId: this.state.analiseId,
                assunto: this.state.assunto,
                escopo: this.state.escopo,
                situacao: this.state.situacao,
                anomalia: this.state.anomalia
            }).then(response => {
                emitter.emit('analise-item-load')
                emitter.emit('mensagem-sucesso', 'Item adicionado no grupo com sucesso.')
                this.setState({
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
    }

    onDeletar() {
        if (this.state.id) {
            remover(this.state.id).then(() => {
                emitter.emit('analise-item-load')
                emitter.emit('mensagem-sucesso', 'Item excluído com sucesso.')
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
            onDeletar={this.onDeletar}
            onOpen={this.onOpen}
            onChange={this.onChange}
            onSituacaoChange={this.onSituacaoChange}
        />
    }

}
