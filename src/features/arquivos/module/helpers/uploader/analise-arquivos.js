import _ from 'lodash'
import formatarNomenclaturas from './formatar-nomenclaturas'
import unificarPorNomenclatura from './unificar-por-nomenclaturas'
import analiseRevisao from './analise-revisao'

export default function (registrosBase, filesBase) {

    let { registros, files } = formatarNomenclaturas(registrosBase, filesBase)

    let unificados = unificarPorNomenclatura(files)

    let result = { novos: [] }
    let indexes = {}

    _.each(unificados.keys, key => {

        let unificado = unificados.result[key]

        let mesmaNomenclatura = _.find(registros, (registro) => {
            return registro.formatado.nome === unificado.formatadoBase.nome
        })

        let mesmaBase = _.find(registros, (registro) => {
            return registro.formatado.nomeBase === unificado.formatadoBase.nomeBase
        })

        if (mesmaNomenclatura) {
            // TODO: Já existe um arquivo com essa mesma extensão?
            let id = mesmaNomenclatura.content_arquivo._id
            if (!result[id]) { result[id] = [] }
            result[id].push({
                key: parseInt(Math.random() * 99999),
                action: 'carregar-extensao',
                message: 'Encontramos um arquivo com o mesmo nome, iremos unificar as extensões diferentes e ignorar arquivos existentes.',
                messageEachPositive: 'Será importado nova extensão.',
                messageEachNegative: 'Será ignorado.',
                formatado: unificado.formatadoBase,
                files: unificado.filesBase,
                registro: mesmaNomenclatura
            })
        } else if (mesmaBase && analiseRevisao(mesmaBase.formatado.nomeBase, unificado.formatadoBase.nomeBase)) {
            // TODO: O número de revisão do arquivo é exatamento + 1 ?
            // TODO: Verificar todas as revisões do arquivo!
            let id = mesmaBase.content_arquivo._id
            if (!result[id]) { result[id] = [] }
            result[id].push({
                key: parseInt(Math.random() * 99999),
                action: 'nova-revisao',
                message: 'Encontramos um arquivo com a base semelhante, vamos subir revisão desse arquivo e carregar todos os tipos de extensões.',
                messageEachPositive: 'Será importado como uma nova revisão.',
                formatado: unificado.formatadoBase,
                files: unificado.filesBase,
                registro: mesmaBase
            })
        } else {
            result.novos.push({
                key: parseInt(Math.random() * 99999),
                action: 'novo-arquivo',
                message: 'Não encontramos nada semelhante, vamos criar um arquivo novo?',
                messageEachPositive: 'Será criado um novo arquivo.',
                formatado: unificado.formatadoBase,
                files: unificado.filesBase
            })
        }

    })

    return result

}