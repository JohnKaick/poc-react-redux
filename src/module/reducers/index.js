import {
    combineReducers
} from 'redux'

import session from './session'
import views from './views'
import entities from './entities'
import globalization from './globalization'
import features from './features'

export default combineReducers({
    session,
    views,
    entities,
    globalization,
    features
})