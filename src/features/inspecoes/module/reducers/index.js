import {
    combineReducers
} from 'redux'

import views from './views'
import containers from './containers'

export default combineReducers({
    views, containers
})