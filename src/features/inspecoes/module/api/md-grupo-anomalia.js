import axios from 'axios'

export function obter(id) {
    return axios.get('/checklist/md-grupo-anomalia/obter/' + id)
}

export function obterTodos(pastaId) {
    return axios.get('/checklist/md-grupo-anomalia/obter-todos/' + pastaId)
}

export function cadastrar(data) {
    return axios.put('/checklist/md-grupo-anomalia/cadastrar/' + data.pastaId, {
        exibicao: data.exibicao,
        descritivo: data.descritivo,
        caracteristica: data.caracteristica,
        questao: data.questao,
        diagnostico: data.diagnostico,
        nome: data.nome,
        g: data.g,
        u: data.u,
        t: data.t,
    })
}

export function editar(data) {
    return axios.post('/checklist/md-grupo-anomalia/editar/' + data.id, {
        exibicao: data.exibicao,
        descritivo: data.descritivo,
        caracteristica: data.caracteristica,
        questao: data.questao,
        diagnostico: data.diagnostico,
        nome: data.nome,
        g: data.g,
        u: data.u,
        t: data.t,
    })
}

export function remover(id) {
    return axios.delete('/checklist/md-grupo-anomalia/remover/' + id)
}

