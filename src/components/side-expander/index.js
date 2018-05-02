import './styles.css'

import React from 'react'

import { Icon } from 'semantic-ui-react'

export default class extends React.Component {

    constructor(props) {
        super(props)
        this.itemSelected = this.itemSelected.bind(this)
        this.state = { currentItem: null, currentSubItem: null }
    }

    itemSelected(item) {
        this.setState({
            currentItem: item === this.state.currentItem ? null : item
        })
    }

    subItemSelected(item) {
        this.setState({
            currentSubItem: item
        })
    }

    render() {

        const { items, } = this.props

        return (
            <div className="side-expander">
                {items.map(item => (
                    <div key={item.key} className="item">
                        <div className="display" onClick={() => {
                            this.itemSelected(item.key)
                        }}>
                            {this.state.currentItem === item.key ? <Icon color="blue" name="chevron down" /> : null}
                            {this.state.currentItem !== item.key ? <Icon color="blue" name="chevron right" /> : null}
                            <span>{item.name}</span>
                        </div>
                        <div className={
                            (this.state.currentItem === item.key) ? 'sub' : 'sub hide'
                        }>
                            {(item.items || []).map(si => (
                                <div
                                    key={si.key}
                                    className={this.state.currentSubItem === si.key ? 'display active' : 'display'}
                                    onClick={e => {
                                        if (si.onClick) {
                                            this.subItemSelected(si.value)
                                            if (si.onClick) { si.onClick(si.value) }
                                        }
                                    }}>
                                    <span>{si.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        )
        
    }
}