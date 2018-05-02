import { connect } from 'react-redux'

import { load, adicionar, alterar, deletar, change } from './actions'

const stateToProps = (state) => {
    const view = state.features.inspecoes.containers.dialogCategoria
    return {
        id: view.id,
        nome: view.nome,
        carregando: view.carregando,
        erro: view.erro
    }
}

const dispatchToProps = (dispatch) => {
    return {
        load: (categoriaId) => {
            dispatch(load(categoriaId))
        },
        adicionar: (categoria) => {
            dispatch(adicionar(categoria))
        },
        alterar: (categoria) => {
            dispatch(alterar(categoria))
        },
        deletar: (categoriaId) => {
            dispatch(deletar(categoriaId))
        },
        change: (e, { name, value }) => {
            dispatch(change(name, value))
        }
    }
}

export default (container) => {
    return connect(stateToProps, dispatchToProps)(container)
}