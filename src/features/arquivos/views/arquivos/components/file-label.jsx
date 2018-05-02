import React from 'react'
import { Label, Icon } from 'semantic-ui-react'

export default ({ arquivo }) => {

    let extensoes = arquivo.files.map(f => f.formatado.extensao)
    let mensagem = extensoes.reduce((texto, ext) => (texto += '|' + ext), '')
    mensagem = mensagem.substring(1)
    mensagem = ' (' + mensagem + ')'
    let styles = { marginBottom: 5 }

    return (
        <Label
            basic
            style={styles}
            color="yellow">
            {arquivo.detalhes ? <Icon name="check" /> : null}
            <span>{arquivo.formatado.nome + mensagem}</span>
        </Label>
    )
}