import React from 'react'

import { Modal, Header, Form, Input, TextArea, Table, Button, Select } from 'semantic-ui-react'
import { Link, NavLink } from 'react-router-dom'

import DatePicker from './../../../../components/date-picker'

export default (props) => {

    const {
        id, nome, dataHora, local, situacao, pauta, projetoId,
        open, close, onOpen, onChange, onSalvar
    } = props

    return (
        <Modal
            open={open}
            trigger={props.children}
            onOpen={props.onOpen}>
            <Header>Ata</Header>
            <Modal.Content>
                <Form>
                    <Form.Group>

                        <Form.Field
                            width={11}
                            control={Input}
                            label='Nome'
                            placeholder='Nome'
                            name="nome"
                            value={nome}
                            onChange={onChange} />

                        <Form.Field width={5} >
                            <label>Data</label>
                            <DatePicker name="dataHora" value={dataHora} onChange={onChange} />
                        </Form.Field>
                    </Form.Group>
                    <Form.Group>

                        <Form.Field
                            width={11}
                            control={Input}
                            label='Local'
                            placeholder='Local'
                            name="local"
                            value={local}
                            onChange={onChange} />

                        <Form.Field
                            width={5}
                            control={Input}
                            label='Situação'
                            name="situacao"
                            value={situacao}
                            onChange={onChange}
                            disabled />

                    </Form.Group>

                    <Form.Field
                        width={16}
                        control={TextArea}
                        rows='5'
                        label='Pauta'
                        placeholder='Pauta'
                        name="pauta"
                        value={pauta}
                        onChange={onChange} />

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
                            to={'/' + projetoId + '/atas'} />
                    }
                    <Button color="grey" icon="cancel" content="Cancelar" onClick={close} />
                </Button.Group>
            </Modal.Actions>
        </Modal>
    )
}