import React from 'react'
import PropTypes from 'prop-types'
import emitter from './../../../../module/globals/emitter'
import Component from './component'

import {
    obter as obterRevisaoApi,
    cadastrar as cadastrarRevisaoApi,
    editar as editarRevisaoApi,
    remover as removerRevisaoApi,
} from './../../module/api/revisao'

import {
    remover as removerArquivoApi
} from './../../module/api/arquivo'

class Container extends React.Component {

    state = {
        opened: false,
        numero: '',
        emissao: '',
        nomenclatura: '',
        revisao: '',
        assunto: '',
        descricao: '',
        carregando: false,
        sucesso: false,
        erro: null
    }

    constructor(props) {
        super(props)
        this.onOpen = this.onOpen.bind(this)
        this.onClose = this.onClose.bind(this)
        this.onChange = this.onChange.bind(this)
        this.onLoad = this.onLoad.bind(this)
        this.onSalvar = this.onSalvar.bind(this)
        this.onDeletar = this.onDeletar.bind(this)
    }

    // Dialogs

    onOpen() {
        if (this.props.revisaoId) { this.onLoad() }
        this.setState({ opened: true })
    }

    onClose() {
        if (this.props.close) this.props.close()
        this.setState({ opened: false })
    }

    // Common

    onChange(e, { name, value }) {
        this.setState({ [name]: value })
    }

    onLoad() {
        obterRevisaoApi(this.props.revisaoId).then(response => {
            this.setState({
                numero: response.data.numero,
                emissao: response.data.emissao,
                nomenclatura: response.data.nomenclatura,
                revisao: response.data.revisao,
                assunto: response.data.assunto,
                descricao: response.data.descricao
            })
        }).catch(err => {
            emitter.emit('mensagem-erro', 'Erro ao obter o arquivo.', err)
        })
    }

    onSalvar() {
        if (this.props.revisaoId) {
            editarRevisaoApi({
                id: this.props.revisaoId,
                numero: this.state.numero,
                emissao: this.state.emissao,
                nomenclatura: this.state.nomenclatura,
                revisao: this.state.revisao,
                assunto: this.state.assunto,
                descricao: this.state.descricao
            }).then(response => {
                emitter.emit('mensagem-sucesso', 'Arquivo editado com sucesso.')
                this.onClose()
            }).catch(err => {
                emitter.emit('mensagem-erro', 'Erro ao editar o arquivo.', err)
            })
        }
        else {
            cadastrarRevisaoApi({
                arquivoId: this.props.arquivoId,
                numero: this.state.numero,
                emissao: this.state.emissao,
                nomenclatura: this.state.nomenclatura,
                revisao: this.state.revisao,
                assunto: this.state.assunto,
                descricao: this.state.descricao
            }).then(response => {
                emitter.emit('mensagem-sucesso', 'Arquivo cadastrado com sucesso.')
                this.onClose()
            }).catch(err => {
                emitter.emit('mensagem-erro', 'Erro ao cadastrar o arquivo.', err)
            })
        }
    }

    onDeletar() {
        removerArquivoApi(this.props.arquivoId).then(response => {
            emitter.emit('mensagem-sucesso', 'Arquivo deletado com sucesso.')
            this.onClose()
        }).catch(err => {
            emitter.emit('mensagem-erro', 'Erro ao deletar o arquivo.', err)
        })
    }

    render() {
        return <Component
            { ...this.state }
            { ...this.props }
            onChange={this.onChange.bind(this)}
            onSalvar={this.onSalvar.bind(this)}
            onDeletar={this.onDeletar.bind(this)}
            onOpen={this.onOpen.bind(this)}
            onClose={this.onClose.bind(this)} />
    }

}

Container.propTypes = {
    arquivoId: PropTypes.string,
    close: PropTypes.func
}

export default Container