import React from 'react'
import Component from './component'

class Container extends React.Component {

    constructor(props) {
        super(props)
        this.onProjetoChange = this.onProjetoChange.bind(this)
    }

    componentDidMount() {
        this.props.onLoad()
    }

    onProjetoChange(e, { name, value }) {
        this.props.onProjetoChange(name, value)
    }

    render() {
        return <Component
            {...this.props}
            onProjetoChange={this.onProjetoChange} />
    }
}

export default Container