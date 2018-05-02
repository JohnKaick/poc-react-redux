import Immutable from 'seamless-immutable'
import { handleActions, combineActions } from 'redux-actions'

import {
    ON_CHANGE,
    LOGAR_START, LOGAR_SUCCESS, LOGAR_ERROR,
    CADASTRO_START, CADASTRO_SUCCESS, CADASTRO_ERROR,
    RECUPERAR_START, RECUPERAR_SUCCESS, RECUPERAR_ERROR,
    ALTERAR_START, ALTERAR_SUCCESS, ALTERAR_ERROR,
    CONFIRMAR_START, CONFIRMAR_SUCCESS, CONFIRMAR_ERROR,
    STATUS_START, STATUS_SUCCESS, STATUS_ERROR
} from './constants'

const defaultState = Immutable({
    loginUsuario: '',
    loginSenha: '',
    cadastroExibicao: '',
    cadastroEmail: '',
    cadastroSenha: '',
    recuperarEmail: '',
    recuperarSenha: '',
    recuperarConfirmarSenha: '',
    status: null,
    statusError: null,
    sucesso: false,
    carregando: false,
    erro: null
})

export default handleActions({

    [ON_CHANGE]: (state, { payload }) => {
        return state.merge({
            [payload.name]: payload.value
        })
    },

    // START
    [combineActions(
        LOGAR_START, CADASTRO_START, RECUPERAR_START, ALTERAR_START, CONFIRMAR_START, STATUS_START
    )]: (state, { payload }) => {
        return state.merge({
            carregando: true,
            erro: null
        })
    },

    // SUCCESS
    [combineActions(
        LOGAR_SUCCESS, CADASTRO_SUCCESS, RECUPERAR_SUCCESS, ALTERAR_SUCCESS, CONFIRMAR_SUCCESS, STATUS_SUCCESS
    )]: (state, { payload }) => {
        return state.merge({
            carregando: false,
            erro: null
        })
    },

    // ERROR
    [combineActions(
        LOGAR_ERROR, CADASTRO_ERROR, RECUPERAR_ERROR, ALTERAR_ERROR, CONFIRMAR_ERROR, STATUS_ERROR
    )]: (state, { payload }) => {
        return state.merge({
            carregando: false,
            error: payload
        })
    },

    [LOGAR_SUCCESS]: (state, { payload }) => {
        return state.merge({
            loginUsuario: '',
            loginSenha: ''
        })
    },

    [CADASTRO_SUCCESS]: (state, { payload }) => {
        return state.merge({
            cadastroExibicao: '',
            cadastroEmail: '',
            cadastroSenha: ''
        })
    },

    [RECUPERAR_SUCCESS]: (state, { payload }) => {
        return state.merge({
            recuperarEmail: ''
        })
    },

    [ALTERAR_SUCCESS]: (state, { payload }) => {
        return state.merge({
            recuperarSenha: '',
            recuperarConfirmarSenha: ''
        })
    },

    [CONFIRMAR_SUCCESS]: (state, { payload }) => {
        return state.merge({

        })
    },

    [STATUS_SUCCESS]: (state, { payload }) => {
        return state.merge({
            status: payload
        })
    },

    [STATUS_ERROR]: (state, { payload }) => {
        return state.merge({
            status: null,
            statusError: payload
        })
    }

}, defaultState)