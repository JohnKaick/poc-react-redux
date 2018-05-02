import React from 'react'
import emitter from './../../module/globals/emitter'
import Component from './component'

import { alterarSenha } from './../../module/api/conta'

class Container extends React.Component {

    constructor(props) {
        super(props)
        this.change = this.change.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.onSalvar = this.onSalvar.bind(this)
        this.onAlterarSenha = this.onAlterarSenha.bind(this)
        this.uploadAvatar = this.uploadAvatar.bind(this)
        this.eventLoad = null
        this.state = {
            senhaAtual: '',
            novaSenha: '',
            repetirNovaSenha: '',
        }
    }

    componentDidMount() {
        this.props.onLoad()
        this.eventLoad = emitter.addListener('perfil-load', () => {
            this.props.onLoad()
        })
    }

    change(e, { name, value }) {
        this.props.onChange(name, value)
    }

    changePassword(e, { name, value }) {
        this.setState({
            [name]: value
        })
    }

    onSalvar() {
        this.props.onSave(this.props.usuario)
    }

    onAlterarSenha() {
        const senhaAtual = this.state.senhaAtual
        const novaSenha = this.state.novaSenha
        const repetirNovaSenha = this.state.repetirNovaSenha

        if (novaSenha !== repetirNovaSenha) {
            emitter.emit('mensagem-erro', 'Verifique a digitação da sua nova senha.')
        } else {

            alterarSenha(senhaAtual, novaSenha).then((r) => {
                emitter.emit('perfil-load')
                emitter.emit('mensagem-sucesso', 'Senha alterada com sucesso.')
            }).catch(err => {
                if (err.response.data.message === 'conta_invalid') {
                    emitter.emit('mensagem-erro', 'Sua senha atual está incorreta.')
                }
                console.log(err)
            })

        }
    }

    uploadAvatar(files) {
        this.props.onUploadAvatar(files[0])
    }

    render() {
        return <Component
            {...this.props}
            {...this.state}
            change={this.change}
            changePassword={this.changePassword}
            onSalvar={this.onSalvar}
            onAlterarSenha={this.onAlterarSenha}
            uploadAvatar={this.uploadAvatar}
        />
    }
}

export default Container