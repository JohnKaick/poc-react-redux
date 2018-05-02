import React from 'react'
import emitter from './../../../../module/globals/emitter'
import Component from './component'

class FormElemento extends React.Component {

    constructor(props) {
        super(props)
        this.state = { open: false }
        this.onSalvar = this.onSalvar.bind(this)
        this.onOpen = this.onOpen.bind(this)
        this.close = this.close.bind(this)
        this.eventCloseDialog = null
    }

    componentDidMount() {
        this.eventCloseDialog = emitter.addListener('dialog-elemento-close', () => {
            this.close()
        })
    }

    componentWillUnmount() {
        this.eventCloseDialog.remove()
    }

    onOpen() {
        this.setState({ open: true })
    }

    onSalvar() {
        const {
            disciplinaId, pastaId, categoria, descritivo, metodo,
            nome, pesoGut, prefix, vidaUtil
        } = this.props

        this.props.adicionar({
            disciplinaId, pastaId, categoria, descritivo, metodo,
            nome, pesoGut, prefix, vidaUtil
        })
    }

    close() { this.setState({ open: false }) }

    render() {
        return <Component
            {...this.props}
            open={this.state.open}
            close={this.close}
            onSalvar={this.onSalvar}
            onOpen={this.onOpen}
        />
    }

}

export default FormElemento