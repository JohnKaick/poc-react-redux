import { normalize } from 'normalizr'
import { createAction } from 'redux-actions'

import { ENTITY_UPDATED } from './../../../../module/constants'
import { PastaSchema, GrupoSchema } from './../../module/schemas'
import { obterPorProjeto as obterPastas } from './../../module/api/pasta'
import { obterTodos as obterGrupos } from './../../module/api/grupo'

export const LOAD_START = createAction('features/arquivos/containers/selecionar-pasta/LOAD_START')
export const LOAD_DONE = createAction('features/arquivos/containers/selecionar-pasta/LOAD_DONE')
export const GET_GRUPOS_START = createAction('features/arquivos/containers/selecionar-pasta/GET_GRUPOS_START')
export const GET_GRUPOS_DONE = createAction('features/arquivos/containers/selecionar-pasta/GET_GRUPOS_DONE')
export const SELECT_GRUPO = createAction('features/arquivos/containers/selecionar-pasta/SELECT_GRUPO')

export function load(projeto) {
    return async dispatch => {
        try {
            dispatch(LOAD_START())
            let response = await obterPastas(projeto)
            let data = await normalize(response.data, [PastaSchema])
            dispatch(ENTITY_UPDATED(data.entities))
            dispatch(LOAD_DONE(data.result))
        }
        catch (error) {
            dispatch(LOAD_DONE({ error }))
        }
    }
}

export function pastaSelecionada(pasta) {
    return async dispatch => {
        try {
            dispatch(GET_GRUPOS_START(pasta))
            let response = await obterGrupos(pasta)
            let data = await normalize(response.data, [GrupoSchema])
            dispatch(ENTITY_UPDATED(data.entities))
            dispatch(GET_GRUPOS_DONE(data.result))
        }
        catch (error) {
            dispatch(GET_GRUPOS_DONE({ error }))
        }
    }
}

export function grupoSelecionado(grupo) {
    return dispatch => {
        dispatch(SELECT_GRUPO(grupo))
    }
}