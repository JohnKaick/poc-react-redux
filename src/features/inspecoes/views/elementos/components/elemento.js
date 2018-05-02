import React from 'react'

import semImagem from './no-image.png'

import _ from 'lodash'

import { getImageAddress } from './../../../../../module/globals'

import { Grid, Menu, Dropdown, Step, Breadcrumb, Button, Card, Header, Item, Table, List, Image } from 'semantic-ui-react'

export default ({ elemento, checklists }) => {

    let e = elemento

    let imagens = []

    e.anomalias.forEach(a => {
        if (a.imagens && a.imagens.length > 0) {
            imagens = _.concat(imagens, a.imagens)
        }
    })

    return (
        <Item>

            {imagens ? <Item.Image size='small' src={getImageAddress(imagens[0])} /> : null}

            <Item.Content>
                <Item.Header>{e.modelo.nome}</Item.Header>
                <Item.Content>
                    <Grid>
                        <Grid.Column width={8}>
                            <Item.Meta>
                                {e.situacao === 'cnf' ? <span style={{ color: 'darkgreen' }}>Conformidade</span> : null}
                                {e.situacao === 'ncn' ? <span style={{ color: 'darkred' }}>Não conformidade</span> : null}
                                {e.situacao === 'npl' ? <span style={{ color: 'darkblue' }}>Não aplicável</span> : null}
                                {e.situacao === 'nnl' ? <span style={{ color: 'darkorange' }}>Não verificado</span> : null}
                            </Item.Meta>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Item.Description>
                                {(checklists || []).map(check => (

                                    <div key={check._id}>

                                        <h5 style={{ marginBottom: 6 }}>{check.nome}</h5>

                                        <List size="mini" verticalAlign="middle" style={{ margin: 0 }}>

                                            {e.anomalias.map(a => (
                                                <List.Item key={a._id}>
                                                    <List.Icon name="exclamation triangle" style={{ color: 'red' }} />
                                                    <List.Content>
                                                        <List.Header>{a.modelo.exibicao}</List.Header>
                                                        <List.Description>{a.gravidade ? a.gravidade.nome : 'Gravidade não informada.'}</List.Description>
                                                    </List.Content>
                                                </List.Item>
                                            ))}

                                            {!e.anomalias || e.anomalias.length === 0 ? (
                                                <List.Item>
                                                    <List.Icon name="check" style={{ color: 'green' }} />
                                                    <List.Content>
                                                        <List.Description>Nenhuma anomalia aprensentada.</List.Description>
                                                    </List.Content>
                                                </List.Item>
                                            ) : null}

                                        </List>

                                    </div>

                                ))}
                            </Item.Description>
                        </Grid.Column>
                    </Grid>
                </Item.Content>

            </Item.Content>
        </Item>
    )
}