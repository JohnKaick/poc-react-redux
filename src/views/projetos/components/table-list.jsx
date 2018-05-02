import './styles.css'

import React from 'react'

import { Link } from 'react-router-dom'

import { Grid, Card, Icon, Image, Menu, Button, Reveal, Feed, List, Form, Input, Table } from 'semantic-ui-react'

export default ({
    projetos, onAtivarProjeto
}) => (
        <div>
            <Table color="blue" selectable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Exibição</Table.HeaderCell>
                        <Table.HeaderCell>Cliente</Table.HeaderCell>
                        <Table.HeaderCell>Área construida</Table.HeaderCell>
                        <Table.HeaderCell>Área locável</Table.HeaderCell>
                        <Table.HeaderCell>Área privativa</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {projetos.map(e => (
                        <Table.Row key={e._id} onClick={v => { onAtivarProjeto(e._id) }} style={{ cursor: 'pointer' }}>
                            <Table.Cell>{e.exibicao || '---'}</Table.Cell>
                            <Table.Cell>{e.cliente ? e.cliente.nomeFantasia : '---'}</Table.Cell>
                            <Table.Cell>{e.areaConstruida || '---'}</Table.Cell>
                            <Table.Cell>{e.areaLocavel || '---'}</Table.Cell>
                            <Table.Cell>{e.areaPrivativa || '---'}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
    )