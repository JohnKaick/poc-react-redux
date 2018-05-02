import Immutable from 'seamless-immutable'
import { handleActions } from 'redux-actions'

import {
    ON_LOAD_START,
    ON_LOAD_SUCCESS,
    ON_LOAD_ERROR,
    ON_GRUPO_SELECTED,
    OBTER_ARQUIVOS_START,
    OBTER_ARQUIVOS_SUCCESS,
    OBTER_ARQUIVOS_ERROR
} from './constants'

const defaultState = Immutable({
    arquivos: [],
    pasta: null,
    grupo: null,
    carregando: false,
    erro: null
})

export default handleActions({
    [ON_LOAD_START]: (state, { payload }) => {
        return state.merge({
            carregando: true,
            pastas: [],
            arquivos: [],
            grupo: null
        })
    },
    [ON_LOAD_SUCCESS]: (state, { payload }) => {
        return state.merge({
            pastas: payload,
            carregando: false
        })
    },
    [ON_LOAD_ERROR]: (state, { payload }) => {
        return state.merge({
            pastas: [],
            carregando: false,
            erro: payload
        })
    },
    [ON_GRUPO_SELECTED]: (state, { payload }) => {
        return state.merge({
            pasta: payload.pasta,
            grupo: payload.grupo
        })
    },
    [OBTER_ARQUIVOS_START]: (state, { payload }) => {
        return state.merge({
            carregando: true
        })
    },
    [OBTER_ARQUIVOS_SUCCESS]: (state, { payload }) => {
        return state.merge({
            arquivos: payload,
            carregando: false
        })
    },
    [OBTER_ARQUIVOS_ERROR]: (state, { payload }) => {
        return state.merge({
            arquivos: [],
            carregando: false,
            erro: payload
        })
    },
}, defaultState)