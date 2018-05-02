import Immutable from 'seamless-immutable'
import { handleActions } from 'redux-actions'

import {
    LOAD_ANALISES_START,
    LOAD_ANALISES_SUCCESS,
    LOAD_ANALISES_ERROR,
} from './constants'

const defaultState = Immutable({
    carregando: false,
    analises: [],
    erro: null
})

export default handleActions({
    [LOAD_ANALISES_START]: (state, { payload }) => {
        return state.merge({
            carregando: true
        })
    },
    [LOAD_ANALISES_SUCCESS]: (state, { payload }) => {
        return state.merge({
            carregando: false,
            analises: payload
        })
    },
    [LOAD_ANALISES_ERROR]: (state, { payload }) => {
        return state.merge({
            carregando: false,
            erro: payload
        })
    },
}, defaultState)