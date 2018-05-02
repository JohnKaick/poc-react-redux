import React from 'react'
import { Grid, Item, Icon, Label, Table, Menu, Input } from 'semantic-ui-react'
import { DialogAnalise } from './../../containers'
import Loader from './../../../../components/loader'

export default (props) => {

    const {
        carregando, projetoAtual, analises, analiseId, pesquisa, onAnaliseSelecionado,
    } = props

    return (
        <Loader loading={carregando}>
            <Grid container>
                <Grid.Row>
                    <Grid.Column>

                        <Menu>
                            <DialogAnalise projetoId={projetoAtual}>
                                <Menu.Item
                                    icon='plus'
                                    content="Cadastrar"
                                    onClick={() => { }} />
                            </DialogAnalise>
                        </Menu>

                        <Table selectable color="blue">
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Titulo</Table.HeaderCell>
                                    <Table.HeaderCell>Revisão</Table.HeaderCell>
                                    <Table.HeaderCell>Data</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body style={{ cursor: 'pointer' }}>
                                {(analises || []).map((a, i) => (
                                    <Table.Row
                                        key={a._id}
                                        onClick={() => { onAnaliseSelecionado(a) }}>
                                        <Table.Cell>{a.titulo}</Table.Cell>
                                        <Table.Cell>{a.revisao}</Table.Cell>
                                        <Table.Cell>{new Date(a.data).toLocaleDateString()}</Table.Cell>
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