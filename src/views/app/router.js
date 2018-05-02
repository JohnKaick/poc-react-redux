import React from 'react';
import { connect } from 'react-redux'
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import history from './../../module/globals/history'
import asyncComponent from './../../components/async-component'
import RotaAutenticada from './rota-autenticada'
import Navbar from './../appbar'

// Global Views
const LoginView = asyncComponent(() => import('./../../views/login'))
const PerfilView = asyncComponent(() => import('./../../views/perfil'))
const EmpresaView = asyncComponent(() => import('./../../views/empresa'))
const ProjetosView = asyncComponent(() => import('./../../views/projetos'))
const ProjetoView = asyncComponent(() => import('./../../views/projeto'))

// Features
const ArquivosView = asyncComponent(() => import('./../../features/arquivos'))
const InspecoesView = asyncComponent(() => import('./../../features/inspecoes'))
const AnaliseProjetoView = asyncComponent(() => import('./../../features/analise-projeto'))
const AtasView = asyncComponent(() => import('./../../features/atas'))
const DiarioObraView = asyncComponent(() => import('./../../features/diario-obra'))

class App extends React.Component {
    render() {
        const { conectado } = this.props
        return (
            <Router history={history}>
                <div style={{ height: '100%' }}>
                    <Route path="/:projeto?" component={Navbar} />
                    <Switch>

                        {/* Públicas */}
                        <Route exact path="/login" component={LoginView} />

                        {/* Global Views */}
                        <RotaAutenticada exact path="/" component={ProjetosView} conectado={conectado} />
                        <RotaAutenticada exact path="/perfil" component={PerfilView} conectado={conectado} />
                        <RotaAutenticada exact path="/empresa" component={EmpresaView} conectado={conectado} />
                        <RotaAutenticada exact path="/:projeto" component={ProjetoView} conectado={conectado} />
                        <RotaAutenticada exact path="/projeto/cadastrar" component={ProjetoView} conectado={conectado} />

                        {/* Features */}
                        <RotaAutenticada path="/:projeto/analise-projeto" component={AnaliseProjetoView} conectado={conectado} />
                        <RotaAutenticada path="/:projeto/inspecoes" component={InspecoesView} conectado={conectado} />
                        <RotaAutenticada exact path="/:projeto/arquivos" component={ArquivosView} conectado={conectado} />
                        <RotaAutenticada path="/:projeto/atas" component={AtasView} conectado={conectado} />
                        <RotaAutenticada path="/:projeto/diario-obra" component={DiarioObraView} conectado={conectado} />

                        {/* Redirect */}
                        <Redirect to="/" />

                    </Switch>
                </div>
            </Router>
        )
    }
}

const stateToProps = (state) => {
    return {
        conectado: state.session.conectado
    }
}

export default connect(stateToProps, null)(App)