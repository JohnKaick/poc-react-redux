import React from 'react'

import { Modal, Header, Form, Button, Select, Input, TextArea } from 'semantic-ui-react'
import { Link, NavLink } from 'react-router-dom'

import DatePicker from './../../../../components/date-picker'

export default (props) => {
    const {
        id, desenho, arquivo, revisao, descricao, emissao,
        open, close, onOpen, onChange, onSalvar, onDeletar
    } = props

    return (
        <Modal
            open={open}
            trigger={props.children}
            onOpen={props.onOpen}>
            <Header>Arquivo</Header>
            <Modal.Content>
                <Form>
                    <Form.Group>

                        <Form.Field
                            width={8}
                            control={Input}
                            label='Desenho'
                            name="desenho"
                            value={desenho}
                            onChange={onChange} />

                        <Form.Field
                            width={8}
                            control={Input}
                            label='Arquivo'
                            name="arquivo"
                            value={arquivo}
                            onChange={onChange} />

                    </Form.Group>
                    <Form.Group>

                        <Form.Field
                            width={8}
                            control={Input}
                            label='Revisão'
                            name="revisao"
                            value={revisao}
                            onChange={onChange} />

                        <Form.Field width={8} >
                            <label>Emissão</label>
                            <DatePicker name="emissao" value={emissao} onChange={onChange} />
                        </Form.Field>

                    </Form.Group>

                    <Form.Group>
                        <Form.Field
                            width={16}
                            control={TextArea}
                            rows='5'
                            label='Descrição'
                            name="descricao"
                            value={descricao}
                            onChange={onChange} />
                    </Form.Group>

                </Form>
            </Modal.Content>
            <Modal.Actions>                
                    {id ? <Button color="grey" floated="left" icon="trash outline" content="Deletar" onClick={onDeletar} /> : null}
                    <Button.Group>
                        <Button primary icon="save" content="Salvar" onClick={onSalvar} />
                        <Button color="grey" icon="cancel" content="Cancelar" onClick={close} />
                    </Button.Group>                
            </Modal.Actions>
        </Modal>
    )
}