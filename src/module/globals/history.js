import { store } from './../store'
import { PROJETO_ATUAL } from './../constants'
import createHistory from 'history/createBrowserHistory'

const modulos = {
    'informacoes': 'Informações',
    'arquivos': 'Arquivos',
    'analise-projeto': 'Análise de Projeto',
    'inspecoes': 'Inspeção',
    'atas': 'Ata de Reunião',
    'diario-obra': 'Diário de Obra'
}

function checarProjeto(pathname) {

    let path = pathname.substring(1)
    let routes = path.split('/')

    if (!path) {
        store.dispatch(PROJETO_ATUAL({
            projeto: null,
            modulo: null,
            rotas: routes
        }))
    }

    if (routes && routes[0].length === 24) {
        store.dispatch(PROJETO_ATUAL({
            projeto: routes[0],
            modulo: modulos[routes.length > 1 ? routes[1] : 'informacoes'],
            rotas: routes
        }))
    }

}

const history = createHistory()

// const unlisten = 
history.listen((location, action) => {
    //console.log(action, location.pathname, location.state)
    checarProjeto(location.pathname)
})

// To stop listening, call the function returned from listen().
// unlisten()

checarProjeto(history.location.pathname)

export default history