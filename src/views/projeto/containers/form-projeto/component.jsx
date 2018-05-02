import React from 'react'
import { Form, Input, TextArea, Container, Header, Button, Divider } from 'semantic-ui-react'

export default (props) => {

    const {
        empreendimento, exibicao, areaConstruida, areaPrivativa, areaLocavel, informacao,
        onSalvar, onChange
    } = props

    return (
        <Container>
            <Form>

                <Header content="Novo Projeto" />

                <Form.Group>

                    <Form.Field
                        width={16}
                        control={Input}
                        label='Empreendimento'
                        name="empreendimento"
                        value={empreendimento}
                        onChange={onChange} />

                </Form.Group>
                <Form.Group>

                    <Form.Field
                        width={16}
                        control={Input}
                        label='Nome de exibição'
                        name="exibicao"
                        value={exibicao}
                        onChange={onChange} />

                </Form.Group>
                <Form.Group>

                    <Form.Field
                        width={6}
                        type="number"
                        control={Input}
                        label='Área construida'
                        name="areaConstruida"
                        value={areaConstruida}
                        onChange={onChange} />

                    <Form.Field
                        width={5}
                        type="number"
                        control={Input}
                        label='Área privativa'
                        name="areaPrivativa"
                        value={areaPrivativa}
                        onChange={onChange} />

                    <Form.Field
                        width={5}
                        type="number"
                        control={Input}
                        label='Área locavel'
                        name="areaLocavel"
                        value={areaLocavel}
                        onChange={onChange} />

                </Form.Group>

                <Form.Field
                    width={16}
                    control={TextArea}
                    rows={10}
                    label='Infomações adicionais'
                    name="informacao"
                    value={informacao}
                    onChange={onChange} />

                <Button
                    primary
                    content="Salvar"
                    onClick={onSalvar}
                />

            </Form>
        </Container>
    )
}