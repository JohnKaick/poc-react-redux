import React from 'react'
import { Container, Grid, Form, Segment, Button, Image, Input, Menu, Header, Card } from 'semantic-ui-react'
import SuperMenu from './../../components/super-menu'
import EnviarArquivo from './../../components/enviar-arquivo'

export default (props) => {

    let {
        senhaAtual, novaSenha, repetirNovaSenha,
        usuario, carregando, error, uploadAvatar, onSalvar, onAlterarSenha, change, changePassword
    } = props

    let {
        nome = "",
        sobrenome = "",
        exibicao = "",
        email = "",
        telefone = "",
        celular = "",
        avatar = ""
    } = usuario || {}

    return (
        <div>
            <SuperMenu menus={[
                <Menu.Item key="header" header>Perfil</Menu.Item>
            ]} />
            <Grid container>
                <Grid.Row>
                    <Grid.Column width={12}>

                        <Form>

                            <Header content="Perfil" subheader="Informações pessoais" />

                            <Form.Field
                                name="nome"
                                label="Nome"
                                value={nome}
                                control={Input}
                                onChange={change}
                            />
                            <Form.Field
                                name="sobrenome"
                                label="Sobrenome"
                                value={sobrenome}
                                control={Input}
                                onChange={change}
                            />
                            <Form.Field
                                name="exibicao"
                                label="Exibição"
                                value={exibicao}
                                control={Input}
                                onChange={change}
                            />
                            <Form.Field
                                name="email"
                                label="E-mail"
                                value={email}
                                control={Input}
                                onChange={change}
                                disabled
                            />
                            <Form.Group widths="equal">
                                <Form.Field
                                    name="telefone"
                                    label="Telefone"
                                    value={telefone}
                                    control={Input}
                                    onChange={change}
                                />
                                <Form.Field
                                    name="celular"
                                    label="Celular"
                                    value={celular}
                                    control={Input}
                                    onChange={change}
                                />
                            </Form.Group>
                            <Button
                                primary
                                type="submit"
                                icon="save"
                                loading={carregando}
                                content="Salvar"
                                onClick={onSalvar}
                            />
                        </Form>

                        <br />

                        <Form>
                            <Header content="Segurança" subheader="Alterar senha de acesso" />
                            <Form.Field
                                name="senhaAtual"
                                label="Senha atual"
                                control={Input}
                                type="password"
                                value={senhaAtual}
                                onChange={changePassword}
                            />
                            <Form.Field
                                name="novaSenha"
                                label="Nova senha"
                                control={Input}
                                type="password"
                                value={novaSenha}
                                onChange={changePassword}
                            />
                            <Form.Field
                                name="repetirNovaSenha"
                                label="Repita a nova senha"
                                control={Input}
                                type="password"
                                value={repetirNovaSenha}
                                onChange={changePassword}
                            />
                            <Button
                                primary
                                icon="key"
                                content="Alterar Senha"
                                onClick={onAlterarSenha}
                            />
                        </Form>

                    </Grid.Column>

                    <Grid.Column width={4}>
                        <Image src={avatar} fluid bordered shape="rounded" />
                        <EnviarArquivo
                            control={Button}
                            fluid
                            primary
                            content="Enviar avatar"
                            icon="upload"
                            loading={carregando}
                            carregar={uploadAvatar}
                            style={{ marginTop: 6 }} />
                    </Grid.Column>

                </Grid.Row>
            </Grid>
        </div>
    )
}