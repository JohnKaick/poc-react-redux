import React from 'react'
import emitter from './../../../../module/globals/emitter'
import Component from './component'
import { Link, NavLink } from 'react-router-dom'
import {
    obterParametro, cadastrarParametro,
    editarParametro, removerParametro
} from './../../../../module/api/projeto'

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
            projetoId: null,
            nome: '',
            valor: '',
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
            obterParametro(this.props.projetoId, this.props.id).then(response => {
                let parametro = response.data
                this.setState({
                    projetoId: this.props.projetoId,
                    id: parametro._id,
                    nome: parametro.nome || '',
                    valor: parametro.valor || '',
                })
            }).catch(err => {
                console.log(err)
            })
        } else {
            this.setState({
                projetoId: this.props.projetoId,
                nome: '',
                valor: '',
            })
        }
        this.setState({ open: true })
    }

    onSalvar() {
        if (this.state.id) {
            editarParametro({
                projetoId: this.state.projetoId || this.props.projetoId,
                id: this.state.id,
                nome: this.state.nome,
                valor: this.state.valor,
            }).then(response => {
                emitter.emit('projeto-load')
                emitter.emit('mensagem-sucesso', 'Parâmetro editado com sucesso.')
                this.close()
            }).catch(err => {
                console.log(err)
            })
        } else {
            cadastrarParametro({
                projetoId: this.state.projetoId || this.props.projetoId,
                nome: this.state.nome,
                valor: this.state.valor,
            }).then(response => {
                emitter.emit('projeto-load')
                emitter.emit('mensagem-sucesso', 'Parâmetro cadastrado com sucesso.')
                this.setState({
                    projetoId: null,
                    nome: '',
                    valor: '',
                })
                this.close()
            }).catch(err => {
                console.log(err)
            })
        }
    }

    onDeletar() {
        removerParametro(this.props.projetoId, this.props.id).then(() => {
            emitter.emit('projeto-load')
            emitter.emit('mensagem-sucesso', 'Parâmetro removido com sucesso.')
            this.close()
        }).catch(err => {
            emitter.emit('mensagem-erro', 'Erro ao remover o parâmetro.', err)
        })
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