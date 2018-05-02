import { createAction } from 'redux-actions'

export const CLEAN = createAction('features/inspecao/containers/dialog-anomalia/CLEAN')

export const ON_CHANGE = createAction('features/inspecao/containers/dialog-anomalia/ON_CHANGE')
export const ON_CHANGE_GRAVIDADE = createAction('features/inspecao/containers/dialog-anomalia/ON_CHANGE_GRAVIDADE')
export const ADD_GRAVIDADE = createAction('features/inspecao/containers/dialog-anomalia/ADD_GRAVIDADE')

export const ON_LOAD_START = createAction('features/inspecao/containers/dialog-anomalia/ON_LOAD_START')
export const ON_LOAD_SUCCESS = createAction('features/inspecao/containers/dialog-anomalia/ON_LOAD_SUCCESS')
export const ON_LOAD_ERROR = createAction('features/inspecao/containers/dialog-anomalia/ON_LOAD_ERROR')

export const ON_SALVAR_START = createAction('features/inspecao/containers/dialog-anomalia/ON_SALVAR_START')
export const ON_SALVAR_SUCCESS = createAction('features/inspecao/containers/dialog-anomalia/ON_SALVAR_SUCCESS')
export const ON_SALVAR_ERROR = createAction('features/inspecao/containers/dialog-anomalia/ON_SALVAR_ERROR')

export const ON_DELETAR_START = createAction('features/inspecao/containers/dialog-anomalia/ON_DELETAR_START')
export const ON_DELETAR_SUCCESS = createAction('features/inspecao/containers/dialog-anomalia/ON_DELETAR_SUCCESS')
export const ON_DELETAR_ERROR = createAction('features/inspecao/containers/dialog-anomalia/ON_DELETAR_ERROR')