import React from 'react'

import { Modal, Button, Menu, List, Grid, Header, Segment } from 'semantic-ui-react'

import DialogPasta from './../dialog-pasta'
import DialogGrupo from './../dialog-grupo'

const Component = (props) => {

    const {
        opened, onOpen, onClose, children, load,
        titulo, pastas, grupos, pasta, grupo, projetoAtual,
        onSelecionar, onPastaSelecionada, onGrupoSelecionado
    } = props

    return (
        <Modal
            open={opened}
            trigger={children}
            onOpen={onOpen}>
            <Header>{titulo}</Header>

            <Modal.Content>
                <Grid columns={2}>
                    <Grid.Column>
                        <Menu
                            fluid
                            vertical
                            style={{ height: 400, overflowY: 'auto' }}>
                            {pastas.map(p =>
                                <Menu.Item
                                    key={p._id}
                                    active={pasta && p._id === pasta._id}
                                    onClick={() => { onPastaSelecionada(p._id) }}>
                                    <span>{p.nome}</span>
                                </Menu.Item>
                            )}
                        </Menu>
                        <Button.Group size="small">
                            <DialogPasta projetoId={projetoAtual} close={load}>
                                <Button primary icon="plus" />
                            </DialogPasta>
                            {pasta ?
                                <DialogPasta pastaId={pasta._id} projetoId={projetoAtual} close={load}>
                                    <Button color="grey" icon="pencil" />
                                </DialogPasta>
                                : null}
                        </Button.Group>
                    </Grid.Column>
                    <Grid.Column>
                        <Menu
                            fluid
                            vertical
                            style={{ height: 400, overflowY: 'auto' }}>
                            {grupos.map(g =>
                                <Menu.Item
                                    key={g._id}
                                    active={grupo && g._id === grupo._id}
                                    onClick={() => { onGrupoSelecionado(g._id) }}>
                                    <span>{g.nome}</span>
                                </Menu.Item>
                            )}
                        </Menu>
                        {pasta ?
                            <Button.Group size="small">
                                <DialogGrupo pastaId={pasta._id} projetoId={projetoAtual}>
                                    <Button primary icon="plus" />
                                </DialogGrupo>
                                {grupo ?
                                    <DialogGrupo grupoId={grupo._id}  pastaId={pasta._id} projetoId={projetoAtual}>
                                        <Button color="grey" icon="pencil" />
                                    </DialogGrupo>
                                    : null}
                            </Button.Group>
                            : null
                        }
                    </Grid.Column>
                </Grid>
            </Modal.Content>

            <Modal.Actions>
                <Button.Group>
                    {pasta && grupo ? <Button primary content="Selecionar" onClick={onSelecionar} /> : null}
                    <Button content="Cancelar" onClick={onClose} />
                </Button.Group>
            </Modal.Actions>

        </Modal>
    )
}

export default Component