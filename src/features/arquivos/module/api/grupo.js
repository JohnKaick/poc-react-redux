import axios from 'axios'

export function obter(id) {
    return axios.get('/arquivo/grupo/obter/' + id)
}

export function obterTodos(pastaId) {
    return axios.get('/arquivo/grupo/obter-todos/' + pastaId)
}

export function cadastrar(data) {
    return axios.put('/arquivo/grupo/cadastrar/' + data.pastaId, {
        grupoId: data.grupoId,
        nome: data.nome,
        mask: data.mask
    })
}

export function editar(data) {
    return axios.post('/arquivo/grupo/editar/' + data.id, {
        nome: data.nome,
        mask: data.mask,
        tipo: data.tipo
    })
}

export function remover(id) {
    return axios.delete('/arquivo/grupo/remover/' + id)
}