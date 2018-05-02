import { connect } from 'react-redux'

import { DiarioRegistroSchema, DiarioItemSchema, DiarioParticipanteSchema } from './../../module/schemas'

import { desnormalizar } from './../../../../module/selectors'

import { carregarDiario, carregarItens, carregarParticipantes } from './actions'

const stateToProps = (state) => {
    const view = state.features.diarios.views.diario
    return {
        projeto: state.session.projetoAtual,
        diario: view.diario,
        itens: desnormalizar([DiarioItemSchema], state, view.itens) || [],
        item: view.item,
        participantes: desnormalizar([DiarioParticipanteSchema], state, view.participantes),
        participante: view.participante,
        carregando: false
    }
}

const dispatchToProps = (dispatch) => {
    return {
        carregarDiario: (diarioId) => {
            dispatch(carregarDiario(diarioId))
        },
        carregarItens: (diarioId) => {
            dispatch(carregarItens(diarioId))
        },
        carregarParticipantes: (diarioId) => {
            dispatch(carregarParticipantes(diarioId))
        },
    }
}

export default (container) => {
    return connect(stateToProps, dispatchToProps)(container)
}