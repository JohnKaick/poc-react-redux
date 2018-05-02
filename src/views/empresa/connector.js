import { connect } from 'react-redux'
import { load, projetoChange } from './actions'

const stateToProps = state => {
    const view = state.views.empresa
    return {
        empresa: view.empresa,
        usuarios: view.usuarios,
        carregando: view.carregando,
        erro: view.erro
    }
}

const dispatchToProps = dispatch => {
    return {
        onLoad() {
            dispatch(load())
        },
        onProjetoChange(name, value) {
            dispatch(projetoChange(name, value))
        }
    }
}

export default (container) => {
    return connect(stateToProps, dispatchToProps)(container)
}