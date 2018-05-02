import React from 'react'

import { Modal, Header, Form, Button, Select, Input, TextArea } from 'semantic-ui-react'
import { Link, NavLink } from 'react-router-dom'

import DatePicker from './../../../../components/date-picker'

const SelectTempo = [
    { key: 'limpo', text: 'Limpo', value: 'limpo' },
    { key: 'nublado', text: 'Nublado', value: 'nublado' },
    { key: 'chuva', text: 'Chuva', value: 'chuva' },
    { key: 'impraticavel', text: 'Impraticavel', value: 'impraticavel' },
]

export default (props) => {
    const {
        projetoId, id, local, dataHora, descricao, tempoManha, tempoTarde, tempoNoite,
        open, close, onOpen, onChange, onSalvar
    } = props

    return (
        <Modal
            open={open}
            trigger={props.children}
            onOpen={props.onOpen}>
            <Header>Diário</Header>
            <Modal.Content>
                <Form>
                    <Form.Group>

                        <Form.Field width={4} >
                            <label>Data</label>
                            <DatePicker name="dataHora" value={dataHora} onChange={onChange} />
                        </Form.Field>

                        <Form.Field
                            width={4}
                            control={Select}
                            label='Tempo manhã'
                            name='tempoManha'
                            value={tempoManha}
                            onChange={onChange}
                            options={SelectTempo} />

                        <Form.Field
                            width={4}
                            control={Select}
                            label='Tempo tarde'
                            name='tempoTarde'
                            value={tempoTarde}
                            onChange={onChange}
                            options={SelectTempo} />

                        <Form.Field
                            width={4}
                            control={Select}
                            label='Tempo noite'
                            name='tempoNoite'
                            value={tempoNoite}
                            onChange={onChange}
                            options={SelectTempo} />

                    </Form.Group>
                    <Form.Group>

                        <Form.Field
                            width={16}
                            control={Input}
                            label='Local'
                            name="local"
                            value={local}
                            onChange={onChange} />

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
                            to={'/' + projetoId + '/diario-obra'} />
                    }
                    <Button color="grey" icon="cancel" content="Cancelar" onClick={close} />
                </Button.Group>
            </Modal.Actions>
        </Modal>
    )
}