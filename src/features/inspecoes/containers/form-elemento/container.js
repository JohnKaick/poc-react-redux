import React from 'react'
import emitter from './../../../../module/globals/emitter'
import Component from './component'

class FormElemento extends React.Component {

    constructor(props) {
        super(props)
        this.load = this.load.bind(this)
        this.onSalvar = this.onSalvar.bind(this)
        this.onDeletar = this.onDeletar.bind(this)
        this.state = { elementoId: null }
        this.eventLoad = null
    }

    componentDidMount() {
        const { disciplinaId, pastaId, elementoId } = this.props
        this.load(disciplinaId, pastaId, elementoId)
        this.eventLoad = emitter.addListener('form-elemento-load', () => {
            const { disciplinaId, pastaId, elementoId } = this.props
            this.props.load(disciplinaId, pastaId, elementoId)
        })
    }

    componentWillUnmount() {
        this.eventLoad.remove()
    }

    componentWillReceiveProps(props) {
        const { disciplinaId, pastaId, elementoId } = props
        this.load(disciplinaId, pastaId, elementoId)
    }

    load(disciplinaId, pastaId, elementoId) {
        if (this.state.elementoId !== elementoId) {
            this.setState({ elementoId: elementoId })
            this.props.load(disciplinaId, pastaId, elementoId)
        }
    }

    onSalvar() {
        const elemento = {
            id: this.props.id,
            categoria: this.props.categoria,
            nome: this.props.nome,
            descritivo: this.props.descritivo,
            prefix: this.props.prefix,
            metodo: this.props.metodo,
            vidaUtil: this.props.vidaUtil,
            pesoGut: this.props.pesoGut
        }
        this.props.salvar(elemento)
    }

    onDeletar() {
        this.props.deletar(this.props.id)
    }

    render() {
        return <Component
            {...this.props}
            onSalvar={this.onSalvar}
            onDeletar={this.onDeletar}
        />
    }

}

export default FormElemento