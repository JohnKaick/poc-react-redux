import { connect } from 'react-redux'
import { selecionarProjeto } from './../../module/selectors'
import { load, desconectar } from './actions'

const stateToProps = (state) => {
    return {
        session: state.session,
        projeto: selecionarProjeto(state, state.session.projetoAtual),
        projetoAtual: state.session.projetoAtual,
        modulo: state.session.modulo
    }
}

const dispatchToProps = (dispatch) => {
    return {
        load: (projetoId) => {
            dispatch(load(projetoId))
        },
        desconectar: () => {
            dispatch(desconectar())
        }
    }
}

export default (container) => {
    return connect(stateToProps, dispatchToProps)(container)
}