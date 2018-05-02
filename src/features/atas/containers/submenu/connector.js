import { connect } from 'react-redux'

const stateToProps = (state) => {
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