import { createAction } from 'redux-actions'

import emitter from './../../module/globals/emitter'

import {
    obterPerfil, salvarPerfil, uploadAvatar
} from './../../module/api/usuario'

export const onValueChange = createAction('views/perfil/ON-CHANGE')
export const onLoadStart = createAction('views/perfil/ON-LOAD-START')
export const onLoadDone = createAction('views/perfil/ON-LOAD-DONE')
export const onSaveStart = createAction('views/perfil/ON-SAVE-START')
export const onSaveDone = createAction('views/perfil/ON-SAVE-DONE')
export const onUploadAvatarStart = createAction('views/perfil/ON-UPLOAD-AVATAR-START')
export const onUploadAvatarDone = createAction('views/perfil/ON-UPLOAD-AVATAR-DONE')

export function onChange(name, value) {
    return dispatch => {
        dispatch(onValueChange({ name, value }))
    }
}

export function onLoad() {
    return dispatch => {
        dispatch(onLoadStart())
        obterPerfil().then(r => {
            dispatch(onLoadDone(r.data))
        }).catch(error => {
            dispatch(onLoadDone({ error }))
        })
    }
}

export function onSave(data) {
    return dispatch => {
        dispatch(onSaveStart())
        salvarPerfil(data).then(r => {
            emitter.emit('mensagem-sucesso', 'Dados pessoais atualizado com sucesso.')
            emitter.emit('perfil-load')
            dispatch(onSaveDone())
        }).catch(error => {
            dispatch(onSaveDone({ error }))
        })
    }
}

export function onUploadAvatar(file) {
    return dispatch => {
        dispatch(onUploadAvatarStart())
        uploadAvatar(file).then(r => {
            emitter.emit('mensagem-sucesso', 'Foto de perfil atualizada com sucesso.')
            emitter.emit('perfil-load')
            dispatch(onUploadAvatarDone(r.data))
        }).catch(error => {
            dispatch(onUploadAvatarDone({ error }))
        })
    }
}