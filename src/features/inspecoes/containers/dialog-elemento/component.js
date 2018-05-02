import React from 'react'

import { Modal, Header, Form, Input, TextArea, Table, Button, Select } from 'semantic-ui-react'

export default (props) => {

    const {
        categoria, descritivo, metodo, nome, pesoGut, prefix, vidaUtil,
        open, close, change, onSalvar
    } = props

    return (
        <Modal
            open={open}
            trigger={props.children}
            onOpen={props.onOpen}>
            <Header>Anomalia</Header>
            <Modal.Content>
                <Form>
                    <Form.Group>

                        <Form.Field
                            width={12}
                            control={Input}
                            label='Nome'
                            placeholder='Nome'
                            name="nome"
                            value={nome}
                            onChange={change} />

                        <Form.Field
                            width={4}
                            control={Input}
                            label='Prefixo'
                            placeholder='Prefixo'
                            name="prefix"
                            value={prefix}
                            onChange={change} />

                    </Form.Group>
                    <Form.Group>

                        <Form.Field
                            width={8}
                            control={Select}
                            label='Categoria'
                            options={[]}
                            placeholder='Categoria'
                            name="categoria"
                            value={categoria}
                            onChange={change} />

                        <Form.Field
                            width={4}
                            control={Input}
                            label='Vida útil'
                            placeholder='Vida útil'
                            name="vidaUtil"
                            value={vidaUtil}
                            onChange={change} />

                        <Form.Field
                            width={4}
                            control={Input}
                            label='Peso GUT'
                            placeholder='Peso GUT'
                            name="pesoGut"
                            value={pesoGut}
                            onChange={change} />

                    </Form.Group>

                    <Form.Field
                        control={TextArea}
                        label='Descritivo'
                        placeholder='Descritivo'
                        name="descritivo"
                        value={descritivo}
                        onChange={change} />

                    <Form.Field
                        control={TextArea}
                        label='Método construtivo'
                        placeholder='Método construtivo'
                        name="metodo"
                        value={metodo}
                        onChange={change} />

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