import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Submenu from './containers/submenu'

import AnalisesView from './views/analises'
import AnaliseView from './views/analise'

const Routes = (props) => (
    <div>
        <Submenu />
        <Switch>
            <Route exact path="/:projeto/analise-projeto" component={AnalisesView} />
            <Route exact path="/:projeto/analise-projeto/:analise" component={AnaliseView} />
        </Switch>
    </div>
)

export default Routes