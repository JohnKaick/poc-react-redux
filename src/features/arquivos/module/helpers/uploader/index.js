import _analisar from './analise-arquivos'
import _uploadArquivos from './upload-arquivos'

/*
let exampleResult = {
    // esses são os arquivos que foram relacionados com os uploads...
    '59f89e962204642d4400668d': [
        {
            key: 00000,
            message: '',
            messageEachNegative: '',
            action: '',                 // tipo de semelhança
            files: [],                  // arquivos com mesmo nome, somente extensões diferentes... 
            formatado: {                // nomenclatura de um dos uploads formatado, não considerar extensao, pois podem ter multiplos 
                extensao: 'dwg',
                nome: 'ELE-PE-0002-R00',
                nomeBase: 'ELE-PE-0002-R',
                nomenclatura: 'ELE-PE-0002-R00.dwg',
                revisao: '00'
            },
            registro: {
                formatado: {
                    extensao: '',
                    nome: '',
                    nomeBase: '',
                    nomenclatura: '',
                    revisao: ''
                },
                content_arquivo: {},
                content_arquivo_revisao: {}
            }
        }
    ],
    '59f79e961205643d4410668a': [...],
    novos: [...] 
}
*/

export function analisar(registrosBase, filesBase) {
    return _analisar(registrosBase, filesBase)
}

export function enviar(grupoId, arquivo, onProgress) {
    return _uploadArquivos(grupoId, arquivo, onProgress)
}