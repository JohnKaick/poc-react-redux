import { connect } from 'react-redux'

import { ApRelatorioSchema } from './../../module/schemas'

import { desnormalizar } from './../../../../module/selectors'

import {
    load,
    analiseSelecionado,
} from './actions'

const stateToProps = (state) => {
    const view = state.features.analises.views.analises
    return {
        projetoAtual: state.session.projetoAtual,
        analises: desnormalizar([ApRelatorioSchema], state, view.analises) || [],
        analise: view.analise || {},
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