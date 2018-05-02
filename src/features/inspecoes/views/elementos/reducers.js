import Immutable from 'seamless-immutable'
import { handleActions } from 'redux-actions'

import {
    CURRENT_CHANGED,
    GRUPO_SELECTED,
    ON_LOAD_START,
    ON_LOAD_SUCCESS,
    ON_LOAD_ERROR,
    LOAD_GRUPO_START,
    LOAD_GRUPO_SUCCESS,
    LOAD_GRUPO_ERROR
} from './constants'

const defaultState = Immutable({
    grupo: null,
    currents: [],
    checklists: [],
    grupos: [],
    elementos: [],
    carregando: false,
    erro: null
})

export default handleActions({

    [CURRENT_CHANGED]: (state, { payload }) => {
        return state.merge({
            currents: payload
        })
    },
    [GRUPO_SELECTED]: (state, { payload }) => {
        return state.merge({
            grupo: payload
        })
    },

    [ON_LOAD_START]: (state, { payload }) => {
        return state.merge({
            carregando: true,
            grupos: [],
            elementos: [],
            grupo: null
        })
    },
    [ON_LOAD_SUCCESS]: (state, { payload }) => {
        return state.merge({
            carregando: false,
            currents: payload.currents,
            grupos: payload.grupos,
            checklists: payload.checklists
        })
    },
    [ON_LOAD_ERROR]: (state, { payload }) => {
        return state.merge({
            carregando: false,
            erro: payload
        })
    },

    [LOAD_GRUPO_START]: (state, { payload }) => {
        return state.merge({
            carregando: true
        })
    },
    [LOAD_GRUPO_SUCCESS]: (state, { payload }) => {
        return state.merge({
            carregando: false,
            elementos: payload
        })
    },
    [LOAD_GRUPO_ERROR]: (state, { payload }) => {
        return state.merge({
            carregando: false,
            erro: payload
        })
    }
}, defaultState)