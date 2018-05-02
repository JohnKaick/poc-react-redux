import { createAction } from 'redux-actions'

export const USUARIO_LOGADO = createAction("root/USUARIO_LOGADO")
export const EMPRESA_CRIADA = createAction("root/EMPRESA_CRIADA")
export const ENTITY_UPDATED = createAction("root/ENTITY_UPDATED")
export const ON_ERROR = createAction("root/ON_ERROR")
export const AVATAR_UPDATED = createAction("root/AVATAR_UPDATED")
export const APP_EXIT = createAction("root/APP_EXIT")

export const PROJETO_ATUAL = createAction("root/PROJETO_ATUAL")

export const PROJETO_ATIVAR_START = createAction("root/PROJETO_ATIVAR_START")
export const PROJETO_ATIVAR_SUCCESS = createAction("root/PROJETO_ATIVAR_SUCCESS")
export const PROJETO_ATIVAR_ERROR = createAction("root/PROJETO_ATIVAR_ERROR")




