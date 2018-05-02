import axios from 'axios'

export function obter(id) {
    return axios.get('/ata/registro/obter/' + id)
}

export function obterTodos(projetoId) {
    return axios.get('/ata/registro/obter-todos/' + projetoId)
}

export function cadastrar(data) {
    return axios.put('/ata/registro/cadastrar/' + data.projetoId, {
        dataHora: data.dataHora,
        nome: data.nome,
        local: data.local,
        pauta: data.pauta,
        numero: data.numero,
        situacao: data.situacao,
    })
}

export function editar(data) {
    return axios.post('/ata/registro/editar/' + data.id, {
        dataHora: data.dataHora,
        nome: data.nome,
        local: data.local,
        pauta: data.pauta,
        numero: data.numero,
        situacao: data.situacao,
    })
}

export function migrar(ataId) {
    return axios.post('/ata/registro/migrar/' + ataId)
}

export function transmitir(ataId) {
    return axios.post('/ata/registro/transmitir/' + ataId)
}

export function remover(id) {
    return axios.delete('/ata/registro/remover/' + id)
}

