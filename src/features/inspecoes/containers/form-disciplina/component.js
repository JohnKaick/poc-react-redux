import React from 'react'

import { Menu, Segment, Form, Input,  } from 'semantic-ui-react'

export default props => {
    const { nome, onChange, onSalvar, onDeletar } = props

    return (
        <div>
            <Menu attached="top">
                <Menu.Item   header content="Editar disciplina" />
                <Menu.Menu position='right'>
                    <Menu.Item onClick={onSalvar} icon="save" content="Salvar" />
                    <Menu.Item onClick={onDeletar} icon="delete" content="Excluir" />
                </Menu.Menu>
            </Menu>
            <Segment attached>
                <Form>
                    <Form.Field
                        width={16}
                        control={Input}
                        label='Nome'
                        name="nome"
                        value={nome}
                        onChange={onChange} />
                </Form>
            </Segment>
        </div>
    )
}