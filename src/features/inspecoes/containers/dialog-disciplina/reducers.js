import Immutable from 'seamless-immutable'
import { handleActions } from 'redux-actions'

import {
    ON_CHANGE,
    ON_LOAD_START, ON_LOAD_SUCCESS, ON_LOAD_ERROR,
    ON_SALVAR_START, ON_SALVAR_SUCCESS, ON_SALVAR_ERROR,
    ON_DELETAR_START, ON_DELETAR_SUCCESS, ON_DELETAR_ERROR
} from './constants'

const defaultState = Immutable({
    nome: '',
    carregando: false,
    erro: null
})

export default handleActions({
    [ON_CHANGE]: (state, { payload }) => {
        return state.merge({
            [payload.name]: payload.value
        })
    },
    [ON_LOAD_START]: (state, { payload }) => {
        return state.merge({
            carregando: true
        })
    },
    [ON_LOAD_SUCCESS]: (state, { payload }) => {
        return state.merge({
            id: payload._id,
            nome: payload.nome,
            carregando: false
        })
    },
    [ON_LOAD_ERROR]: (state, { payload }) => {
        return state.merge({
            carregando: false
        })
    },
    [ON_SALVAR_START]: (state, { payload }) => {
        return state.merge({
            carregando: true
        })
    },
    [ON_SALVAR_SUCCESS]: (state, { payload }) => {
        return state.merge({
            carregando: false
        })
    },
    [ON_SALVAR_ERROR]: (state, { payload }) => {
        return state.merge({
            carregando: false
        })
    }
}, defaultState)