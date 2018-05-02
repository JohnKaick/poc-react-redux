import React from 'react'

import {
    Modal, Button, Menu, List, Grid, Header, Segment, Form, Tab, Input, Select, Table
} from 'semantic-ui-react'

const Component = (props) => {

    const {
        opened, onOpen, onClose, children,
        titulo, pastaId, nome, regraPadrao, regras,
        carregando, sucesso, erro,
        onChange, onSalvar, onDeletar
    } = props

    return (
        <Modal
            open={opened}
            trigger={children}
            onOpen={onOpen}>
            <Header>{titulo}</Header>

            <Modal.Content>
                <Form>

                    <Header size="small" content="Informações" />

                    <Form.Group>

                        <Form.Field
                            width={10}
                            control={Input}
                            name="nome"
                            label="Nome"
                            placeholder="Nome da pasta"
                            value={nome}
                            onChange={onChange} />

                        <Form.Field
                            width={6}
                            control={Select}
                            name="regraPadrao"
                            label="Regra padrão"
                            value={regraPadrao}
                            placeholder="Regra padrão da pasta"
                            options={[
                                { key: 'r', value: 'r', text: 'Leitura' },
                                { key: 'w', value: 'w', text: 'Escrita' },
                                { key: 'b', value: 'b', text: 'Bloqueado' }
                            ]}
                            onChange={onChange} />

                    </Form.Group>

                    <Header size="small" content="Participantes" />

                    <Table compact>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Nome</Table.HeaderCell>
                                <Table.HeaderCell>Permissao</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>Nome</Table.Cell>
                                <Table.Cell>Permissao</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>

                </Form>
            </Modal.Content>

            <Modal.Actions>
                {pastaId ? <Button primary content="Deletar" onClick={onDeletar} floated="left" /> : null}
                <Button.Group>
                    <Button primary content="Salvar" onClick={onSalvar} />
                    <Button content="Cancelar" onClick={onClose} />
                </Button.Group>
            </Modal.Actions>

        </Modal >
    )
}

export default Component