import React from 'react'

import { Modal, Header, Form, Button, Select, Input, TextArea } from 'semantic-ui-react'
import { Link, NavLink } from 'react-router-dom'

import DatePicker from './../../../../components/date-picker'

export default (props) => {
    const {
        nome, valor,
        open, close, onOpen, onChange, onSalvar, onDeletar
    } = props

    return (
        <Modal
            open={open}
            trigger={props.children}
            onOpen={props.onOpen}>
            <Header>Parâmetro</Header>
            <Modal.Content>
                <Form>
                    <Form.Field
                        width={16}
                        control={Input}
                        label='Nome'
                        name="nome"
                        value={nome}
                        onChange={onChange} />
                    <Form.Field
                        width={16}
                        control={TextArea}
                        rows={10}
                        label='Valor'
                        name="valor"
                        value={valor}
                        onChange={onChange} />
                </Form>
            </Modal.Content>
            <Modal.Actions>
                <Button floated="left" icon="trash" content="Deletar" onClick={onDeletar} />
                <Button.Group>
                    <Button primary icon="save" content="Salvar" onClick={onSalvar} />
                    <Button color="grey" icon="cancel" content="Cancelar" onClick={close} />
                </Button.Group>
            </Modal.Actions>
        </Modal>
    )
}