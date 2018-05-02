import { connect } from 'react-redux'
import { onChange, onLoad, onSave, onUploadAvatar } from './actions'

const stateToProps = state => {
    let view = state.views.perfil
    return {
        usuario: view.usuario,
        carregando: view.carregando,
        erro: view.erro
    }
}

const dispatchToProps = dispatch => {
    return {
        onChange: (name, value) => {
            dispatch(onChange(name, value))
        },
        onLoad: () => {
            dispatch(onLoad())
        },
        onSave: (perfil) => {
            dispatch(onSave(perfil))
        },
        onUploadAvatar: (file) => {
            dispatch(onUploadAvatar(file))
        }
    }
}

export default (container) => {
    return connect(stateToProps, dispatchToProps)(container)
}