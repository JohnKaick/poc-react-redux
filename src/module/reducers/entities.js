import Immutable from 'seamless-immutable'

import { handleActions } from 'redux-actions'

import {
    ENTITY_UPDATED
} from './../constants'

const defaultState = Immutable({
    projetos: {}
})

export default handleActions({
    [ENTITY_UPDATED]: (state, { payload }) => {
        return state.merge(payload, {
            deep: true
        })
    }
}, defaultState)