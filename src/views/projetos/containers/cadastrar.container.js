import React from 'react'
import emitter from './../../../module/globals/emitter'
import Component from './cadastrar.component'

import { Link, NavLink } from 'react-router-dom'

import { cadastrar } from './../../../module/api/projeto'

export default class extends React.Component {

    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this)
        this.onSalvar = this.onSalvar.bind(this)
        this.state = {
            open: false,
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
            emitter.emit('projetos-load')
            emitter.emit('mensagem-sucesso', 'Novo projeto criado com sucesso.')
            this.setState({
                empreendimento: '',
                exibicao: '',
                informacao: '',
                areaConstruida: '',
                areaPrivativa: '',
                areaLocavel: ''
            })
            this.close()
        }).catch(err => {
            console.log(err)
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