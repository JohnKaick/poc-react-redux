import React from 'react'
import PropTypes from 'prop-types'
import Component from './component'

class Container extends React.Component {

    constructor(props) {
        super(props)
        this.load = this.load.bind(this)
        this.onOpen = this.onOpen.bind(this)
        this.onClose = this.onClose.bind(this)
        this.onSelecionar = this.onSelecionar.bind(this)
        this.onPastaSelecionada = this.onPastaSelecionada.bind(this)
        this.onGrupoSelecionado = this.onGrupoSelecionado.bind(this)
        this.state = {
            opened: false,
            titulo: 'Pastas e Grupos'
        }
    }

    load() {
        this.props.load(this.props.projeto)
    }

    onOpen() {
        this.load()
        this.setState({ opened: true })
    }

    onClose() {
        this.setState({ opened: false })
    }

    onSelecionar(g) {
        this.props.selecionado({
            pasta: this.props.pasta._id,
            grupo: this.props.grupo._id
        })
        this.setState({ opened: false })
    }

    onPastaSelecionada(pasta) {
        this.props.pastaSelecionada(pasta)
    }

    onGrupoSelecionado(grupo) {
        this.props.grupoSelecionado(grupo)
    }

    render() {
        return <Component
            { ...this.state }
            { ...this.props }
            children={this.props.children}
            load={this.load}
            onOpen={this.onOpen}
            onClose={this.onClose}
            onSelecionar={this.onSelecionar}
            onPastaSelecionada={this.onPastaSelecionada}
            onGrupoSelecionado={this.onGrupoSelecionado} />
    }

}

Container.propTypes = {
    projeto: PropTypes.string.isRequired,
    selecionado: PropTypes.func.isRequired
}

export default Container