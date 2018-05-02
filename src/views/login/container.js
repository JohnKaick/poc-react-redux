import React, { Component } from 'react'

import emitter from './../../module/globals/emitter'

import queryString from 'query-string'

import Login from './components/login'

export default class extends Component {

    constructor(props) {
        super(props)
        this.eventRedirect = null
        this.onChange = this.onChange.bind(this)
        this.onLogar = this.onLogar.bind(this)
        this.onCadastrar = this.onCadastrar.bind(this)
        this.onRecuperar = this.onRecuperar.bind(this)
        this.onTrocarSenha = this.onTrocarSenha.bind(this)
        this.onConfirmarEmail = this.onConfirmarEmail.bind(this)
        this.onObterStatus = this.onObterStatus.bind(this)
        this.onToggle = this.onToggle.bind(this)
        this.state = {
            pagina: 'login',
            background: 'https://s3-sa-east-1.amazonaws.com/ativati/public/wisein-login-bg.jpg'
        }
    }

    componentDidMount() {

        if (this.props.session.conectado) {
            this.props.history.push('/')
        }

        this.onObterStatus()

        let params = queryString.parse(this.props.location.search)

        if (params.rc) {
            this.setState({
                pagina: 'reset'
            })
        }
        else if (params.etk) {
            this.onConfirmarEmail(params.etk)
        }

        emitter.once('usuario_conectado', () => {
            this.props.history.push('/')
        })

        this.eventRedirect = emitter.addListener('login-redirect', () => {
            this.props.history.push('/login')
            this.setState({ pagina: 'login' })
        })

    }

    componentWillUnmount() {
        this.eventRedirect.remove()
    }

    onChange(e, { name, value }) {
        this.props.change({ name, value })
    }

    onLogar(e) {
        e.preventDefault()
        this.props.logar({
            usuario: this.props.loginUsuario,
            senha: this.props.loginSenha
        })
    }

    onCadastrar(e) {
        e.preventDefault()
        this.props.cadastrar({
            exibicao: this.props.cadastroExibicao,
            email: this.props.cadastroEmail,
            senha: this.props.cadastroSenha
        })
    }

    onRecuperar(e) {
        e.preventDefault()
        this.props.recuperar({
            email: this.props.recuperarEmail
        })
    }

    onTrocarSenha(e) {
        e.preventDefault()
        let params = queryString.parse(this.props.location.search)
        console.log(params)
        this.props.trocarSenha(this.props.recuperarSenha, params.rc)
    }

    onConfirmarEmail(emailToken) {
        this.props.confirmarEmail(emailToken)
    }

    onObterStatus(e) {
        this.props.obterStatus()
    }

    onToggle(e, pagina) {
        e.preventDefault()
        this.setState({ pagina })
    }

    render() {
        return (
            <Login
                {...this.state}
                {...this.props}
                onChange={this.onChange}
                onLogar={this.onLogar}
                onCadastrar={this.onCadastrar}
                onRecuperar={this.onRecuperar}
                onTrocarSenha={this.onTrocarSenha}
                onConfirmarEmail={this.onConfirmarEmail}
                onObterStatus={this.onObterStatus}
                onToggle={this.onToggle} />
        )
    }
}