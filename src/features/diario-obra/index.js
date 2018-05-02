import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Submenu from './containers/submenu'

import DiariosView from './views/diarios'
import DiarioView from './views/diario'

const Routes = (props) => (
    <div>
        <Submenu />
        <Switch>
            <Route exact path="/:projeto/diario-obra" component={DiariosView} />
            <Route exact path="/:projeto/diario-obra/:diario" component={DiarioView} />
        </Switch>
    </div>
)

export default Routes