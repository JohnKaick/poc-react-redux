import React from 'react'

import { Modal, Header, Form, Input, TextArea, Table, Button, Select, Dropdown } from 'semantic-ui-react'

export default (props) => {

    const {
        nome, sobrenome, email, cliente, area, cargo,
        open, close, onChange, onSalvar
    } = props

    return (
        <Modal
            open={open}
            trigger={props.children}
            onOpen={props.onOpen}>
            <Header>Cadastrar novo participante</Header>
            <Modal.Content>
                <Form>
                    <Form.Group>
                        <Form.Field
                            width={8}
                            control={Input}
                            label='Nome'
                            name="nome"
                            value={nome}
                            onChange={onChange} />

                        <Form.Field
                            width={8}
                            control={Input}
                            label='Sobrenome'
                            name="sobrenome"
                            value={sobrenome}
                            onChange={onChange} />

                    </Form.Group>
                    <Form.Group>

                        <Form.Field
                            width={8}
                            control={Input}
                            label='E-mail'
                            name="email"
                            value={email}
                            onChange={onChange} />

                        <Form.Field
                            width={8}
                            control={Input}
                            label='Nome da empresa'
                            name="cliente"
                            value={cliente}
                            onChange={onChange} />

                    </Form.Group>
                    <Form.Group>

                        <Form.Field
                            width={8}
                            control={Input}
                            label='Área'
                            name="area"
                            value={area}
                            onChange={onChange} />

                        <Form.Field
                            width={8}
                            control={Input}
                            label='Cargo'
                            name="cargo"
                            value={cargo}
                            onChange={onChange} />

                    </Form.Group>
                </Form>
            </Modal.Content>
            <Modal.Actions>
                <Button.Group>
                    <Button primary icon="save" content="Salvar" onClick={onSalvar} />
                    <Button color="grey" icon="cancel" content="Cancelar" onClick={close} />
                </Button.Group>
            </Modal.Actions>
        </Modal>
    )
}