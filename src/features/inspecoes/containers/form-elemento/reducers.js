import Immutable from 'seamless-immutable'
import { handleActions, combineActions } from 'redux-actions'

import {
    ON_CHANGE,
    ANOMALIA_SELECIONADA,
    LOAD_ELEMENTO_START,
    LOAD_ELEMENTO_SUCCESS,
    LOAD_ELEMENTO_ERROR,
    ADD_ELEMENTO_START,
    ADD_ELEMENTO_SUCCESS,
    ADD_ELEMENTO_ERROR,
    UPDATE_ELEMENTO_START,
    UPDATE_ELEMENTO_SUCCESS,
    UPDATE_ELEMENTO_ERROR,
    DELETE_ELEMENTO_START,
    DELETE_ELEMENTO_SUCCESS,
    DELETE_ELEMENTO_ERROR
} from './constants'

const defaultState = Immutable({
    disciplina: null,
    pasta: null,
    elemento: null,
    categoria: '',
    descritivo: '',
    disciplina: '',
    metodo: '',
    nome: '',
    pasta: '',
    pesoGut: '',
    prefix: '',
    vidaUtil: '',
    anomalia: null,
    anomalias: [],
    iniciado: false,
    carregando: false,
    erro: null
})

export default handleActions({

    [ON_CHANGE]: (state, { payload }) => {
        return state.merge({
            [payload.name]: payload.value
        })
    },

    [ANOMALIA_SELECIONADA]: (state, { payload }) => {
        return state.merge({
            anomalia: payload
        })
    },

    [LOAD_ELEMENTO_START]: (state, { payload }) => {
        return state.merge({
            disciplina: payload.disciplinaId,
            pasta: payload.pastaId,
            elemento: payload.elementoId,
            iniciado: false,
            carregando: true
        })
    },

    [LOAD_ELEMENTO_SUCCESS]: (state, { payload }) => {
        return state.merge({
            categoria: payload.categoria,
            descritivo: payload.descritivo,
            disciplina: payload.disciplina,
            metodo: payload.metodo,
            nome: payload.nome,
            pasta: payload.pasta,
            pesoGut: payload.pesoGut,
            prefix: payload.prefix,
            vidaUtil: payload.vidaUtil,
            anomalias: payload.anomalias.map(a => a._id),
            carregando: false,
            iniciado: true
        })
    },

    [LOAD_ELEMENTO_ERROR]: (state, { payload }) => {
        return state.merge({
            carregando: false,
            erro: payload
        })
    }

}, defaultState)