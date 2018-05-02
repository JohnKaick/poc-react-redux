import { connect } from 'react-redux'

import { traduzirModelo } from './../../module/selectors'

import {
    load, onUploadImagens, onDeleteImagem
} from './actions'

const stateToProps = (state) => {
    const view = state.views.projeto
    return {
        projeto: traduzirModelo("projetos", state, view.result) || {},
        carregando: view.carregando
    }
}

const dispatchToProps = (dispatch) => {
    return {
        load: (projetoId) => {
            dispatch(load(projetoId))
        },
        onUploadImagens: (projetoId, files) => {
            dispatch(onUploadImagens(projetoId, files))
        },
        onDeleteImagem: (projetoId, imagemId) => {
            dispatch(onDeleteImagem(projetoId, imagemId))
        }
    }
}

export default (container) => {
    return connect(stateToProps, dispatchToProps)(container)
}