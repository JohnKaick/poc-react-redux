import { connect } from 'react-redux'

import {
    DisciplinaSchema,
    MdPastaSchema,
    MdElementoSchema
} from './../../module/schemas'

import { desnormalizar } from './../../../../module/selectors'

import {
    load,
    disciplinaSelecionada,
    pastaSelecionada,
    elementoSelecionado,
    loadElementos
} from './actions'

const stateToProps = (state) => {
    const view = state.features.inspecoes.views.padroesElementos
    return {
        projetoAtual: state.session.projetoAtual,
        disciplinas: desnormalizar([DisciplinaSchema], state, view.disciplinas),
        disciplina: view.disciplina,
        pastas: desnormalizar([MdPastaSchema], state, view.pastas),
        pasta: view.pasta,
        elementos: desnormalizar([MdElementoSchema], state, view.elementos),
        elemento: view.elemento,
        carregando: false
    }
}

const dispatchToProps = (dispatch) => {
    return {
        load: (projetoId) => {
            dispatch(load(projetoId))
        },
        disciplinaSelecionada: (disciplinaId) => {
            dispatch(disciplinaSelecionada(disciplinaId))
        },
        pastaSelecionada: (pastaId) => {
            dispatch(pastaSelecionada(pastaId))
        },
        elementoSelecionado: (elementoId) => {
            dispatch(elementoSelecionado(elementoId))
        },
        loadElementos: (pastaId) => {
            dispatch(loadElementos(pastaId))
        }
    }
}

export default (container) => {
    return connect(stateToProps, dispatchToProps)(container)
}