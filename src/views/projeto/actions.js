import { normalize } from 'normalizr'

import emitter from './../../module/globals/emitter'

import { ENTITY_UPDATED } from './../../module/constants'

import {
    LOAD_START, LOAD_SUCCESS, LOAD_ERROR, UPLOAD_IMAGENS_START, UPLOAD_IMAGENS_SUCCESS
} from './constants'

import { ProjetoSchema } from './../../module/schemas'

import { obterProjeto, inserirImagem, removerImagem } from './../../module/api/projeto'

export function load(projetoId) {
    return async dispatch => {
        try {
            dispatch(LOAD_START())
            const response = await obterProjeto(projetoId)
            const data = normalize(response.data, ProjetoSchema)
            dispatch(ENTITY_UPDATED(data.entities))
            dispatch(LOAD_SUCCESS(data.result))
        } catch (err) {
            dispatch(LOAD_ERROR(err))
        }
    }
}

export function onUploadImagens(projetoId, files) {
    return async dispatch => {
        dispatch(UPLOAD_IMAGENS_START())
        for (let file of files) {
            inserirImagem(projetoId, file).then(r => {
                emitter.emit('projeto-load')
                dispatch(UPLOAD_IMAGENS_SUCCESS(r.data))
            }).catch(error => {
                dispatch(UPLOAD_IMAGENS_SUCCESS({ error }))
            })
        }
    }
}

export function onDeleteImagem(projetoId, imagemId) {
    return async dispatch => {
        dispatch(UPLOAD_IMAGENS_START())
        removerImagem(projetoId, imagemId).then(r => {
            emitter.emit('projeto-load')
            dispatch(UPLOAD_IMAGENS_SUCCESS(r.data))
        }).catch(error => {
            dispatch(UPLOAD_IMAGENS_SUCCESS({ error }))
        })
    }
}