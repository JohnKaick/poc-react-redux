import React from 'react'
import emitter from './../../../../module/globals/emitter'
import Component from './component'

import { migrar, transmitir } from './../../module/api/registro'
import { inserirImagem, removerImagem } from './../../module/api/item'
import { desvincular } from './../../module/api/participante'

export default class extends React.Component {

    constructor(props) {
        super(props)
        this.onMigrar = this.onMigrar.bind(this)
        this.onUploadImagem = this.onUploadImagem.bind(this)
        this.onDeleteImagem = this.onDeleteImagem.bind(this)
        this.onTransmitir = this.onTransmitir.bind(this)
        this.onDesvincular = this.onDesvincular.bind(this)
        this.eventLoad = null
        this.state = { showParticipanteResult: false }
    }

    componentDidMount() {
        const diarioId = this.props.match.params.diario

        this.props.carregarDiario(diarioId)
        this.props.carregarItens(diarioId)
        this.props.carregarParticipantes(diarioId)

        this.eventLoad = emitter.addListener('diario-load', () => {
            this.props.carregarDiario(diarioId)
        })
        this.eventLoad = emitter.addListener('diario-item-load', () => {
            this.props.carregarItens(diarioId)
        })
        this.eventLoad = emitter.addListener('diario-participante-load', () => {
            this.props.carregarParticipantes(diarioId)
        })

    }

    componentWillUnmount() {
        this.eventLoad.remove()
    }

    onMigrar(diarioId) {
        migrar(diarioId).then(() => {
            emitter.emit('diarios-load')
            this.props.history.push('/' + this.props.projetoAtual + '/diario-obra')
            emitter.emit('mensagem-sucesso', 'Nova revisão criada com sucesso.')
        }).catch(err => {
            console.log(err)
        })
    }

    onUploadImagem(files, itemId) {
        for (let file of files) {
            inserirImagem(itemId, file).then(() => {
                emitter.emit('diario-item-load')
            })
        }
    }

    onDeleteImagem(imagemId) {
        removerImagem(imagemId).then(() => {
            emitter.emit('diario-item-load')
        })
    }

    onTransmitir(diarioId) {
        transmitir(diarioId).then(() => {
            emitter.emit('mensagem-sucesso', 'E-mail enviado com sucesso.')
        }).catch(err => {
            console.log(err)
        })
    }

    onDesvincular(diarioId, participanteId) {
        desvincular(diarioId, participanteId).then(() => {
            emitter.emit('diario-participante-load')
            emitter.emit('mensagem-sucesso', 'Participante removido com sucesso.')
        }).catch(err => {
            console.log(err)
        })
    }

    showParticipantes() {
        const { showParticipanteResult } = this.state;
        this.setState({ showParticipanteResult: !showParticipanteResult })
    }

    render() {
        return (
            <Component
                {...this.props}
                onMigrar={this.onMigrar}
                onUploadImagem={this.onUploadImagem}
                onDeleteImagem={this.onDeleteImagem}
                onTransmitir={this.onTransmitir}
                onDesvincular={this.onDesvincular}
                showParticipanteResult={this.state.showParticipanteResult}
                showParticipantes={this.showParticipantes} />
        )
    }

}