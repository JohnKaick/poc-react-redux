import React from 'react'
import Component from './component'
import Gallery from './components/gallery'

export default class extends React.Component {

    constructor(props) {
        super(props)
        this.tick = this.tick.bind(this)
        this.initInterval = this.initInterval.bind(this)
        this.state = {
            mostrarProgresso: false,
            indice: 0,
            velocidade: 3.5,
            progresso: 0,
        }
        this.interval = null
        this.timeout = null
    }

    componentDidMount() {
        if (this.props.imagens.length > 1) {
            this.timeout = setTimeout(this.initInterval, Math.random() * 2000)
        } else {
            this.setState({
                mostrarProgresso: false
            })
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval)
        clearTimeout(this.timeout)
    }

    componentWillUpdate() {
        this.fixBody();
    }

    componentDidUpdate() {
        this.fixBody();
    }

    fixBody() {
        const anotherModal = document.getElementsByClassName('ui page modals').length;
        if (anotherModal > 0) document.body.classList.add('scrolling', 'dimmable', 'dimmed');
    }


    initInterval() {
        this.interval = setInterval(this.tick, 100)
    }

    tick() {
        if (this.state.progresso >= 100) {
            let indice = this.state.indice >= (this.props.imagens.length - 1) ? 0 : this.state.indice + 1
            this.setState({
                progresso: 0,
                indice: indice
            })
        } else {
            this.setState({
                progresso: this.state.progresso + this.state.velocidade
            })
        }
    }

    render() {

        const { titulo, imagens, onClick, Deletar } = this.props

        const atual = imagens[this.state.indice]

        if (!onClick) {
            return (
                <Gallery titulo={titulo} imagens={imagens} Deletar={Deletar}>
                    <Component
                        titulo={titulo}
                        imagens={imagens}
                        imagemAtual={atual}
                        mostrarProgresso={this.state.mostrarProgresso} />
                </Gallery>
            )
        }
        else {
            return (
                <Component
                    titulo={titulo}
                    imagens={imagens}
                    imagemAtual={atual}
                    mostrarProgresso={this.state.mostrarProgresso}
                    onClick={onClick} />
            )
        }

    }

}
