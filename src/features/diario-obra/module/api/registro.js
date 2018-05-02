import axios from 'axios'

export function obter(id) {
    return axios.get('/diario-obra/registro/obter/' + id)
}

export function obterTodos(projetoId) {
    return axios.get('/diario-obra/registro/obter-todos/' + projetoId)
}

export function cadastrar(data) {
    return axios.put('/diario-obra/registro/cadastrar/' + data.projetoId, {
        descricao: data.descricao,
        local: data.local,
        responsavel: data.responsavel,
        dataHora: data.dataHora,
        tempoManha: data.tempoManha,
        tempoTarde: data.tempoTarde,
        tempoNoite: data.tempoNoite,
    })
}

export function editar(data) {
    return axios.post('/diario-obra/registro/editar/' + data.id, {
        descricao: data.descricao,
        local: data.local,
        responsavel: data.responsavel,
        dataHora: data.dataHora,
        tempoManha: data.tempoManha,
        tempoTarde: data.tempoTarde,
        tempoNoite: data.tempoNoite,
    })
}

export function migrar(diarioId) {
    return axios.post('/diario-obra/registro/migrar/' + diarioId)
}

export function transmitir(diarioId) {
    return axios.post('/diario-obra/registro/transmitir/' + diarioId)
}

export function remover(id) {
    return axios.delete('/diario-obra/registro/remover/' + id)
}