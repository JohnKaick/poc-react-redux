import React from 'react'
import emitter from './../../../../module/globals/emitter'
import Component from './component'

import { obter, cadastrar, editar, remover } from './../../module/api/grupo'

export default class extends React.Component {

    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this)
        this.onSalvar = this.onSalvar.bind(this)
        this.onDeletar = this.onDeletar.bind(this)
        this.onOpen = this.onOpen.bind(this)
        this.onClose = this.onClose.bind(this)
        this.state = {
            open: false,
            id: null,
            grupo: null,
            imagens: [],
            nome: '',
            descritivo: '',
            tag: '',
            prefix: ''
        }
    }

    // Eventos

    onChange(e, { name, value }) {
        this.setState({ [name]: value })
    }

    onSalvar() {
        if (this.state.id) {
            editar({
                id: this.state.id,
                nome: this.state.nome,
                descritivo: this.state.descritivo,
                tag: this.state.tag,
                prefix: this.state.prefix
            }).then(() => {
                this.onClose()
            }).catch(err => {
                console.log(err)
            })
        }
        else {
            cadastrar({
                id: this.state.id,
                projetoId: this.props.projetoAtual,
                grupoId: this.props.grupoPai || null,
                nome: this.state.nome,
                descritivo: this.state.descritivo,
                tag: this.state.tag,
                prefix: this.state.prefix
            }).then(() => {
                this.onClose()
            }).catch(err => {
                console.log(err)
            })
        }
    }

    onDeletar() {
        if (this.state.id) {
            remover(this.state.id).then(() => {
                this.onClose()
            }).catch(err => {
                console.log(err)
            })
        }
    }

    onOpen() {
        if (this.props.id) {
            obter(this.props.id).then(response => {
                let grupo = response.data
                this.setState({
                    id: grupo._id,
                    nome: grupo.nome || '',
                    descritivo: grupo.descritivo || '',
                    tag: grupo.tag || '',
                    prefix: grupo.prefix || ''
                })
            }).catch(err => {
                console.log(err)
            })
        }
        this.setState({ open: true })
    }

    onClose() {
        if (this.props.closed) {
            this.props.closed()
        }
        this.setState({ open: false })
    }

    // Render

    render() {
        return <Component
            {...this.state}
            {...this.props}
            onChange={this.onChange}
            onSalvar={this.onSalvar}
            onDeletar={this.onDeletar}
            onOpen={this.onOpen}
            onClose={this.onClose}
        />
    }

}
