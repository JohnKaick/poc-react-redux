import React from 'react'
import emitter from './../../../../module/globals/emitter'
import Component from './component'

export default class extends React.Component {

    constructor(props) {
        super(props)
        this.onDiarioSelecionado = this.onDiarioSelecionado.bind(this)
        this.eventLoad = null
    }

    componentDidMount() {
        this.props.load(this.props.projetoAtual)
        this.eventLoad = emitter.addListener('diarios-load', () => {
            this.props.load(this.props.projetoAtual)
        })
    }

    componentWillUnmount() {
        this.eventLoad.remove()
    }

    onDiarioSelecionado(diario) {
        this.props.history.push('/' + this.props.projetoAtual + '/diario-obra/' + diario._id)
    }

    render() {
        return (
            <Component
                {...this.props}
                onDiarioSelecionado={this.onDiarioSelecionado} />
        )
    }

}