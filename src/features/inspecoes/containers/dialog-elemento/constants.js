import { createAction } from 'redux-actions'

export const CLEAN = createAction('features/inspecao/containers/dialog-elemento/CLEAN')
export const ON_CHANGE = createAction('features/inspecao/containers/dialog-elemento/ON_CHANGE')

export const ON_SALVAR_START = createAction('features/inspecao/containers/dialog-elemento/ON_SALVAR_START')
export const ON_SALVAR_SUCCESS = createAction('features/inspecao/containers/dialog-elemento/ON_SALVAR_SUCCESS')
export const ON_SALVAR_ERROR = createAction('features/inspecao/containers/dialog-elemento/ON_SALVAR_ERROR')