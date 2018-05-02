import {
    combineReducers
} from 'redux'

import formElemento from './../../containers/form-elemento/reducers'
import dialogDisciplina from './../../containers/dialog-disciplina/reducers'
import dialogPasta from './../../containers/dialog-pasta/reducers'
import dialogCategoria from './../../containers/dialog-categoria/reducers'
import dialogElemento from './../../containers/dialog-elemento/reducers'
import dialogAnomalia from './../../containers/dialog-anomalia/reducers'

export default combineReducers({
    formElemento,
    dialogDisciplina,
    dialogPasta,
    dialogCategoria,
    dialogElemento,
    dialogAnomalia
})