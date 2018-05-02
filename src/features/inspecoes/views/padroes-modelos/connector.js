import { connect } from 'react-redux'

import {
    DisciplinaSchema, MdPastaSchema, MdCategoriaSchema
} from './../../module/schemas'

import { desnormalizar } from './../../../../module/selectors'

import {
    load, disciplinaSelecionada, pastaSelecionada, categoriaSelecionada, carregarPastas, carregarCategorias
} from './actions'

const stateToProps = (state) => {
    const view = state.features.inspecoes.views.padroesModelos
    return {
        disciplinas: desnormalizar([DisciplinaSchema], state, view.disciplinas) || [],
        disciplina: view.disciplina,
        pastas: desnormalizar([MdPastaSchema], state, view.pastas) || [],
        pasta: view.pasta,
        categorias: desnormalizar([MdCategoriaSchema], state, view.categorias) || [],
        categoria: view.categoria
    }
}

const dispatchToProps = (dispatch) => {
    return {
        load() {
            dispatch(load())
        },
        disciplinaSelecionada(disciplinaId) {
            dispatch(disciplinaSelecionada(disciplinaId))
        },
        pastaSelecionada(pastaId) {
            dispatch(pastaSelecionada(pastaId))
        },
        categoriaSelecionada(categoriaId) {
            dispatch(categoriaSelecionada(categoriaId))
        },
        carregarPastas(disciplinaId) {
            dispatch(carregarPastas(disciplinaId))
        },
        carregarCategorias(disciplinaId) {
            dispatch(carregarCategorias(disciplinaId))
        }
    }
}

export default (container) => {
    return connect(stateToProps, dispatchToProps)(container)
}