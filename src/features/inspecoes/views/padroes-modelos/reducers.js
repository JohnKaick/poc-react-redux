import Immutable from 'seamless-immutable'
import { handleActions } from 'redux-actions'

import {
    DISCIPLINA_SELECTED, PASTA_SELECTED, CATEGORIA_SELECTED,
    LOAD_DISCIPLINAS_START, LOAD_DISCIPLINAS_SUCCESS, LOAD_DISCIPLINAS_ERROR,
    LOAD_PASTAS_START, LOAD_PASTAS_SUCCESS, LOAD_PASTAS_ERROR,
    LOAD_CATEGORIAS_START, LOAD_CATEGORIAS_SUCCESS, LOAD_CATEGORIAS_ERROR
} from './constants'

const defaultState = Immutable({
    disciplina: null,
    disciplinas: [],
    pasta: null,
    pastas: [],
    categoria: null,
    categorias: [],
    carregando: false,
    erro: null
})

export default handleActions({

    [DISCIPLINA_SELECTED]: (state, { payload }) => {
        return state.merge({
            disciplina: payload,
            pasta: null,
            categoria: null
        })
    },
    [LOAD_DISCIPLINAS_START]: (state, { payload }) => {
        return state.merge({
            carregando: true
        })
    },
    [LOAD_DISCIPLINAS_SUCCESS]: (state, { payload }) => {
        return state.merge({
            disciplinas: payload,
            carregando: false
        })
    },

    [PASTA_SELECTED]: (state, { payload }) => {
        return state.merge({
            pasta: payload
        })
    },
    [LOAD_PASTAS_START]: (state, { payload }) => {
        return state.merge({
            carregando: true
        })
    },
    [LOAD_PASTAS_SUCCESS]: (state, { payload }) => {
        return state.merge({
            pastas: payload,
            carregando: false
        })
    },

    [CATEGORIA_SELECTED]: (state, { payload }) => {
        return state.merge({
            categoria: payload
        })
    },
    [LOAD_CATEGORIAS_START]: (state, { payload }) => {
        return state.merge({
            carregando: true
        })
    },
    [LOAD_CATEGORIAS_SUCCESS]: (state, { payload }) => {
        return state.merge({
            categorias: payload,
            carregando: false
        })
    }

}, defaultState)