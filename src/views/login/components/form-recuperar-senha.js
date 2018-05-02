import React from 'react'

import { Form, Input, Button, Segment, Icon, Message } from 'semantic-ui-react'

export default (props) => {

    const {
        globalization,
        recuperarSenha,
        recuperarConfirmarSenha,
        carregando,
        onChange,
        onTrocarSenha,
        onToggle,
    } = props

    return (
        <Form onSubmit={onTrocarSenha}>

            <Form.Field>
                <Input
                    placeholder={globalization['view_login_recuperar_senha_input_recuperar_senha']}
                    icon="key"
                    iconPosition="left"
                    name="recuperarSenha"
                    value={recuperarSenha}
                    type="password"
                    onChange={onChange}
                />
            </Form.Field>

            <Form.Field>
                <Input
                    placeholder={globalization['view_login_recuperar_senha_input_confirmar_senha']}
                    icon="key"
                    iconPosition="left"
                    name="recuperarConfirmarSenha"
                    value={recuperarConfirmarSenha}
                    type="password"
                    onChange={onChange}
                />
            </Form.Field>

            <Button
                primary
                type="submit"
                disabled={carregando}
                loading={carregando}
                content={globalization['view_login_recuperar_senha_button_alterar_senha']} />

        </Form>
    )
}