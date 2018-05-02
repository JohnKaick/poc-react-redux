import React from 'react'
import emitter from './../../module/globals/emitter'
import Component from './component'

import { removerParametro } from './../../module/api/projeto'

export default class extends React.Component {

    state = { open: false }

    constructor(props) {
        super(props)
        this.load = this.load.bind(this)
        this.uploadImagem = this.uploadImagem.bind(this)
        this.deleteImagem = this.deleteImagem.bind(this)
        this.eventLoad = null
        this.projetoId = null
    }

    load(projetoId) {
        if (this.projetoId !== projetoId && projetoId) {
            this.props.load(projetoId)
            this.eventLoad = emitter.addListener('projeto-load', () => {
                this.props.load(projetoId)
            })
        }
        this.projetoId = projetoId
    }

    componentDidMount() {
        this.load(this.props.computedMatch.params.projeto)
    }

    componentWillReceiveProps(props) {
        this.load(props.computedMatch.params.projeto)
    }

    uploadImagem(files) {
        this.props.onUploadImagens(this.props.computedMatch.params.projeto, files)
    }

    deleteImagem(imagemId) {
        this.props.onDeleteImagem(this.props.computedMatch.params.projeto, imagemId)
    }

    render() {
        return (
            <Component
                {...this.state}
                {...this.props}
                projetoId={this.props.computedMatch.params.projeto}
                uploadImagem={this.uploadImagem}
                deleteImagem={this.deleteImagem} />
        )
    }

}