import React from 'react'
import emitter from './../../../../module/globals/emitter'
import Component from './component'

import { Link, NavLink } from 'react-router-dom'

import { obter, cadastrar, editar, remover } from './../../module/api/arquivo'

export default class extends React.Component {

    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this)
        this.onSalvar = this.onSalvar.bind(this)
        this.onDeletar = this.onDeletar.bind(this)
        this.onOpen = this.onOpen.bind(this)
        this.close = this.close.bind(this)
        this.state = {
            open: false,
            id: null,
            desenho: '',
            arquivo: '',
            revisao: '',
            emissao: null,
            descricao: '',
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
                let arquivo = response.data
                this.setState({
                    id: arquivo._id,
                    desenho: arquivo.desenho || '',
                    arquivo: arquivo.arquivo || '',
                    revisao: arquivo.revisao || '',
                    emissao: arquivo.data || null,
                    descricao: arquivo.descricao || ''
                })
            }).catch(err => {
                console.log(err)
            })
        } else {
            this.setState({
                desenho: '',
                arquivo: '',
                revisao: '',
                emissao: null,
                descricao: '',
            })
        }
        this.setState({ open: true })
    }

    onSalvar() {
        if (this.state.id) {
            editar({
                id: this.state.id,
                desenho: this.state.desenho,
                arquivo: this.state.arquivo,
                revisao: this.state.revisao,
                emissao: this.state.emissao,
                descricao: this.state.descricao,
            }).then(response => {
                emitter.emit('analise-load')
                emitter.emit('mensagem-sucesso', 'Arquivo editado com sucesso.')
                this.close()
            }).catch(err => {
                console.log(err)
            })
        } else {
            cadastrar({
                analiseId: this.props.analiseId,
                desenho: this.state.desenho,
                arquivo: this.state.arquivo,
                revisao: this.state.revisao,
                emissao: this.state.emissao,
                descricao: this.state.descricao,
            }).then(response => {
                emitter.emit('analise-load')
                emitter.emit('mensagem-sucesso', 'Arquivo adicionado com sucesso.')
                this.setState({
                    analiseId: null,
                    desenho: '',
                    arquivo: '',
                    revisao: '',
                    emissao: null,
                    descricao: '',
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
                emitter.emit('analise-load')
                emitter.emit('mensagem-sucesso', 'Arquivo excluído com sucesso.')
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
        />
    }

}