import { connect } from 'react-redux'

import { traduzirModelos } from './../../module/selectors'

import {
    pesquisaChange, load
} from './actions'

const stateToProps = (state) => {
    const view = state.views.projetos
    let pesquisa = view.pesquisa ? view.pesquisa.toLowerCase() : ''
    return {
        projetos: traduzirModelos('projetos', state, view.projetos).filter(e => {
            return e.exibicao.toLowerCase().search(pesquisa) >= 0
        }),
        pesquisa: view.pesquisa,
        carregando: view.carregando
    }
}

const dispatchToProps = (dispatch) => {
    return {
        pesquisaChange: (texto) => {
            dispatch(pesquisaChange(texto))
        },
        load: () => {
            dispatch(load())
        }
    }
}

export default (container) => {
    return connect(stateToProps, dispatchToProps)(container)
}