import React from 'react'
import Component from './components'
import { analisar, enviar } from './../../module/helpers/uploader'

export default class extends React.Component {

    state = { files: null, analisados: {} }

    componentDidMount() {
        this.props.load(this.props.projetoAtual)
    }

    atualizar() {
        this.props.grupoSelecionado(
            this.props.pasta._id,
            this.props.grupo._id)
    }

    onGrupoSelecionado({ pasta, grupo }) {
        this.props.grupoSelecionado(pasta, grupo)
        this.setState({ files: null })
    }

    // Download

    onBaixar(arquivo, revisao) {
        this.props.onDownload(revisao._id, '')
    }

    onBaixarGrupo(arquivos) {
        this.props.onDownloadGrupo(this.props.grupo._id, [])
    }


    /* Aciona seleção de arquivos, limpa o form */
    selecionarArquivos() {
        document.getElementById('formFile').reset()
        document.getElementById('fileInput').click()
    }

    /* Ao selecionar, analisa os arquivos com os registros do grupo */
    onArquivosSelecionados(e) {
        if (e.target.files && e.target.files.length > 0) {
            let analisados = analisar(this.props.arquivos, e.target.files)
            console.log(analisados)
            let files = e.target.files
            this.setState({ analisados, files })
        }
    }

    /* Atribuir informações a múltiplos arquivos já analisados... */
    atribuirDadosArquivos(dados) {
        let novos = this.state.analisados.novos.map((atual, i) => {
            return {
                ...atual,
                detalhes: dados[i]
            }
        })
        this.setState({
            analisados: {
                ...this.state.analisados,
                novos
            }
        })
    }

    /* Inicia o upload dos arquivos já avaliados */
    enviarArquivos() {
        console.log('enviando...')
        enviar(this.props.grupo._id, this.state.analisados, (p) => { console.log(p) })
            .then(() => {
                document.getElementById('formFile').reset()
                this.setState({
                    analisados: {},
                    files: []
                })
            })
            .catch(err => {
                console.log('ERRO: ', err)
            })
    }


    render() {
        return (
            <Component
                {...this.props}
                {...this.state}
                onGrupoSelecionado={this.onGrupoSelecionado.bind(this)}
                onBaixar={this.onBaixar.bind(this)}
                onBaixarGrupo={this.onBaixarGrupo.bind(this)}
                selecionarArquivos={this.selecionarArquivos.bind(this)}
                onArquivosSelecionados={this.onArquivosSelecionados.bind(this)}
                enviarArquivos={this.enviarArquivos.bind(this)}
                atribuirDadosArquivos={this.atribuirDadosArquivos.bind(this)}
                atualizar={this.atualizar.bind(this)}
            />
        )
    }

}