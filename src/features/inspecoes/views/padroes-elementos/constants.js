import { createAction } from 'redux-actions'

// LOAD DA PÁGINA

export const FILTRAR_ELEMENTO = createAction('features/inspecao/views/padroes/FILTRAR_ELEMENTO')

export const DISCIPLINA_SELECIONADA = createAction('features/inspecao/views/padroes/DISCIPLINA_SELECIONADA')
export const PASTA_SELECIONADA = createAction('features/inspecao/views/padroes/PASTA_SELECIONADA')
export const ELEMENTO_SELECIONADO = createAction('features/inspecao/views/padroes/ELEMENTO_SELECIONADO')

export const LOAD_DISCIPLINAS_START = createAction('features/inspecao/views/padroes/LOAD_DISCIPLINAS_START')
export const LOAD_DISCIPLINAS_SUCCESS = createAction('features/inspecao/views/padroes/LOAD_DISCIPLINAS_SUCCESS')
export const LOAD_DISCIPLINAS_ERROR = createAction('features/inspecao/views/padroes/LOAD_DISCIPLINAS_ERROR')

export const LOAD_PASTAS_START = createAction('features/inspecao/views/padroes/LOAD_PASTAS_START')
export const LOAD_PASTAS_SUCCESS = createAction('features/inspecao/views/padroes/LOAD_PASTAS_SUCCESS')
export const LOAD_PASTAS_ERROR = createAction('features/inspecao/views/padroes/LOAD_PASTAS_ERROR')

export const LOAD_ELEMENTOS_START = createAction('features/inspecao/views/padroes/LOAD_ELEMENTOS_START')
export const LOAD_ELEMENTOS_SUCCESS = createAction('features/inspecao/views/padroes/LOAD_ELEMENTOS_SUCCESS')
export const LOAD_ELEMENTOS_ERROR = createAction('features/inspecao/views/padroes/LOAD_ELEMENTOS_ERROR')

// ANOMALIAS

export const ADD_ANOMALIA_START = createAction('features/inspecao/views/padroes/ADD_ANOMALIA_START')
export const ADD_ANOMALIA_SUCCESS = createAction('features/inspecao/views/padroes/ADD_ANOMALIA_SUCCESS')
export const ADD_ANOMALIA_ERROR = createAction('features/inspecao/views/padroes/ADD_ANOMALIA_ERROR')

export const UPDATE_ANOMALIA_START = createAction('features/inspecao/views/padroes/UPDATE_ANOMALIA_START')
export const UPDATE_ANOMALIA_SUCCESS = createAction('features/inspecao/views/padroes/UPDATE_ANOMALIA_SUCCESS')
export const UPDATE_ANOMALIA_ERROR = createAction('features/inspecao/views/padroes/UPDATE_ANOMALIA_ERROR')

export const DELETE_ANOMALIA_START = createAction('features/inspecao/views/padroes/DELETE_ANOMALIA_START')
export const DELETE_ANOMALIA_SUCCESS = createAction('features/inspecao/views/padroes/DELETE_ANOMALIA_SUCCESS')
export const DELETE_ANOMALIA_ERROR = createAction('features/inspecao/views/padroes/DELETE_ANOMALIA_ERROR')

// DISCIPLINAS

export const ADD_DISCIPLINA_START = createAction('features/inspecao/views/padroes/ADD_DISCIPLINA_START')
export const ADD_DISCIPLINA_SUCCESS = createAction('features/inspecao/views/padroes/ADD_DISCIPLINA_SUCCESS')
export const ADD_DISCIPLINA_ERROR = createAction('features/inspecao/views/padroes/ADD_DISCIPLINA_ERROR')

export const UPDATE_DISCIPLINA_START = createAction('features/inspecao/views/padroes/UPDATE_DISCIPLINA_START')
export const UPDATE_DISCIPLINA_SUCCESS = createAction('features/inspecao/views/padroes/UPDATE_DISCIPLINA_SUCCESS')
export const UPDATE_DISCIPLINA_ERROR = createAction('features/inspecao/views/padroes/UPDATE_DISCIPLINA_ERROR')

