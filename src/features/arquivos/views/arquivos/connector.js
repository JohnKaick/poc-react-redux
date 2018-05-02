import { connect } from 'react-redux'
import { PastaSchema, GrupoSchema, ArquivoSchema } from './../../module/schemas'
import { desnormalizar } from './../../../../module/selectors'
import { load, grupoSelecionado, onDownload, onDownloadGrupo } from './actions'

const stateToProps = (state) => {
    const view = state.features.arquivos.views.arquivos
    return {
        projetoAtual: state.session.projetoAtual,
        pasta: desnormalizar(PastaSchema, state, view.pasta),
        grupo: desnormalizar(GrupoSchema, state, view.grupo),
        arquivos: desnormalizar([ArquivoSchema], state, view.arquivos),
        carregando: view.carregando,
        erro: view.erro
    }
}

const dispatchToProps = (dispatch) => {
    return {
        load: (projeto) => {
            dispatch(load(projeto))
        },
        grupoSelecionado: (pasta, grupo) => {
            dispatch(grupoSelecionado(pasta, grupo))
        },
        onDownload: (revisaoId, tipo) => {
            dispatch(onDownload(revisaoId, tipo))
        },
        onDownloadGrupo: (grupoId, tipos) => {
            dispatch(onDownloadGrupo(grupoId, tipos))
        }
    }
}

export default (container) => {
    return connect(stateToProps, dispatchToProps)(container)
}