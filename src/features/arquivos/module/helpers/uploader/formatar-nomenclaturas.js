import analiseNomenclatura from './analise-nomenclatura'

/**
 * registros: [{ c: {nomenclatura_traduzida}, r: {registro de arquivo} }]
 * files: [{ c: {nomenclatura_traduzida}, f: {file} }]
 */
export default (registros, files) => {

    let _registros = []

    registros.forEach(a => {
        let r = a.revisoes[0]
        _registros.push({
            formatado: analiseNomenclatura(r.nomenclatura),
            content_arquivo: a,
            content_revisao: r,
        })
    })

    let _files = []

    for (var i = 0; i < files.length; i++) {
        let f = files[i];
        _files.push({
            formatado: analiseNomenclatura(f.name),
            content: f
        })
    }

    return {
        registros: _registros,
        files: _files
    }

}
