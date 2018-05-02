import React from 'react'

import { Button, Menu, Segment, Grid, Popup } from 'semantic-ui-react'

const ListItem = ({ titulo, valor }) => (
    <p>
        <span style={{ color: 'grey' }}>{titulo}</span> <br /> {valor}
    </p>
)

export default ({
    ata,
}) => (
        <div>

            <Menu borderless attached="top" >
                <Menu.Item header content='Informações' />
            </Menu>

            <Segment attached>
                <Grid divided='vertically'>
                    <Grid.Row>
                        <Grid.Column>
                            <ListItem titulo="Data" valor={new Date(ata.dataHora).toLocaleDateString() || '---'} />
                            <ListItem titulo="Local" valor={ata.local || '---'} />
                            <ListItem titulo="Situação" valor={ata.situacao || '---'} />
                            <ListItem titulo="Pauta" valor={ata.pauta || '---'} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>

        </div>
    )