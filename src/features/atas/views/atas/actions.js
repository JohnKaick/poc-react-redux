import { normalize } from 'normalizr'
import { AtaRegistroSchema } from './../../module/schemas'
import { ENTITY_UPDATED } from './../../../../module/constants'

import {
    LOAD_ATAS_START,
    LOAD_ATAS_SUCCESS,
    LOAD_ATAS_ERROR,
} from './constants'

import { obterTodos } from './../../module/api/registro'

export function load(projetoId) {
    return async (dispatch) => {
        try {
            dispatch(LOAD_ATAS_START())
            const response = await obterTodos(projetoId)
            const data = normalize(response.data, [AtaRegistroSchema])
            dispatch(ENTITY_UPDATED(data.entities))
            dispatch(LOAD_ATAS_SUCCESS(data.result))
        } catch (err) {
            dispatch(LOAD_ATAS_ERROR(err))
        }
    }
}