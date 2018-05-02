import { cadastrar, upload, editar } from './../../../module/api/arquivo'

export default async (grupoId, arquivo, progress) => {

    let response = await cadastrar({
        grupoId: grupoId,
        numero: arquivo.detalhes ? arquivo.detalhes.numero : '',
        nomenclatura: arquivo.detalhes ? arquivo.detalhes.nomenclatura : arquivo.formatado.nome,
        revisao: arquivo.detalhes ? arquivo.detalhes.revisao : arquivo.formatado.revisao,
        assunto: arquivo.detalhes ? arquivo.detalhes.assunto : '',
        descricao: arquivo.detalhes ? arquivo.detalhes.descricao : '',
        emissao: new Date()
    })

    for (let i = 0; i < arquivo.files.length; i++) {
        let file = arquivo.files[i];
        await upload(response.data._id, file.content, (e) => {
            if (process) {
                progress('Progress', e)
            }
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