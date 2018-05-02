import { connect } from 'react-redux'

import {
    AtaRegistroSchema
} from './../../module/schemas'

import { desnormalizar } from './../../../../module/selectors'

import {
    load,
} from './actions'

const stateToProps = (state) => {
    const view = state.features.atas.views.atas
    return {
        projetoAtual: state.session.projetoAtual,
        atas: desnormalizar([AtaRegistroSchema], state, view.atas) || [],
        ata: view.ata || {},
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