import axios from 'axios'

export function obter(id) {
    return axios.get('/checklist/elemento/obter/' + id)
}

export function obterTodosChecklist(checklistId) {
    return axios.get('/checklist/elemento/obter-todos-checklist/' + checklistId)
}

export function obterTodos(grupoId) {
    return axios.get('/checklist/elemento/obter-todos/' + grupoId)
}

export function cadastrar(data) {
    return axios.put('/checklist/elemento/cadastrar/' + data.modeloId, {
        grupo: data.grupoId,
        nome: data.nome,
        descritivo: data.descritivo,
        tag: data.tag,
    })
}

export function editar(data) {
    return axios.post('/checklist/elemento/editar/' + data.id, {
        nome: data.nome,
        descritivo: data.descritivo,
        tag: data.tag,
    })
}

export function remover(id) {
    return axios.delete('/checklist/elemento/remover/' + id)
}

