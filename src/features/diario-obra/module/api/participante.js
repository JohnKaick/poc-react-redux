import axios from 'axios'

export function obterTodos(diarioId) {
    return axios.get('/diario-obra/participante/obter-todos/' + diarioId)
}

export function vincular(data) {
    return axios.post('/diario-obra/participante/vincular/' + data.diarioId + '/' + data.participanteId, {
        presente: data.presente
    })
}

export function desvincular(diarioId, participanteId) {
    return axios.post('/diario-obra/participante/desvincular/' + diarioId + '/' + participanteId)
}
