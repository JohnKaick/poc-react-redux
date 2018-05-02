import Immutable from 'seamless-immutable'
import { handleActions } from 'redux-actions'

import {
    LOAD_ATAS_START,
    LOAD_ATAS_SUCCESS,
    LOAD_ATAS_ERROR,
    ATA_SELECTED
} from './constants'

const defaultState = Immutable({
    carregando: false,
    atas: [],
    ata: {},
    erro: null
})

export default handleActions({
    [LOAD_ATAS_START]: (state, { payload }) => {
        return state.merge({
            carregando: true
        })
    },
    [LOAD_ATAS_SUCCESS]: (state, { payload }) => {
        return state.merge({
            carregando: false,
            atas: payload
        })
    },
    [LOAD_ATAS_ERROR]: (state, { payload }) => {
        return state.merge({
            carregando: false,
            erro: payload
        })
    }
}, defaultState)