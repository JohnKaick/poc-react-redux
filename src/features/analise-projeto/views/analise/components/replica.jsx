import React from 'react'

import { Table, Icon, Button, Menu, Segment, Popup, Accordion, Label, Header, Grid } from 'semantic-ui-react'
import { Link, NavLink } from 'react-router-dom'

const IconStatus = ({ status }) => {
    if (status === 'finalizado') {
        return <Label color='green' content='Finalizado' />
    } else if (status === 'pendente') {
        return <Label color='orange' content='Pendente' />
    } else {
        return <Label content='Informativo' />
    }
}

export default ({
    onAprovar, onDeletar, handleClick, activeIndex, itemId, replicas,
}) => (
        <div>

            {(replicas || []).map((r, i) => (
                <Accordion fluid styled>

                    <Accordion.Title active={activeIndex === r._id} index={r._id} onClick={handleClick}>
                        <Icon name='dropdown' />
                        {(r.criadoPor) ? r.criadoPor.exibicao : 'Colaborador'} - {new Date(r.criadoEm).toLocaleDateString()}
                        {r.aprovadoPor ? <Icon name='check' style={{ marginLeft: '5px' }} /> : null}
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === r._id}>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    {r.mensagem}
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <Button circular icon='trash outline' floated='right' size='tiny' onClick={() => { onDeletar(itemId, r._id) }} basic />
                                    {!r.aprovadoPor ? <Button circular icon='check' floated='right' size='tiny' onClick={() => { onAprovar(itemId, r._id) }} basic /> : null}
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Accordion.Content>

                </Accordion>
            ))}

        </div>
    )
