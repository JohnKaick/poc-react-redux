import React from 'react'

import Component from './components'

export default class extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.load(this.props.projetoAtual)
    }

    render() {
        return (
            <Component
                {...this.props} />
        )
    }

}