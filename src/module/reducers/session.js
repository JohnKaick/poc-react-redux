import axios from 'axios'
import Immutable from 'seamless-immutable'
import { handleActions } from 'redux-actions'
import globals from './../globals'

import {
    USUARIO_LOGADO,
    EMPRESA_CRIADA,
    AVATAR_UPDATED,
    PROJETO_ATUAL,
    APP_EXIT
} from './../constants'

const defaultState = Immutable({
    conectado: false,
    token: null,
    permissoes: [],
    usuario: null,
    projetoAtual: null,
    modulo: null
})

const mergeState = (state, data) => {
    let newState = state.merge(data, { deep: true })
    globals.session = newState
    return newState
}

export default handleActions({
    [USUARIO_LOGADO]: (state, { payload }) => {
        axios.defaults.headers.common['Authorization'] = payload.token
        return mergeState(state, {
            conectado: true,
            token: payload.token,
            permissoes: payload.permissoes,
            usuario: payload.usuario
        })
    },
    [EMPRESA_CRIADA]: (state, { payload }) => {
        return mergeState(state, {
            usuario: {
                empresa: payload.id
            }
        })
    },
    [AVATAR_UPDATED]: (state, { payload }) => {
        let usuario = {...this.state.usuario}
        usuario.avatar = payload
        return mergeState(state, {
            usuario
        })
    },
    [APP_EXIT]: (state, { payload }) => {
        return mergeState(state,
            defaultState
        )
    },
    [PROJETO_ATUAL]: (state, { payload }) => {
        return mergeState(state, {
            projetoAtual: payload.projeto,
            modulo: payload.modulo,
            rotas: payload.rotas
        })
    }
}, defaultState)