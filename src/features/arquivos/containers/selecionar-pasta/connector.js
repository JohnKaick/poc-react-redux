import { connect } from 'react-redux'
import { denormalize } from 'normalizr'

import { load, pastaSelecionada, grupoSelecionado } from './actions'
import { PastaSchema, GrupoSchema } from './../../module/schemas'

const stateToProps = (state) => {
    const view = state.features.arquivos.containers.selecionarPasta
    return {
        pasta: denormalize(view.pasta, PastaSchema, state.entities) || null,
        grupo: denormalize(view.grupo, GrupoSchema, state.entities) || null,
        pastas: denormalize(view.pastas, [PastaSchema], state.entities) || [],
        grupos: denormalize(view.grupos, [GrupoSchema], state.entities) || [],
        projetoAtual: state.session.projetoAtual,
        carregando: view.carregando
    }
}

const dispatchToProps = (dispatch) => {
    return {
        load: (projeto) => {
            dispatch(load(projeto))
        },
        pastaSelecionada(pasta) {
            dispatch(pastaSelecionada(pasta))
        },
        grupoSelecionado(grupo) {
            dispatch(grupoSelecionado(grupo))
        }
    }
}


export default function (container) {
    return connect(stateToProps, dispatchToProps)(container)
}   