import uploadNovoArquivo from './upload-novo-arquivo'
import uploadNovaRevisao from './upload-nova-revisao'
import uploadNovaVersao from './upload-nova-versao'

// com base nos arquivos previamente analisados, envia para o servidor
export default async (grupoId, arquivos, progress) => {

    // fila de promisses em execução
    let uploadQueue = []

    // percorre cada arquivo que deve ser cadastrado
    arquivos.novos.forEach(arquivo => {
        uploadQueue.push(uploadNovoArquivo(grupoId, arquivo, progress))
    })

    // obtem todas as keys dos arquivos
    let keys = Object.keys(arquivos)

    // para cadas key com exceção de 'novos' é enviado de acordo com o previamente calculado
    keys.forEach(key => {
        if (key !== 'novos') {
            arquivos[key].forEach(arquivo => {
                // cria uma nova revisão do arquivo e cadatrar suas possíveis versões
                if (arquivo.action === 'nova-revisao') {
                    uploadQueue.push(uploadNovaRevisao(grupoId, arquivo, progress))
                }
                // apenas carrega a nova versão do arquivo
                else if ('carregar-extensao') {
                    uploadQueue.push(uploadNovaVersao(grupoId, arquivo, progress))
                }
            })
        }
    })

    // retorna assim que todas as promisses forem finalizadas
    return Promise.all(uploadQueue)

}