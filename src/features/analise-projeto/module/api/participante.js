import axios from 'axios'

export function obterTodos(analiseId) {
    return axios.get('/analise-projeto/participante/obter-todos/' + analiseId)
}

export function vincular(data) {
    return axios.post('/analise-projeto/participante/vincular/' + data.analiseId + '/' + data.participanteId, {
        responsavel: data.responsavel
    })
}

export function desvincular(analiseId, participanteId) {
    return axios.post('/analise-projeto/participante/desvincular/' + analiseId + '/' + participanteId)
}