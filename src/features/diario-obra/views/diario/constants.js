import { createAction } from 'redux-actions'

export const LOAD_DIARIO_START = createAction('features/diario-obra/views/diario/LOAD_DIARIO_START')
export const LOAD_DIARIO_SUCCESS = createAction('features/diario-obra/views/diario/LOAD_DIARIO_SUCCESS')
export const LOAD_DIARIO_ERROR = createAction('features/diario-obra/views/diario/LOAD_DIARIO_ERROR')

export const LOAD_ITENS_START = createAction('features/diario-obra/views/diario/LOAD_ITENS_START')
export const LOAD_ITENS_SUCCESS = createAction('features/diario-obra/views/diario/LOAD_ITENS_SUCCESS')
export const LOAD_ITENS_ERROR = createAction('features/diario-obra/views/diario/LOAD_ITENS_ERROR')

export const LOAD_PARTICIPANTES_START = createAction('features/atas/views/ata/LOAD_PARTICIPANTES_START')
export const LOAD_PARTICIPANTES_SUCCESS = createAction('features/atas/views/ata/LOAD_PARTICIPANTES_SUCCESS')
export const LOAD_PARTICIPANTES_ERROR = createAction('features/atas/views/ata/LOAD_PARTICIPANTES_ERROR')
