import { createAction } from 'redux-actions'

export const ON_LOAD_START = createAction('features/inspecao/views/inspecao/ON_LOAD_START')
export const ON_LOAD_SUCCESS = createAction('features/inspecao/views/inspecao/ON_LOAD_SUCCESS')
export const ON_LOAD_ERROR = createAction('features/inspecao/views/inspecao/ON_LOAD_ERROR')

export const ON_ELEMENTOS_START = createAction('features/inspecao/views/inspecao/ON_ELEMENTOS_START')
export const ON_ELEMENTOS_SUCCESS = createAction('features/inspecao/views/inspecao/ON_ELEMENTOS_SUCCESS')
export const ON_ELEMENTOS_ERROR = createAction('features/inspecao/views/inspecao/ON_ELEMENTOS_ERROR')