import React from 'react'
import emitter from './../../../../module/globals/emitter'

import Component from './component'

import { desvincular } from './../../module/api/participante'
import { migrar, transmitir } from './../../module/api/registro'

export default class extends React.Component {

    constructor(props) {
        super(props)
        this.eventLoad = null
        this.onDesvincular = this.onDesvincular.bind(this)
        this.onMigrar = this.onMigrar.bind(this)
        this.onTransmitir = this.onTransmitir.bind(this)
        this.showParticipantes = this.showParticipantes.bind(this)
        this.state = { showParticipanteResult: false }
    }

    componentDidMount() {
        const ataId = this.props.match.params.ata

        this.props.carregarAta(ataId)
        this.props.carregarItens(ataId)
        this.props.carregarParticipantes(ataId)

        this.eventLoad = emitter.addListener('ata-load', () => {
            this.props.carregarAta(ataId)
        })
        this.eventLoad = emitter.addListener('ata-item-load', () => {
            this.props.carregarItens(ataId)
        })
        this.eventLoad = emitter.addListener('ata-participante-load', () => {
            this.props.carregarParticipantes(ataId)
        })

    }

    componentWillUnmount() {
        this.eventLoad.remove()
    }

    onDesvincular(ataId, participanteId) {
        desvincular(ataId, participanteId).then(() => {
            emitter.emit('ata-participante-load')
            emitter.emit('mensagem-sucesso', 'Participante removido com sucesso.')
        }).catch(err => {
            console.log(err)
        })
    }

    onMigrar(ataId) {
        migrar(ataId).then(() => {
            emitter.emit('atas-load')
            this.props.history.push('/' + this.props.projetoAtual + '/atas')
            emitter.emit('mensagem-sucesso', 'Nova revisão criada com sucesso.')
        }).catch(err => {
            console.log(err)
        })
    }

    onTransmitir(ataId) {
        transmitir(ataId).then(() => {
            emitter.emit('mensagem-sucesso', 'E-mail enviado com sucesso.')
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
                onDesvincular={this.onDesvincular}
                onMigrar={this.onMigrar}
                onTransmitir={this.onTransmitir}
                showParticipanteResult={this.state.showParticipanteResult}
                showParticipantes={this.showParticipantes} />
        )
    }

}