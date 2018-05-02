import React from 'react'
import { Grid, Menu, Button } from 'semantic-ui-react'
import Loader from './../../../../../components/loader'
import Dialog from './../../../components/dialog'

export default (props) => {

    const {
        carregando
    } = props

    return (
        <Loader loading={carregando}>
            <Grid container>
 
            </Grid>
        </Loader>
    )
}