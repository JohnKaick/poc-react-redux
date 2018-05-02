import React from 'react'

import { Dimmer, Image } from 'semantic-ui-react'

import loadingGif from './loading.gif'

export default class extends React.Component {

    constructor(props) {
        super(props)
        this.initCount = this.initCount.bind(this)
        this.state = { delay: false }
        this.timeout = null
    }

    componentDidMount() {
        this.initCount()
    }

    initCount() {
        this.setState({ delay: false })
        this.timeout = setTimeout(() => {
            this.setState({ delay: true })
        }, 350)
    }

    componentWillUnmount() {
        clearTimeout(this.timeout)
    }

    componentWillReceiveProps(props) {
        if (props.loading && this.state.delay) {
            this.initCount()
        }
    }

    render() {
        const { loading, children } = this.props
        return (
            <div>
                <Dimmer active={loading || !this.state.delay} inverted>
                    <Image centered size="small" src={loadingGif} />
                </Dimmer>
                {children}
            </div>
        )
    }

}