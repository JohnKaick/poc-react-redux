import {
    combineReducers
} from 'redux'

//import app from 'views/app/reducers'
import login from './../../views/login/reducers'
import perfil from './../../views/perfil/reducers'
import empresa from './../../views/empresa/reducers'
import projeto from './../../views/projeto/reducers'
import projetos from './../../views/projetos/reducers'

export default combineReducers({
    //app,
    login,
    perfil,
    empresa,
    projeto,
    projetos
})