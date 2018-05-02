import React from 'react'
import './styles.css'

import { Grid, Menu, Dropdown, Step, Table } from 'semantic-ui-react'

import Loader from './../../../../../components/loader'

export default (props) => {

    const {
        elementos, checklists,
        checklistSelected, carregando
    } = props

    return (
        <Loader loading={carregando}>
            <Grid container>

                <Grid.Row>
                    <Grid.Column width={4}>
                        <Menu fluid vertical>
                            <Menu.Item active header>Vistorias</Menu.Item>
                            {checklists.map(c =>
                                <Menu.Item key={c._id} onClick={() => { checklistSelected(c._id) }}>{c.nome}</Menu.Item>)
                            }
                            <Menu.Item active header>Situação</Menu.Item>
                            <Menu.Item>Conformidade</Menu.Item>
                            <Menu.Item>Não conformidade</Menu.Item>
                            <Menu.Item>Não verificados</Menu.Item>
                            <Menu.Item>Não aplicáveis</Menu.Item>
                        </Menu>
                    </Grid.Column>
                    <Grid.Column width={12}>

                        <h1>Áreas / Elementos</h1>

                        <Table>
                            <Table.Body>
                                {elementos.map(e =>
                                    <Table.Row key={e._id}>
                                        <Table.Cell>{e.modelo.descritivo}</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                )}
                            </Table.Body>
                        </Table>

                    </Grid.Column>
                </Grid.Row>

            </Grid>
        </Loader>
    )
}