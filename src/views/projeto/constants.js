import { createAction } from 'redux-actions'

export const LOAD_START = createAction('root/views/projeto/LOAD_START')
export const LOAD_SUCCESS = createAction('root/views/projeto/LOAD_SUCCESS')
export const LOAD_ERROR = createAction('root/views/projeto/LOAD_ERROR')

export const UPLOAD_IMAGENS_START = createAction('root/views/projeto/UPLOAD_IMAGENS_START')
export const UPLOAD_IMAGENS_SUCCESS = createAction('root/views/projeto/UPLOAD_IMAGENS_SUCCESS')