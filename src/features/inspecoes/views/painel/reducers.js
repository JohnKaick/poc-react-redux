import Immutable from 'seamless-immutable'
import { handleActions } from 'redux-actions'

import {
    ON_LOAD_START,
    ON_LOAD_SUCCESS,
    ON_LOAD_ERROR
} from './constants'

const defaultState = Immutable({
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
            carregando: false
        })
    },
    [ON_LOAD_ERROR]: (state, { payload }) => {
        return state.merge({
            carregando: false,
            erro: payload
        })
    }
}, defaultState)