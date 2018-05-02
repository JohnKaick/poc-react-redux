import React from 'react'

import { NavLink, Link } from 'react-router-dom'

import { Modal, Header, Form, Button, Select, Input, TextArea, Menu, Grid, Card } from 'semantic-ui-react'

import SuperMenu from './../../../components/super-menu'

export default (props) => {
    const {
        empreendimento, exibicao, informacao, areaConstruida, areaPrivativa, areaLocavel,
        onChange, onSalvar
    } = props

    return (
        <div>

            <SuperMenu menus={[
                <Menu.Item key="header" header>Projeto</Menu.Item>,
            ]} />

            <Grid container>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <Card fluid>
                            <Card.Content>
                                <Form>
                                    <Header content="Cadastro de projeto" />

                                    <Form.Field
                                        control={Input}
                                        label='Empreendimento'
                                        name="empreendimento"
                                        value={empreendimento}
                                        onChange={onChange} />

                                    <Form.Field
                                        control={Input}
                                        label='Nome de exibição'
                                        name="exibicao"
                                        value={exibicao}
                                        onChange={onChange} />

                                    <Form.Group widths='equal'>
                                        <Form.Field
                                            control={Input}
                                            label='Área construida'
                                            name="areaConstruida"
                                            value={areaConstruida}
                                            onChange={onChange} />

                                        <Form.Field
                                            control={Input}
                                            label='Área privativa'
                                            name="areaPrivativa"
                                            value={areaPrivativa}
                                            onChange={onChange} />

                                        <Form.Field
                                            control={Input}
                                            label='Área locavel'
                                            name="areaLocavel"
                                            value={areaLocavel}
                                            onChange={onChange} />
                                    </Form.Group>

                                    <Form.Field
                                        control={TextArea}
                                        rows={10}
                                        label='Infomações adicionais'
                                        name="informacao"
                                        value={informacao}
                                        onChange={onChange} />

                                    <Button primary icon="save" content="Salvar" onClick={onSalvar} />
                                    
                                </Form>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}