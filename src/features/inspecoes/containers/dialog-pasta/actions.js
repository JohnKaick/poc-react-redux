import { normalize } from 'normalizr'
import emitter from './../../../../module/globals/emitter'
import { MdPastaSchema } from './../../module/schemas'
import { ENTITY_UPDATED } from './../../../../module/constants'

import {
    ON_CHANGE,
    ON_LOAD_START, ON_LOAD_SUCCESS, ON_LOAD_ERROR,
    ON_SALVAR_START, ON_SALVAR_SUCCESS, ON_SALVAR_ERROR,
    ON_DELETAR_START, ON_DELETAR_SUCCESS, ON_DELETAR_ERROR
} from './constants'

import {
    obter as obterPastaApi,
    cadastrar as cadastrarPastaApi,
    editar as editarPastaApi,
    remover as deletarPastaApi
} from './../../module/api/md-pasta'

export function load(pastaId) {
    return async dispatch => {
        try {
            dispatch(ON_LOAD_START())
            if (pastaId) {
                const response = await obterPastaApi(pastaId)
                const data = normalize(response.data, MdPastaSchema)
                dispatch(ENTITY_UPDATED(data.entities))
                dispatch(ON_LOAD_SUCCESS(response.data))
            } else {
                dispatch(ON_LOAD_SUCCESS({}))
            }
        } catch (err) {
            dispatch(ON_LOAD_ERROR(err))
        }
    }
}

export function adicionar(pasta) {
    return async dispatch => {
        try {
            dispatch(ON_SALVAR_START())
            const response = await cadastrarPastaApi(pasta)
            const data = normalize(response.data, MdPastaSchema)
            dispatch(ENTITY_UPDATED(data.entities))
            dispatch(ON_SALVAR_SUCCESS(response.data))
            emitter.emit('mensagem-sucesso', 'Pasta cadastrada com sucesso.')
            emitter.emit('pasta-adicionada', response.data._id)
            emitter.emit('dialog-pasta-close')
        } catch (err) {
            dispatch(ON_SALVAR_ERROR(err))
        }
    }
}

export function alterar(pasta) {
    return async dispatch => {
        try {
            dispatch(ON_SALVAR_START())
            const response = await editarPastaApi(pasta)
            const data = normalize(response.data, MdPastaSchema)
            dispatch(ENTITY_UPDATED(data.entities))
            dispatch(ON_SALVAR_SUCCESS(response.data))
            emitter.emit('mensagem-sucesso', 'Pasta alterada com sucesso.')
            emitter.emit('pasta-alterada')
            emitter.emit('dialog-pasta-close')
        } catch (err) {
            dispatch(ON_SALVAR_ERROR(err))
        }
    }
}

export function deletar(pastaId) {
    return async dispatch => {
        try {
            dispatch(ON_DELETAR_START())
            const response = await deletarPastaApi(pastaId)
            dispatch(ON_DELETAR_SUCCESS())
            emitter.emit('mensagem-sucesso', 'Pasta deletada com sucesso.')
            emitter.emit('pasta-deletada')
            emitter.emit('dialog-pasta-close')
        } catch (err) {
            dispatch(ON_DELETAR_ERROR(err))
        }
    }
}

export function change(name, value) {
    return dispatch => {
        dispatch(ON_CHANGE({ name, value }))
    }
}
