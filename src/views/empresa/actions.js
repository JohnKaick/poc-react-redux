import { obterAdmin } from './../../module/api/empresa'

export const onLoadStart = 'views/empresa/onLoadStart'
export const onLoadDone = 'views/empresa/onLoadDone'
export const onProjetoChange = 'views/empresa/onProjetoChange'
export const onError = 'views/empresa/onError'

export function load() {
    return async dispatch => {
        dispatch({ type: onLoadStart })
        try {
            let response = await obterAdmin()
            dispatch({
                type: onLoadDone,
                empresa: response.data.empresa,
                usuarios: response.data.usuarios
            })
        }
        catch (err) {
            dispatch({
                type: onError,
                erro: err
            })
        }
    }
}

export function projetoChange(name, value) {
    return dispatch => {
        dispatch({
            type: onProjetoChange,
            name, value
        })
    }
}

