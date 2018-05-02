import React from 'react'
import { Label } from 'semantic-ui-react'

const moduleName = {
    'emp': 'Empresa',
    'prj': 'Projetos',
    'usr': 'Usuários',
    'anl': 'Análise de Projeto',
    'arq': 'Arquivos',
    'atr': 'Atas',
    'drb': 'Diário de Obra'
}

const imageForAccess = {
    'b': 'cancel',
    'r': 'eye',
    'rw': 'pencil',
    'rwa': 'key'
}

const colorForAccess = {
    'b': 'grey',
    'r': 'blue',
    'rw': 'green',
    'rwa': 'red'
}

const accessToText = {
    'b': 'Bloqueado',
    'r': 'Leitura',
    'rw': 'Escrita',
    'rwa': 'Admin'
}

export default (props) => {
    const { modulo, acesso } = props
    return (
        <Label
            basic
            size="tiny"
            content={moduleName[modulo]}
            detail={accessToText[acesso]}
            color="grey" />
    )
}