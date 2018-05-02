import { normalize } from 'normalizr'

import { ChecklistSchema } from './../../module/schemas'

import {
    obterTodos
} from './../../module/api/checklist'

import {
    ON_LOAD_START,
    ON_LOAD_SUCCESS,
    ON_LOAD_ERROR
} from './constants'

import {
    ENTITY_UPDATED
} from './../../../../module/constants'

export function load(projetoId) {
    return async (dispatch) => {
        try {
            dispatch(ON_LOAD_START())
            const response = await obterTodos(projetoId)
            const data = normalize(response.data, [ChecklistSchema])
            dispatch(ENTITY_UPDATED(data.entities))
            dispatch(ON_LOAD_SUCCESS(data.result))
        } catch (err) {
            dispatch(ON_LOAD_ERROR(err))
        }
    }
}