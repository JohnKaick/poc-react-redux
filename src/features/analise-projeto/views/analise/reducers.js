import Immutable from 'seamless-immutable'
import { handleActions } from 'redux-actions'

import {
    LOAD_ANALISE_START,
    LOAD_ANALISE_SUCCESS,
    LOAD_ANALISE_ERROR,
    LOAD_PARTICIPANTES_START,
    LOAD_PARTICIPANTES_SUCCESS,
    LOAD_PARTICIPANTES_ERROR,
    LOAD_ITENS_START,
    LOAD_ITENS_SUCCESS,
    LOAD_ITENS_ERROR,
} from './constants'

const defaultState = Immutable({
    carregando: false,
    analise: {},
    participantes: null,
    participante: '',
    itens: [],
    item: '',
    erro: null
})

export default handleActions({
    [LOAD_ANALISE_START]: (state, { payload }) => {
        return state.merge({
            carregando: true
        })
    },
    [LOAD_ANALISE_SUCCESS]: (state, { payload }) => {
        return state.merge({
            carregando: false,
            analise: payload
        })
    },
    [LOAD_ANALISE_ERROR]: (state, { payload }) => {
        return state.merge({
            carregando: false,
            erro: payload
        })
    },
    [LOAD_PARTICIPANTES_START]: (state, { payload }) => {
        return state.merge({
            carregando: true,
        })
    },
    [LOAD_PARTICIPANTES_SUCCESS]: (state, { payload }) => {
        return state.merge({
            carregando: false,
            participantes: payload
        })
    },
    [LOAD_PARTICIPANTES_ERROR]: (state, { payload }) => {
        return state.merge({
            carregando: false,
            erro: payload
        })
    },
    [LOAD_ITENS_START]: (state, { payload }) => {
        return state.merge({
            carregando: true,
        })
    },
    [LOAD_ITENS_SUCCESS]: (state, { payload }) => {
        return state.merge({
            carregando: false,
            itens: payload
        })
    },
    [LOAD_ITENS_ERROR]: (state, { payload }) => {
        return state.merge({
            carregando: false,
            erro: payload
        })
    },
}, defaultState)