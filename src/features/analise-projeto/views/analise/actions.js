import { normalize } from 'normalizr'
import { ApRelatorioSchema, ApParticipanteSchema, ApItemSchema } from './../../module/schemas'
import { ENTITY_UPDATED } from './../../../../module/constants'

import {
    LOAD_ANALISE_START,
    LOAD_ANALISE_SUCCESS,
    LOAD_ANALISE_ERROR,
    LOAD_PARTICIPANTES_START,
    LOAD_PARTICIPANTES_SUCCESS,
    LOAD_PARTICIPANTES_ERROR,
    LOAD_ITENS_START,
    LOAD_ITENS_SUCCESS,
    LOAD_ITENS_ERROR,
} from './constants'

import { obter } from './../../module/api/relatorio'

import { obterTodos as obterTodosParticipantes } from './../../module/api/participante'

import { obterTodos } from './../../module/api/item'


export function load(analiseId) {
    return async (dispatch) => {        
        dispatch(carregarParticipantes(analiseId))
        dispatch(carregarAnalise(analiseId))
        dispatch(carregarItens(analiseId))
    }
}

export function carregarAnalise(analiseId) {
    return async (dispatch) => {
        try {
            dispatch(LOAD_ANALISE_START())
            const response = await obter(analiseId)
            const data = normalize(response.data, ApRelatorioSchema)
            dispatch(ENTITY_UPDATED(data.entities))
            dispatch(LOAD_ANALISE_SUCCESS(data.result))
        } catch (err) {
            dispatch(LOAD_ANALISE_ERROR(err))
        }
    }
}

export function carregarParticipantes(analiseId) {
    return async (dispatch) => {
        try {
            dispatch(LOAD_PARTICIPANTES_START())
            const response = await obterTodosParticipantes(analiseId)
            const data = normalize(response.data, [ApParticipanteSchema])
            dispatch(ENTITY_UPDATED(data.entities))
            dispatch(LOAD_PARTICIPANTES_SUCCESS(data.result))
        } catch (err) {
            dispatch(LOAD_PARTICIPANTES_ERROR(err))
        }
    }
}

export function carregarItens(analiseId) {
    return async (dispatch) => {
        try {
            dispatch(LOAD_ITENS_START())
            const response = await obterTodos(analiseId)
            const data = normalize(response.data, [ApItemSchema])
            dispatch(ENTITY_UPDATED(data.entities))
            dispatch(LOAD_ITENS_SUCCESS(data.result))
        } catch (err) {
            dispatch(LOAD_ITENS_ERROR(err))
        }
    }
}