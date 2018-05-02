import axios from 'axios'

export function obter(id) {
    return axios.get('/checklist/grupo/obter/' + id)
}

export function obterTodos(projetoId) {
    return axios.get('/checklist/grupo/obter-todos/' + projetoId)
}

export function cadastrar(data) {
    return axios.put('/checklist/grupo/cadastrar/' + data.projetoId, {
        grupo: data.grupoId,
        nome: data.nome,
        descritivo: data.descritivo,
        tag: data.tag,
        prefix: data.prefix,
    })
}

export function editar(data) {
    return axios.post('/checklist/grupo/editar/' + data.id, {
        nome: data.nome,
        descritivo: data.descritivo,
        tag: data.tag,
        prefix: data.prefix,
    })
}

export function remover(id) {
    return axios.delete('/checklist/grupo/remover/' + id)
}

