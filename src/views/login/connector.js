import { connect } from 'react-redux'

import {
    change,
    logar,
    cadastrar,
    recuperar,
    trocarSenha,
    confirmarEmail,
    obterStatus
} from './actions'

const stateToProps = (state) => {
    const view = state.views.login
    return {
        session: state.session,
        globalization: state.globalization,
        loginUsuario: view.loginUsuario,
        loginSenha: view.loginSenha,
        cadastroExibicao: view.cadastroExibicao,
        cadastroEmail: view.cadastroEmail,
        cadastroSenha: view.cadastroSenha,
        recuperarEmail: view.recuperarEmail,
        recuperarSenha: view.recuperarSenha,
        recuperarConfirmarSenha: view.recuperarConfirmarSenha,
        status: view.status,
        statusError: view.statusError,
        sucesso: view.sucesso,
        carregando: view.carregando,
        erro: view.erro
    }
}

const dispatchToProps = (dispatch) => {
    return {
        change: (data) => {
            dispatch(change(data))
        },
        logar: (data) => {
            dispatch(logar(data))
        },
        cadastrar: (data) => {
            dispatch(cadastrar(data))
        },
        recuperar: (data) => {
            dispatch(recuperar(data))
        },
        trocarSenha: (senha, token) => {
            dispatch(trocarSenha(senha, token))
        },
        confirmarEmail: (token) => {
            dispatch(confirmarEmail(token))
        },
        obterStatus: () => {
            dispatch(obterStatus())
        }
    }
}

export default (container) => {
    return connect(stateToProps, dispatchToProps)(container)
}