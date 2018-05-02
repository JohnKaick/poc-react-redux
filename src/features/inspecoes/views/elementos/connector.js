import _ from 'lodash'

import {
    connect
} from 'react-redux'

import {
    GrupoSchema, ChecklistSchema
} from './../../module/schemas'

import {
    desnormalizar
} from './../../../../module/selectors'

import {
    load,
    grupoSelecionado
} from './actions'

const stateToProps = (state) => {
    const view = state.features.inspecoes.views.elementos
    return {
        projetoAtual: state.session.projetoAtual,
        grupo: desnormalizar(GrupoSchema, state, view.grupo),
        grupos: desnormalizar([GrupoSchema], state, view.grupos),
        checklists: desnormalizar([ChecklistSchema], state, view.checklists),
        elementos: _.filter(view.elementos, (e) => e.modelo) || [],
        currentsBase: view.currents,
        currents: view.currents.map(c => {
            return {
                title: c.title,
                selected: desnormalizar(GrupoSchema, state, c.selected),
                itens: desnormalizar([GrupoSchema], state, c.itens)
            }
        }),
        carregando: view.carregando
    }
}

const dispatchToProps = (dispatch) => {
    return {
        load: (projetoId) => {
            dispatch(load(projetoId))
        },
        grupoSelecionado: (id, index, currents, grupos) => {
            dispatch(grupoSelecionado(id, index, currents, grupos))
        }
    }
}

export default (container) => {
    return connect(stateToProps, dispatchToProps)(container)
}