import React from 'react'
import {
    Container, Table, Card, Form, Input, Header, Button, Label, Image, Menu, Grid, List
} from 'semantic-ui-react'
import HeaderValue from './../../components/header-value'
import SuperMenu from './../../components/super-menu'
import LabelPermissao from './components/label-permissao'

export default (props) => {

    const {
        empresa, onSalvar, usuarios, onProjetoChange, carregando
    } = props

    const {
        razaoSocial, nomeFantasia, cnpj,
        inscricaoEstadual, cnae, dominio,
        vincularDominio
    } = empresa || {}

    const editarEmpresaAtivo = false

    return (
        <div>

            <SuperMenu menus={[
                <Menu.Item key="header" header>Empresa</Menu.Item>
            ]} />

            <Container>

                <Header content="Empresa" subheader="Informações gerais" />

                <Grid style={{ marginTop: 10 }} columns={2}>
                    <Grid.Row>
                        <Grid.Column>
                            <HeaderValue
                                title="Razão Social"
                                value={razaoSocial} />
                        </Grid.Column>
                        <Grid.Column>
                            <HeaderValue
                                title="Nome Fantasia"
                                value={nomeFantasia} />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <HeaderValue
                                title="CNPJ"
                                value={cnpj || '---'} />
                        </Grid.Column>
                        <Grid.Column>
                            <HeaderValue
                                title="Inscrição Estadual"
                                value={inscricaoEstadual || '---'} />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <HeaderValue
                                title="CNAE"
                                value={cnae || '---'} />
                        </Grid.Column>
                        <Grid.Column>
                            <HeaderValue
                                title="Domínio"
                                value={dominio || '---'} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>



                <Header content="Permissões" subheader="Participantes da empresa" />

                <Table basic="very">
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell width={8}>Usuário</Table.HeaderCell>
                            <Table.HeaderCell width={8}>Módulos</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {usuarios.map(u => (
                            <Table.Row key={u._id}>
                                <Table.Cell>
                                    <Grid>
                                        <Grid.Column width={3} textAlign="center">
                                            {u.avatar ? <Image style={{ margin: 0, marginTop: 6 }} avatar src={u.avatar} /> : null}
                                        </Grid.Column>
                                        <Grid.Column width={13}>
                                            <b>{u.exibicao}</b><br />
                                            <span>{u.email}</span>
                                        </Grid.Column>
                                    </Grid>
                                </Table.Cell>
                                <Table.Cell>
                                    <Label.Group>
                                        {u.permissoes.map(p =>
                                            <LabelPermissao
                                                key={p.modulo}
                                                modulo={p.modulo}
                                                acesso={p.acesso} />
                                        )}
                                    </Label.Group>
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>

            </Container>

        </div>
    )
}