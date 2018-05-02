import Immutable from 'seamless-immutable'
import { handleActions } from 'redux-actions'

import {
    LOAD_START, LOAD_SUCCESS, LOAD_ERROR
} from './constants'

const defaultState = Immutable({
    result: null,
    carregando: false,
    erro: null
})

export default handleActions({

    [LOAD_START]: (state, { payload }) => {
        return state.merge({
            carregando: true
        })
    },

    [LOAD_SUCCESS]: (state, { payload }) => {
        return state.merge({
            carregando: false,
            result: payload,
            erro: null
        })
    },

    [LOAD_ERROR]: (state, { payload }) => {
        return state.merge({
            carregando: false,
            erro: payload
        })
    }

}, defaultState)