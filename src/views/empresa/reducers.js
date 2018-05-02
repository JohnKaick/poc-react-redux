import {
    onLoadStart, onLoadDone, onProjetoChange, onError
} from './actions'

const defaultState = {
    empresa: null,
    usuarios: [],
    carregando: false,
    erro: null
}

export default function (state = defaultState, action) {
    switch (action.type) {
        case onLoadStart:
            return {
                ...state,
                carregando: true,
                erro: null
            }
        case onLoadDone:
            return {
                ...state,
                carregando: false,
                erro: null,
                empresa: action.empresa,
                usuarios: action.usuarios
            }
        case onError:
            return {
                ...state,
                carregando: false,
                erro: action.erro
            }
        case onProjetoChange:
            return {
                ...state,
                empresa: {
                    ...state.empresa,
                    [action.name]: action.value
                }
            }
        default:
            return state
    }
}