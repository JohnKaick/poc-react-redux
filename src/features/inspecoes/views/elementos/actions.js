import _ from 'lodash'

import {
    normalize
} from 'normalizr'

import {
    GrupoSchema, ChecklistSchema
} from './../../module/schemas'

import {
    obterTodos as obterTodosChecklists
} from './../../module/api/checklist'

import {
    obter,
    obterTodos as obterTodosGrupos
} from './../../module/api/grupo'

import {
    obterTodos as obterTodosElementos
} from './../../module/api/elemento'

import {
    CURRENT_CHANGED,
    GRUPO_SELECTED,
    ON_LOAD_START,
    ON_LOAD_SUCCESS,
    ON_LOAD_ERROR,
    LOAD_GRUPO_START,
    LOAD_GRUPO_SUCCESS,
    LOAD_GRUPO_ERROR
} from './constants'

import {
    ENTITY_UPDATED
} from './../../../../module/constants'

//
function prepararNavegacao(response, data) {
    const root = _
        .chain(response.data)
        .filter((e) => {
            return !e.grupo
        })
        .map('_id')
        .value()
    return [{
        title: 'Navegação',
        selected: null,
        itens: root
    }]
}


export function load(projetoId) {
    return async (dispatch) => {
        try {
            dispatch(ON_LOAD_START())
            const gruposResponse = await obterTodosGrupos(projetoId)
            const checklistResponse = await obterTodosChecklists(projetoId)
            const gruposData = normalize(gruposResponse.data, [GrupoSchema])
            const checklistData = normalize(checklistResponse.data, [ChecklistSchema])
            dispatch(ENTITY_UPDATED(gruposData.entities))
            dispatch(ENTITY_UPDATED(checklistData.entities))
            const navegacao = prepararNavegacao(gruposResponse, gruposData)
            dispatch(ON_LOAD_SUCCESS({
                currents: navegacao,
                grupos: gruposData.result,
                checklists: checklistData.result
            }))
        } catch (err) {
            dispatch(ON_LOAD_ERROR(err))
        }
    }
}

export function grupoSelecionado(id, index, currents, grupos) {
    return async (dispatch) => {

        const result = []

        for (let i = 0; i <= index; i++) {
            let current = currents[i];
            if (i < index) {
                result.push(current)
            } else if (i === index) {
                result.push({
                    selected: id,
                    title: current.title,
                    itens: current.itens
                })
            }
        }

        const pai = _.find(grupos, { '_id': id })

        const subResult = _
            .chain(grupos)
            .filter(g => {
                return g.grupo && g.grupo._id === id
            })
            .map('_id')
            .value()

        if (subResult.length > 0) {
            let selected = _.find(grupos, { _id: id })
            result.push({
                title: pai.nome,
                selected: null,
                itens: subResult
            })
        }

        dispatch(loadElementos(id))
        dispatch(GRUPO_SELECTED(id))
        dispatch(CURRENT_CHANGED(result))
    }
}

export function loadElementos(grupoId) {
    return async (dispatch) => {
        try {
            dispatch(LOAD_GRUPO_START())
            const result = await obterTodosElementos(grupoId)
            dispatch(LOAD_GRUPO_SUCCESS(result.body))
        } catch (error) {
            dispatch(LOAD_GRUPO_ERROR())
        }
    }
}