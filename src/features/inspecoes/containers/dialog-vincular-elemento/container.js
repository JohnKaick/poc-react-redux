import React from 'react'
import Component from './component'

import { obterTodos as obterTodasDisciplinas } from './../../module/api/disciplina'
import { obterTodos as obterTodosPastas } from './../../module/api/md-pasta'
import { obterTodos as obterTodosModelos } from './../../module/api/md-elemento'
import { cadastrar } from './../../module/api/elemento'

export default class extends React.Component {

    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this)
        this.onDisciplinaSelected = this.onDisciplinaSelected.bind(this)
        this.onPastaSelected = this.onPastaSelected.bind(this)
        this.onModeloSelected = this.onModeloSelected.bind(this)
        this.onSalvar = this.onSalvar.bind(this)
        this.onOpen = this.onOpen.bind(this)
        this.onClose = this.onClose.bind(this)
        this.state = {
            disciplina: null,
            pasta: null,
            modelo: null,
            disciplinas: [],
            pastas: [],
            modelos: [],
            nome: '',
            tag: '',
            descritivo: '',
            carregando: false,
            open: false
        }
    }

    onChange(e, { name, value }) {
        this.setState({
            [name]: value
        })
    }

    onDisciplinaSelected(e, { name, value }) {
        obterTodosPastas(value).then(response => {
            this.setState({
                disciplina: value,
                pastas: response.data
            })
        })
    }

    onPastaSelected(e, { name, value }) {
        obterTodosModelos(value).then(response => {
            this.setState({
                pasta: value,
                modelos: response.data
            })
        })
    }

    onModeloSelected(e, { name, value }) {
        this.setState({
            modelo: value
        })
    }

    onSalvar() {
        cadastrar({
            modeloId: this.state.modelo,
            grupoId: this.props.grupo,
            nome: this.state.nome,
            descritivo: this.state.descritivo,
            tag: this.state.tag
        }).then(() => {
            this.onClose()
        })
    }

    onOpen() {
        this.setState({
            open: true,
            disciplina: null,
            pasta: null,
            modelo: null,
            nome: '',
            tag: '',
            descritivo: '',
        })
        obterTodasDisciplinas().then(response => {
            this.setState({
                disciplinas: response.data
            })
        })

    }

    onClose() {
        if (this.props.closed) {
            this.props.closed()
        }
        this.setState({ open: false })
    }

    render() {
        return <Component
            {...this.props}
            {...this.state}
            onSalvar={this.onSalvar}
            onOpen={this.onOpen}
            onClose={this.onClose}
            onChange={this.onChange}
            onDisciplinaSelected={this.onDisciplinaSelected}
            onPastaSelected={this.onPastaSelected}
            onModeloSelected={this.onModeloSelected}
            onSalvar={this.onSalvar}
        />
    }
}