import './styles.css'

import React from 'react'

import { Container, Segment, Header, Grid, Table, Image, Button, Icon, Form, Input, List, Label } from 'semantic-ui-react'

const getImage = (file) => {
    const base = '/module/content/icons/files/'
    const types = {
        'image/jpeg': 'jpg.png',
        'image/png': 'png.png',
    }
    if (types[file.type]) {
        return base + types[file.type]
    } else {
        return base + 'blank.png'
    }
}

const customField = {
    margin: 0
}

export default (props) => {

    const { analisados = [], upload } = props

    return (
        <Container>
            <Header size="large" attached="top" block content="Carregando arquivos" />
            <Table attached="bottom" celled>
                <Table.Body>

                    {analisados.map((f, index) => (
                        <Table.Row key={index}>
                            <Table.Cell className="fileCell">
                                <h4><Icon name="file" /> {f.formatado.nome}</h4>
                                <p><small>{f.message}</small></p>
                                <List>
                                    {f.files.map((o, i) =>
                                        <List.Item key={i}>
                                            <Label basic color="grey"><Icon name="upload" /> {o.formatado.nome + '.' + o.formatado.extensao}</Label>
                                            {f.messageEachPositive ? <Label color="green" pointing='left'>{f.messageEachPositive}</Label> : null}
                                        </List.Item>
                                    )}
                                </List>
                            </Table.Cell>
                            <Table.Cell>0%</Table.Cell>
                        </Table.Row>
                    ))}

                </Table.Body>

                <Table.Footer fullWidth>
                    <Table.Row>
                        <Table.HeaderCell colSpan='4'>
                            <Button onClick={upload} floated='right' icon labelPosition='left' primary size='small'>
                                <Icon name='upload' /> <span>Enviar</span>
                            </Button>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>

            </Table>
        </Container>
    )
}