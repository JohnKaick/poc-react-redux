import { connect } from 'react-redux'

import { ChecklistSchema, ElementoAnomaliaSchema } from './../../module/schemas'

import { desnormalizar } from './../../../../module/selectors'

import { load, checklistSelected } from './actions'

const stateToProps = (state) => {
    const view = state.features.inspecoes.views.vistorias
    return {
        checklists: desnormalizar([ChecklistSchema], state, view.checklists) || [],
        elementos: desnormalizar([ElementoAnomaliaSchema], state, view.elementos) || [],
        projetoAtual: state.session.projetoAtual,
        carregando: view.carregando
    }
}

const dispatchToProps = (dispatch) => {
    return {
        load: (projetoId) => {
            dispatch(load(projetoId))
        },
        checklistSelected: (checklistId) => {
            dispatch(checklistSelected(checklistId))
        }
    }
}

export default (container) => {
    return connect(stateToProps, dispatchToProps)(container)
}