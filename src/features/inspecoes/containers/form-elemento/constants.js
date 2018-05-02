import { createAction } from 'redux-actions'

export const ON_LOAD = createAction('features/inspecao/containers/form-elemento/ON_LOAD')
export const ON_CHANGE = createAction('features/inspecao/containers/form-elemento/ON_CHANGE')
export const ANOMALIA_SELECIONADA = createAction('features/inspecao/containers/form-elemento/ANOMALIA_SELECIONADA')

export const LOAD_ELEMENTO_START = createAction('features/inspecao/containers/form-elemento/LOAD_ELEMENTO_START')
export const LOAD_ELEMENTO_SUCCESS = createAction('features/inspecao/containers/form-elemento/LOAD_ELEMENTO_SUCCESS')
export const LOAD_ELEMENTO_ERROR = createAction('features/inspecao/containers/form-elemento/LOAD_ELEMENTO_ERROR')

export const ADD_ELEMENTO_START = createAction('features/inspecao/containers/form-elemento/ADD_ELEMENTO_START')
export const ADD_ELEMENTO_SUCCESS = createAction('features/inspecao/containers/form-elemento/ADD_ELEMENTO_SUCCESS')
export const ADD_ELEMENTO_ERROR = createAction('features/inspecao/containers/form-elemento/ADD_ELEMENTO_ERROR')

export const UPDATE_ELEMENTO_START = createAction('features/inspecao/containers/form-elemento/UPDATE_ELEMENTO_START')
export const UPDATE_ELEMENTO_SUCCESS = createAction('features/inspecao/containers/form-elemento/UPDATE_ELEMENTO_SUCCESS')
export const UPDATE_ELEMENTO_ERROR = createAction('features/inspecao/containers/form-elemento/UPDATE_ELEMENTO_ERROR')

export const DELETE_ELEMENTO_START = createAction('features/inspecao/containers/form-elemento/DELETE_ELEMENTO_START')
export const DELETE_ELEMENTO_SUCCESS = createAction('features/inspecao/containers/form-elemento/DELETE_ELEMENTO_SUCCESS')
export const DELETE_ELEMENTO_ERROR = createAction('features/inspecao/containers/form-elemento/DELETE_ELEMENTO_ERROR')