import React from 'react'

import { Modal, Header, Form, Button, Select, Input, TextArea } from 'semantic-ui-react'
import { Link, NavLink } from 'react-router-dom'

import DatePicker from './../../../../components/date-picker'

export default (props) => {
    const {
        projetoId, id, titulo, revisao, data,
        open, close, onOpen, onChange, onSalvar
    } = props

    return (
        <Modal
            open={open}
            trigger={props.children}
            onOpen={props.onOpen}
            size='small'>
            <Header>Análise de projeto</Header>
            <Modal.Content>
                <Form>
                    <Form.Group>

                        <Form.Field
                            width={16}
                            control={Input}
                            label='Título'
                            name="titulo"
                            value={titulo}
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
                            <label>Data</label>
                            <DatePicker name="data" value={data} onChange={onChange} />
                        </Form.Field>

                    </Form.Group>

                </Form>
            </Modal.Content>
            <Modal.Actions>
                <Button.Group>
                    {id ?
                        <Button primary
                            icon="save"
                            content="Salvar"
                            onClick={onSalvar} />
                        :
                        <Button primary
                            icon="save"
                            content="Salvar"
                            onClick={onSalvar}
                            as={NavLink}
                            to={'/' + projetoId + '/analise-projeto'} />
                    }
                    <Button color="grey" icon="cancel" content="Cancelar" onClick={close} />
                </Button.Group>
            </Modal.Actions>
        </Modal>
    )
}