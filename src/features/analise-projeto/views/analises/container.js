import React from 'react'
import emitter from './../../../../module/globals/emitter'
import Component from './component'

export default class extends React.Component {

    constructor(props) {
        super(props)
        this.onAnaliseSelecionado = this.onAnaliseSelecionado.bind(this)
        this.eventLoad = null
    }

    componentDidMount() {
        this.props.load(this.props.projetoAtual)
        this.eventLoad = emitter.addListener('analises-load', () => {
            this.props.load(this.props.projetoAtual)
        })
    }

    componentWillUnmount() {
        this.eventLoad.remove()
    }

    onAnaliseSelecionado(analise) {
        this.props.history.push('/' + this.props.projetoAtual + '/analise-projeto/' + analise._id)
    }

    render() {
        return (
            <Component
                {...this.props}
                onAnaliseSelecionado={this.onAnaliseSelecionado}
            />
        )
    }

}