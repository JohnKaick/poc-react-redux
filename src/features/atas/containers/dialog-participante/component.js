import React from 'react'

import { Modal, Header, Form, Input, Button, Select, Checkbox, Grid, Message } from 'semantic-ui-react'

import DialogColaborador from './../../../../components/colaborador/cadastro.container'

const ListItem = ({ titulo, valor }) => (
    <p>
        <span style={{ color: 'grey' }}>{titulo}</span> <br /> {valor}
    </p>
)

export default (props) => {

    const {
        participantes, participante, projetoId, nome, sobrenome, email, cliente, area, cargo, presente,
        open, close, onSalvar, onVincular, onChange, onParticipanteChange
    } = props

    return (
        <Modal
            open={open}
            trigger={props.children}
            onOpen={props.onOpen}>

            <Header>Participante</Header>

            <Modal.Content>

                <Form>
                    <Form.Select
                        control={Select}
                        placeholder='Selecione'
                        name="participante"
                        value={participante}
                        onChange={onParticipanteChange}
                        options={participantes.map((p) => {
                            return { key: p._id, text: p.nome + ' ' + (p.sobrenome || ''), value: p._id }
                        })} />
                    <Form.Field>
                        <Checkbox
                            name="presente"
                            checked={!!presente}
                            onChange={onChange}
                            label='Presente' />
                    </Form.Field>
                </Form>
                <br />
                {(participante) ? (
                    <Grid divided='vertically'>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <ListItem titulo="Nome" valor={nome || '---'} />
                                <ListItem titulo="E-mail" valor={email || '---'} />
                                <ListItem titulo="Área" valor={area || '---'} />
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <ListItem titulo="Sobrenome" valor={sobrenome || '---'} />
                                <ListItem titulo="Nome da empresa" valor={cliente || '---'} />
                                <ListItem titulo="Cargo" valor={cargo || '---'} />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                ) : null}

                <Message info content="Se o participante estiver presente aparecerá na lista com a cor azul." />

            </Modal.Content>

            <Modal.Actions>
                <Button.Group className="ui left floated">
                    <DialogColaborador projetoId={projetoId}>
                        <Button secondary icon="plus" content="Cadastrar novo participante" />
                    </DialogColaborador>
                    {(participante) ? (
                        <DialogColaborador id={participante}>
                            <Button color="grey" icon="edit" content="Editar" />
                        </DialogColaborador>
                    ) : null}
                </Button.Group>
                <Button.Group>
                    {(participante) ? (
                        <Button primary icon="check" content="Adicionar" onClick={onVincular} />
                    ) : null}
                    <Button color="grey" icon="cancel" content="Cancelar" onClick={close} />
                </Button.Group>
            </Modal.Actions>

        </Modal>
    )
}