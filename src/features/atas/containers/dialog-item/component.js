import React from 'react'

import { Modal, Header, Form, Input, TextArea, Table, Button, Select } from 'semantic-ui-react'

import DatePicker from './../../../../components/date-picker'

const SelectSituacao = [
    { key: 'pendente', text: 'Pendente', value: 'pendente' },
    { key: 'finalizada', text: 'Finalizado', value: 'finalizada' },
    { key: 'informativa', text: 'Informativo', value: 'informativa' },
]

export default (props) => {

    const {
        id, assunto, descricao, responsavel, prazo, situacao,
        open, close, onChange, onSituacaoChange, onDeletar, onSalvar
    } = props

    return (
        <Modal
            open={open}
            trigger={props.children}
            onOpen={props.onOpen}>
            <Header>Plano de ação</Header>
            <Modal.Content>
                <Form>
                    <Form.Group>

                        <Form.Field
                            width={8}
                            control={Select}
                            label='Situação'
                            value={situacao}
                            onChange={onSituacaoChange}
                            options={SelectSituacao} />

                        <Form.Field width={8} >
                            <label>Prazo</label>
                            <DatePicker name="prazo" value={prazo} onChange={onChange} />
                        </Form.Field>
                    </Form.Group>
                    <Form.Group>

                        <Form.Field
                            width={8}
                            control={Input}
                            label='Assunto'
                            placeholder='Assunto'
                            name="assunto"
                            value={assunto}
                            onChange={onChange} />

                        <Form.Field
                            width={8}
                            control={Input}
                            label='Responsável'
                            placeholder='Responsável'
                            name="responsavel"
                            value={responsavel}
                            onChange={onChange} />

                    </Form.Group>

                    <Form.Field
                        width={16}
                        control={TextArea}
                        rows='5'
                        label='Descrição'
                        placeholder='Descrição'
                        name="descricao"
                        value={descricao}
                        onChange={onChange} />

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