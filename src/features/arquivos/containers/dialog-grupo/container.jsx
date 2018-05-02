import React from 'react'
import PropTypes from 'prop-types'
import emitter from './../../../../module/globals/emitter'
import Component from './component'

import {
    obter as obterGrupoApi,
    cadastrar as cadastrarGrupoApi,
    editar as editarGrupoApi,
    remover as deletarGrupoApi
} from './../../module/api/grupo'

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
            mask: null,
            carregando: false,
            sucesso: false,
            erro: null
        }
    }

    onChange(e, { name, value }) {
        this.setState({ [name]: value })
    }

    onLoad(pastaId) {
        obterGrupoApi(pastaId).then(response => {
            this.setState({
                nome: response.data.nome,
                regraPadrao: response.data.regraPadrao,
                regras: response.data.regras,
                mask: response.data.mask
            })
        }).catch(err => {
            emitter.emit('mensagem-erro', 'Erro ao obter o grupo.', err)
        })
    }

    onSalvar() {
        if (this.props.grupoId) {
            editarGrupoApi({
                id: this.props.grupoId,
                nome: this.state.nome,
                regraPadrao: this.state.regraPadrao,
                regras: this.state.regras,
                mask: this.state.mask
            }).then(response => {
                emitter.emit('mensagem-sucesso', 'Grupo editado com sucesso.')
                this.onClose()
            }).catch(err => {
                emitter.emit('mensagem-erro', 'Erro ao editar o grupo.', err)
            })
        }
        else {
            cadastrarGrupoApi({
                nome: this.state.nome,
                regraPadrao: this.state.regraPadrao,
                regras: this.state.regras,
                projetoId: this.props.projetoId,
                pastaId: this.props.pastaId,
                mask: this.state.mask
            }).then(response => {
                emitter.emit('mensagem-sucesso', 'Grupo cadastrado com sucesso.')
                this.onClose()
            }).catch(err => {
                emitter.emit('mensagem-erro', 'Erro ao cadastrar o grupo.', err)
            })
        }
    }

    onDeletar() {
        deletarGrupoApi(this.props.grupoId).then(response => {
            emitter.emit('mensagem-sucesso', 'Grupo deletado com sucesso.')
            this.onClose()
        }).catch(err => {
            emitter.emit('mensagem-erro', 'Erro ao deletar o grupo.', err)
        })
    }

    onOpen() {
        if (this.props.grupoId) {
            this.onLoad(this.props.grupoId)
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
    grupoId: PropTypes.string,
    pastaId: PropTypes.string.isRequired,
    projetoId: PropTypes.string.isRequired,
    close: PropTypes.func
}

export default Container