import { createAction } from 'redux-actions'

export const LOAD_ANALISE_START = createAction('features/analise-projeto/views/analise/LOAD_ANALISE_START')
export const LOAD_ANALISE_SUCCESS = createAction('features/analise-projeto/views/analise/LOAD_ANALISE_SUCCESS')
export const LOAD_ANALISE_ERROR = createAction('features/analise-projeto/views/analise/LOAD_ANALISE_ERROR')

export const LOAD_PARTICIPANTES_START = createAction('features/analise-projeto/views/analise/LOAD_PARTICIPANTES_START')
export const LOAD_PARTICIPANTES_SUCCESS = createAction('features/analise-projeto/views/analise/LOAD_PARTICIPANTES_SUCCESS')
export const LOAD_PARTICIPANTES_ERROR = createAction('features/analise-projeto/views/analise/LOAD_PARTICIPANTES_ERROR')

export const LOAD_ITENS_START = createAction('features/analise-projeto/views/analise/LOAD_ITENS_START')
export const LOAD_ITENS_SUCCESS = createAction('features/analise-projeto/views/analise/LOAD_ITENS_SUCCESS')
export const LOAD_ITENS_ERROR = createAction('features/analise-projeto/views/analise/LOAD_ITENS_ERROR')