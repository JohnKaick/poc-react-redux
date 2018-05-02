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
            id: null,
            ataId: null,
            assunto: '',
            descricao: '',
            responsavel: '',
            prazo: null,
            situacao: '',
            indice: null,
            revisao: null,
            master: ''
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
                let item = response.data
                this.setState({
                    id: item._id,
                    assunto: item.assunto || '',
                    descricao: item.descricao || '',
                    responsavel: item.responsavel || '',
                    prazo: item.prazo || null,
                    situacao: item.situacao || '',
                    indice: item.indice || null,
                    revisao: item.revisao || null,
                    master: item.master || ''
                })
            }).catch(err => {
                console.log(err)
            })
        }
        this.setState({ open: true })
    }

    onSalvar() {
        if (this.state.id) {
            editar({
                id: this.state.id,
                assunto: this.state.assunto,
                descricao: this.state.descricao,
                responsavel: this.state.responsavel,
                prazo: this.state.prazo,
                situacao: this.state.situacao,
                indice: this.state.indice,
                master: this.state.master,
            }).then(response => {
                emitter.emit('ata-item-load')
                emitter.emit('mensagem-sucesso', 'Item editado com sucesso.')
                this.close()
            }).catch(err => {
                console.log(err)
            })
        } else {
            cadastrar({
                ataId: this.props.ataId,
                assunto: this.state.assunto,
                descricao: this.state.descricao,
                responsavel: this.state.responsavel,
                prazo: this.state.prazo,
                situacao: this.state.situacao,
                indice: this.state.indice,
                master: this.state.master,
            }).then(response => {
                emitter.emit('ata-item-load')
                emitter.emit('mensagem-sucesso', 'Item adicionado com sucesso.')
                this.setState({
                    ataId: null,
                    assunto: '',
                    descricao: '',
                    responsavel: '',
                    prazo: null,
                    situacao: '',
                    indice: null,
                    master: '',
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
                emitter.emit('ata-item-load')
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
