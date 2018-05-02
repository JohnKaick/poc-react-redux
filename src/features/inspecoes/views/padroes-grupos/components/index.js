import React from 'react'

import { Grid, Header, Segment, Form, Input, Select, TextArea, Button, Table, Menu, Message, Container } from 'semantic-ui-react'

import Loader from './../../../../../components/loader'

export default () => (
    <Loader loading={false}>
        {false ?
            <Grid container>
                <Grid.Column>
                    <Menu attached="top" color="grey" inverted>
                        <Menu.Item icon="pin" header content="Anomalias" />
                        <Menu.Menu position='right'>
                            <Menu.Item onClick={() => { }} icon="add" content="Adicionar" />
                            <Menu.Item onClick={() => { }} icon="edit" content="Editar" />
                            <Menu.Item onClick={() => { }} icon="delete" content="Excluir" />
                        </Menu.Menu>
                    </Menu>
                    <Table attached="bottom">
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Descritivo</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                    </Table>
                </Grid.Column>
            </Grid>
            :
            <Container>
                <Message info size="huge">
                    <p>Desculpe, está área ainda não foi desenvolvida.</p>
                </Message>
            </Container>
        }
    </Loader>
)