import React from 'react'
import emitter from './../../../../module/globals/emitter'
import Component from './component'

import { obterTodos, editar, remover } from './../../module/api/disciplina'

export default class extends React.Component {

    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this)
        this.onSalvar = this.onSalvar.bind(this)
        this.onDeletar = this.onDeletar.bind(this)
        this.state = {
            id: null,
            nome: '',
        }
    }

    onChange(e, { name, value }) {
        this.setState({ [name]: value })
    }

    componentDidMount() {

    }

    componentWillReceiveProps() {
        this.setState({
            id: this.props.disciplinaId,
        })
    }

    componentWillUnmount() {
        this.eventLoad.remove()
    }

    load(disciplinaId) {

    }


    onSalvar() {
        editar({
            id: this.state.id,
            nome: this.state.nome
        }).then(() => {
            emitter.emit('mensagem-sucesso', 'Disciplina editada com sucesso.')
        })
    }

    onDeletar() {
        remover(this.props.id).then(() => {
            emitter.emit('mensagem-sucesso', 'Disciplina excluída com sucesso.')
        })
    }

    render() {
        return <Component
            {...this.state}
            {...this.props}
            onChange={this.onChange}
            onSalvar={this.onSalvar}
            onDeletar={this.onDeletar}
        />
    }

}