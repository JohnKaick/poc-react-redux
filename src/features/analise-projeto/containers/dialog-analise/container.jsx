import React from 'react'
import emitter from './../../../../module/globals/emitter'
import Component from './component'

import { Link, NavLink } from 'react-router-dom'

import { obter, cadastrar, editar } from './../../module/api/relatorio'

export default class extends React.Component {

    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this)
        this.onSalvar = this.onSalvar.bind(this)
        this.onOpen = this.onOpen.bind(this)
        this.close = this.close.bind(this)
        this.state = {
            open: false,
            id: null,
            titulo: '',
            revisao: '',
            data: null,
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
                let ata = response.data
                this.setState({
                    id: ata._id,
                    titulo: ata.titulo || '',
                    revisao: ata.revisao || '',
                    data: ata.data || null,
                })
            }).catch(err => {
                console.log(err)
            })
        } else {
            this.setState({
                titulo: '',
                revisao: '',
                data: null,
            })
        }
        this.setState({ open: true })
    }

    onSalvar() {
        if (this.state.id) {
            editar({
                id: this.state.id,
                titulo: this.state.titulo,
                revisao: this.state.revisao,
                data: this.state.data,
            }).then(response => {
                emitter.emit('analise-load')
                emitter.emit('mensagem-sucesso', 'Análise de projeto editado com sucesso.')
                this.close()
            }).catch(err => {
                console.log(err)
            })
        } else {
            cadastrar({
                projetoId: this.props.projetoId,
                titulo: this.state.titulo,
                revisao: this.state.revisao,
                data: this.state.data,
            }).then(response => {
                emitter.emit('analises-load')
                emitter.emit('mensagem-sucesso', 'Análise de projeto cadastrado com sucesso.')
                this.setState({
                    projetoId: null,
                    titulo: '',
                    revisao: '',
                    data: null,
                })
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
            onOpen={this.onOpen}
            onChange={this.onChange}
        />
    }

}