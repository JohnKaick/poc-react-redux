import { normalize } from 'normalizr'
import emitter from './../../../../module/globals/emitter'
import { MdCategoriaSchema } from './../../module/schemas'
import { ENTITY_UPDATED } from './../../../../module/constants'

import {
    ON_CHANGE,
    ON_LOAD_START, ON_LOAD_SUCCESS, ON_LOAD_ERROR,
    ON_SALVAR_START, ON_SALVAR_SUCCESS, ON_SALVAR_ERROR,
    ON_DELETAR_START, ON_DELETAR_SUCCESS, ON_DELETAR_ERROR
} from './constants'

import {
    obter as obterCategoriaApi,
    cadastrar as cadastrarCategoriaApi,
    editar as editarCategoriaApi,
    remover as deletarCategoriaApi
} from './../../module/api/md-categoria'

export function load(categoriaId) {
    return async dispatch => {
        try {
            dispatch(ON_LOAD_START())
            if (categoriaId) {
                const response = await obterCategoriaApi(categoriaId)
                const data = normalize(response.data, MdCategoriaSchema)
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

export function adicionar(categoria) {
    return async dispatch => {
        try {
            dispatch(ON_SALVAR_START())
            const response = await cadastrarCategoriaApi(categoria)
            const data = normalize(response.data, MdCategoriaSchema)
            dispatch(ENTITY_UPDATED(data.entities))
            dispatch(ON_SALVAR_SUCCESS(response.data))
            emitter.emit('mensagem-sucesso', 'Categoria cadastrada com sucesso.')
            emitter.emit('categoria-adicionada', response.data._id)
            emitter.emit('dialog-categoria-close')
        } catch (err) {
            dispatch(ON_SALVAR_ERROR(err))
        }
    }
}

export function alterar(categoria) {
    return async dispatch => {
        try {
            dispatch(ON_SALVAR_START())
            const response = await editarCategoriaApi(categoria)
            const data = normalize(response.data, MdCategoriaSchema)
            dispatch(ENTITY_UPDATED(data.entities))
            dispatch(ON_SALVAR_SUCCESS(response.data))
            emitter.emit('mensagem-sucesso', 'Categoria alterada com sucesso.')
            emitter.emit('categoria-alterada')
            emitter.emit('dialog-categoria-close')
        } catch (err) {
            dispatch(ON_SALVAR_ERROR(err))
        }
    }
}

export function deletar(categoriaId) {
    return async dispatch => {
        try {
            dispatch(ON_DELETAR_START())
            const response = await deletarCategoriaApi(categoriaId)
            dispatch(ON_DELETAR_SUCCESS())
            emitter.emit('mensagem-sucesso', 'Categoria deletada com sucesso.')
            emitter.emit('categoria-deletada')
            emitter.emit('dialog-categoria-close')
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
