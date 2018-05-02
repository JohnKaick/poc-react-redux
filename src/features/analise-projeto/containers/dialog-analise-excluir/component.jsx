import React from 'react'

import { Modal, Header, Button } from 'semantic-ui-react'
import { Link, NavLink } from 'react-router-dom'

export default (props) => {

    const {
        id, projetoId,
        open, close, onOpen, onDeletar
    } = props

    return (
        <Modal
            open={open}
            trigger={props.children}
            onOpen={props.onOpen}
            basic
            size='small'>
            <Header icon='archive' content="Tem certeza?" />
            <Modal.Content>
                <p>Será excluído o relatório completo da análise de projeto com os participantes adicionados, assuntos e itens.</p>
            </Modal.Content>
            <Modal.Actions>
                <Button color="green" icon="remove" content="Cancelar" onClick={close} />
                <Button
                    icon="checkmark"
                    content="Ok"
                    color='red'
                    onClick={onDeletar}
                    as={NavLink}
                    to={'/' + projetoId + '/analise-projeto'}
                    inverted />
            </Modal.Actions>
        </Modal>
    )
}