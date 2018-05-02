import React, {
    Component
} from 'react'

export default class extends Component {
    render() {
        let date = new Date(this.props.children)
        return (
            <span>{date.toLocaleDateString('pt-BR')}</span>
        )
    }
}