import React from 'react'

import { Table, Button, Popup } from 'semantic-ui-react'

import DisplayDate from './display-date'
import UploadSummary from './upload-summary'
import UploadLabels from './upload-labels'
import ArquivoActions from './arquivo-actions'

export default (props) => {

    const { arquivos = [], onBaixar, analisados, enviarArquivos, atribuirDadosArquivos, atualizar } = props

    return (
        <div>

            {analisados.novos && analisados.novos.length > 0 ?
                <UploadSummary
                    analisados={analisados}
                    atribuirDadosArquivos={atribuirDadosArquivos}
                    enviarArquivos={enviarArquivos} />
                : null
            }

            <Table celled padded color="blue">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Número</Table.HeaderCell>
                        <Table.HeaderCell>Nomenclatura</Table.HeaderCell>
                        <Table.HeaderCell>Assunto</Table.HeaderCell>
                        <Table.HeaderCell>Revisão</Table.HeaderCell>
                        <Table.HeaderCell>Emissão</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>

                    {arquivos.map(a => (
                        <Table.Row key={a._id}>
                            <Table.Cell>{a.revisoes[0].numero}</Table.Cell>
                            <Table.Cell>
                                <span>{a.revisoes[0].nomenclatura}</span>
                                <UploadLabels arquivo={a} analisados={analisados} />
                            </Table.Cell>
                            <Table.Cell>{a.revisoes[0].assunto}</Table.Cell>
                            <Table.Cell>{a.revisoes[0].revisao}</Table.Cell>
                            <Table.Cell>
                                <DisplayDate value={a.revisoes[0].emissao} />
                            </Table.Cell>
                            <Table.Cell>
                                <ArquivoActions
                                    arquivo={a}
                                    revisoes={a.revisoes}
                                    onBaixar={onBaixar}
                                    atualizar={atualizar} />
                            </Table.Cell>
                        </Table.Row>
                    ))}

                </Table.Body>

            </Table>

            {Object.keys(analisados).length > 0 ? <Button primary floated="right" onClick={enviarArquivos} content="Enviar" /> : null}

        </div>
    )
}