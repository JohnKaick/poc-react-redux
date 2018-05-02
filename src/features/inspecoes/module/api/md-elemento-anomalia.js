import axios from 'axios'

export function obter(id) {
    return axios.get('/checklist/md-elemento-anomalia/obter/' + id)
}

export function obterTodos(elementoId) {
    return axios.get('/checklist/md-elemento-anomalia/obter-todos/' + elementoId)
}

export function cadastrar(data) {
    return axios.put('/checklist/md-elemento-anomalia/cadastrar/' + data.elementoId, {
        exibicao: data.exibicao,
        descritivo: data.descritivo,
        caracteristica: data.caracteristica,
        questao: data.questao,
        diagnostico: data.diagnostico,
        gravidades: data.gravidades
    })
}

export function editar(data) {
    return axios.post('/checklist/md-elemento-anomalia/editar/' + data.id, {
        exibicao: data.exibicao,
        descritivo: data.descritivo,
        caracteristica: data.caracteristica,
        questao: data.questao,
        diagnostico: data.diagnostico,
        gravidades: data.gravidades
    })
}

export function remover(id) {
    return axios.delete('/checklist/md-elemento-anomalia/remover/' + id)
}

