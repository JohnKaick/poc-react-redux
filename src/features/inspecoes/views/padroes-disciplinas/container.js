import React from 'react'

import emitter from './../../../../module/globals/emitter'

import Component from './component'

export default class extends React.Component {

    constructor(props) {
        super(props)
        this.onDisciplinaSelecionada = this.onDisciplinaSelecionada.bind(this)
        this.eventLoad = null
    }

    componentDidMount() {
        this.props.load(this.props.projetoAtual)
        this.eventLoad = emitter.addListener('disciplinas-load', () => {
            this.props.load(this.props.projetoAtual)
        })
    }

    componentWillUnmount() {
        this.eventLoad.remove()
    }

    onDisciplinaSelecionada(disciplina) {
        this.props.disciplinaSelecionada(disciplina)
    }

    render() {
        return (
            <Component
                {...this.props}
                onDisciplinaSelecionada={this.onDisciplinaSelecionada}
            />
        )
    }

}