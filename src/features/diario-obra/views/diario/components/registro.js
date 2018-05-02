import React from 'react'

import { Grid, Menu, Segment, Icon, Button, Image, Popup } from 'semantic-ui-react'

import Limpo from './../../../../../components/image-temp/limpo.png'
import Nublado from './../../../../../components/image-temp/nublado.png'
import Chuva from './../../../../../components/image-temp/chuva.png'
import Impraticavel from './../../../../../components/image-temp/impraticavel.png'

const ListItem = ({ titulo, valor }) => (
    <p>
        <span style={{ color: 'grey' }}>{titulo}</span> <br /> {valor}
    </p>
)

const ImageTempo = ({ tempo }) => {
    if (tempo === 'limpo') {
        return (
            <div>
                <Image src={Limpo} />
                <span>Limpo</span>
            </div>
        )
    } else if (tempo === 'nublado') {
        return (
            <div>
                <Image src={Nublado} />
                <span>Nublado</span>
            </div>
        )
    } else if (tempo === 'chuva') {
        return (
            <div>
                <Image src={Chuva} />
                <span>Chuva</span>
            </div>
        )
    } else {
        return (
            <div>
                <Image src={Impraticavel} />
                <span>Impraticavel</span>
            </div>
        )
    }
}

export default ({
    diario
}) => (
        <div>
            <Menu borderless attached="top" >
                <Menu.Item header content='Informações' />
            </Menu>

            <Segment attached>
                <ListItem titulo="Data" valor={new Date(diario.dataHora).toLocaleDateString() || '---'} />
                <ListItem titulo="Descricao" valor={diario.descricao || '---'} />
            </Segment>

            <Segment attached>
                <span style={{ color: 'grey' }}>Tempo</span>
                <br />
                <br />
                <Grid columns={3}>
                    <Grid.Column align='center'>
                        <span>Manhã</span>
                        <ImageTempo tempo={diario.tempoManha} />
                    </Grid.Column>
                    <Grid.Column align='center'>
                        <span>Tarde</span>
                        <ImageTempo tempo={diario.tempoTarde} />
                    </Grid.Column>
                    <Grid.Column align='center'>
                        <span>Noite</span>
                        <ImageTempo tempo={diario.tempoNoite} />
                    </Grid.Column>
                </Grid>
            </Segment>
        </div>
    )