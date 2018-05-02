import React from 'react'

import { Grid, Header, Segment, Form, Input, Select, TextArea, Button, Table, Menu } from 'semantic-ui-react'

import Loader from './../../../../components/loader'
import DialogDisciplina from './../../containers/dialog-disciplina'
import DialogPasta from './../../containers/dialog-pasta'
import DialogCategoria from './../../containers/dialog-categoria'

export default (props) => {

    const {
        disciplinas, disciplina, pastas, pasta, categorias, categoria,
        disciplinaSelecionada, pastaSelecionada, categoriaSelecionada,
        emitter
    } = props

    return (
        <Loader loading={false}>
            <Grid container columns={3}>

                <Grid.Column>
                    <Menu attached="top" color="grey" inverted>
                        <Menu.Item icon="pin" header content="Disciplinas" />
                        <Menu.Menu position='right'>
                            <DialogDisciplina emitter={emitter}>
                                <Menu.Item icon="add" icon="add" />
                            </DialogDisciplina>
                            {disciplina ?
                                <DialogDisciplina
                                    disciplinaId={disciplina}
                                    emitter={emitter}>
                                    <Menu.Item icon="edit" icon="edit" />
                                </DialogDisciplina>
                                : null
                            }
                        </Menu.Menu>
                    </Menu>
                    <Table selectable compact attached="bottom">
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Descritivo</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {disciplinas.map(d => (
                                <Table.Row
                                    key={d._id}
                                    active={d._id === disciplina}
                                    onClick={() => { disciplinaSelecionada(d._id) }}>
                                    <Table.Cell>{d.nome}</Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table>
                </Grid.Column>

                <Grid.Column>
                    <Menu attached="top" color="grey" inverted>
                        <Menu.Item icon="pin" header content="Pastas" />
                        <Menu.Menu position='right'>
                            {disciplina ?
                                <DialogPasta
                                    disciplinaId={disciplina}
                                    emitter={emitter}>
                                    <Menu.Item icon="add" icon="add" />
                                </DialogPasta>
                                : null
                            }
                            {pasta ?
                                <DialogPasta
                                    pastaId={pasta}
                                    emitter={emitter}>
                                    <Menu.Item icon="edit" icon="edit" />
                                </DialogPasta>
                                : null
                            }
                        </Menu.Menu>
                    </Menu>
                    <Table selectable compact attached="bottom">
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Descritivo</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {pastas.map(p => (
                                <Table.Row
                                    key={p._id}
                                    active={p._id === pasta}
                                    onClick={() => { pastaSelecionada(p._id) }}>
                                    <Table.Cell>{p.nome}</Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table>
                </Grid.Column>

                <Grid.Column>
                    <Menu attached="top" color="grey" inverted>
                        <Menu.Item icon="pin" header content="Categorias" />
                        <Menu.Menu position='right'>
                            {disciplina ?
                                <DialogCategoria
                                    disciplinaId={disciplina}
                                    emitter={emitter}>
                                    <Menu.Item icon="add" icon="add" />
                                </DialogCategoria>
                                : null
                            }
                            {categoria ?
                                <DialogCategoria
                                    categoriaId={categoria}
                                    emitter={emitter}>
                                    <Menu.Item icon="edit" icon="edit" />
                                </DialogCategoria>
                                : null
                            }
                        </Menu.Menu>
                    </Menu>
                    <Table selectable compact attached="bottom">
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Descritivo</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {categorias.map(c => (
                                <Table.Row
                                    key={c._id}
                                    active={c._id === categoria}
                                    onClick={() => { categoriaSelecionada(c._id) }}>
                                    <Table.Cell>{c.nome}</Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table>
                </Grid.Column>

            </Grid>
        </Loader>
    )
}