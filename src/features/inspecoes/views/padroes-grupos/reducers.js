import Immutable from 'seamless-immutable'
import { handleActions } from 'redux-actions'

import {

} from './constants'

const defaultState = Immutable({
    carregando: false,
    erro: null
})

export default handleActions({

}, defaultState)