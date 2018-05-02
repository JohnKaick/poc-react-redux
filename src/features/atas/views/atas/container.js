import React from 'react'
import emitter from './../../../../module/globals/emitter'
import Component from './component'

export default class extends React.Component {

    constructor(props) {
        super(props)
        this.onAtaSelecionada = this.onAtaSelecionada.bind(this)
        this.eventLoad = null
    }

    componentDidMount() {
        this.props.load(this.props.projetoAtual)
        this.eventLoad = emitter.addListener('atas-load', () => {
            this.props.load(this.props.projetoAtual)
        })
    }

    componentWillUnmount() {
        this.eventLoad.remove()
    }

    onAtaSelecionada(ata) {
        this.props.history.push('/' + this.props.projetoAtual + '/atas/' + ata._id)
    }

    render() {
        return (
            <Component
                {...this.props}
                onAtaSelecionada={this.onAtaSelecionada} />
        )
    }

}