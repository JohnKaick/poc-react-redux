import React from 'react'

import emitter from './../../../../module/globals/emitter'

import Component from './components'

export default class extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Component {...this.props} />
        )
    }

}