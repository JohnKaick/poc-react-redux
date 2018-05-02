import React from 'react'
import emitter from './../../module/globals/emitter'
import Component from './component'

export default class extends React.Component {

    constructor(props) {
        super(props)
        this.onPesquisaChange = this.onPesquisaChange.bind(this)
        this.onAtivarProjeto = this.onAtivarProjeto.bind(this)
        this.viewMode = this.viewMode.bind(this)
        this.eventLoad = null
        this.state = { viewType: 'tiled' }
    }

    componentDidMount() {
        this.props.load()
        this.eventLoad = emitter.addListener('projetos-load', () => {
            this.props.load()
        })
    }

    onPesquisaChange(e, { name, value }) {
        this.props.pesquisaChange(value)
    }

    onAtivarProjeto(projetoId) {
        this.props.history.push('/' + projetoId)
    }

    viewMode(viewType) {
        this.setState({ viewType })
    }

    render() {
        return (
            <Component
                {...this.state}
                {...this.props}
                onPesquisaChange={this.onPesquisaChange}
                onAtivarProjeto={this.onAtivarProjeto}
                viewMode={this.viewMode}
            />
        )
    }

}