import React from 'react'

import { Grid, Card, List, Button, Segment, Table, Icon, Image, Menu, Popup } from 'semantic-ui-react'

import Loader from './../../../../components/loader'
import { Registro, Item, Participante } from './components'

import DialogAta from './../../containers/dialog-ata'
import DialogExcluirAta from './../../containers/dialog-ata-excluir'

export default (props) => {

    const {
        carregando, onDesvincular, onMigrar, onTransmitir, showParticipantes, showParticipanteResult
    } = props

    return (
        <Loader loading={carregando}>
            <Grid container>
                <Grid.Row>

                    <Grid.Column>
                        <Menu>
                            <Menu.Item>{props.ata.nome}</Menu.Item>

                            <DialogAta id={props.ata._id}>
                                <Menu.Item icon="edit" content="Editar" />
                            </DialogAta>

                            <Popup
                                key="item"
                                position="bottom center"
                                content="Criar um novo plano de ação na ata atual, com os itens pendentes e informativos."
                                trigger={
                                    <Menu.Item
                                        icon="browser"
                                        content="Nova revisão"
                                        onClick={() => { onMigrar(props.ata._id) }} />
                                } />

                            <Popup
                                key="participante"
                                position="bottom center"
                                content="Ao clicar enviará e-mail para os participantes adicionados, informando os detalhes da ata e os assuntos do plano de ação."
                                trigger={
                                    <Menu.Item
                                        icon="mail"
                                        content="Enviar e-mail"
                                        onClick={() => { onTransmitir(props.ata._id) }} />
                                } />

                            <Menu.Menu position='right'>
                                <DialogExcluirAta id={props.ata._id} projetoId={props.projeto}>
                                    <Menu.Item icon="trash" content="Excluir" />
                                </DialogExcluirAta>

                            </Menu.Menu>

                        </Menu>
                    </Grid.Column>

                </Grid.Row>

                <Grid.Row>

                    <Grid.Column width={4}>
                        <Registro
                            ata={props.ata}
                        />
                        <br />
                        <Participante
                            onDesvincular={onDesvincular}
                            participantes={props.participantes}
                            participante={props.participante}
                            ata={props.ata}
                            projeto={props.projeto}
                            showParticipantes={showParticipantes}
                            showParticipanteResult={showParticipanteResult}
                        />
                    </Grid.Column>

                    <Grid.Column width={12}>
                        <Item
                            onMigrar={onMigrar}
                            itens={props.itens}
                            item={props.item}
                            ata={props.ata}
                            projeto={props.projeto}
                        />
                    </Grid.Column>

                </Grid.Row>
            </Grid>
        </Loader>
    )
}