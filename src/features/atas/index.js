import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Submenu from './containers/submenu'

import AtasView from './views/atas'
import AtaView from './views/ata'

const Routes = (props) => (
    <div>
        <Submenu />
        <Switch>
            <Route exact path="/:projeto/atas" component={AtasView} />
            <Route exact path="/:projeto/atas/:ata" component={AtaView} />
        </Switch>
    </div>
)

export default Routes