import emitter from './../../module/globals/emitter'

import { USUARIO_LOGADO } from './../../module/constants'

import {
    autenticar,
    cadastrarConta,
    recuperarConta,
    recuperarTrocaSenha,
    confirmarConta,
    obterStatusServidor
} from './../../module/api/conta'

import {
    ON_CHANGE,
    LOGAR_START, LOGAR_SUCCESS, LOGAR_ERROR,
    CADASTRO_START, CADASTRO_SUCCESS, CADASTRO_ERROR,
    RECUPERAR_START, RECUPERAR_SUCCESS, RECUPERAR_ERROR,
    ALTERAR_START, ALTERAR_SUCCESS, ALTERAR_ERROR,
    CONFIRMAR_START, CONFIRMAR_SUCCESS, CONFIRMAR_ERROR,
    STATUS_START, STATUS_SUCCESS, STATUS_ERROR
} from './constants'

export function change(data) {
    return dispatch => {
        dispatch(ON_CHANGE(data))
    }
}

export function logar(data) {
    return async dispatch => {
        try {
            dispatch(LOGAR_START())
            const response = await autenticar(data)
            dispatch(LOGAR_SUCCESS())
            dispatch(USUARIO_LOGADO(response.data))
            localStorage.setItem('credentials', JSON.stringify(response.data))
            emitter.emit('usuario_conectado')
        } catch (err) {
            dispatch(LOGAR_ERROR(err))
            if (err.response) {
                switch (err.response.data.message) {
                    case 'conta_blocked':
                        emitter.emit('mensagem-erro', 'Sua conta foi bloqueada, entre em contato com nossa equipe.')
                        break;
                    case 'confirm_invalid':
                        emitter.emit('mensagem-erro', 'É necessário que você confirme a sua conta antes de acessar. Enviamos um e-mail com maiores detalhes.')
                        break;
                    default:
                        emitter.emit('mensagem-erro', 'Usuário ou senha inválidos')
                        break;
                }
            } else {
                emitter.emit('mensagem-erro', 'Erro ao tentar se logar.')
            }
        }
    }
}

export function cadastrar(data) {
    return async dispatch => {
        try {
            dispatch(CADASTRO_START())
            const response = await cadastrarConta(data)
            dispatch(CADASTRO_SUCCESS(response.data))
            emitter.emit('mensagem-sucesso', 'Cadastrado com sucesso! Enviamos um e-mail para você com detalhes de como confirmar sua conta e liberar o seu acesso.')
            emitter.emit('login-redirect')
        } catch (err) {
            dispatch(CADASTRO_ERROR(err))
        }
    }
}

export function recuperar(email) {
    return async dispatch => {
        try {
            dispatch(RECUPERAR_START())
            const response = await recuperarConta(email)
            dispatch(RECUPERAR_SUCCESS(response.data))
            emitter.emit('mensagem-sucesso', 'Enviamos instruções de como recuperar sua conta para o e-mail informado.')
            emitter.emit('login-redirect')
        } catch (err) {
            dispatch(RECUPERAR_ERROR(err))
        }
    }
}

export function trocarSenha(senha, token) {
    return async dispatch => {
        try {
            dispatch(ALTERAR_START())
            const response = await recuperarTrocaSenha(senha, token)
            dispatch(ALTERAR_SUCCESS())
            dispatch(USUARIO_LOGADO(response.data))
            emitter.emit('mensagem-sucesso', 'Senha alterada com sucesso.')
            emitter.emit('usuario_conectado')
        } catch (err) {
            dispatch(ALTERAR_ERROR(err))
        }
    }
}

export function confirmarEmail(token) {
    return async dispatch => {
        try {
            dispatch(CONFIRMAR_START())
            const response = await confirmarConta(token)
            dispatch(CONFIRMAR_SUCCESS(response.data))
            emitter.emit('mensagem-sucesso', 'E-mail confirmado com sucesso.')
        } catch (err) {
            dispatch(CONFIRMAR_ERROR(err))
        }
    }
}

export function obterStatus() {
    return async dispatch => {
        try {
            dispatch(STATUS_START())
            const response = await obterStatusServidor()
            dispatch(STATUS_SUCCESS(response.data))
        } catch (err) {
            dispatch(STATUS_ERROR(err))
        }
    }
}
