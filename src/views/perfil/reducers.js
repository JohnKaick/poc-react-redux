import { handleActions } from 'redux-actions'

import {
    onValueChange,
    onLoadStart, onLoadDone,
    onSaveStart, onSaveDone,
    onUploadAvatarStart, onUploadAvatarDone
} from './actions'

const defaultState = {
    usuario: null,
    carregando: false,
    erro: null
}

export default handleActions({
    [onValueChange]: (state, { payload }) => {
        let usuario = { ...state.usuario }
        usuario[payload.name] = payload.value
        return { ...state, usuario }
    },
    [onLoadStart]: (state, { payload }) => {
        return {
            ...state,
            carregando: true
        }
    },
    [onLoadDone]: (state, { payload }) => {
        return {
            ...state,
            carregando: false,
            usuario: payload,
            erro: payload.error ? payload.error : null
        }
    },
    [onSaveStart]: (state, { payload }) => {
        return {
            ...state,
            carregando: true
        }
    },
    [onSaveDone]: (state, { payload }) => {
        return {
            ...state,
            carregando: false,
            erro: payload.error ? payload.error : null
        }
    },
    [onUploadAvatarStart]: (state, { payload }) => {
        return {
            ...state,
            carregando: true
        }
    },
    [onUploadAvatarDone]: (state, { payload }) => {
        let usuario = { ...state.usuario }
        usuario.avatar = payload.location
        return {
            ...state,
            usuario,
            carregando: false,
            erro: payload.error ? payload.error : null
        }
    }
}, defaultState)