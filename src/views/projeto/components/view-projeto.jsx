import React from 'react'
import { Container, Card, Menu, Icon } from 'semantic-ui-react'
import { Informacao } from './index'
import { DialogParametro, DialogProjeto } from './../containers'
import { ImageTiler, EnviarArquivo } from './../../../components'

const ListItem = ({ titulo, valor }) => (
    <p>
        <span style={{ color: 'grey' }}>{titulo}</span> <br /> {valor}
    </p>
)

const cardStyle = {
    maxHeight: '260px',
    overflow: 'hidden'
}

export default (props) => {

    const { projeto, carregando, uploadImagem, deleteImagem } = props

    const cliente = projeto.cliente || {}

    return (
        <Container>

            <Menu>
                <DialogProjeto id={projeto._id} >
                    <Menu.Item onClick={() => { }} ><Icon name='edit' /> Editar</Menu.Item>
                </DialogProjeto>
                <EnviarArquivo
                    control={Menu.Item}
                    multiple
                    icon="upload"
                    content="Carregar imagem"
                    carregar={uploadImagem} />
                <DialogParametro projetoId={projeto._id}>
                    <Menu.Item onClick={() => { }} ><Icon name='plus' /> Adicionar parâmetro</Menu.Item>
                </DialogParametro>
            </Menu>

            <Card.Group itemsPerRow={2}>
                {projeto.imagens ?
                    <ImageTiler fluid titulo={projeto.exibicao} imagens={projeto.imagens} Deletar={deleteImagem} /> : null
                }
                <Card fluid color="blue">
                    <Card.Content>
                        <Card.Header>{projeto.exibicao}</Card.Header>
                        <Card.Description>{projeto.empreendimento}</Card.Description>
                    </Card.Content>
                    <Card.Content>
                        <ListItem titulo="Cliente" valor={cliente.nomeFantasia || '---'} />
                        <ListItem titulo="Área privativa" valor={projeto.areaPrivativa || 0.0} />
                        <ListItem titulo="Área construída" valor={projeto.areaConstruida || 0.0} />
                        <ListItem titulo="Área locável" valor={projeto.areaLocavel || 0.0} />
                    </Card.Content>
                </Card>
            </Card.Group>

            <Card.Group itemsPerRow={3}>
                {projeto.informacao ? <Informacao nome="Informações" valor={projeto.informacao} /> : null}
                {(projeto.propriedades || []).map((p, i) => (
                    <DialogParametro
                        key={i}
                        id={p._id}
                        projetoId={projeto._id}>
                        <Card color="blue" style={cardStyle}>
                            <Card.Content>
                                <Card.Header>{p.nome}</Card.Header>
                                <Card.Description>
                                    <p style={{ whiteSpace: 'pre-line' }}>{p.valor}</p>
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    </DialogParametro>
                ))}
            </Card.Group>

        </Container>
    )
}