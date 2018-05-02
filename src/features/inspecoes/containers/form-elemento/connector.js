import { connect } from 'react-redux'

import { MdElementoSchema, MdElementoAnomaliaSchema } from './../../module/schemas'

import { desnormalizar } from './../../../../module/selectors'

import { load, change, selecionarAnomalia, salvar, deletar } from './actions'

const stateToProps = (state) => {
    const view = state.features.inspecoes.containers.formElemento
    const _i = view.iniciado
    const elemento = desnormalizar(MdElementoSchema, state, view.elemento) || {}
    return {
        id: view.elemento,
        categoria: (_i ? view.categoria : elemento.categoria) || '',
        descritivo: (_i ? view.descritivo : elemento.descritivo) || '',
        disciplina: (_i ? view.disciplina : elemento.disciplina) || '',
        metodo: (_i ? view.metodo : elemento.metodo) || '',
        nome: (_i ? view.nome : elemento.nome) || '',
        pasta: (_i ? view.pasta : elemento.pasta) || '',
        pesoGut: (_i ? view.pesoGut : elemento.pesoGut) || '',
        prefix: (_i ? view.prefix : elemento.prefix) || '',
        vidaUtil: (_i ? view.vidaUtil : elemento.vidaUtil) || '',
        anomalia: view.anomalia,
        anomalias: desnormalizar([MdElementoAnomaliaSchema], state, view.anomalias || [])
    }
}

const dispatchToProps = (dispatch) => {
    return {
        load: (disciplinaId, pastaId, elementoId) => {
            dispatch(load(disciplinaId, pastaId, elementoId))
        },
        change: (e, { name, value }) => {
            dispatch(change(name, value))
        },
        selecionarAnomalia: (anomaliaId) => {
            dispatch(selecionarAnomalia(anomaliaId))
        },
        salvar: (elemento) => {
            dispatch(salvar(elemento))
        },
        deletar: (elementoId) => {
            dispatch(deletar(elementoId))
        }
    }
}

export default (container) => {
    return connect(stateToProps, dispatchToProps)(container)
}