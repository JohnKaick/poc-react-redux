import React from 'react'

import { Menu, Segment, Icon, Button, Image, Item, Popup, Label, Grid, Header, Card } from 'semantic-ui-react'
import { Link, NavLink } from 'react-router-dom'

import DialogItem from './../../../containers/dialog-item'

import { EnviarArquivo, ImageItem } from './../../../../../components'

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
    carregando, itens, item, diario, projeto, onMigrar, onUploadImagem, onDeleteImagem
}) => (
        <div>
            <Menu borderless attached="top" >
                <Menu.Item header content='Itens' />
                <Menu.Menu position='right'>
                    <DialogItem diarioId={diario._id}>
                        <Menu.Item icon="plus" content="Adicionar" />
                    </DialogItem>
                </Menu.Menu>
            </Menu>

            <Segment attached>

                <Item.Group divided>
                    {(itens.length == 0) ?
                        <h3 style={{ color: 'grey' }}>Nenhum item cadastrado...</h3>
                        :
                        (itens || []).map((d) => (
                            <Item key={d._id}>
                                <Item.Content>
                                    <Grid>
                                        <Grid.Row>
                                            <Grid.Column width={14}>
                                                <Header size='tiny'>{d.assunto}</Header>
                                            </Grid.Column>
                                            <Grid.Column width={2}>
                                                <LabelSituacao situacao={d.situacao} />
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                    <Item.Meta>
                                        <span className='cinema'>Responsavel: {d.responsavel}</span>
                                    </Item.Meta>
                                    <Item.Description>
                                        <p style={{ whiteSpace: 'pre-line' }}>{d.descricao}</p>
                                        <Image.Group>
                                            {d.imagens.map((img, i) =>
                                                <ImageItem key={i} titulo={d.assunto} imagem={img} Deletar={onDeleteImagem} >
                                                    <Image src={img.url} style={{ padding: '5px', maxHeight: '180px', maxWidth: '270px', cursor: 'pointer' }} />
                                                </ImageItem>
                                            )}
                                        </Image.Group>
                                    </Item.Description>
                                    <Item.Extra>
                                        <DialogItem id={d._id}>
                                            <Button basic icon='edit' content='Editar' floated='right' style={{ marginTop: 'auto' }} />
                                        </DialogItem>
                                        <EnviarArquivo
                                            control={Button}
                                            multiple
                                            basic
                                            content='Inserir imagem'
                                            icon='camera'
                                            floated='right'
                                            loading={carregando}
                                            carregar={onUploadImagem}
                                            itemId={d._id} />
                                    </Item.Extra>
                                </Item.Content>
                            </Item>
                        ))
                    }

                </Item.Group>

            </Segment>

        </div>
    )