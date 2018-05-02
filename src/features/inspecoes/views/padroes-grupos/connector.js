import { connect } from 'react-redux'

import {

} from './../../module/schemas'

import { desnormalizar } from './../../../../module/selectors'

import {

} from './actions'

const stateToProps = (state) => {
    const view = state.features.inspecoes.views.padroesGrupos.root
    return {

    }
}

const dispatchToProps = (dispatch) => {
    return {

    }
}

export default (container) => {
    return connect(stateToProps, dispatchToProps)(container)
}