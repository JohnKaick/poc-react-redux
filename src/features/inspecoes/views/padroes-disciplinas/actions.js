import { normalize } from 'normalizr'
import { DisciplinaSchema } from './../../module/schemas'
import { ENTITY_UPDATED } from './../../../../module/constants'

import {
    LOAD_DISCIPLINAS_START,
    LOAD_DISCIPLINAS_SUCCESS,
    LOAD_DISCIPLINAS_ERROR,
    DISCIPLINA_SELECTED
} from './constants'

import {
    obterTodos as obterTodasDisciplinas
} from './../../module/api/disciplina'


export function load(projetoId) {
    return async (dispatch) => {
        try {
            dispatch(LOAD_DISCIPLINAS_START())
            const response = await obterTodasDisciplinas()
            const data = normalize(response.data, [DisciplinaSchema])
            dispatch(ENTITY_UPDATED(data.entities))
            dispatch(LOAD_DISCIPLINAS_SUCCESS(data.result))
        } catch (err) {
            dispatch(LOAD_DISCIPLINAS_ERROR(err))
        }
    }
}

export function disciplinaSelecionada(disciplina) {
    return async (dispatch) => {
        dispatch(DISCIPLINA_SELECTED(disciplina))
    }
}