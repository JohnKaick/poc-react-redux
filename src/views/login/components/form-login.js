import React from 'react'

import { Form, Input, Button, Header } from 'semantic-ui-react'

export default (props) => {

    const {
        globalization,
        loginUsuario,
        loginSenha,
        carregando,
        onChange,
        onLogar,
        onToggle
    } = props

    return (
        <Form onSubmit={onLogar}>

            <Form.Field>
                <Input
                    placeholder={globalization['view_login_login_input_usuario']}
                    icon="mail"
                    iconPosition="left"
                    name="loginUsuario"
                    type="text"
                    value={loginUsuario}
                    onChange={onChange}
                />
            </Form.Field>

            <Form.Field>
                <Input
                    placeholder={globalization['view_login_login_input_senha']}
                    icon="key"
                    iconPosition="left"
                    name="loginSenha"
                    type="password"
                    value={loginSenha}
                    onChange={onChange}
                />
            </Form.Field>

            <Button
                primary
                type="submit"
                icon='right arrow'
                labelPosition='right'
                disabled={carregando}
                loading={carregando}
                content={globalization['view_login_login_button_entrar']} />

        </Form>
    )
}