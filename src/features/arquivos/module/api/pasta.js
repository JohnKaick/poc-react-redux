import axios from 'axios'

export function obter(id) {
    return axios.get('/arquivo/pasta/obter/' + id)
}

export function obterPorProjeto(projetoId) {
    return axios.get('/arquivo/pasta/obter-projeto/' + projetoId)
}

export function cadastrar(data) {
    return axios.put('/arquivo/pasta/cadastrar/' + data.projetoId, {
        disciplina: data.disciplina,
        nome: data.nome
    })
}

export function editar(data) {
    return axios.post('/arquivo/pasta/editar/' + data.id, {
        nome: data.nome,
        tipo: data.tipo
    })
}

export function remover(id) {
    return axios.delete('/arquivo/pasta/remover/' + id)
}

