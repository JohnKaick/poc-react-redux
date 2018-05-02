import React from 'react'
import { Grid, Item, Icon, Label, Table, Menu } from 'semantic-ui-react'
import { Link, NavLink } from 'react-router-dom'

import Loader from './../../../../components/loader'
import DialogAta from './../../containers/dialog-ata'

export default (props) => {

    const {
        carregando, projetoAtual, atas, ataId, ataSelecionada, onAtaSelecionada
    } = props

    return (
        <Loader loading={carregando}>
            <Grid container>
                <Grid.Row>
                    <Grid.Column >

                        <Menu>
                            <DialogAta projetoId={projetoAtual}>
                                <Menu.Item
                                    icon="plus"
                                    content="Cadastrar"
                                    onClick={() => { }} />
                            </DialogAta>
                        </Menu>

                        <Table selectable color="blue">
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell width={6}>Nome</Table.HeaderCell>
                                    <Table.HeaderCell width={6}>Pauta</Table.HeaderCell>
                                    <Table.HeaderCell width={2}>Emissão</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body style={{ cursor: 'pointer' }}>
                                {(atas || []).map((a, i) => (
                                    <Table.Row
                                        key={a._id}
                                        onClick={() => { onAtaSelecionada(a) }}>
                                        <Table.Cell>{a.nome}</Table.Cell>
                                        <Table.Cell>{a.pauta}</Table.Cell>
                                        <Table.Cell>{new Date(a.dataHora).toLocaleDateString()}</Table.Cell>
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