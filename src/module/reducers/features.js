import {
    combineReducers
} from 'redux'

import arquivos from './../../features/arquivos/module/reducers'
import inspecoes from './../../features/inspecoes/module/reducers'
import analises from './../../features/analise-projeto/module/reducers'
import atas from './../../features/atas/module/reducers'
import diarios from './../../features/diario-obra/module/reducers'


export default combineReducers({
    arquivos, inspecoes, analises, atas, diarios
})