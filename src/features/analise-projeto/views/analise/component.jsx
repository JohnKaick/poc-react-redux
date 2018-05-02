import React from 'react'
import { Grid, Icon, Menu, Popup } from 'semantic-ui-react'
import { Arquivo, Itens, Participante, Relatorio } from './components'
import { DialogAnalise, DialogAnaliseExcluir, DialogItemCadastrar } from './../../containers'
import Loader from './../../../../components/loader'

export default (props) => {

    const {
        carregando, onDesvincular, onAprovar, onDeletar, onAlterarPosicao, onMigrar, onTransmitir,
        showArquivoResult, showArquivos, showParticipanteResult, itens,
        showParticipantes, activeIndex, handleClick, assuntos, organizados,
    } = props

    return (
        <Loader loading={carregando}>

            <Grid container>

                <Grid.Row>

                    <Grid.Column>

                        <Menu>

                            <Menu.Item>{props.analise.titulo}</Menu.Item>

                            <DialogAnalise id={props.analise._id}>
                                <Menu.Item onClick={() => { }}><Icon name='edit' /> Editar</Menu.Item>
                            </DialogAnalise>

                            <Popup
                                key="nova_revisao"
                                position="bottom center"
                                content="Criar um novo relatório com os dados atuais, e com os itens pendentes e informativos."
                                trigger={
                                    <Menu.Item
                                        icon="browser"
                                        content="Nova revisão"
                                        onClick={() => { onMigrar(props.analise._id) }} />
                                } />

                            <Popup
                                key="participante"
                                position="bottom center"
                                content="Ao clicar enviará e-mail para os participantes adicionados, informando os detalhes do relatório e os itens com as replicas não aprovadas."
                                trigger={
                                    <Menu.Item
                                        icon="mail"
                                        content="Enviar e-mail"
                                        onClick={() => { onTransmitir(props.analise._id) }} />
                                } />

                            <DialogItemCadastrar projetoId={props.projeto} analiseId={props.analise._id}>
                                <Menu.Item icon="plus" content="Adicionar item" />
                            </DialogItemCadastrar>

                            <Menu.Menu position='right'>
                                <DialogAnaliseExcluir
                                    id={props.analise._id}
                                    projetoId={props.projeto}>
                                    <Menu.Item
                                        icon="trash"
                                        content="Excluir"
                                        onClick={() => { }} />
                                </DialogAnaliseExcluir>
                            </Menu.Menu>

                        </Menu>

                    </Grid.Column>

                </Grid.Row>

                <Grid.Row>

                    <Grid.Column width={4}>

                        <Relatorio analise={props.analise} />

                        <br />

                        <Participante
                            onDesvincular={onDesvincular}
                            participantes={props.participantes}
                            participante={props.participante}
                            analise={props.analise}
                            projeto={props.projeto}
                            showParticipanteResult={showParticipanteResult}
                            showParticipantes={showParticipantes}
                        />

                        <br />

                        <Arquivo
                            analise={props.analise}
                            showArquivoResult={showArquivoResult}
                            showArquivos={showArquivos}
                        />

                    </Grid.Column>

                    <Grid.Column width={12}>

                        <Itens
                            onAprovar={onAprovar}
                            onDeletar={onDeletar}
                            onAlterarPosicao={onAlterarPosicao}
                            handleClick={handleClick}
                            activeIndex={activeIndex}
                            assuntos={assuntos}
                            organizados={organizados}
                            analise={props.analise}
                            projeto={props.projeto}
                        />

                    </Grid.Column>

                </Grid.Row>

            </Grid>

        </Loader>
    )
}