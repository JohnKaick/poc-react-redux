import {
    combineReducers
} from 'redux'

import diarios from './../../views/diarios/reducers'
import diario from './../../views/diario/reducers'

export default combineReducers({
    diarios, diario
})