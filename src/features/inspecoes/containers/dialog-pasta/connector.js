import { connect } from 'react-redux'

import { load, adicionar, alterar, deletar, change } from './actions'

const stateToProps = (state) => {
    const view = state.features.inspecoes.containers.dialogPasta
    return {
        id: view.id,
        nome: view.nome,
        carregando: view.carregando,
        erro: view.erro
    }
}

const dispatchToProps = (dispatch) => {
    return {
        load: (pastaId) => {
            dispatch(load(pastaId))
        },
        adicionar: (pasta) => {
            dispatch(adicionar(pasta))
        },
        alterar: (pasta) => {
            dispatch(alterar(pasta))
        },
        deletar: (pastaId) => {
            dispatch(deletar(pastaId))
        },
        change: (e, { name, value }) => {
            dispatch(change(name, value))
        }
    }
}

export default (container) => {
    return connect(stateToProps, dispatchToProps)(container)
}