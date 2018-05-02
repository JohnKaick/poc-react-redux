import React from 'react'

import { Modal, Header, Form, Button, Select, Input, TextArea } from 'semantic-ui-react'
import { Link, NavLink } from 'react-router-dom'

const SelectSituacao = [
    { key: 'pendente', text: 'Pendente', value: 'pendente' },
    { key: 'finalizado', text: 'Finalizado', value: 'finalizado' },
    { key: 'informativo', text: 'Informativo', value: 'informativo' },
]

export default (props) => {
    const {
        situacaoSugerida, mensagem,
        open, close, onOpen, onChange, onSalvar, onSituacaoChange
    } = props

    return (
        <Modal
            open={open}
            trigger={props.children}
            onOpen={props.onOpen}
            size='tiny'>
            <Header>Replica</Header>
            <Modal.Content>
                <Form>
                    <Form.Field
                        width={16}
                        control={Select}
                        label='Situação sugerida'
                        value={situacaoSugerida}
                        onChange={onSituacaoChange}
                        options={SelectSituacao} />

                    <Form.Field
                        width={16}
                        control={TextArea}
                        rows='10'
                        label='Mensagem'
                        name="mensagem"
                        value={mensagem}
                        onChange={onChange} />

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