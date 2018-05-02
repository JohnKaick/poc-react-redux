import { connect } from 'react-redux'

import { ApRelatorioSchema, ApArquivoSchema, ApParticipanteSchema, ApItemSchema, ApReplicaSchema } from './../../module/schemas'

import { desnormalizar } from './../../../../module/selectors'

import { carregarAnalise, carregarParticipantes, carregarItens } from './actions'

const stateToProps = (state) => {
    const view = state.features.analises.views.analise
    return {
        projeto: state.session.projetoAtual,
        analise: desnormalizar(ApRelatorioSchema, state, view.analise),
        participantes: desnormalizar([ApParticipanteSchema], state, view.participantes),
        participante: '',
        itens: desnormalizar([ApItemSchema], state, view.itens) || [],
        item: '',
        carregando: false
    }
}

const dispatchToProps = (dispatch) => {
    return {
        carregarAnalise: (analiseId) => {
            dispatch(carregarAnalise(analiseId))
        },
        carregarParticipantes: (analiseId) => {
            dispatch(carregarParticipantes(analiseId))
        },
        carregarItens: (analiseId) => {
            dispatch(carregarItens(analiseId))
        },
    }
}

export default (container) => {
    return connect(stateToProps, dispatchToProps)(container)
}