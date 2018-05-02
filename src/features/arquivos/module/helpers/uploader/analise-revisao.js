export default (original, comparativo) => {

    if (!comparativo || comparativo.length < 3)
        return null;

    let baseName = comparativo.slice(0, -2).toUpperCase();
    let revision = comparativo.slice(-2).toUpperCase();

    if (isNaN(revision))
        return false;

    let toCompareBaseName = comparativo.slice(0, -2).toUpperCase();
    let toCompareRevision = comparativo.slice(-2).toUpperCase();

    if (toCompareBaseName === baseName) {

        let newRevisionIndex = parseInt(revision);
        let oldRevisionIndex = parseInt(toCompareRevision);

        if (newRevisionIndex === oldRevisionIndex) {
            // { success: false, errorCode: 100, message: 'Este arquivo já foi cadastrado.' }
            return false
        }
        else if (newRevisionIndex === (oldRevisionIndex + 1)) {
            return true
        }
        else if (newRevisionIndex < oldRevisionIndex) {
            // { success: false, errorCode: 101, message: 'A revisão que você deseja cadastrar é inferior a já cadastrada.' }
            return false
        }
        else if (newRevisionIndex > oldRevisionIndex) {
            // { success: false, errorCode: 102, message: 'Não é permitido pular indices de revisões, cadastre a revisão anterior.' }
            return false
        }

    }

    return false

}