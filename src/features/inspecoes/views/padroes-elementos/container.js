import React from 'react'

import emitter from './../../../../module/globals/emitter'

import Component from './components'

export default class extends React.Component {

    constructor(props) {
        super(props)
        this.state = { cadastrando: false }
        this.load = this.load.bind(this)
        this.ev0 = null
        this.ev1 = null
        this.ev2 = null
    }

    componentDidMount() {
        this.ev0 = emitter.addListener('md-elemento-adicionado', (id) => {
            this.props.loadElementos(this.props.pasta)
            this.props.elementoSelecionado(id)
        })
        this.ev1 = emitter.addListener('md-elemento-alterado', () => {
            this.props.loadElementos(this.props.pasta)
        })
        this.ev2 = emitter.addListener('md-elemento-deletado', () => {
            this.props.loadElementos(this.props.pasta)
            this.props.elementoSelecionado(null)
        })
        this.load()
    }

    componentWillUnmont() {
        this.ev0.remove()
        this.ev1.remove()
        this.ev2.remove()
    }

    load() {
        this.props.load(this.props.projetoAtual)
    }

    render() {
        return (
            <Component
                {...this.props} />
        )
    }

}