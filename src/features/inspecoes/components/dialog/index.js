import React from 'react'

import { Modal } from 'semantic-ui-react'

export default class extends React.Component {

    constructor(props) {
        super(props)
        this.state = { opened: false }
        this.open = this.open.bind(this)
        this.close = this.close.bind(this)
    }

    open() { this.setState({ opened: true }) }

    close() { this.setState({ opened: false }) }

    render() {
        const { trigger, children } = this.props
        return <Modal
            trigger={trigger}
            open={this.state.opened}
            onOpen={this.open}>
            {children}
        </Modal>
    }

}