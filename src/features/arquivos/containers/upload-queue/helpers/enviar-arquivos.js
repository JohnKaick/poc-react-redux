
import { cadastrar, upload, editar } from './../../../module/api/arquivo'

// mesmo-nome, mesma-base, novo-arquivo

const cadastrarUpload = async (grupoId, arquivo, onProgress) => {

    let response = await cadastrar({
        grupoId: grupoId,
        numero: '',
        nomenclatura: arquivo.formatado.nome,
        revisao: arquivo.formatado.revisao,
        assunto: '',
        descricao: '',
        emissao: new Date()
    })

    for (let i = 0; i < arquivo.files.length; i++) {
        let file = arquivo.files[i];
        await upload(response.data._id, file.content, (e) => {
            //console.log('Progress', e)
            /*
            onProgress({
                key: arquivo.key,
                value: e
            })
            */
        })
    }

    return true

}

export default async (grupoId, arquivos, onProgress) => {

    let uploadQueue = []

    arquivos.forEach(arquivo => {
        if (arquivo.action === 'novo-arquivo') {
            uploadQueue.push(cadastrarUpload(grupoId, arquivo, onProgress))
        }
    })

    return uploadQueue

}