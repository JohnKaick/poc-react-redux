import axios from 'axios'

export function obter(id) {
    return axios.get('/checklist/imagem/obter/' + id)
}

export function obterTodos(projetoId) {
    return axios.get('/checklist/imagem/obter-todos/' + projetoId)
}

export function cadastrar(data) {
    return axios.put('/checklist/imagem/cadastrar/' + data.projetoId, file)
}

export function editar(data) {
    return axios.post('/checklist/imagem/editar/' + data.id, file)
}

export function remover(id) {
    return axios.delete('/checklist/imagem/remover/' + id)
}

