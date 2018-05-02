import Immutable from 'seamless-immutable'
import { handleActions } from 'redux-actions'

import {
    LOAD_ATA_START,
    LOAD_ATA_SUCCESS,
    LOAD_ATA_ERROR,
    LOAD_ITENS_START,
    LOAD_ITENS_SUCCESS,
    LOAD_ITENS_ERROR,
    LOAD_PARTICIPANTES_START,
    LOAD_PARTICIPANTES_SUCCESS,
    LOAD_PARTICIPANTES_ERROR
} from './constants'

const defaultState = Immutable({
    carregando: false,
    ata: {},
    itens: [],
    item: {},
    participantes: null,
    participante: {},
    erro: null
})

export default handleActions({
    [LOAD_ATA_START]: (state, { payload }) => {
        return state.merge({
            carregando: true
        })
    },
    [LOAD_ATA_SUCCESS]: (state, { payload }) => {
        return state.merge({
            carregando: false,
            ata: payload
        })
    },
    [LOAD_ATA_ERROR]: (state, { payload }) => {
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
    [LOAD_PARTICIPANTES_START]: (state, { payload }) => {
        return state.merge({
            carregando: true
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
}, defaultState)