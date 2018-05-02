import React from 'react'

import { Modal, Header, Form, Input, TextArea, Table, Button, Select } from 'semantic-ui-react'

export default (props) => {

    const {
        id, nome, descritivo, tag, prefix, imagens,
        onChange, onSalvar, onDeletar, onOpen, onClose, open, grupoPaiNome
    } = props

    return (
        <Modal
            open={open}
            trigger={props.children}
            onOpen={props.onOpen}>
            <Header>{grupoPaiNome ? 'Novo grupo filho de: ' + grupoPaiNome : 'Novo grupo raiz'}</Header>
            <Modal.Content>
                <Form>

                    <Form.Field
                        width={16}
                        control={Input}
                        label='Nome'
                        placeholder='Nome'
                        name="nome"
                        value={nome}
                        onChange={onChange} />

                    <Form.Group>

                        <Form.Field
                            width={4}
                            control={Input}
                            label='Tag'
                            placeholder='Tag'
                            name="tag"
                            value={tag}
                            onChange={onChange} />

                        <Form.Field
                            width={4}
                            control={Input}
                            label='Prefixo'
                            placeholder='Prefixo'
                            name="prefix"
                            value={prefix}
                            onChange={onChange} />

                    </Form.Group>

                    <Form.Field
                        control={TextArea}
                        label='Descritivo'
                        placeholder=''
                        name="descritivo"
                        value={descritivo}
                        onChange={onChange} />

                </Form>
            </Modal.Content>

            <Modal.Actions>
                {id ? <Button floated="left" primary icon="trash" content="Deletar" onClick={onDeletar} /> : null}
                <Button.Group>
                    <Button primary icon="save" content="Salvar" onClick={onSalvar} />
                    <Button color="grey" icon="cancel" content="Cancelar" onClick={onClose} />
                </Button.Group>
            </Modal.Actions>

        </Modal>
    )
}