import React from 'react'

import { Table, Icon, Button, Menu, Segment, Popup, Header, Label, Item, Grid } from 'semantic-ui-react'
import { Link, NavLink } from 'react-router-dom'

import DialogItem from './../../../containers/dialog-item'

const LabelSituacao = ({ situacao }) => {
    if (situacao === 'finalizada') {
        return <Label style={{ float: 'right' }} color='green' content='Finalizado' />
    } else if (situacao === 'pendente') {
        return <Label style={{ float: 'right' }} color='orange' content='Pendente' />
    } else {
        return <Label style={{ float: 'right' }} content='Informativo' />
    }
}

export default ({
   onMigrar, itens, item, ata, projeto
}) => (
        <div>
            <Menu borderless attached="top" >
                <Menu.Item header content='Plano de ação' />
                <Menu.Menu position='right'>
                    <DialogItem ataId={ata._id}>
                        <Menu.Item onClick={() => { }} content="Adicionar"><Icon name='plus' /> Adicionar</Menu.Item>
                    </DialogItem>
                </Menu.Menu>
            </Menu>

            <Segment attached>

                <Item.Group divided>
                    {(itens.length == 0) ?
                        <h3 style={{ color: 'grey' }}>Nenhum item cadastrado...</h3>
                        :
                        (itens || []).map((a) => (
                            <Item key={a._id}>
                                <Item.Content>
                                    <Grid>
                                        <Grid.Row>
                                            <Grid.Column width={14}>
                                                <Header size='tiny'>{a.assunto}</Header>
                                            </Grid.Column>
                                            <Grid.Column width={2}>
                                                <LabelSituacao situacao={a.situacao} />
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                    <Item.Meta>
                                        <span className='cinema'>Responsavel: {a.responsavel} | Prazo: {new Date(a.prazo).toLocaleDateString()}</span>
                                    </Item.Meta>
                                    <Item.Description style={{ padding: '5px', 'white-space': 'pre-line' }}>{a.descricao}</Item.Description>
                                    <Item.Extra>
                                        Revisão: {a.revisao}
                                        <DialogItem id={a._id}>
                                            <Button basic floated='right' icon='edit' content='Editar' />
                                        </DialogItem>
                                    </Item.Extra>
                                </Item.Content>
                            </Item>
                        ))
                    }
                </Item.Group>
            </Segment>
        </div>
    )