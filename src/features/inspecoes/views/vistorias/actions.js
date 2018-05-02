import { normalize } from 'normalizr'
import { ChecklistSchema, ElementoSchema } from './../../module/schemas'
import { obterTodos as obterTodosChecklists } from './../../module/api/checklist'
import { obterTodosChecklist as obterTodosElementosChecklist } from './../../module/api/elemento'

import {
    ON_LOAD_START, ON_LOAD_SUCCESS, ON_LOAD_ERROR,
    ON_ELEMENTOS_START, ON_ELEMENTOS_SUCCESS, ON_ELEMENTOS_ERROR
} from './constants'

import { ENTITY_UPDATED } from './../../../../module/constants'

export function load(projetoId) {
    return async (dispatch) => {
        try {
            dispatch(ON_LOAD_START())
            const response = await obterTodosChecklists(projetoId)
            const data = normalize(response.data, [ChecklistSchema])
            dispatch(ENTITY_UPDATED(data.entities))
            dispatch(ON_LOAD_SUCCESS(data.result))
        } catch (err) {
            dispatch(ON_LOAD_ERROR(err))
        }
    }
}

export function checklistSelected(checklistId) {
    return async (dispatch) => {
        try {
            dispatch(ON_ELEMENTOS_START())
            const response = await obterTodosElementosChecklist(checklistId)
            dispatch(ENTITY_UPDATED(response.data.entities))
            dispatch(ON_ELEMENTOS_SUCCESS(response.data.result))
        } catch (err) {
            dispatch(ON_ELEMENTOS_ERROR(err))
        }
    }
}
