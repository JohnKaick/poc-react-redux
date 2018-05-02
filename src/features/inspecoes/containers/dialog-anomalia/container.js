import React from 'react'
import emitter from './../../../../module/globals/emitter'
import Component from './component'

class FormAnomalia extends React.Component {

    constructor(props) {
        super(props)
        this.state = { open: false }
        this.onSalvar = this.onSalvar.bind(this)
        this.onOpen = this.onOpen.bind(this)
        this.close = this.close.bind(this)
        this.eventCloseDialog = null
    }

    componentDidMount() {
        this.eventCloseDialog = emitter.addListener('dialog-anomalia-close', () => {
            this.close()
        })
    }

    componentWillUnmount() {
        this.eventCloseDialog.remove()
    }

    onOpen() {
        this.setState({ open: true })
        this.props.load(this.props.elementoId, this.props.anomaliaId)
    }

    onSalvar() {
        const {
            id, elementoId, exibicao, descritivo, caracteristica,
            questao, diagnostico, gravidades
        } = this.props

        if (id) {
            this.props.alterar({
                id, exibicao, descritivo, caracteristica,
                questao, diagnostico, gravidades
            })
        } else {
            this.props.adicionar({
                elementoId, exibicao, descritivo, caracteristica,
                questao, diagnostico, gravidades
            })
        }
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

export default FormAnomalia