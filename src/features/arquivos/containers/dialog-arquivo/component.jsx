import React from 'react'

import DatePicker from './../../../../components/date-picker'

import {
    Modal, Button, Menu, List, Grid, Header, Segment, Form, Tab, Input, Select, Table
} from 'semantic-ui-react'

const Component = (props) => {

    const {
        opened, onOpen, onClose, children, arquivoId,
        numero, emissao, nomenclatura, revisao, assunto, descricao,
        carregando, sucesso, erro,
        onChange, onSalvar, onDeletar
    } = props

    return (
        <Modal
            open={opened}
            trigger={children}
            onOpen={onOpen}>

            <Header>Arquivo</Header>

            <Modal.Content>
                <Form>

                    <Header size="small" content="Informações" />

                    <Form.Group>

                        <Form.Field
                            width={6}
                            control={Input}
                            name="numero"
                            label="Número"
                            placeholder="0000"
                            value={numero}
                            onChange={onChange} />

                        <Form.Field width={6} >
                            <label>Emissão</label>
                            <DatePicker name="emissao" value={emissao} onChange={onChange} />
                        </Form.Field>

                    </Form.Group>

                    <Form.Field
                        width={16}
                        control={Input}
                        name="nomenclatura"
                        label="Nomenclatura"
                        placeholder=""
                        value={nomenclatura}
                        onChange={onChange} />

                    <Form.Group>

                        <Form.Field
                            width={8}
                            control={Input}
                            name="revisao"
                            label="Revisão"
                            placeholder=""
                            value={revisao}
                            onChange={onChange} />

                        <Form.Field
                            width={8}
                            control={Input}
                            name="assunto"
                            label="Assunto"
                            placeholder=""
                            value={assunto}
                            onChange={onChange} />

                    </Form.Group>

                </Form>

            </Modal.Content>

            <Modal.Actions>
                {arquivoId ? <Button primary content="Deletar" onClick={onDeletar} floated="left" /> : null}
                <Button.Group>
                    <Button primary content="Salvar" onClick={onSalvar} />
                    <Button content="Cancelar" onClick={onClose} />
                </Button.Group>
            </Modal.Actions>

        </Modal>
    )
}

export default Component