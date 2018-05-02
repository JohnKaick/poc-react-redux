import React from 'react'

import { Header, Segment, Form, Input, Select, TextArea, Button, Table, Menu } from 'semantic-ui-react'

import DialogAnomalia from './../dialog-anomalia'

export default (props) => {

    const {
        id,
        categoria, descritivo, disciplina, metodo, nome, pasta, pesoGut, prefix, vidaUtil,
        anomalia, anomalias,
        onSalvar, onDeletar, change, selecionarAnomalia
    } = props

    return (
        <div>

            <Menu attached="top" color="grey" inverted>
                <Menu.Item icon="pin" header content="Elemento" />
                <Menu.Menu position='right'>
                    <Menu.Item onClick={onSalvar} icon="save" content="Salvar" />
                    <Menu.Item onClick={onDeletar} icon="delete" content="Excluir" />
                </Menu.Menu>
            </Menu>

            <Segment attached>
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
            </Segment>

            <Menu attached color="grey" inverted>
                <Menu.Item icon="pin" header content="Anomalias" />

                <Menu.Menu position='right'>
                    <DialogAnomalia elementoId={id}>
                        <Menu.Item onClick={() => { }} icon="add" content="Adicionar" />
                    </DialogAnomalia>
                    {anomalia ? (
                        <DialogAnomalia elementoId={id} anomaliaId={anomalia}>
                            <Menu.Item onClick={() => { }} icon="edit" content="Editar" />
                        </DialogAnomalia>
                    ) : null}
                    {false && anomalia ? (
                        <Menu.Item onClick={() => { }} icon="delete" content="Excluir" />
                    ) : null}
                </Menu.Menu>

            </Menu>

            <Table selectable compact attached="bottom" style={{ cursor: 'pointer' }}>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Exibição</Table.HeaderCell>
                        <Table.HeaderCell>Característica</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {anomalias.map(a =>
                        <Table.Row
                            key={a._id}
                            active={anomalia === a._id}
                            onClick={() => { selecionarAnomalia(a._id) }}>
                            <Table.Cell>
                                <span>{a.exibicao}</span>
                            </Table.Cell>
                            <Table.Cell>
                                <span>{a.caracteristica}</span>
                            </Table.Cell>
                        </Table.Row>
                    )}
                </Table.Body>
            </Table>

        </div>
    )
}