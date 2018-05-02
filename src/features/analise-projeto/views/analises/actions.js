import { normalize } from 'normalizr'
import { ApRelatorioSchema } from './../../module/schemas'
import { ENTITY_UPDATED } from './../../../../module/constants'

import {
    LOAD_ANALISES_START,
    LOAD_ANALISES_SUCCESS,
    LOAD_ANALISES_ERROR,
} from './constants'

import { obterTodos } from './../../module/api/relatorio'

export function load(projetoId) {
    return async (dispatch) => {
        try {
            dispatch(LOAD_ANALISES_START())
            const response = await obterTodos(projetoId)
            const data = normalize(response.data, [ApRelatorioSchema])
            dispatch(ENTITY_UPDATED(data.entities))
            dispatch(LOAD_ANALISES_SUCCESS(data.result))
        } catch (err) {
            dispatch(LOAD_ANALISES_ERROR(err))
        }
    }
}
