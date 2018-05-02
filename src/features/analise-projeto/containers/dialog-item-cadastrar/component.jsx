import React from 'react'

import { Modal, Header, Form, Input, TextArea, Table, Button, Select } from 'semantic-ui-react'

import DatePicker from './../../../../components/date-picker'

const SelectSituacao = [
    { key: 'pendente', text: 'Pendente', value: 'pendente' },
    { key: 'finalizado', text: 'Finalizado', value: 'finalizado' },
    { key: 'informativo', text: 'Informativo', value: 'informativo' },
]

export default (props) => {

    const {
        id, assunto, escopo, situacao, anomalia, showItemResult,
        open, close, onSalvar, onChange, onSituacaoChange,
    } = props

    return (
        <Modal
            open={open}
            trigger={props.children}
            onOpen={props.onOpen}>
            <Header>Adicionar item</Header>
            <Modal.Content>
                <Form>
                    <Form.Group>

                        <Form.Field
                            width={16}
                            control={Input}
                            label='Assunto'
                            name="assunto"
                            value={assunto}
                            onChange={onChange} />

                    </Form.Group>

                    <Form.Group>
                        <Form.Field
                            width={8}
                            control={Input}
                            label='Escopo'
                            name="escopo"
                            value={escopo}
                            onChange={onChange} />

                        <Form.Field
                            width={8}
                            control={Select}
                            label='Situação'
                            value={situacao}
                            onChange={onSituacaoChange}
                            options={SelectSituacao} />
                    </Form.Group>

                    <Form.Field
                        width={16}
                        control={TextArea}
                        rows='15'
                        label='Anomalia'
                        name="anomalia"
                        value={anomalia}
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