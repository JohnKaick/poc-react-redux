import Immutable from 'seamless-immutable'
import { handleActions, combineActions } from 'redux-actions'

import {
    FILTRAR_ELEMENTO,
    DISCIPLINA_SELECIONADA,
    PASTA_SELECIONADA,
    ELEMENTO_SELECIONADO,
    LOAD_DISCIPLINAS_START,
    LOAD_DISCIPLINAS_SUCCESS,
    LOAD_DISCIPLINAS_ERROR,
    LOAD_PASTAS_START,
    LOAD_PASTAS_SUCCESS,
    LOAD_PASTAS_ERROR,
    LOAD_ELEMENTOS_START,
    LOAD_ELEMENTOS_SUCCESS,
    LOAD_ELEMENTOS_ERROR
} from './constants'

const defaultState = Immutable({
    disciplinas: [],
    disciplina: null,
    pastas: [],
    pasta: null,
    elementos: [],
    elemento: null,
    carregando: false,
    erro: null
})

export default handleActions({

    [LOAD_DISCIPLINAS_START]: (state, { payload }) => {
        return state.merge({
            carregando: true
        })
    },
    [LOAD_DISCIPLINAS_SUCCESS]: (state, { payload }) => {
        return state.merge({
            carregando: false,
            disciplinas: payload
        })
    },
    [LOAD_DISCIPLINAS_ERROR]: (state, { payload }) => {
        return state.merge({
            carregando: false,
            erro: payload
        })
    },

    [LOAD_PASTAS_START]: (state, { payload }) => {
        return state.merge({
            carregando: true
        })
    },
    [LOAD_PASTAS_SUCCESS]: (state, { payload }) => {
        return state.merge({
            carregando: false,
            pastas: payload
        })
    },
    [LOAD_PASTAS_ERROR]: (state, { payload }) => {
        return state.merge({
            carregando: false,
            erro: payload
        })
    },

    [LOAD_ELEMENTOS_START]: (state, { payload }) => {
        return state.merge({
            carregando: true
        })
    },
    [LOAD_ELEMENTOS_SUCCESS]: (state, { payload }) => {
        return state.merge({
            carregando: false,
            elementos: payload
        })
    },
    [LOAD_ELEMENTOS_ERROR]: (state, { payload }) => {
        return state.merge({
            carregando: false,
            erro: payload
        })
    },

    [DISCIPLINA_SELECIONADA]: (state, { payload }) => {
        return state.merge({
            disciplina: payload,
            elementos: [],
            pasta: null,
            elemento: null
        })
    },
    [PASTA_SELECIONADA]: (state, { payload }) => {
        return state.merge({
            pasta: payload,
            elemento: null
        })
    },
    [ELEMENTO_SELECIONADO]: (state, { payload }) => {
        return state.merge({
            elemento: payload
        })
    },

}, defaultState)