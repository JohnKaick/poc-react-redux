import { connect } from 'react-redux'

import { clean, adicionar, change } from './actions'

const stateToProps = (state) => {
    const view = state.features.inspecoes.containers.dialogElemento
    return {
        categoria: view.categoria || '',
        descritivo: view.descritivo || '',
        metodo: view.metodo || '',
        nome: view.nome || '',
        pesoGut: view.pesoGut || 1,
        prefix: view.prefix || '',
        vidaUtil: view.vidaUtil || 10,
        carregando: view.carregando,
        erro: view.erro
    }
}

const dispatchToProps = (dispatch) => {
    return {
        clean: () => {
            dispatch(clean())
        },
        adicionar: (anomalia) => {
            dispatch(adicionar(anomalia))
        },
        change: (e, { name, value }) => {
            dispatch(change(name, value))
        }
    }
}

export default (container) => {
    return connect(stateToProps, dispatchToProps)(container)
}