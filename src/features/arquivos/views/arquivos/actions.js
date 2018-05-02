import { normalize } from 'normalizr'
import { ArquivoSchema } from './../../module/schemas'
import globals from './../../../../module/globals'
import { obterTodos as obterArquivosApi, download, downloadMultiplos } from './../../module/api/arquivo'
import {
    ON_LOAD_START, ON_LOAD_SUCCESS, ON_LOAD_ERROR,
    OBTER_ARQUIVOS_START, OBTER_ARQUIVOS_SUCCESS, OBTER_ARQUIVOS_ERROR,
    ON_GRUPO_SELECTED
} from './constants'
import {
    ENTITY_UPDATED
} from './../../../../module/constants'

export function load(projetoId) {
    return async (dispatch) => {
        try {
            dispatch(ON_LOAD_START())
            dispatch(ON_LOAD_SUCCESS())
        } catch (err) {
            dispatch(ON_LOAD_ERROR(err))
        }
    }
}

export function grupoSelecionado(pasta, grupo) {
    return async (dispatch) => {
        dispatch(ON_GRUPO_SELECTED({
            pasta, grupo
        }))
        dispatch(obterArquivos(grupo))
    }
}

export function obterArquivos(grupoId) {
    return async (dispatch) => {
        try {
            dispatch(OBTER_ARQUIVOS_START())
            const response = await obterArquivosApi(grupoId)
            const data = normalize(response.data, [ArquivoSchema])
            dispatch(ENTITY_UPDATED(data.entities))
            dispatch(OBTER_ARQUIVOS_SUCCESS(data.result))
        } catch (err) {
            dispatch(OBTER_ARQUIVOS_ERROR(err))
        }
    }
}

export function onDownload(revisaoId) {
    return async (dispatch) => {
        window.location = download(revisaoId)
    }
}

export function onDownloadGrupo(grupoId, tipos) {
    return async (dispatch) => {
        window.location = downloadMultiplos(grupoId, tipos)
    }
}