import {
    combineReducers
} from 'redux'

import analises from './../../views/analises/reducers'
import analise from './../../views/analise/reducers'

export default combineReducers({
    analises, analise
})