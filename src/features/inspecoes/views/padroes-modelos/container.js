import React from 'react'

import emitter from './../../../../module/globals/emitter'

import Component from './component'

export default class extends React.Component {

    constructor(props) {
        super(props)
        this.events = []
    }

    componentDidMount() {

        this.props.load()

        this.events.push(emitter.addListener('disciplina-adicionada', (id) => {
            this.props.load()
        }))

        this.events.push(emitter.addListener('disciplina-alterada', (id) => {
            this.props.load()
        }))

        this.events.push(emitter.addListener('disciplina-deletada', () => {
            this.props.load()
        }))

        this.events.push(emitter.addListener('pasta-adicionada', (id) => {
            this.props.carregarPastas(this.props.disciplina)
        }))

        this.events.push(emitter.addListener('pasta-alterada', (id) => {
            this.props.carregarPastas(this.props.disciplina)
        }))

        this.events.push(emitter.addListener('pasta-deletada', () => {
            this.props.carregarPastas(this.props.disciplina)
        }))

        this.events.push(emitter.addListener('categoria-adicionada', (id) => {
            this.props.carregarCategorias(this.props.disciplina)
        }))

        this.events.push(emitter.addListener('categoria-alterada', (id) => {
            this.props.carregarCategorias(this.props.disciplina)
        }))

        this.events.push(emitter.addListener('categoria-deletada', () => {
            this.props.carregarCategorias(this.props.disciplina)
        }))

    }

    componentWillUmount() {
        this.events.forEach(e => {
            e.remove()
        })
    }

    render() {
        return (
            <Component
                {...this.props}
                emitter={emitter}
            />
        )
    }

}