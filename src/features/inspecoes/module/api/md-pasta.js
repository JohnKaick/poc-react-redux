import axios from 'axios'

export function obter(id) {
    return axios.get('/checklist/md-pasta/obter/' + id)
}

export function obterTodos(disciplinaId) {
    return axios.get('/checklist/md-pasta/obter-todos/' + disciplinaId)
}

export function cadastrar(data) {
    return axios.put('/checklist/md-pasta/cadastrar/' + data.disciplinaId, {
        nome: data.nome,
        descritivo: data.descritivo,
    })
}

export function editar(data) {
    return axios.post('/checklist/md-pasta/editar/' + data.id, {
        nome: data.nome,
        descritivo: data.descritivo,
    })
}

export function remover(id) {
    return axios.delete('/checklist/md-pasta/remover/' + id)
}

