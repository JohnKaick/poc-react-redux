import axios from 'axios'

export function obter(id) {
    return axios.get('/checklist/disciplina/obter/' + id)
}

export function obterTodos() {
    return axios.get('/checklist/disciplina/obter-todos')
}

export function cadastrar(data) {
    return axios.put('/checklist/disciplina/cadastrar', {
        nome: data.nome,
        projeto: data.projeto
    })
}

export function editar(data) {
    return axios.post('/checklist/disciplina/editar/' + data.id, {
        nome: data.nome,
    })
}

export function remover(id) {
    return axios.delete('/checklist/disciplina/remover/' + id)
}

