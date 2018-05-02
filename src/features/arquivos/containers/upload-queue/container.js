import React from 'react'
import PropTypes from 'prop-types'

import Component from './component'

import enviarArquivos from './helpers/enviar-arquivos'
import { analisar } from './helpers/analise-arquivos-por-analisados'

class Container extends React.Component {

    constructor(props) {
        super(props)
        this.upload = this.upload.bind(this)
        this.state = {
            analisados: [],
            status: {}
        }
    }

    componentWillReceiveProps(props) {
        if (props.arquivos) {
            let analisados = analisar(props.referencias, props.arquivos)
            console.log('Analisados', analisados)
            this.setState({
                analisados: analisados,
                status: {}
            })
        } else {
            this.setState({
                analisados: [],
                status: {}
            })
        }
    }

    upload() {
        console.log('Uploading...', this.state.analisados)
        enviarArquivos(this.props.grupoId, this.state.analisados, (progress) => {
            console.log('Progress uploading...', progress)
            this.setState({
                status: {
                    ...this.state.status,
                    [progress.key]: progress.value
                }
            })
        }).then(result => {
            console.log('Uploaded!', result)
        }).catch(err => {
            console.log('Error on uploading...', err)
        })
    }

    render() {
        return this.state.analisados && this.state.analisados.length > 0 ?
            <Component
                {...this.props}
                {...this.state}
                upload={this.upload}
            />
            : null
    }

}

Container.propTypes = {
    grupoId: PropTypes.string.isRequired,
    arquivos: PropTypes.object,
    referencias: PropTypes.array,
    onUploadStart: PropTypes.func,
    onUploadProgress: PropTypes.func,
    onUploadFinished: PropTypes.func,
}

export default Container