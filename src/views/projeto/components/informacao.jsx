import React from 'react'
import { Card, Modal, Button } from 'semantic-ui-react'

// TODO: Organizar esse componente!

const cardStyle = {
    maxHeight: '260px',
    overflow: 'hidden'
}

class CardParametro extends React.Component {
    render() {
        const { nome, valor, onClick } = this.props
        return (
            <Card color="blue" style={cardStyle} onClick={onClick}>
                <Card.Content>
                    <Card.Header>{nome}</Card.Header>
                    <Card.Description>
                        <p style={{ whiteSpace: 'pre-line' }}>{valor}</p>
                    </Card.Description>
                </Card.Content>
            </Card>
        )
    }
}

export default ({ id, nome, valor }) => {
    return (
        <Modal trigger={<CardParametro nome={nome} valor={valor} />}>
            <Modal.Header>{nome}</Modal.Header>
            <Modal.Content>
                <p style={{ whiteSpace: 'pre-line' }}>{valor}</p>
            </Modal.Content>
        </Modal>
    )
}