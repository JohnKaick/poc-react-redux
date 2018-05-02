import { normalize } from 'normalizr'
import emitter from './../../../../module/globals/emitter'

import {
    DisciplinaSchema,
    MdPastaSchema,
    MdCategoriaSchema,
    MdElementoSchema
} from './../../module/schemas'

import {
    obterTodos as obterTodasDisciplinas
} from './../../module/api/disciplina'

import {
    obterTodos as obterTodasPastas
} from './../../module/api/md-pasta'

import {
    obterTodos as obterTodasCategorias
} from './../../module/api/md-categoria'

import {
    obterTodos as obterTodosElementos
} from './../../module/api/md-elemento'

import {
    DISCIPLINA_SELECIONADA,
    PASTA_SELECIONADA,
    ELEMENTO_SELECIONADO,
    LOAD_DISCIPLINAS_START,
    LOAD_DISCIPLINAS_SUCCESS,
    LOAD_DISCIPLINAS_ERROR,
    LOAD_PASTAS_START,
    LOAD_PASTAS_SUCCESS,
    LOAD_PASTAS_ERROR,
    LOAD_ELEMENTOS_START,
    LOAD_ELEMENTOS_SUCCESS,
    LOAD_ELEMENTOS_ERROR
} from './constants'

import {
    ENTITY_UPDATED
} from './../../../../module/constants'

export function load(projetoId) {
    return async (dispatch) => {
        dispatch(loadDisciplinas())
    }
}

export function disciplinaSelecionada(disciplinaId) {
    return async (dispatch) => {
        dispatch(DISCIPLINA_SELECIONADA(disciplinaId))
        dispatch(loadPastas(disciplinaId))
    }
}

export function pastaSelecionada(pastaId) {
    return async (dispatch) => {
        dispatch(PASTA_SELECIONADA(pastaId))
        dispatch(loadElementos(pastaId))
    }
}

export function elementoSelecionado(elementoId) {
    return async (dispatch) => {
        dispatch(ELEMENTO_SELECIONADO(elementoId))
    }
}

export function loadDisciplinas() {
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

export function loadPastas(disciplinaId) {
    return async (dispatch) => {
        try {
            dispatch(LOAD_PASTAS_START())
            const response = await obterTodasPastas(disciplinaId)
            const data = normalize(response.data, [MdPastaSchema])
            dispatch(ENTITY_UPDATED(data.entities))
            dispatch(LOAD_PASTAS_SUCCESS(data.result))
        } catch (err) {
            dispatch(LOAD_PASTAS_ERROR(err))
            emitter.emit('mensagem-erro', 'Ocorreu um erro ao obter as pastas.', err)
        }
    }
}

export function loadCategorias(disciplinaId) {
    return async (dispatch) => {
        try {
            dispatch(LOAD_PASTAS_START())
            const response = await obterTodasCategorias(disciplinaId)
            const data = normalize(response.data, [MdPastaSchema])
            dispatch(ENTITY_UPDATED(data.entities))
            dispatch(LOAD_PASTAS_SUCCESS(data.result))
        } catch (err) {
            dispatch(LOAD_PASTAS_ERROR(err))
            emitter.emit('mensagem-erro', 'Ocorreu um erro ao obter as categorias.', err)
        }
    }
}

export function loadElementos(pastaId) {
    return async (dispatch) => {
        try {
            dispatch(LOAD_ELEMENTOS_START())
            const response = await obterTodosElementos(pastaId)
            const data = normalize(response.data, [MdElementoSchema])
            dispatch(ENTITY_UPDATED(data.entities))
            dispatch(LOAD_ELEMENTOS_SUCCESS(data.result))
        } catch (err) {
            dispatch(LOAD_ELEMENTOS_ERROR(err))
            emitter.emit('mensagem-erro', 'Ocorreu um erro ao obter os elementos.', err)
        }
    }
}