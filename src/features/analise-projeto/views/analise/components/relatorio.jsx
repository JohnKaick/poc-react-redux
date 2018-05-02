import React from 'react'

import { Button, Menu, Segment, Grid, List, Label, Icon, Loader } from 'semantic-ui-react'

const ListItem = ({ titulo, valor }) => (
    <p>
        <span style={{ color: 'grey' }}>{titulo}</span> <br /> {valor}
    </p>
)

export default ({
    analise,
}) => (
        <div>

            <Menu borderless attached="top" >
                <Menu.Item header content='Informações' />
            </Menu>

            <Segment attached>
                <Grid divided='vertically'>
                    <Grid.Row>
                        <Grid.Column>
                            <ListItem titulo="Data" valor={new Date(analise.data).toLocaleDateString() || '---'} />
                            <ListItem titulo="Revisão" valor={analise.revisao || '---'} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>

        </div>
    )