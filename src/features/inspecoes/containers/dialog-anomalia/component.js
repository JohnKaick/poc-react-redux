import React from 'react'

import { Modal, Header, Form, Input, TextArea, Table, Button } from 'semantic-ui-react'

export default (props) => {

    const {
        id, exibicao, descritivo, caracteristica, questao, diagnostico, gravidades,
        open, close, change, changeGravidade, adicionarGravidade, onSalvar, deletar
    } = props

    return (
        <Modal
            open={open}
            trigger={props.children}
            onOpen={props.onOpen}>
            <Header>Anomalia</Header>
            <Modal.Content>
                <Form>
                    <Form.Group>
                        <Form.Field
                            width={10}
                            control={Input}
                            label='Exibicao'
                            placeholder='Exibicao'
                            name="exibicao"
                            value={exibicao}
                            onChange={change} />
                        <Form.Field
                            width={6}
                            control={Input}
                            label='Caracteristica'
                            placeholder='Caracteristica'
                            name="caracteristica"
                            value={caracteristica}
                            onChange={change} />
                    </Form.Group>
                    <Form.Field
                        width={16}
                        control={Input}
                        label='Questao'
                        placeholder='Questao'
                        name="questao"
                        value={questao}
                        onChange={change} />
                    <Form.Field
                        width={16}
                        control={TextArea}
                        label='Descritivo'
                        placeholder='Descritivo'
                        name="descritivo"
                        value={descritivo}
                        onChange={change} />
                    <Form.Field
                        width={16}
                        control={TextArea}
                        label='Diagnostico'
                        placeholder='Diagnostico'
                        name="diagnostico"
                        value={diagnostico}
                        onChange={change} />
                </Form>
                <Table compact>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Nome</Table.HeaderCell>
                            <Table.HeaderCell>Gravidade</Table.HeaderCell>
                            <Table.HeaderCell>Urgência</Table.HeaderCell>
                            <Table.HeaderCell>Tendência</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {gravidades.map((g, i) => (
                            <Table.Row key={i}>
                                <Table.Cell width={10}>
                                    <Input
                                        fluid
                                        size="small"
                                        name="nome"
                                        placeholder="gravidade"
                                        value={g.nome}
                                        onChange={(e, { name, value }) => { changeGravidade(name, value, i) }} />
                                </Table.Cell>
                                <Table.Cell width={2}>
                                    <Input
                                        fluid
                                        size="small"
                                        name="g"
                                        value={g.g}
                                        onChange={(e, { name, value }) => { changeGravidade(name, value, i) }} />
                                </Table.Cell>
                                <Table.Cell width={2}>
                                    <Input
                                        fluid
                                        size="small"
                                        name="u"
                                        value={g.u}
                                        onChange={(e, { name, value }) => { changeGravidade(name, value, i) }} />
                                </Table.Cell>
                                <Table.Cell width={2}>
                                    <Input
                                        fluid
                                        size="small"
                                        name="t"
                                        value={g.t}
                                        onChange={(e, { name, value }) => { changeGravidade(name, value, i) }} />
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </Modal.Content>
            <Modal.Actions>
                <Button color="grey" floated="left" icon="trash outline" content="Deletar" onClick={() => { deletar(id) }} />
                <Button.Group>
                    <Button primary icon="save" content="Salvar" onClick={onSalvar} />
                    <Button color="grey" icon="add" content="Adicionar Gravidade" onClick={adicionarGravidade} />
                    <Button color="grey" icon="cancel" content="Cancelar" onClick={close} />
                </Button.Group>
            </Modal.Actions>
        </Modal>
    )
}