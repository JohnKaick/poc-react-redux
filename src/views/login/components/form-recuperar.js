import React from 'react'

import { Form, Input, Button, Segment, Icon, Message } from 'semantic-ui-react'

export default (props) => {

    const {
        globalization,
        recuperarEmail,
        carregando,
        onChange,
        onRecuperar,
        onToggle,
    } = props

    return (
        <Form onSubmit={onRecuperar}>

            <Form.Field>
                <Input
                    placeholder={globalization['view_login_recuperar_input_recuperar_email']}
                    icon="mail"
                    iconPosition="left"
                    name="recuperarEmail"
                    value={recuperarEmail}
                    type="text"
                    onChange={onChange}
                />
            </Form.Field>

            <Button
                primary
                type="submit"
                icon='mail'
                labelPosition='right'
                disabled={carregando}
                loading={carregando}
                content={globalization['view_login_recuperar_button_recuperar']} />

        </Form>
    )
}