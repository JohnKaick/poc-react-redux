import axios from 'axios'

export function obter(id) {
    return axios.get('/checklist/checklist/obter/' + id)
}

export function obterTodos(projetoId) {
    return axios.get('/checklist/checklist/obter-todos/' + projetoId)
}

export function cadastrar(data) {
    return axios.put('/checklist/checklist/cadastrar/' + data.projetoId, {
        nome: data.nome,
        descritivo: data.descritivo,
        tipo: data.tipo,
        introducao: data.introducao,
        conclusao: data.conclusao,
    })
}

export function editar(data) {
    return axios.post('/checklist/checklist/editar/' + data.id, {
        nome: data.nome,
        descritivo: data.descritivo,
        tipo: data.tipo,
        introducao: data.introducao,
        conclusao: data.conclusao,
    })
}

export function remover(id) {
    return axios.delete('/checklist/checklist/remover/' + id)
}

