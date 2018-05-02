export default (filesBase) => {
    let result = {}
    for (var i = 0; i < filesBase.length; i++) {
        let fileBase = filesBase[i];
        if (result[fileBase.formatado.nome]) {
            result[fileBase.formatado.nome].filesBase.push(fileBase)
        } else {
            result[fileBase.formatado.nome] = {
                index: i,
                formatadoBase: fileBase.formatado,
                filesBase: [fileBase]
            }
        }
    }
    return {
        keys: Object.keys(result),
        result: result
    }
}