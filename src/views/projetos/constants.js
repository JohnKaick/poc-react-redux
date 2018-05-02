import { createAction } from 'redux-actions'

export const ON_PESQUISA_CHANGE = createAction('root/views/projetos/ON_PESQUISA_CHANGE')
export const LOAD_START = createAction('root/views/projetos/LOAD_START')
export const LOAD_SUCCESS = createAction('root/views/projetos/LOAD_SUCCESS')
export const LOAD_ERROR = createAction('root/views/projetos/LOAD_ERROR')