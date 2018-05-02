import { connect } from 'react-redux'

import {
    DisciplinaSchema
} from './../../module/schemas'

import { desnormalizar } from './../../../../module/selectors'

import {
    load, disciplinaSelecionada
} from './actions'

const stateToProps = (state) => {
    const view = state.features.inspecoes.views.padroesDisciplinas
    return {
        projetoAtual: state.session.projetoAtual,
        disciplinas: desnormalizar([DisciplinaSchema], state, view.disciplinas) || [],
        disciplina: view.disciplina || null,
        carregando: false
    }
}

const dispatchToProps = (dispatch) => {
    return {
        load: (projetoId) => {
            dispatch(load(projetoId))
        },
        disciplinaSelecionada: (disciplina) => {
            dispatch(disciplinaSelecionada(disciplina))
        },
    }
}

export default (container) => {
    return connect(stateToProps, dispatchToProps)(container)
}