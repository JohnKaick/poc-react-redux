import React from 'react'

import {
    Modal, Button, Menu, List, Grid, Header, Segment, Form, Tab, Input, Select, Table
} from 'semantic-ui-react'

const Component = (props) => {

    const {
        opened, onOpen, onClose, children,
        titulo, grupoId, nome, regraPadrao, regras, mask,
        carregando, sucesso, erro,
        onChange, onSalvar, onDeletar
    } = props

    return (
        <Modal
            open={opened}
            trigger={children}
            onOpen={onOpen}>
            <Header>Grupo</Header>

            <Modal.Content>
                <Form>

                    <Header size="small" content="Informações" />

                    <Form.Field
                        width={16}
                        control={Input}
                        name="nome"
                        label="Nome"
                        placeholder="Nome do grupo"
                        value={nome}
                        onChange={onChange} />

                    <Form.Group>

                        <Form.Field
                            width={6}
                            control={Input}
                            name="mask"
                            label="Regra de nomenclatura"
                            placeholder="padrão de nomenclatura"
                            value={mask}
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
                {grupoId ? <Button primary content="Deletar" onClick={onDeletar} floated="left" /> : null}
                <Button.Group>
                    <Button primary content="Salvar" onClick={onSalvar} />
                    <Button content="Cancelar" onClick={onClose} />
                </Button.Group>
            </Modal.Actions>

        </Modal >
    )
}

export default Component