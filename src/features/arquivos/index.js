import React from 'react';

import { Route, Switch } from 'react-router-dom';

import ArquivosView from './views/arquivos'

const Routes = (props) => (
    <Switch>
        <Route exact path="/:projeto/arquivos" component={ArquivosView} />
    </Switch>
)

export default Routes