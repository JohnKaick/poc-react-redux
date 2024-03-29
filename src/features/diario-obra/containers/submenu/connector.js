import { connect } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'

const stateToProps = (state) => {
    const view = state.features.diarios.views.diarios
    return {
        projeto: state.session.projetoAtual,
        carregando: false
    }
}

const dispatchToProps = (dispatch) => {
    return {
    }
}

export default (container) => {
    return connect(stateToProps, dispatchToProps)(container)
}