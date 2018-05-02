import { normalize } from 'normalizr'
import { AtaRegistroSchema, AtaItemSchema, AtaParticipanteSchema } from './../../module/schemas'
import { ENTITY_UPDATED } from './../../../../module/constants'

import {
    LOAD_ATA_START,
    LOAD_ATA_SUCCESS,
    LOAD_ATA_ERROR,
    LOAD_ITENS_START,
    LOAD_ITENS_SUCCESS,
    LOAD_ITENS_ERROR,
    LOAD_PARTICIPANTES_START,
    LOAD_PARTICIPANTES_SUCCESS,
    LOAD_PARTICIPANTES_ERROR
} from './constants'

import { obter } from './../../module/api/registro'

import { obterTodos as obterTodosItens } from './../../module/api/item'

import { obterTodos as obterTodosPorAta } from './../../module/api/participante'

export function carregarAta(ataId) {
    return async (dispatch) => {
        try {
            dispatch(LOAD_ATA_START())
            const response = await obter(ataId)
            dispatch(LOAD_ATA_SUCCESS(response.data))
        } catch (err) {
            dispatch(LOAD_ATA_ERROR(err))
        }
    }
}

export function carregarItens(ataId) {
    return async (dispatch) => {
        try {
            dispatch(LOAD_ITENS_START())
            const response = await obterTodosItens(ataId)
            const data = normalize(response.data, [AtaItemSchema])
            dispatch(ENTITY_UPDATED(data.entities))
            dispatch(LOAD_ITENS_SUCCESS(data.result))
        } catch (err) {
            dispatch(LOAD_ITENS_ERROR(err))
        }
    }
}

export function carregarParticipantes(ataId) {
    return async (dispatch) => {
        try {
            dispatch(LOAD_PARTICIPANTES_START())
            const response = await obterTodosPorAta(ataId)
            const data = normalize(response.data, [AtaParticipanteSchema])
            dispatch(ENTITY_UPDATED(data.entities))
            dispatch(LOAD_PARTICIPANTES_SUCCESS(data.result))
        } catch (err) {
            dispatch(LOAD_PARTICIPANTES_ERROR(err))
        }
    }
}