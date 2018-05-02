import React from 'react'

import Component from './components'

export default class extends React.Component {

    constructor(props) {
        super(props)
        this.onGrupoSelecionado = this.onGrupoSelecionado.bind(this)
    }

    componentDidMount() {
        this.props.load(this.props.projetoAtual)
    }

    onGrupoSelecionado(id, index) {
        this.props.grupoSelecionado(
            id,
            index,
            this.props.currentsBase,
            this.props.grupos
        )
    }

    render() {
        return (
            <Component
                {...this.props}
                carregando={this.props.carregando}
                onGrupoSelecionado={this.onGrupoSelecionado} />
        )
    }

}