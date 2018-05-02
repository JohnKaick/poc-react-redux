import { connect } from 'react-redux'
import { MdElementoAnomaliaSchema } from './../../module/schemas'
import { desnormalizar } from './../../../../module/selectors'
import { clean, load, adicionar, alterar, deletar, adicionarGravidade, change, changeGravidade } from './actions'

const stateToProps = (state) => {
    const view = state.features.inspecoes.containers.dialogAnomalia
    const preFetched = desnormalizar(MdElementoAnomaliaSchema, state, view.id) || {}
    const _i = view.iniciado
    return {
        id: view.id,
        exibicao: (_i ? view.exibicao : preFetched.exibicao) || '',
        descritivo: (_i ? view.descritivo : preFetched.descritivo) || '',
        caracteristica: (_i ? view.caracteristica : preFetched.caracteristica) || '',
        questao: (_i ? view.questao : preFetched.questao) || '',
        diagnostico: (_i ? view.diagnostico : preFetched.diagnostico) || '',
        gravidades: (_i ? view.gravidades : preFetched.gravidades) || [],
        carregando: view.carregando,
        erro: view.erro
    }
}

const dispatchToProps = (dispatch) => {
    return {
        clean: () => {
            dispatch(clean())
        },
        load: (elementoId, anomaliaId) => {
            dispatch(load(elementoId, anomaliaId))
        },
        adicionar: (anomalia) => {
            dispatch(adicionar(anomalia))
        },
        alterar: (anomalia) => {
            dispatch(alterar(anomalia))
        },
        deletar: (anomaliaId) => {
            dispatch(deletar(anomaliaId))
        },
        adicionarGravidade: () => {
            dispatch(adicionarGravidade())
        },
        change: (e, { name, value }) => {
            dispatch(change(name, value))
        },
        changeGravidade: (name, value, index) => {
            dispatch(changeGravidade(name, value, index))
        }
    }
}

export default (container) => {
    return connect(stateToProps, dispatchToProps)(container)
}