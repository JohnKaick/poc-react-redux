import axios from 'axios'

export function regraPasta(pastaId) {
    return axios.get('/arquivo/regra-pasta/' + pastaId)
}

export function regraGrupo(grupoId) {
    return axios.get('/arquivo/regra-grupo/' + grupoId)
}

export function atribuirPasta(data) {
    return axios.post('/arquivo/regra/atribuir-pasta/', {
        pastaId: data.pastaId,
        usuarioId: data.usuarioId,
        tipo: data.tipo,
    })
}

export function atribuirGrupo(data) {
    return axios.post('/arquivo/regra/atribuir-grupo/', {
        grupoId: data.grupoId,
        usuarioId: data.usuarioId,
        tipo: data.tipo,
    })
}