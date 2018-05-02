import { normalize } from 'normalizr'

import history from './../../module/globals/history'

import { ENTITY_UPDATED, APP_EXIT } from './../../module/constants'

import { ProjetoSchema } from './../../module/schemas'

import { obterProjeto } from './../../module/api/projeto'

export function load(projetoId) {
    return async dispatch => {
        try {
            const response = await obterProjeto(projetoId)
            const data = normalize(response.data, ProjetoSchema)
            dispatch(ENTITY_UPDATED(data.entities))
        } catch (err) {
            console.log(err)
        }
    }
}

export function desconectar() {
    return dispatch => {
        dispatch(APP_EXIT())
        localStorage.removeItem('credentials')
        history.push('/login')
    }
}