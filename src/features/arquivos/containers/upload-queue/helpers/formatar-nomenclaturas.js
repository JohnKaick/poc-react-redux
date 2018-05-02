import analiseNomenclatura from './analise-nomenclatura'

/**
 * registros: [{ c: {nomenclatura_traduzida}, r: {registro de arquivo} }]
 * files: [{ c: {nomenclatura_traduzida}, f: {file} }]
 */
export default (registros, files) => {

    let _registros = registros.map(r => {
        return {
            formatado: analiseNomenclatura(r.revisoes[0].nomenclatura),
            content: r
        }
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
