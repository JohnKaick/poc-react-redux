import React from 'react'
import emitter from './../../../../module/globals/emitter'
import Component from './component'

import { remover } from './../../module/api/registro'

export default class extends React.Component {

    constructor(props) {
        super(props)
        this.onDeletar = this.onDeletar.bind(this)
        this.onOpen = this.onOpen.bind(this)
        this.close = this.close.bind(this)
        this.state = {
            open: false,
            id: null,
            projetoId: null,
        }
    }

    close() {
        this.setState({ open: false })
    }

    onOpen() {
        this.setState({
            id: this.props.id || null,
            projetoId: this.props.projetoId || null,
        })
        this.setState({ open: true })
    }

    onDeletar() {
        remover(this.props.id).then(() => {
            emitter.emit('atas-load')
            emitter.emit('mensagem-sucesso', 'Ata excluída com sucesso.')
            this.close()
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        return <Component
            {...this.state}
            {...this.props}
            close={this.close}
            onDeletar={this.onDeletar}
            onOpen={this.onOpen}
        />
    }

}