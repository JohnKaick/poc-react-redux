import { connect } from 'react-redux'

import {
    DiarioRegistroSchema
} from './../../module/schemas'

import { desnormalizar } from './../../../../module/selectors'

import {
    load,
} from './actions'

const stateToProps = (state) => {
    const view = state.features.diarios.views.diarios
    return {
        projetoAtual: state.session.projetoAtual,
        diarios: desnormalizar([DiarioRegistroSchema], state, view.diarios) || [],
        diario: view.diario|| {},
        carregando: false
    }
}

const dispatchToProps = (dispatch) => {
    return {
        load: (projetoId) => {
            dispatch(load(projetoId))
        },
    }
}

export default (container) => {
    return connect(stateToProps, dispatchToProps)(container)
}