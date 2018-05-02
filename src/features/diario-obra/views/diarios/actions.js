import { normalize } from 'normalizr'
import { DiarioRegistroSchema } from './../../module/schemas'
import { ENTITY_UPDATED } from './../../../../module/constants'

import {
    LOAD_DIARIOS_START,
    LOAD_DIARIOS_SUCCESS,
    LOAD_DIARIOS_ERROR,
} from './constants'

import { obterTodos } from './../../module/api/registro'

export function load(projetoId) {
    return async (dispatch) => {
        try {
            dispatch(LOAD_DIARIOS_START())
            const response = await obterTodos(projetoId)
            const data = normalize(response.data, [DiarioRegistroSchema])
            dispatch(ENTITY_UPDATED(data.entities))
            dispatch(LOAD_DIARIOS_SUCCESS(data.result))
        } catch (err) {
            dispatch(LOAD_DIARIOS_ERROR(err))
        }
    }
}