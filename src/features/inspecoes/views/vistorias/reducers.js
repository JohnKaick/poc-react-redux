import Immutable from 'seamless-immutable'
import { handleActions } from 'redux-actions'

import {
    ON_LOAD_START, ON_LOAD_SUCCESS, ON_LOAD_ERROR,
    ON_ELEMENTOS_START, ON_ELEMENTOS_SUCCESS, ON_ELEMENTOS_ERROR
} from './constants'

const defaultState = Immutable({
    checklists: [],
    elementos: [],
    filtro: null,
    carregando: false,
    erro: null
})

export default handleActions({

    [ON_LOAD_START]: (state, { payload }) => {
        return state.merge({
            carregando: true
        })
    },
    [ON_LOAD_SUCCESS]: (state, { payload }) => {
        return state.merge({
            checklists: payload,
            carregando: false
        })
    },
    [ON_LOAD_ERROR]: (state, { payload }) => {
        return state.merge({
            carregando: false,
            erro: payload
        })
    },

    [ON_ELEMENTOS_START]: (state, { payload }) => {
        return state.merge({
            carregando: true
        })
    },
    [ON_ELEMENTOS_SUCCESS]: (state, { payload }) => {
        return state.merge({
            elementos: payload,
            carregando: false
        })
    },
    [ON_ELEMENTOS_ERROR]: (state, { payload }) => {
        return state.merge({
            carregando: false,
            erro: payload
        })
    }

}, defaultState)