import React from 'react'

import { Modal, Header, Form, Input, TextArea, Table, Button, Select } from 'semantic-ui-react'

export default (props) => {

    const {
        id, nome, open, close, change, onSalvar, deletar
    } = props

    return (
        <Modal
            size="small"
            open={open}
            trigger={props.children}
            onOpen={props.onOpen}>
            <Header>Disciplina</Header>
            <Modal.Content>
                <Form>
                    <Form.Field
                        control={Input}
                        label='Nome'
                        placeholder='Nome'
                        name="nome"
                        value={nome}
                        onChange={change} />
                </Form>
            </Modal.Content>
            <Modal.Actions>
                {id ? <Button floated="left" primary icon="trash" content="Deletar" onClick={() => { deletar(id) }} /> : null}
                <Button.Group>
                    <Button primary icon="save" content="Salvar" onClick={onSalvar} />
                    <Button color="grey" icon="cancel" content="Cancelar" onClick={close} />
                </Button.Group>
            </Modal.Actions>
        </Modal>
    )
}