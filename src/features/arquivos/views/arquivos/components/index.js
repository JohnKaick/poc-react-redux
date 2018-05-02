import React from 'react'

import { Grid, Menu, Button, Breadcrumb, Icon } from 'semantic-ui-react'

import SelecionarPasta from './../../../containers/selecionar-pasta'
import DialogArquivo from './../../../containers/dialog-arquivo'
import Loader from './../../../../../components/loader'
import SuperMenu from './../../../../../components/super-menu'
import SideExpander from './../../../../../components/side-expander'
import Arquivos from './arquivos'

export default (props) => {

    const {
        arquivos, carregando, filaEnvio, uploadQueue,
        projetoAtual, pasta, grupo,
        onGrupoSelecionado, onBaixar, onBaixarGrupo,
        // Upload
        files, selecionarArquivos, onArquivosSelecionados, onUploadStart, onUploadFinished
    } = props

    return (
        <Loader loading={carregando}>

            <SuperMenu menus={[
                <Menu.Item key="header" header>Arquivos</Menu.Item>
            ]} />

            <Grid container>
                <Grid.Row>
                    <Grid.Column>

                        <Menu>

                            <SelecionarPasta
                                projeto={projetoAtual}
                                selecionado={onGrupoSelecionado}>
                                {!pasta || !grupo ?
                                    <Menu.Item icon="folder outline" content="Seleciona a pasta" />
                                    :
                                    <Menu.Item>
                                        <Icon name="folder open outline" />
                                        <span>{pasta.nome}</span>
                                        <Icon name="angle right" style={{ margin: 0 }} />
                                        <span>{grupo.nome}</span>
                                    </Menu.Item>
                                }
                            </SelecionarPasta>

                            {(projetoAtual && pasta && grupo) ?
                                <Menu.Item
                                    icon="download"
                                    content="Baixar Todos"
                                    onClick={() => { onBaixarGrupo(arquivos) }} />
                                : null
                            }

                            {(projetoAtual && pasta && grupo) ?
                                <Menu.Item
                                    icon="upload"
                                    content="Carregar"
                                    onClick={selecionarArquivos} />
                                : null
                            }

                        </Menu>

                        <Arquivos {...props} />

                        <form id="formFile">
                            <input
                                id="fileInput"
                                multiple
                                type="file"
                                style={{ display: 'none' }}
                                onChange={onArquivosSelecionados} />
                        </form>

                    </Grid.Column>
                </Grid.Row>
            </Grid>

        </Loader>
    )
}