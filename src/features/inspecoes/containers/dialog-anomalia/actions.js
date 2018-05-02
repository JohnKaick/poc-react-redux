import { normalize } from 'normalizr'
import emitter from './../../../../module/globals/emitter'
import { MdElementoAnomaliaSchema } from './../../module/schemas'

import { ENTITY_UPDATED } from './../../../../module/constants'

import {
    CLEAN,
    ON_CHANGE, ON_CHANGE_GRAVIDADE, ADD_GRAVIDADE,
    ON_LOAD_START, ON_LOAD_SUCCESS, ON_LOAD_ERROR,
    ON_SALVAR_START, ON_SALVAR_SUCCESS, ON_SALVAR_ERROR,
    ON_DELETAR_START, ON_DELETAR_SUCCESS, ON_DELETAR_ERROR
} from './constants'

import {
    obter as obterAnomaliaApi,
    cadastrar as cadastrarAnomaliaApi,
    editar as editarAnomaliaApi,
    remover as deletarAnomaliaApi
} from './../../module/api/md-elemento-anomalia'

export function clean() {
    return dispatch => {
        dispatch(CLEAN())
    }
}

export function load(elementoId, anomaliaId) {
    return async dispatch => {
        try {
            dispatch(ON_LOAD_START({ elementoId, anomaliaId }))
            if (anomaliaId) {
                const response = await obterAnomaliaApi(anomaliaId)
                const data = normalize(response.data, MdElementoAnomaliaSchema)
                dispatch(ENTITY_UPDATED(data.entities))
                dispatch(ON_LOAD_SUCCESS(response.data))
            }
            else {
                dispatch(clean())
                dispatch(ON_LOAD_SUCCESS({}))
            }
        } catch (err) {
            dispatch(ON_LOAD_ERROR(err))
        }
    }
}

export function adicionar(anomalia) {
    return async dispatch => {
        try {
            dispatch(ON_SALVAR_START())
            const response = await cadastrarAnomaliaApi(anomalia)
            const data = normalize(response.data, MdElementoAnomaliaSchema)
            dispatch(ENTITY_UPDATED(data.entities))
            dispatch(ON_SALVAR_SUCCESS(response.data))
            emitter.emit('mensagem-sucesso', 'Anomalia cadastrada com sucesso.')
            emitter.emit('form-elemento-load')
            emitter.emit('dialog-anomalia-close')
        } catch (err) {
            dispatch(ON_SALVAR_ERROR(err))
        }
    }
}

export function alterar(anomalia) {
    return async dispatch => {
        try {
            dispatch(ON_SALVAR_START())
            const response = await editarAnomaliaApi(anomalia)
            const data = normalize(response.data, MdElementoAnomaliaSchema)
            dispatch(ENTITY_UPDATED(data.entities))
            dispatch(ON_SALVAR_SUCCESS(response.data))
            emitter.emit('mensagem-sucesso', 'Anomalia alterada com sucesso.')
            emitter.emit('form-elemento-load')
            emitter.emit('dialog-anomalia-close')
        } catch (err) {
            dispatch(ON_SALVAR_ERROR(err))
        }
    }
}

export function deletar(anomaliaId) {
    return async dispatch => {
        try {
            dispatch(ON_DELETAR_START())
            const response = await deletarAnomaliaApi(anomaliaId)
            dispatch(ON_DELETAR_SUCCESS())
            emitter.emit('mensagem-sucesso', 'Anomalia deletada com sucesso.')
            emitter.emit('form-elemento-load')
            emitter.emit('dialog-anomalia-close')
        } catch (err) {
            dispatch(ON_DELETAR_ERROR(err))
        }
    }
}

export function adicionarGravidade() {
    return dispatch => {
        dispatch(ADD_GRAVIDADE())
    }
}

export function change(name, value) {
    return dispatch => {
        dispatch(ON_CHANGE({ name, value }))
    }
}

export function changeGravidade(name, value, index) {
    return dispatch => {
        dispatch(ON_CHANGE_GRAVIDADE({ name, value, index }))
    }
}