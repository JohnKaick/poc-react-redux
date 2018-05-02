import { createAction } from 'redux-actions'

export const ON_LOAD_START = createAction('features/arquivos/views/arquivos/ON_LOAD_START')
export const ON_LOAD_SUCCESS = createAction('features/arquivos/views/arquivos/ON_LOAD_SUCCESS')
export const ON_LOAD_ERROR = createAction('features/arquivos/views/arquivos/ON_LOAD_ERROR')

export const ON_GRUPO_SELECTED = createAction('features/arquivos/views/arquivos/ON_GRUPO_SELECTED')

export const OBTER_ARQUIVOS_START = createAction('features/arquivos/views/arquivos/OBTER_ARQUIVOS_START')
export const OBTER_ARQUIVOS_SUCCESS = createAction('features/arquivos/views/arquivos/OBTER_ARQUIVOS_SUCCESS')
export const OBTER_ARQUIVOS_ERROR = createAction('features/arquivos/views/arquivos/OBTER_ARQUIVOS_ERROR')