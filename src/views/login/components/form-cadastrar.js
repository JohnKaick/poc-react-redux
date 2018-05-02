import React from 'react'

import { Form, Input, Button, Segment, Message } from 'semantic-ui-react'

export default (props) => {

    const {
        globalization,
        cadastroExibicao,
        cadastroEmail,
        cadastroSenha,
        carregando,
        onChange,
        onCadastrar,
        onToggle
    } = props

    return (

        <Form onSubmit={onCadastrar}>

            <Form.Field>
                <Input
                    placeholder={globalization['view_login_cadastro_input_exibicao']}
                    icon="user"
                    iconPosition="left"
                    name="cadastroExibicao"
                    value={cadastroExibicao}
                    type="text"
                    onChange={onChange}
                />
            </Form.Field>

            <Form.Field>
                <Input
                    placeholder={globalization['view_login_cadastro_input_email']}
                    icon="mail"
                    iconPosition="left"
                    name="cadastroEmail"
                    value={cadastroEmail}
                    type="text"
                    onChange={onChange}
                />
            </Form.Field>

            <Form.Field>
                <Input
                    placeholder={globalization['view_login_cadastro_input_senha']}
                    icon="key"
                    iconPosition="left"
                    name="cadastroSenha"
                    value={cadastroSenha}
                    type="password"
                    onChange={onChange}
                />
            </Form.Field>

            <Button
                primary
                type="submit"
                loading={carregando}
                disabled={carregando}
                icon="add user"
                labelPosition="right"
                content={globalization['view_login_cadastro_button_cadastrar']} />

        </Form>
    )
}