import React from 'react'

import Component from './components'

export default class extends React.Component {

    componentDidMount() {
        this.props.load(this.props.projetoAtual)
    }

    render() {
        return (
            <Component
                carregando={this.props.carregando} />
        )
    }

}