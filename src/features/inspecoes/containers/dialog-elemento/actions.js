import { normalize } from 'normalizr'
import emitter from './../../../../module/globals/emitter'
import { MdElementoSchema } from './../../module/schemas'
import { ENTITY_UPDATED } from './../../../../module/constants'

import {
    CLEAN, ON_CHANGE,
    ON_LOAD_START, ON_LOAD_SUCCESS, ON_LOAD_ERROR,
    ON_SALVAR_START, ON_SALVAR_SUCCESS, ON_SALVAR_ERROR
} from './constants'

import {
    cadastrar as cadastrarElementoApi,
} from './../../module/api/md-elemento'

export function clean() {
    return dispatch => {
        dispatch(CLEAN())
    }
}

export function adicionar(elemento) {
    return async dispatch => {
        try {
            dispatch(ON_SALVAR_START())
            const response = await cadastrarElementoApi(elemento)
            const data = normalize(response.data, MdElementoSchema)
            dispatch(ENTITY_UPDATED(data.entities))
            dispatch(ON_SALVAR_SUCCESS(response.data))
            dispatch(CLEAN())
            emitter.emit('mensagem-sucesso', 'Elemento cadastrado com sucesso.')
            emitter.emit('md-elemento-adicionado', response.data._id)
            emitter.emit('dialog-elemento-close')
        } catch (err) {
            dispatch(ON_SALVAR_ERROR(err))
        }
    }
}

export function change(name, value) {
    return dispatch => {
        dispatch(ON_CHANGE({ name, value }))
    }
}