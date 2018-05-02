
/**
 * @param nomenclatura {string} - Nomenclatura do arquivo a ser analisada.
 */
export default (nomenclatura) => {
    let extensao = /(?:\.([^.]+))?$/.exec(nomenclatura)[1];
    let nome = nomenclatura.replace(/\.[^/.]+$/, "");
    let nomeBase = nome.slice(0, -2).toUpperCase();
    let revisao = nome.slice(-2).toUpperCase();
    if (isNaN(revisao)) {
        revisao = null
        nomeBase = nome
    }
    return {
        nomenclatura, extensao, nome, nomeBase, revisao
    }
}
