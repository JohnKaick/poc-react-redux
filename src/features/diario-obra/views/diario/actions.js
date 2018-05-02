import { normalize } from 'normalizr'
import { DiarioRegistroSchema, DiarioItemSchema, DiarioParticipanteSchema } from './../../module/schemas'
import { ENTITY_UPDATED } from './../../../../module/constants'

import {
    LOAD_DIARIO_START,
    LOAD_DIARIO_SUCCESS,
    LOAD_DIARIO_ERROR,
    LOAD_ITENS_START,
    LOAD_ITENS_SUCCESS,
    LOAD_ITENS_ERROR,
    LOAD_PARTICIPANTES_START,
    LOAD_PARTICIPANTES_SUCCESS,
    LOAD_PARTICIPANTES_ERROR
} from './constants'

import { obter } from './../../module/api/registro'

import { obterTodos as obterTodosItens } from './../../module/api/item'

import { obterTodos as obterTodosPorDiario } from './../../module/api/participante'

export function carregarDiario(diarioId) {
    return async (dispatch) => {
        try {
            dispatch(LOAD_DIARIO_START())
            const response = await obter(diarioId)
            dispatch(LOAD_DIARIO_SUCCESS(response.data))
        } catch (err) {
            dispatch(LOAD_DIARIO_ERROR(err))
        }
    }
}

export function carregarItens(diarioId) {
    return async (dispatch) => {
        try {
            dispatch(LOAD_ITENS_START())
            const response = await obterTodosItens(diarioId)
            const data = normalize(response.data, [DiarioItemSchema])
            dispatch(ENTITY_UPDATED(data.entities))
            dispatch(LOAD_ITENS_SUCCESS(data.result))
        } catch (err) {
            dispatch(LOAD_ITENS_ERROR(err))
        }
    }
}

export function carregarParticipantes(diarioId) {
    return async (dispatch) => {
        try {
            dispatch(LOAD_PARTICIPANTES_START())
            const response = await obterTodosPorDiario(diarioId)
            const data = normalize(response.data, [DiarioParticipanteSchema])
            dispatch(ENTITY_UPDATED(data.entities))
            dispatch(LOAD_PARTICIPANTES_SUCCESS(data.result))
        } catch (err) {
            dispatch(LOAD_PARTICIPANTES_ERROR(err))
        }
    }
}