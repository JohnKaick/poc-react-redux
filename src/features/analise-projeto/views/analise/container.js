import React from 'react'
import emitter from './../../../../module/globals/emitter'
import Component from './component'
import _ from 'lodash'

import { desvincular } from './../../module/api/participante'
import { obterTodos, alterarPosicao } from './../../module/api/item'
import { aprovar, remover } from './../../module/api/replica'
import { migrar, transmitir } from './../../module/api/relatorio';

export default class extends React.Component {

    constructor(props) {
        super(props)
        this.onDesvincular = this.onDesvincular.bind(this)
        this.onAprovar = this.onAprovar.bind(this)
        this.onDeletar = this.onDeletar.bind(this)
        this.onAlterarPosicao = this.onAlterarPosicao.bind(this)
        this.onMigrar = this.onMigrar.bind(this)
        this.onTransmitir = this.onTransmitir.bind(this)
        this.showArquivos = this.showArquivos.bind(this)
        this.showParticipantes = this.showParticipantes.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.eventLoad = null
        this.state = {
            vMode: '',
            showArquivoResult: false,
            showParticipanteResult: false,
            activeIndex: '',
            updateTime: Date.now(),
            organizados: {},
        }
    }

    componentDidMount() {
        const analiseId = this.props.match.params.analise

        this.props.carregarAnalise(analiseId)
        this.props.carregarParticipantes(analiseId)
        this.props.carregarItens(analiseId)

        this.eventLoad = emitter.addListener('analise-load', () => {
            this.props.carregarAnalise(analiseId)
        })
        this.eventLoad = emitter.addListener('analise-participante-load', () => {
            this.props.carregarParticipantes(analiseId)
        })
        this.eventLoad = emitter.addListener('analise-item-load', () => {
            this.props.carregarItens(analiseId)
        })
    }

    componentWillUnmount() {
        this.eventLoad.remove()
    }

    componentWillReceiveProps(props) {
        if (this.state.updateTime !== Date.now() && props.itens) {
            let itens = props.itens
            let organizados = _.reduce(itens, (obj, item) => {
                let assunto = item.assunto || 'Sem título'
                if (obj[assunto]) {
                    obj[assunto].push(item)
                    return obj
                } else {
                    obj[assunto] = [item]
                    return obj
                }
            }, {})
            this.setState({ organizados })
        }
    }

    onDesvincular(analiseId, participanteId) {
        desvincular(analiseId, participanteId).then(() => {
            emitter.emit('analise-participante-load')
            emitter.emit('mensagem-sucesso', 'Participante removido com sucesso.')
        }).catch(err => {
            console.log(err)
        })
    }

    onAprovar(itemId, replicaId) {
        aprovar(itemId, replicaId).then(() => {
            emitter.emit('analise-item-load')
            emitter.emit('mensagem-sucesso', 'Replica aprovada com sucesso.')
        }).catch(err => {
            console.log(err)
        })
    }

    onDeletar(itemId, replicaId) {
        remover(itemId, replicaId).then(() => {
            emitter.emit('analise-item-load')
            emitter.emit('mensagem-sucesso', 'Replica removido com sucesso.')
        }).catch(err => {
            console.log(err)
        })
    }

    onAlterarPosicao(itemA, itemB) {
        alterarPosicao(itemA._id, itemB._id).then(() => {
            emitter.emit('analise-item-load')
            emitter.emit('mensagem-sucesso', 'Ordem alterada com sucesso.')
        }).catch(err => {
            console.log(err)
        })
    }

    onMigrar(analiseId) {
        migrar(analiseId).then(() => {
            emitter.emit('analises-load')
            this.props.history.push('/' + this.props.projetoAtual + '/analise-projeto')
            emitter.emit('mensagem-sucesso', 'Nova revisão criada com sucesso.')
        }).catch(err => {
            console.log(err)
        })
    }

    onTransmitir(analiseId) {
        transmitir(analiseId).then(() => {
            emitter.emit('mensagem-sucesso', 'E-mail enviado com sucesso.')
        }).catch(err => {
            console.log(err)
        })
    }

    showArquivos(e) {
        e.preventDefault()
        const { showArquivoResult } = this.state;
        this.setState({ showArquivoResult: !showArquivoResult })
    }

    showParticipantes(e) {
        e.preventDefault()
        const { showParticipanteResult } = this.state;
        this.setState({ showParticipanteResult: !showParticipanteResult })
    }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? '' : index

        this.setState({ activeIndex: newIndex })
    }

    render() {
        return (
            <Component
                {...this.props}
                {...this.state}
                onDesvincular={this.onDesvincular}
                onAprovar={this.onAprovar}
                onDeletar={this.onDeletar}
                onAlterarPosicao={this.onAlterarPosicao}
                onMigrar={this.onMigrar}
                onTransmitir={this.onTransmitir}
                showArquivoResult={this.state.showArquivoResult}
                showArquivos={this.showArquivos}
                showParticipanteResult={this.state.showParticipanteResult}
                itens={this.state.itens}
                showParticipantes={this.showParticipantes}
                handleClick={this.handleClick} />
        )
    }

}