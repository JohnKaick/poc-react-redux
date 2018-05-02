import React from 'react'
import { Label, Icon } from 'semantic-ui-react'
import UploadPreencher from './upload-preencher'
import FileLabel from './file-label'

const labelClickerStyle = { cursor: 'pointer', marginBottom: 5 }
const labelStyle = { marginBottom: 5 }

export default ({ analisados, atribuirDadosArquivos, enviarArquivos }) => {
    return (
        <div>

            <Label
                style={labelClickerStyle}
                color="blue"
                onClick={enviarArquivos}>
                <Icon name="upload" />
                <span>Enviar</span>
            </Label>

            <UploadPreencher analisados={analisados} save={atribuirDadosArquivos}>
                <Label style={labelClickerStyle} color="blue">Completar preenchimento</Label>
            </UploadPreencher>

            <Label style={labelStyle} color="grey" pointing="right">Arquivos a serem incluídos</Label>

            {analisados.novos.map((a, i) => (
                <FileLabel key={i} arquivo={a} />
            ))}
            
        </div>
    )
}