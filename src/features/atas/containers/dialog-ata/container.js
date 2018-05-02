import React from 'react'
import emitter from './../../../../module/globals/emitter'
import Component from './component'

import { Link, NavLink } from 'react-router-dom'

import { obter, cadastrar, editar } from './../../module/api/registro'

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
            id: null,
            nome: '',
            dataHora: null,
            local: '',
            situacao: '',
            pauta: '',
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
                let ata = response.data
                this.setState({
                    id: ata._id,
                    nome: ata.nome || '',
                    dataHora: ata.dataHora || null,
                    local: ata.local || '',
                    situacao: ata.situacao || '',
                    pauta: ata.pauta || ''
                })
            }).catch(err => {
                console.log(err)
            })
        } else {
            this.setState({
                nome: '',
                dataHora: null,
                local: '',
                situacao: '',
                pauta: ''
            })
        }
        this.setState({ open: true })
    }

    onSalvar() {
        if (this.state.id) {
            editar({
                id: this.state.id,
                nome: this.state.nome,
                dataHora: this.state.dataHora,
                local: this.state.local,
                situacao: this.state.situacao,
                pauta: this.state.pauta,
            }).then(response => {
                emitter.emit('ata-load')
                emitter.emit('mensagem-sucesso', 'Ata editada com sucesso.')
                this.close()
            }).catch(err => {
                console.log(err)
            })
        } else {
            cadastrar({
                projetoId: this.props.projetoId,
                nome: this.state.nome,
                dataHora: this.state.dataHora,
                local: this.state.local,
                situacao: this.state.situacao,
                pauta: this.state.pauta,
            }).then(response => {
                emitter.emit('atas-load')
                emitter.emit('mensagem-sucesso', 'Ata cadastrada com sucesso.')
                this.setState({
                    projetoId: null,
                    nome: '',
                    dataHora: null,
                    local: '',
                    situacao: '',
                    pauta: ''
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
            onSituacaoChange={this.onSituacaoChange}
        />
    }

}