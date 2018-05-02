import {
    combineReducers
} from 'redux'

import atas from './../../views/atas/reducers'
import ata from './../../views/ata/reducers'

export default combineReducers({
    atas, ata
})