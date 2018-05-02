import React from 'react'
import PropTypes from 'prop-types'
import emitter from './../../../../module/globals/emitter'
import Component from './component'

import {
    obter as obterPastaApi,
    cadastrar as cadastrarPastaApi,
    editar as editarPastaApi,
    remover as deletarPastaApi
} from './../../module/api/pasta'

class Container extends React.Component {

    constructor(props) {
        super(props)
        this.onOpen = this.onOpen.bind(this)
        this.onClose = this.onClose.bind(this)
        this.onChange = this.onChange.bind(this)
        this.onLoad = this.onLoad.bind(this)
        this.onDeletar = this.onDeletar.bind(this)
        this.onSalvar = this.onSalvar.bind(this)
        this.state = {
            opened: false,
            titulo: 'Pasta',
            nome: null,
            regraPadrao: null,
            regras: [],
            carregando: false,
            sucesso: false,
            erro: null
        }
    }

    onChange(e, { name, value }) {
        this.setState({ [name]: value })
    }

    onLoad(pastaId) {
        obterPastaApi(pastaId).then(response => {
            this.setState({
                nome: response.data.nome,
                regraPadrao: response.data.regraPadrao,
                regras: response.data.regras
            })
        }).catch(err => {
            emitter.emit('mensagem-erro', 'Erro ao obter a pasta.', err)
        })
    }

    onSalvar() {
        if (this.props.pastaId) {
            editarPastaApi({
                id: this.props.pastaId,
                nome: this.state.nome,
                regraPadrao: this.state.regraPadrao,
                regras: this.state.regras
            }).then(response => {
                emitter.emit('mensagem-sucesso', 'Pasta editada com sucesso.')
                this.onClose()
            }).catch(err => {
                emitter.emit('mensagem-erro', 'Erro ao obter a pasta.', err)
            })
        }
        else {
            cadastrarPastaApi({
                nome: this.state.nome,
                regraPadrao: this.state.regraPadrao,
                regras: this.state.regras,
                projetoId: this.props.projetoId
            }).then(response => {
                emitter.emit('mensagem-sucesso', 'Pasta cadastrada com sucesso.')
                this.onClose()
            }).catch(err => {
                emitter.emit('mensagem-erro', 'Erro ao obter a pasta.', err)
            })
        }
    }

    onDeletar() {
        deletarPastaApi(this.props.pastaId).then(response => {
            emitter.emit('mensagem-sucesso', 'Pasta deletada com sucesso.')
            this.onClose()
        }).catch(err => {
            emitter.emit('mensagem-erro', 'Erro ao deletar a pasta.', err)
        })
    }

    onOpen() {
        if (this.props.pastaId) {
            this.onLoad(this.props.pastaId)
        }
        this.setState({ opened: true })
    }

    onClose() {
        if (this.props.close) this.props.close()
        this.setState({ opened: false })
    }

    render() {
        return <Component
            { ...this.state }
            { ...this.props }
            children={this.props.children}
            onChange={this.onChange}
            onSalvar={this.onSalvar}
            onDeletar={this.onDeletar}
            onOpen={this.onOpen}
            onClose={this.onClose} />
    }

}

Container.propTypes = {
    pastaId: PropTypes.string,
    projetoId: PropTypes.string.isRequired,
    close: PropTypes.func
}

export default Container