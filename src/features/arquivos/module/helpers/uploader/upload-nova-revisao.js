import { cadastrar, novaRevisao, upload, editar } from './../../../module/api/arquivo'

export default async (grupoId, arquivo, progress) => {

    console.log('NovaRevisao: ', arquivo)

    /*
    let response = await novaRevisao({
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
 
        })
    }
    */

    return true

}