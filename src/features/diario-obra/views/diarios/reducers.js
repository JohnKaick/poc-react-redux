import Immutable from 'seamless-immutable'
import { handleActions } from 'redux-actions'

import {
    LOAD_DIARIOS_START,
    LOAD_DIARIOS_SUCCESS,
    LOAD_DIARIOS_ERROR
} from './constants'

const defaultState = Immutable({
    carregando: false,
    diarios: [],
    diario: {},
    erro: null
})

export default handleActions({
    [LOAD_DIARIOS_START]: (state, { payload }) => {
        return state.merge({
            carregando: true
        })
    },
    [LOAD_DIARIOS_SUCCESS]: (state, { payload }) => {
        return state.merge({
            carregando: false,
            diarios: payload
        })
    },
    [LOAD_DIARIOS_ERROR]: (state, { payload }) => {
        return state.merge({
            carregando: false,
            erro: payload
        })
    },
}, defaultState)