import axios from 'axios'

export function obterTodos(ataId) {
    return axios.get('/ata/participante/obter-todos/' + ataId)
}

export function vincular(data) {
    return axios.post('/ata/participante/vincular/' + data.ataId + '/' + data.participanteId, {
        presente: data.presente
    })
}

export function desvincular(ataId, participanteId) {
    return axios.post('/ata/participante/desvincular/' + ataId + '/' + participanteId)
}
