import Immutable from 'seamless-immutable'
import { handleActions } from 'redux-actions'

import {
    CLEAN, ON_CHANGE,
    ON_SALVAR_START, ON_SALVAR_SUCCESS, ON_SALVAR_ERROR
} from './constants'

const defaultState = Immutable({
    categoria: '',
    descritivo: '',
    metodo: '',
    nome: '',
    pesoGut: '',
    prefix: '',
    vidaUtil: '',
    carregando: false,
    erro: null
})

export default handleActions({
    [CLEAN]: (state, { payload }) => {
        return state.merge({
            categoria: '',
            descritivo: '',
            metodo: '',
            nome: '',
            pesoGut: '',
            prefix: '',
            vidaUtil: '',
            carregando: false,
            erro: null
        })
    },
    [ON_CHANGE]: (state, { payload }) => {
        return state.merge({
            [payload.name]: payload.value
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