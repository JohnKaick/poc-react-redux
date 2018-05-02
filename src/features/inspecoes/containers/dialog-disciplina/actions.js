import { normalize } from 'normalizr'
import emitter from './../../../../module/globals/emitter'
import { DisciplinaSchema } from './../../module/schemas'
import { ENTITY_UPDATED } from './../../../../module/constants'

import {
    ON_CHANGE,
    ON_LOAD_START, ON_LOAD_SUCCESS, ON_LOAD_ERROR,
    ON_SALVAR_START, ON_SALVAR_SUCCESS, ON_SALVAR_ERROR,
    ON_DELETAR_START, ON_DELETAR_SUCCESS, ON_DELETAR_ERROR
} from './constants'

import {
    obter as obterDisciplinaApi,
    cadastrar as cadastrarDisciplinaApi,
    editar as editarDisciplinaApi,
    remover as deletarDisciplinaApi
} from './../../module/api/disciplina'

export function load(disciplinaId) {
    return async dispatch => {
        try {
            dispatch(ON_LOAD_START())
            if (disciplinaId) {
                const response = await obterDisciplinaApi(disciplinaId)
                const data = normalize(response.data, DisciplinaSchema)
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

export function adicionar(disciplina) {
    return async dispatch => {
        try {
            dispatch(ON_SALVAR_START())
            const response = await cadastrarDisciplinaApi(disciplina)
            const data = normalize(response.data, DisciplinaSchema)
            dispatch(ENTITY_UPDATED(data.entities))
            dispatch(ON_SALVAR_SUCCESS(response.data))
            emitter.emit('mensagem-sucesso', 'Disciplina cadastrada com sucesso.')
            emitter.emit('disciplina-adicionada', response.data._id)
            emitter.emit('dialog-disciplina-close')
        } catch (err) {
            dispatch(ON_SALVAR_ERROR(err))
        }
    }
}

export function alterar(disciplina) {
    return async dispatch => {
        try {
            dispatch(ON_SALVAR_START())
            const response = await editarDisciplinaApi(disciplina)
            const data = normalize(response.data, DisciplinaSchema)
            dispatch(ENTITY_UPDATED(data.entities))
            dispatch(ON_SALVAR_SUCCESS(response.data))
            emitter.emit('mensagem-sucesso', 'Disciplina alterada com sucesso.')
            emitter.emit('disciplina-alterada')
            emitter.emit('dialog-disciplina-close')
        } catch (err) {
            dispatch(ON_SALVAR_ERROR(err))
        }
    }
}

export function deletar(disciplinaId) {
    return async dispatch => {
        try {
            dispatch(ON_DELETAR_START())
            const response = await deletarDisciplinaApi(disciplinaId)
            dispatch(ON_DELETAR_SUCCESS())
            emitter.emit('mensagem-sucesso', 'Disciplina deletada com sucesso.')
            emitter.emit('disciplina-deletada')
            emitter.emit('dialog-disciplina-close')
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