export const DELETE_DISCIPLINA_START = createAction('features/inspecao/views/padroes/DELETE_DISCIPLINA_START')
export const DELETE_DISCIPLINA_SUCCESS = createAction('features/inspecao/views/padroes/DELETE_DISCIPLINA_SUCCESS')
export const DELETE_DISCIPLINA_ERROR = createAction('features/inspecao/views/padroes/DELETE_DISCIPLINA_ERROR')

// PASTAS

export const ADD_PASTA_START = createAction('features/inspecao/views/padroes/ADD_PASTA_START')
export const ADD_PASTA_SUCCESS = createAction('features/inspecao/views/padroes/ADD_PASTA_SUCCESS')
export const ADD_PASTA_ERROR = createAction('features/inspecao/views/padroes/ADD_PASTA_ERROR')

export const UPDATE_PASTA_START = createAction('features/inspecao/views/padroes/UPDATE_PASTA_START')
export const UPDATE_PASTA_SUCCESS = createAction('features/inspecao/views/padroes/UPDATE_PASTA_SUCCESS')
export const UPDATE_PASTA_ERROR = createAction('features/inspecao/views/padroes/UPDATE_PASTA_ERROR')

export const DELETE_PASTA_START = createAction('features/inspecao/views/padroes/DELETE_PASTA_START')
export const DELETE_PASTA_SUCCESS = createAction('features/inspecao/views/padroes/DELETE_PASTA_SUCCESS')
export const DELETE_PASTA_ERROR = createAction('features/inspecao/views/padroes/DELETE_PASTA_ERROR')

// CATEGORIAS

export const ADD_CATEGORIA_START = createAction('features/inspecao/views/padroes/ADD_CATEGORIA_START')
export const ADD_CATEGORIA_SUCCESS = createAction('features/inspecao/views/padroes/ADD_CATEGORIA_SUCCESS')
export const ADD_CATEGORIA_ERROR = createAction('features/inspecao/views/padroes/ADD_CATEGORIA_ERROR')

export const UPDATE_CATEGORIA_START = createAction('features/inspecao/views/padroes/UPDATE_CATEGORIA_START')
export const UPDATE_CATEGORIA_SUCCESS = createAction('features/inspecao/views/padroes/UPDATE_CATEGORIA_SUCCESS')
export const UPDATE_CATEGORIA_ERROR = createAction('features/inspecao/views/padroes/UPDATE_CATEGORIA_ERROR')

export const DELETE_CATEGORIA_START = createAction('features/inspecao/views/padroes/DELETE_CATEGORIA_START')
export const DELETE_CATEGORIA_SUCCESS = createAction('features/inspecao/views/padroes/DELETE_CATEGORIA_SUCCESS')
export const DELETE_CATEGORIA_ERROR = createAction('features/inspecao/views/padroes/DELETE_CATEGORIA_ERROR')

// ANOMALIA GRUPOS

export const ADD_ANOMALIA_GRUPO_START = createAction('features/inspecao/views/padroes/ADD_ANOMALIA_GRUPO_START')
export const ADD_ANOMALIA_GRUPO_SUCCESS = createAction('features/inspecao/views/padroes/ADD_ANOMALIA_GRUPO_SUCCESS')
export const ADD_ANOMALIA_GRUPO_ERROR = createAction('features/inspecao/views/padroes/ADD_ANOMALIA_GRUPO_ERROR')

export const UPDATE_ANOMALIA_GRUPO_START = createAction('features/inspecao/views/padroes/UPDATE_ANOMALIA_GRUPO_START')
export const UPDATE_ANOMALIA_GRUPO_SUCCESS = createAction('features/inspecao/views/padroes/UPDATE_ANOMALIA_GRUPO_SUCCESS')
export const UPDATE_ANOMALIA_GRUPO_ERROR = createAction('features/inspecao/views/padroes/UPDATE_ANOMALIA_GRUPO_ERROR')

export const DELETE_ANOMALIA_GRUPO_START = createAction('features/inspecao/views/padroes/DELETE_ANOMALIA_GRUPO_START')
export const DELETE_ANOMALIA_GRUPO_SUCCESS = createAction('features/inspecao/views/padroes/DELETE_ANOMALIA_GRUPO_SUCCESS')
export const DELETE_ANOMALIA_GRUPO_ERROR = createAction('features/inspecao/views/padroes/DELETE_ANOMALIA_GRUPO_ERROR')