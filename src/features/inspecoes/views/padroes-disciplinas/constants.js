import { createAction } from 'redux-actions'

export const LOAD_DISCIPLINAS_START = createAction('features/inspecao/views/padroesDisciplinas/LOAD_DISCIPLINAS_START')
export const LOAD_DISCIPLINAS_SUCCESS = createAction('features/inspecao/views/padroesDisciplinas/LOAD_DISCIPLINAS_SUCCESS')
export const LOAD_DISCIPLINAS_ERROR = createAction('features/inspecao/views/padroesDisciplinas/LOAD_DISCIPLINAS_ERROR')

export const DISCIPLINA_SELECTED = createAction('features/inspecao/views/padroesDisciplinas/DISCIPLINA_SELECTED')
