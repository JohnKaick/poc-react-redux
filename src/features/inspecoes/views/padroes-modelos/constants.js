import { createAction } from 'redux-actions'

export const DISCIPLINA_SELECTED = createAction('features/inspecao/views/padroesModelos/DISCIPLINA_SELECTED')
export const PASTA_SELECTED = createAction('features/inspecao/views/padroesModelos/PASTA_SELECTED')
export const CATEGORIA_SELECTED = createAction('features/inspecao/views/padroesModelos/CATEGORIA_SELECTED')

export const LOAD_DISCIPLINAS_START = createAction('features/inspecao/views/padroesModelos/LOAD_DISCIPLINAS_START')
export const LOAD_DISCIPLINAS_SUCCESS = createAction('features/inspecao/views/padroesModelos/LOAD_DISCIPLINAS_SUCCESS')
export const LOAD_DISCIPLINAS_ERROR = createAction('features/inspecao/views/padroesModelos/LOAD_DISCIPLINAS_ERROR')

export const LOAD_PASTAS_START = createAction('features/inspecao/views/padroesModelos/LOAD_PASTAS_START')
export const LOAD_PASTAS_SUCCESS = createAction('features/inspecao/views/padroesModelos/LOAD_PASTAS_SUCCESS')
export const LOAD_PASTAS_ERROR = createAction('features/inspecao/views/padroesModelos/LOAD_PASTAS_ERROR')

export const LOAD_CATEGORIAS_START = createAction('features/inspecao/views/padroesModelos/LOAD_CATEGORIAS_START')
export const LOAD_CATEGORIAS_SUCCESS = createAction('features/inspecao/views/padroesModelos/LOAD_CATEGORIAS_SUCCESS')
export const LOAD_CATEGORIAS_ERROR = createAction('features/inspecao/views/padroesModelos/LOAD_CATEGORIAS_ERROR')

