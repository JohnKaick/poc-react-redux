import {
    combineReducers
} from 'redux'

import painel from './../../views/painel/reducers'
import vistorias from './../../views/vistorias/reducers'
import elementos from './../../views/elementos/reducers'
import padroesDisciplinas from './../../views/padroes-disciplinas/reducers'
import padroesElementos from './../../views/padroes-elementos/reducers'
import padroesGrupos from './../../views/padroes-grupos/reducers'
import padroesModelos from './../../views/padroes-modelos/reducers'

export default combineReducers({
    painel, vistorias, elementos, padroesDisciplinas, padroesElementos, padroesGrupos, padroesModelos
})