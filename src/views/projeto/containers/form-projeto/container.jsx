import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import emitter from './../../../../module/globals/emitter'
import history from './../../../../module/globals/history'
import { cadastrar } from './../../../../module/api/projeto'

import Component from './component'

export default class extends React.Component {

    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this)
        this.onSalvar = this.onSalvar.bind(this)
        this.state = {
            id: null,
            empreendimento: '',
            exibicao: '',
            informacao: '',
            areaConstruida: '',
            areaPrivativa: '',
            areaLocavel: ''
        }
    }

    onChange(e, { name, value }) {
        this.setState({ [name]: value })
    }

    onSalvar() {
        cadastrar({
            empreendimento: this.state.empreendimento,
            exibicao: this.state.exibicao,
            informacao: this.state.informacao,
            areaConstruida: this.state.areaConstruida,
            areaPrivativa: this.state.areaPrivativa,
            areaLocavel: this.state.areaLocavel,
        }).then(response => {
            emitter.emit('mensagem-sucesso', 'Projeto cadastrado com sucesso.')
            history.push('/' + response.data._id)
        }).catch(err => {
            emitter.emit('mensagem-erro', 'Erro ao cadastrar projeto.', err)
        })
    }

    render() {
        return <Component
            {...this.state}
            {...this.props}
            onSalvar={this.onSalvar}
            onChange={this.onChange}
        />
    }

}