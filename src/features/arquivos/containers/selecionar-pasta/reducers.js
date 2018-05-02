import { handleActions } from 'redux-actions'

import {
    LOAD_START,
    LOAD_DONE,
    GET_GRUPOS_START,
    GET_GRUPOS_DONE,
    SELECT_GRUPO
} from './actions'

const defaultState = {
    carregando: false,
    pastas: [],
    grupos: [],
    pasta: null,
    grupo: null
}

export default handleActions({

    [LOAD_START]: (state, { payload }) => ({
        ...state,
        carregando: true,
        pastas: [],
        grupos: []
    }),

    [LOAD_DONE]: (state, { payload }) => ({
        ...state,
        carregando: false,
        pastas: payload
    }),

    [GET_GRUPOS_START]: (state, { payload }) => ({
        ...state,
        carregando: true,
        pasta: payload
    }),

    [GET_GRUPOS_DONE]: (state, { payload }) => ({
        ...state,
        carregando: false,
        grupos: payload
    }),

    [SELECT_GRUPO]: (state, { payload }) => ({
        ...state,
        grupo: payload
    })

}, defaultState)