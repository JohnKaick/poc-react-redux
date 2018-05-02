import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Submenu from './containers/submenu'

import PainelView from './views/painel'
import VistoriasView from './views/vistorias'
import ElementosView from './views/elementos'
import PadroesElementosView from './views/padroes-elementos'
import PadroesDisciplinasView from './views/padroes-disciplinas'
import PadroesGruposView from './views/padroes-grupos'
import PadroesModelosView from './views/padroes-modelos'

const Routes = (props) => (
    <div>
        <Submenu />
        <Switch>
            <Route exact path="/:projeto/inspecoes" component={ElementosView} />
            {/*<Route exact path="/:projeto/inspecoes/vistorias" component={VistoriasView} />*/}
            {/*<Route exact path="/:projeto/inspecoes/elementos" component={ElementosView} />*/}
            <Route exact path="/:projeto/inspecoes/padroes/disciplinas" component={PadroesDisciplinasView} />
            <Route exact path="/:projeto/inspecoes/padroes/elementos" component={PadroesElementosView} />
            <Route exact path="/:projeto/inspecoes/padroes/grupos" component={PadroesGruposView} />
            <Route exact path="/:projeto/inspecoes/padroes/modelos" component={PadroesModelosView} />
        </Switch>
    </div>
)

export default Routes