import Immutable from 'seamless-immutable'
import { handleActions, combineActions } from 'redux-actions'

import {
    LOAD_DISCIPLINAS_START,
    LOAD_DISCIPLINAS_SUCCESS,
    LOAD_DISCIPLINAS_ERROR,
    DISCIPLINA_SELECTED,
} from './constants'

const defaultState = Immutable({
    disciplinas: [],
    disciplina: null,
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
    [DISCIPLINA_SELECTED]: (state, { payload }) => {
        return state.merge({
            disciplina: payload,
        })
    },
}, defaultState)