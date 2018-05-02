import React from 'react'

import _ from 'lodash'

import ImageTiler from './../../../../../components/image-tiler'
import Elemento from './elemento'
import DialogGrupo from './../../../containers/dialog-grupo'
import DialogVincularElemento from './../../../containers/dialog-vincular-elemento'

import { Grid, Menu, Dropdown, Step, Breadcrumb, Button, Card, Header, Item, Table, List, Image, Segment } from 'semantic-ui-react'

export default (props) => {

    const {
        grupo, currents, elementos, checklists, projetoAtual,
        onGrupoSelecionado, carregando
    } = props

    const disciplinas = _.groupBy(elementos, e => { return e.modelo.disciplina.nome })

    return (
        <Grid>

            <Grid.Row columns={1}>
                <Grid.Column>
                    <Button.Group>
                        {grupo ?
                            <DialogVincularElemento grupo={grupo._id}>
                                <Button primary content="Vincular Elemento" />
                            </DialogVincularElemento>
                            : null
                        }
                        <Dropdown className="grey" button text='Novo grupo' pointing>
                            <Dropdown.Menu className="right">
                                <DialogGrupo projetoAtual={projetoAtual}>
                                    <Dropdown.Item>Na raiz</Dropdown.Item>
                                </DialogGrupo>
                                {currents.map((grupos, i) => (
                                    grupos.selected ?
                                        <DialogGrupo key={i} grupoPai={grupos.selected._id} grupoPaiNome={grupos.selected.nome} projetoAtual={projetoAtual} >
                                            <Dropdown.Item>Abaixo de: {grupos.selected.nome}</Dropdown.Item>
                                        </DialogGrupo>
                                        : null
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
                        {grupo ?
                            <DialogGrupo id={grupo._id}>
                                <Button color="grey" content="Editar grupo" />
                            </DialogGrupo>
                            : null
                        }
                    </Button.Group>
                </Grid.Column>
            </Grid.Row>

            {grupo ?
                <Grid.Row columns={1}>
                    <Grid.Column>
                        <Card.Group itemsPerRow={2}>
                            {grupo && grupo.imagens ?
                                <ImageTiler fluid titulo={grupo.nome} imagens={grupo.imagens} /> : null
                            }
                            <Card>
                                <Card.Content>
                                    <List divided relaxed>
                                        <List.Item>
                                            <List.Header>Grupo</List.Header>
                                            <span>{grupo.nome}</span>
                                        </List.Item>
                                        <List.Item>
                                            <List.Header>Tag</List.Header>
                                            <span>{grupo.tag || '---'}</span>
                                        </List.Item>
                                        <List.Item>
                                            <List.Header>Prefixo</List.Header>
                                            <span>{grupo.prefix || '---'}</span>
                                        </List.Item>
                                        <List.Item>
                                            <List.Header>Descritivo</List.Header>
                                            <span>{grupo.descritivo || '---'}</span>
                                        </List.Item>
                                    </List>
                                </Card.Content>
                            </Card>
                        </Card.Group>
                    </Grid.Column>
                </Grid.Row>
                : null
            }

            <Grid.Row columns={1}>
                <Grid.Column>
                    {_.keys(disciplinas).map(d => (
                        <div key={d} style={{ paddingBottom: 30 }} >
                            <Header attached="top" as="h3" dividing>{d}</Header>
                            <Segment attached="bottom">
                                <Item.Group divided>
                                    {disciplinas[d].map(e => (
                                        <Elemento key={e._id} elemento={e} checklists={checklists} />
                                    ))}
                                </Item.Group>
                            </Segment>
                        </div>
                    ))}
                </Grid.Column>
            </Grid.Row>

        </Grid>
    )
}