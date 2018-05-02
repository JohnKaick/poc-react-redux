import { normalize } from 'normalizr'
import { ENTITY_UPDATED } from './../../../../module/constants'

import {
    DisciplinaSchema, MdPastaSchema, MdCategoriaSchema
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
    DISCIPLINA_SELECTED, PASTA_SELECTED, CATEGORIA_SELECTED,
    LOAD_DISCIPLINAS_START, LOAD_DISCIPLINAS_SUCCESS, LOAD_DISCIPLINAS_ERROR,
    LOAD_PASTAS_START, LOAD_PASTAS_SUCCESS, LOAD_PASTAS_ERROR,
    LOAD_CATEGORIAS_START, LOAD_CATEGORIAS_SUCCESS, LOAD_CATEGORIAS_ERROR
} from './constants'

export function disciplinaSelecionada(disciplinaId) {
    return async dispatch => {
        dispatch(DISCIPLINA_SELECTED(disciplinaId))
        dispatch(carregarPastas(disciplinaId))
        dispatch(carregarCategorias(disciplinaId))
    }
}

export function pastaSelecionada(pastaId) {
    return async dispatch => {
        dispatch(PASTA_SELECTED(pastaId))
    }
}

export function categoriaSelecionada(categoriaId) {
    return async dispatch => {
        dispatch(CATEGORIA_SELECTED(categoriaId))
    }
}

export function load() {
    return async dispatch => {
        dispatch(carregarDisciplinas())
    }
}

export function carregarDisciplinas() {
    return async dispatch => {
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

export function carregarPastas(disciplinaId) {
    return async dispatch => {
        try {
            dispatch(LOAD_PASTAS_START())
            const response = await obterTodasPastas(disciplinaId)
            const data = normalize(response.data, [MdPastaSchema])
            dispatch(ENTITY_UPDATED(data.entities))
            dispatch(LOAD_PASTAS_SUCCESS(data.result))
        } catch (err) {
            dispatch(LOAD_PASTAS_ERROR(err))
        }
    }
}

export function carregarCategorias(disciplinaId) {
    return async dispatch => {
        try {
            dispatch(LOAD_CATEGORIAS_START())
            const response = await obterTodasCategorias(disciplinaId)
            const data = normalize(response.data, [MdCategoriaSchema])
            dispatch(LOAD_CATEGORIAS_SUCCESS(response.data))
        } catch (err) {
            dispatch(LOAD_CATEGORIAS_ERROR(err))
        }
    }
}