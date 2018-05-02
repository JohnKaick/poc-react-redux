import { connect } from 'react-redux'

import { AtaRegistroSchema, AtaItemSchema, AtaParticipanteSchema } from './../../module/schemas'

import { desnormalizar } from './../../../../module/selectors'

import { carregarAta, carregarItens, carregarParticipantes } from './actions'

const stateToProps = (state) => {
    const view = state.features.atas.views.ata
    return {
        projeto: state.session.projetoAtual,
        ata: view.ata,
        itens: desnormalizar([AtaItemSchema], state, view.itens) || [],
        item: view.item,
        participantes: desnormalizar([AtaParticipanteSchema], state, view.participantes),
        participante: view.participante,
        carregando: false
    }
}

const dispatchToProps = (dispatch) => {
    return {
        carregarAta: (ataId) => {
            dispatch(carregarAta(ataId))
        },
        carregarItens: (ataId) => {
            dispatch(carregarItens(ataId))
        },
        carregarParticipantes: (ataId) => {
            dispatch(carregarParticipantes(ataId))
        },
    }
}

export default (container) => {
    return connect(stateToProps, dispatchToProps)(container)
}