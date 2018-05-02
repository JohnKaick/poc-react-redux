import axios from 'axios'

export function obter(id) {
    return axios.get('/checklist/md-categoria/obter/' + id)
}

export function obterTodos(disciplinaId) {
    return axios.get('/checklist/md-categoria/obter-todos/' + disciplinaId)
}

export function cadastrar(data) {
    return axios.put('/checklist/md-categoria/cadastrar/' + data.disciplinaId, {
        nome: data.nome,
        descritivo: data.descritivo,
    })
}

export function editar(data) {
    return axios.post('/checklist/md-categoria/editar/' + data.id, {
        nome: data.nome,
        descritivo: data.descritivo,
    })
}

export function remover(id) {
    return axios.delete('/checklist/md-categoria/remover/' + id)
}

