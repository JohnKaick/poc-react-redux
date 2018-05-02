import { normalize } from 'normalizr'

import { ProjetoSchema } from './../../module/schemas'
import { ENTITY_UPDATED } from './../../module/constants'

import {
    obterProjetos
} from './../../module/api/projeto'

import {
    ON_PESQUISA_CHANGE,
    LOAD_START,
    LOAD_SUCCESS,
    LOAD_ERROR
} from './constants'

export function pesquisaChange(text) {
    return dispatch => {
        dispatch(ON_PESQUISA_CHANGE(text))
    }
}

export function load() {
    return async dispatch => {
        try {
            dispatch(LOAD_START())
            const response = await obterProjetos()
            const data = normalize(response.data, [ProjetoSchema])
            dispatch(ENTITY_UPDATED(data.entities))
            dispatch(LOAD_SUCCESS(data.result))
        } catch (err) {
            dispatch(LOAD_ERROR(err))
        }
    }
}
