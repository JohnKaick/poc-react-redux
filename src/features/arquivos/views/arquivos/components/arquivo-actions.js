import React from 'react'
import { Table, Label, Dropdown, Button, Popup } from 'semantic-ui-react'
import DialogArquivo from './../../../containers/dialog-arquivo'

const castExtensao = (extensao) => {
    let val = extensao.substring(1)
    return val.toUpperCase()
}

export default ({ arquivo, revisoes, onBaixar, atualizar }) => {

    let ultimaRevisao = revisoes[0]
    let demaisRevisoes = revisoes.slice(1)

    return (
        <Button.Group primary size="mini">
            <Button onClick={() => { onBaixar(arquivo, revisoes[0]) }} icon="download" />,
            <Dropdown floating button className='icon'>
                <Dropdown.Menu>

                    <Dropdown.Header content='Ações' />

                    <DialogArquivo
                        arquivoId={arquivo._id}
                        revisaoId={ultimaRevisao._id}
                        close={atualizar}>
                        <Dropdown.Item content="Editar" />
                    </DialogArquivo>

                    <Dropdown.Header content='Última Revisão' />

                    {ultimaRevisao.files.map((file, i) =>
                        <Dropdown.Item
                            key={i}
                            onClick={() => { onBaixar(arquivo, ultimaRevisao, file) }}>
                            <span>{castExtensao(file.extensao)}</span>
                        </Dropdown.Item>
                    )}

                    {demaisRevisoes.length > 0 ? <Dropdown.Header content='Revisões Anteriores' /> : null}

                    {demaisRevisoes.length > 0 ?
                        demaisRevisoes.map((revisao, i) => (
                            <Dropdown.Item
                                key={i}
                                onClick={() => { onBaixar(arquivo, revisao, revisao.files[0]) }}>
                                <span>{revisao.revisao}</span>
                            </Dropdown.Item>
                        ))
                        : null
                    }

                </Dropdown.Menu>
            </Dropdown>
        </Button.Group>
    )
}