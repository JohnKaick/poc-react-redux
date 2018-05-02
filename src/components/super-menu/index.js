import './styles.css'

import React from 'react'

import { Container, Menu } from 'semantic-ui-react'

export default class extends React.Component {

    constructor(props) {
        super(props)
        this.onScroll = this.onScroll.bind(this)
        this.state = { onTop: true }
        this.superMenu = null
    }

    componentDidMount() {
        document.addEventListener('scroll', this.onScroll)
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.onScroll)
    }

    onScroll(e) {
        const h = document.documentElement.scrollTop
        if (h > 57 && this.state.onTop) {
            this.setState({ onTop: false })
        }
        else if (h < 57 && !this.state.onTop) {
            this.setState({ onTop: true })
        }
    }

    render() {
        const { children, menus } = this.props
        return (
            <div>
                {!this.state.onTop ? <div style={{ height: 40 }}></div> : null}
                <div className="super-menu">
                    <Menu
                        fixed={this.state.onTop ? null : 'top'}
                        color="blue"
                        inverted
                        size={this.state.onTop ? null : 'huge'}
                        style={{ minHeight: 47 }}
                    >
                        <Container>
                            {menus.map(Component => Component)}
                        </Container>
                    </Menu>
                </div>
            </div>
        )
    }
}