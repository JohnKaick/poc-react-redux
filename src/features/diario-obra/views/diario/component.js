import React from 'react'

import { Grid, Menu, Popup } from 'semantic-ui-react'

import Loader from './../../../../components/loader'
import { Registro, Item, Participante } from './components'

import DialogDiario from './../../containers/dialog-diario'
import DialogExcluirDiario from './../../containers/dialog-diario-excluir'

export default (props) => {

    const {
                carregando, onMigrar, onUploadImagem, onDeleteImagem, onTransmitir, onDesvincular, showParticipanteResult, showParticipantes
            } = props

    return (
        <Loader loading={carregando}>
            <Grid container>
                <Grid.Row>
                    <Grid.Column>
                        <Menu>
                            <Menu.Item>{props.diario.local}</Menu.Item>

                            <DialogDiario id={props.diario._id}>
                                <Menu.Item icon="edit" content="Editar" />
                            </DialogDiario>

                            <Popup
                                key="revisao"
                                position="bottom center"
                                content="Criar uma nova revisão do diário de obra atual, mantendo apenas os assuntos pendentes e informativos."
                                trigger={
                                    <Menu.Item
                                        icon="browser"
                                        content="Nova revisão"
                                        onClick={() => { onMigrar(props.diario._id) }} />
                                } />

                            <Popup
                                key="participante"
                                position="bottom center"
                                content="Ao clicar enviará e-mail para os participantes adicionados, informando os detalhes da ata e os assuntos do plano de ação."
                                trigger={
                                    <Menu.Item
                                        icon="mail"
                                        content="Enviar e-mail"
                                        onClick={() => { onTransmitir(props.diario._id) }} />
                                } />

                            <Menu.Menu position='right'>
                                <DialogExcluirDiario id={props.diario._id} projetoId={props.projeto}>
                                    <Menu.Item icon="trash" content="Excluir" />
                                </DialogExcluirDiario>
                            </Menu.Menu>
                        </Menu>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Registro
                            diario={props.diario}
                        />
                        <br />
                        <Participante
                            onDesvincular={onDesvincular}
                            participantes={props.participantes}
                            participante={props.participante}
                            diario={props.diario}
                            projeto={props.projeto}
                            showParticipantes={showParticipantes}
                            showParticipanteResult={showParticipanteResult}
                        />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Item
                            carregando={carregando}
                            itens={props.itens}
                            item={props.item}
                            diario={props.diario}
                            projeto={props.projeto}
                            onMigrar={onMigrar}
                            onUploadImagem={onUploadImagem}
                            onDeleteImagem={onDeleteImagem}
                        />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Loader>
    )
}    