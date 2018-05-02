import React from 'react'
import { Modal, Header, Image, Button, Icon } from 'semantic-ui-react'

export default class extends React.Component {

    constructor(props) {
        super(props)
    }

    onDeletar() {
        this.props.Deletar(this.props.imagem._id)
    }

    render() {
        const { titulo, imagem, children } = this.props
        return (
            <Modal
                basic
                trigger={children}
                closeIcon>
                <Header icon='image' content={titulo || 'Imagem'} />
                <Modal.Content image scrolling>
                    <Image fluid src={imagem.url} />
                </Modal.Content>
                <Modal.Actions>
                    <Button color='red' onClick={this.onDeletar.bind(this)} inverted>
                        <Icon name='trash' /> Excluir
                    </Button>
                </Modal.Actions>
            </Modal>
        )
    }
}