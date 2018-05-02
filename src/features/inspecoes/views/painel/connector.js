import { connect } from 'react-redux'

const stateToProps = (state) => {
    //const view = state.features.inspecoes.views.inspecoes
    return {
        projetoAtual: state.session.projetoAtual,
        carregando: false
    }
}

const dispatchToProps = (dispatch) => {
    return {
        load: (projetoId) => {
            
        }
    }
}

export default (container) => {
    return connect(stateToProps, dispatchToProps)(container)
}