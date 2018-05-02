import { createAction } from 'redux-actions'

export const LOAD_ATA_START = createAction('features/atas/views/ata/LOAD_ATA_START')
export const LOAD_ATA_SUCCESS = createAction('features/atas/views/ata/LOAD_ATA_SUCCESS')
export const LOAD_ATA_ERROR = createAction('features/atas/views/ata/LOAD_ATA_ERROR')

export const LOAD_ITENS_START = createAction('features/atas/views/ata/LOAD_ITENS_START')
export const LOAD_ITENS_SUCCESS = createAction('features/atas/views/ata/LOAD_ITENS_SUCCESS')
export const LOAD_ITENS_ERROR = createAction('features/atas/views/ata/LOAD_ITENS_ERROR')

export const LOAD_PARTICIPANTES_START = createAction('features/atas/views/ata/LOAD_PARTICIPANTES_START')
export const LOAD_PARTICIPANTES_SUCCESS = createAction('features/atas/views/ata/LOAD_PARTICIPANTES_SUCCESS')
export const LOAD_PARTICIPANTES_ERROR = createAction('features/atas/views/ata/LOAD_PARTICIPANTES_ERROR')
