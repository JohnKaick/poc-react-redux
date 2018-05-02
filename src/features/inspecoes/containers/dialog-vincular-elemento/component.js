import React from 'react'

import { Modal, Header, Form, Input, TextArea, Table, Button, Select, List, Dropdown } from 'semantic-ui-react'

export default (props) => {

    const {
        nome, tag, descritivo,
        disciplina, disciplinas = [], pasta, pastas, modelo, modelos,
        onSalvar, onDeletar, onOpen, onClose, open,
        onChange, onDisciplinaSelected, onPastaSelected, onModeloSelected
    } = props

    return (
        <Modal
            open={open}
            trigger={props.children}
            onOpen={props.onOpen}>

            <Header>Vincular Elemento</Header>

            <Modal.Content>
                <Form>

                    <Form.Group>

                        <Form.Field
                            width={6}
                            control={Select}
                            label='Disciplina'
                            options={disciplinas.map(d => {
                                return { key: d._id, text: d.nome, value: d._id }
                            })}
                            placeholder='Disciplina'
                            name="disciplina"
                            onChange={onDisciplinaSelected} />

                        <Form.Field
                            width={6}
                            control={Select}
                            label='Pasta'
                            options={pastas.map(p => {
                                return { key: p._id, text: p.nome, value: p._id }
                            })}
                            placeholder='Pasta'
                            name="pasta"
                            onChange={onPastaSelected} />

                    </Form.Group>

                    <Form.Field
                        width={16}
                        control={Dropdown}
                        label='Modelo'
                        fluid search selection
                        options={modelos.map(m => {
                            return { key: m._id, text: m.nome, value: m._id }
                        })}
                        placeholder='Modelo'
                        name="modelo"
                        onChange={onModeloSelected} />

                    <Form.Group>

                        <Form.Field
                            width={12}
                            control={Input}
                            label='Nome'
                            placeholder='Nome'
                            name="nome"
                            value={nome}
                            onChange={onChange} />

                        <Form.Field
                            width={4}
                            control={Input}
                            label='Tag'
                            placeholder='Tag'
                            name="tag"
                            value={tag}
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
                <Button.Group>
                    <Button primary icon="save" content="Salvar" onClick={onSalvar} />
                    <Button color="grey" icon="cancel" content="Cancelar" onClick={onClose} />
                </Button.Group>
            </Modal.Actions>

        </Modal>
    )
}