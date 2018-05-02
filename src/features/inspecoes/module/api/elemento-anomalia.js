import axios from 'axios'

export function obter(id) {
    return axios.get('/checklist/elemento-anomalia/obter/' + id)
}

export function obterTodos(modeloId) {
    return axios.get('/checklist/elemento-anomalia/obter-todos/' + modeloId)
}

export function cadastrar(data) {
    return axios.put('/checklist/elemento-anomalia/cadastrar/' + data.modeloId, {
        checklist: data.checklist,
        comentarios: data.comentarios,
        situacao: data.situacao,
        classificacao: data.classificacao,
        falha: data.falha,
        nome: data.nome,
        g: data.g,
        u: data.u,
        t: data.t
    })
}

export function editar(data) {
    return axios.post('/checklist/elemento-anomalia/editar/' + data.id, {
        comentarios: data.comentarios,
        situacao: data.situacao,
        classificacao: data.classificacao,
        falha: data.falha,
        nome: data.nome,
        g: data.g,
        u: data.u,
        t: data.t
    })
}

export function remover(id) {
    return axios.delete('/checklist/elemento-anomalia/remover/' + id)
}

