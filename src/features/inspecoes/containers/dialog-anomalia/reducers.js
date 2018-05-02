import Immutable from 'seamless-immutable'
import { handleActions } from 'redux-actions'

import {
    CLEAN,
    ON_CHANGE, ON_CHANGE_GRAVIDADE, ADD_GRAVIDADE,
    ON_LOAD_START, ON_LOAD_SUCCESS, ON_LOAD_ERROR,
    ON_SALVAR_START, ON_SALVAR_SUCCESS, ON_SALVAR_ERROR
} from './constants'

const defaultState = Immutable({
    id: null,
    exibicao: null,
    descritivo: null,
    caracteristica: null,
    questao: null,
    diagnostico: null,
    gravidades: [],
    iniciado: false,
    carregando: false,
    erro: null
})

export default handleActions({

    [CLEAN]: (state, { payload }) => {
        return state.merge({
            id: null,
            elementoId: null,
            exibicao: null,
            descritivo: null,
            caracteristica: null,
            questao: null,
            diagnostico: null,
            gravidades: [],
            iniciado: false,
            carregando: false,
            erro: null
        })
    },

    [ON_CHANGE]: (state, { payload }) => {
        return state.merge({
            [payload.name]: payload.value
        })
    },

    [ON_CHANGE_GRAVIDADE]: (state, { payload }) => {
        return state.merge({
            gravidades: state.gravidades.map((gravidade, i) => {
                if (i === payload.index) {
                    return Object.assign({}, gravidade, {
                        [payload.name]: payload.value
                    })
                } else {
                    return Object.assign({}, gravidade)
                }
            })
        })
    },

    [ADD_GRAVIDADE]: (state, { payload }) => {
        return state.merge({
            gravidades: state.gravidades.concat([{ nome: '', g: 5, u: 5, t: 5 }])
        })
    },

    [ON_LOAD_START]: (state, { payload }) => {
        return state.merge({
            id: payload.anomaliaId,
            elementoId: payload.elementoId,
            iniciado: false,
            carregando: true
        })
    },

    [ON_LOAD_SUCCESS]: (state, { payload }) => {
        return state.merge({
            id: payload._id,
            exibicao: payload.exibicao,
            descritivo: payload.descritivo,
            caracteristica: payload.caracteristica,
            questao: payload.questao,
            diagnostico: payload.diagnostico,
            gravidades: payload.gravidades || [],
            iniciado: true,
            carregando: false,
            erro: null
        })
    },

    [ON_LOAD_ERROR]: (state, { payload }) => {
        return state.merge({
            carregando: false,
            erro: payload
        })
    },

    [ON_SALVAR_START]: (state, { payload }) => {
        return state.merge({

        })
    },
    [ON_SALVAR_SUCCESS]: (state, { payload }) => {
        return state.merge({

        })
    },
    [ON_SALVAR_ERROR]: (state, { payload }) => {
        return state.merge({

        })
    }

}, defaultState)