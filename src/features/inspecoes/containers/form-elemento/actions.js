import { normalize } from 'normalizr'
import emitter from './../../../../module/globals/emitter'

import {
    ON_CHANGE, ANOMALIA_SELECIONADA,
    LOAD_ELEMENTO_START, LOAD_ELEMENTO_SUCCESS, LOAD_ELEMENTO_ERROR,
    ADD_ELEMENTO_START, ADD_ELEMENTO_SUCCESS, ADD_ELEMENTO_ERROR,
    UPDATE_ELEMENTO_START, UPDATE_ELEMENTO_SUCCESS, UPDATE_ELEMENTO_ERROR,
    DELETE_ELEMENTO_START, DELETE_ELEMENTO_SUCCESS, DELETE_ELEMENTO_ERROR
} from './constants'

import {
    ENTITY_UPDATED
} from './../../../../module/constants'

import {
    MdElementoSchema
} from './../../module/schemas'

import {
    obter as obterElementoApi,
    editar as editarElementoApi,
    remover as deletarElementoApi
} from './../../module/api/md-elemento'

// ACTIONS

export function change(name, value) {
    return async (dispatch) => {
        dispatch(ON_CHANGE({ name, value }))
    }
}

export function load(disciplinaId, pastaId, elementoId) {
    return async (dispatch) => {
        try {
            dispatch(LOAD_ELEMENTO_START({ disciplinaId, pastaId, elementoId }))
            if (elementoId) {
                const response = await obterElementoApi(elementoId)
                const data = normalize(response.data, MdElementoSchema)
                dispatch(ENTITY_UPDATED(data.entities))
                dispatch(LOAD_ELEMENTO_SUCCESS(response.data))
            } else {
                dispatch(LOAD_ELEMENTO_SUCCESS({}))
            }
        } catch (err) {
            dispatch(LOAD_ELEMENTO_ERROR(err))
        }
    }
}

export function selecionarAnomalia(anomaliaId) {
    return async (dispatch) => {
        dispatch(ANOMALIA_SELECIONADA(anomaliaId))
    }
}

export function salvar(elemento) {
    return async (dispatch) => {
        try {
            dispatch(UPDATE_ELEMENTO_START())
            const response = await editarElementoApi(elemento)
            dispatch(UPDATE_ELEMENTO_SUCCESS())
            emitter.emit('mensagem-sucesso', 'Elemento alterado com sucesso.')
            emitter.emit('md-elemento-alterado', response.data)
        } catch (err) {
            dispatch(UPDATE_ELEMENTO_ERROR())
            emitter.emit('mensagem-erro', 'Ocorreu um erro ao alterar este elemento.', err)
        }
    }
}

export function deletar(elementoId) {
    return async (dispatch) => {
        try {
            dispatch(DELETE_ELEMENTO_START())
            const response = await deletarElementoApi(elementoId)
            dispatch(DELETE_ELEMENTO_SUCCESS())
            emitter.emit('mensagem-sucesso', 'Elemento deletado com sucesso.')
            emitter.emit('md-elemento-deletado', response.data)
        } catch (err) {
            dispatch(DELETE_ELEMENTO_ERROR())
            emitter.emit('mensagem-erro', 'Ocorreu um erro ao deletar este elemento.', err)
        }
    }
}