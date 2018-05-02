import { createAction } from 'redux-actions'

export const ON_LOAD_START = createAction('features/inspecao/views/elementos/ON_LOAD_START')
export const ON_LOAD_SUCCESS = createAction('features/inspecao/views/elementos/ON_LOAD_SUCCESS')
export const ON_LOAD_ERROR = createAction('features/inspecao/views/elementos/ON_LOAD_ERROR')

export const GRUPO_SELECTED = createAction('features/inspecao/views/elementos/GRUPO_SELECTED')
export const CURRENT_CHANGED = createAction('features/inspecao/views/elementos/CURRENT_CHANGED')

export const LOAD_GRUPO_START = createAction('features/inspecao/views/elementos/LOAD_GRUPO_START')
export const LOAD_GRUPO_SUCCESS = createAction('features/inspecao/views/elementos/LOAD_GRUPO_SUCCESS')
export const LOAD_GRUPO_ERROR = createAction('features/inspecao/views/elementos/LOAD_GRUPO_ERROR')