import React from 'react'
import { Card, Progress } from 'semantic-ui-react'
import './components/styles.css'
import semImagem from './components/sem-imagem.jpg'

const ImageBlock = ({ titulo, imagem, exibir }) => {
    const style = {
        backgroundImage: 'url(' + imagem + ')',
        //display: exibir ? 'block' : 'none'
    }
    return (
        <div className={exibir ? "tiled-image" : "tiled-image-hide"} style={style} >
            {titulo ? (
                <div className="details" >
                    <div>{titulo}</div>
                </div >
            ) : null}
        </div>
    )
}

export default class extends React.Component {

    render() {

        const { titulo, imagens, imagemAtual, mostrarProgresso, onClick, onAmpliar } = this.props

        return (
            <Card className="tiled-block" onClick={onClick} >

                {mostrarProgresso ?
                    <Progress
                        color="blue"
                        attached="top"
                        className="progress"
                        percent={this.state.progresso}
                        size='tiny' />
                    : null
                }

                {imagens.map((im, i) => (
                    <ImageBlock
                        key={i}
                        titulo={titulo}
                        imagem={im.url}
                        exibir={imagemAtual && im === imagemAtual} />
                ))}

                {imagens.length === 0 ? (
                    <ImageBlock
                        titulo={titulo}
                        imagem={semImagem}
                        exibir />
                ) : null}

            </Card>
        )
    }

}