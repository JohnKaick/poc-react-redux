import React from 'react'
import emitter from './../../../../module/globals/emitter'
import Component from './component'

import { Link, NavLink } from 'react-router-dom'

import { editar, obterProjeto } from './../../../../module/api/projeto'

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

    close() {
        this.setState({ open: false })
    }

    onOpen() {
        obterProjeto(this.props.id).then(response => {
            let projeto = response.data
            this.setState({
                id: projeto._id || this.props.id,
                empreendimento: projeto.empreendimento || '',
                exibicao: projeto.exibicao || '',
                informacao: projeto.informacao || '',
                areaConstruida: projeto.areaConstruida || '',
                areaPrivativa: projeto.areaPrivativa || '',
                areaLocavel: projeto.areaLocavel || '',
            })
        }).catch(err => {
            console.log(err)
        })
        this.setState({ open: true })
    }

    onSalvar() {
        editar({
            id: this.state.id || this.props.id,
            empreendimento: this.state.empreendimento,
            exibicao: this.state.exibicao,
            informacao: this.state.informacao,
            areaConstruida: this.state.areaConstruida,
            areaPrivativa: this.state.areaPrivativa,
            areaLocavel: this.state.areaLocavel,
        }).then(response => {
            emitter.emit('projeto-load')
            emitter.emit('mensagem-sucesso', 'Projeto editado com sucesso.')
            this.close()
        }).catch(err => {
            console.log(err)
        })
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