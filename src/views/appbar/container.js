import React from 'react';

import Component from './component'

export default class extends React.Component {
    componentDidMount() {
        let projetoId = this.props.projetoAtual
        if (projetoId) {
            this.props.load(projetoId)
        }
    }
    render() {
        const { session } = this.props
        if (session.conectado) {
            return <Component {...this.props} />
        } else {
            return null
        }
    }
}