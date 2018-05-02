import React from 'react'
import { Modal, Header, Grid, Image } from 'semantic-ui-react'

export default class extends React.Component {

    constructor(props) {
        super(props)
        this.onDeletar = this.onDeletar.bind(this)
    }

    onDeletar(imagemId) {
        this.props.Deletar(imagemId)
    }

    render() {
        const { titulo, imagens, children } = this.props
        return (
            <Modal
                basic
                trigger={children}>
                <Header icon='image' content={titulo || 'Imagens'} />
                <Modal.Content>
                    {imagens.map((im, i) => (
                        <Image
                            fluid
                            src={im.url}
                            key={i}
                            label={{
                                as: 'a',
                                corner: 'right',
                                icon: 'trash',
                                color: 'red',
                                onClick: () => {
                                    this.onDeletar(im._id)
                                }
                            }} />
                    ))}
                </Modal.Content>
            </Modal>
        )
    }

}