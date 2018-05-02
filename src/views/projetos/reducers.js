import Immutable from 'seamless-immutable'
import { handleActions } from 'redux-actions'

import {
    ON_PESQUISA_CHANGE, LOAD_START, LOAD_SUCCESS, LOAD_ERROR
} from './constants'

const defaultState = Immutable({
    projetos: [],
    pesquisa: '',
    carregando: false,
    erro: null
})

export default handleActions({

    [ON_PESQUISA_CHANGE]: (state, { payload }) => {
        return state.merge({
            pesquisa: payload
        })
    },

    [LOAD_START]: (state, { payload }) => {
        return state.merge({
            pesquisa: '',
            carregando: true
        })
    },

    [LOAD_SUCCESS]: (state, { payload }) => {
        return state.merge({
            carregando: false,
            projetos: payload,
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