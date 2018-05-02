import React from 'react'
import { Grid, Item, Icon, Label, Table, Menu } from 'semantic-ui-react'
import { Link, NavLink } from 'react-router-dom'

import Loader from './../../../../components/loader'
import DialogDiario from './../../containers/dialog-diario'

export default (props) => {

    const {
        carregando, projetoAtual, diarios, onDiarioSelecionado
    } = props

    return (
        <Loader loading={carregando}>
            <Grid container>
                <Grid.Row>
                    <Grid.Column >

                        <Menu>
                            <DialogDiario projetoId={projetoAtual}>
                                <Menu.Item onClick={() => { }} icon="plus" content="Cadastrar"/>
                            </DialogDiario>
                        </Menu>

                        <Table selectable color="blue">
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell width={6}>Descrição</Table.HeaderCell>
                                    <Table.HeaderCell width={6}>Local</Table.HeaderCell>
                                    <Table.HeaderCell width={2}>Data</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body style={{ cursor: 'pointer' }}>
                                {(diarios || []).map((d, i) => (
                                    <Table.Row
                                        key={d._id}
                                        onClick={() => { onDiarioSelecionado(d) }}>
                                        <Table.Cell>{d.descricao}</Table.Cell>
                                        <Table.Cell>{d.local}</Table.Cell>
                                        <Table.Cell>{new Date(d.dataHora).toLocaleDateString()}</Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Loader>
    )
}