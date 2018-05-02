import React from 'react'
import {
    Modal, Header, Form, Button, Select, Input, TextArea
} from 'semantic-ui-react'

export default (props) => {
    const {
        empreendimento, exibicao, informacao, areaConstruida, areaPrivativa, areaLocavel,
        open, close, onOpen, onChange, onSalvar
    } = props

    return (
        <Modal
            open={open}
            trigger={props.children}
            onOpen={props.onOpen}
            size='large'>
            <Header>Editar projeto</Header>
            <Modal.Content>
                <Form>
                    <Form.Group>

                        <Form.Field
                            width={16}
                            control={Input}
                            label='Empreendimento'
                            name="empreendimento"
                            value={empreendimento}
                            onChange={onChange} />

                    </Form.Group>
                    <Form.Group>

                        <Form.Field
                            width={16}
                            control={Input}
                            label='Nome de exibição'
                            name="exibicao"
                            value={exibicao}
                            onChange={onChange} />

                    </Form.Group>
                    <Form.Group>

                        <Form.Field
                            width={6}
                            type="number"
                            control={Input}
                            label='Área construida'
                            name="areaConstruida"
                            value={areaConstruida}
                            onChange={onChange} />

                        <Form.Field
                            width={5}
                            type="number"
                            control={Input}
                            label='Área privativa'
                            name="areaPrivativa"
                            value={areaPrivativa}
                            onChange={onChange} />

                        <Form.Field
                            width={5}
                            type="number"
                            control={Input}
                            label='Área locavel'
                            name="areaLocavel"
                            value={areaLocavel}
                            onChange={onChange} />

                    </Form.Group>

                    <Form.Field
                        width={16}
                        control={TextArea}
                        rows={10}
                        label='Infomações adicionais'
                        name="informacao"
                        value={informacao}
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