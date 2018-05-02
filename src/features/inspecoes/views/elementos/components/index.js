import React from 'react'

import { Grid, Menu, Dropdown, Step, Breadcrumb, Button, Card, Header, Item, Table } from 'semantic-ui-react'

import Loader from './../../../../../components/loader'
import Sidebar from './sidebar'
import GrupoDetails from './grupo-details'

export default (props) => {

    const { elementos, carregando } = props

    return (
        <Loader loading={carregando}>
            <Grid container>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Sidebar {...props} />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <GrupoDetails {...props} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Loader>
    )
}