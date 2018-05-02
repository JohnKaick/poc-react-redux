import axios from 'axios'

export function obter(id) {
    return axios.get('/analise-projeto/item/obter/' + id)
}

export function obterTodos(analiseId) {
    return axios.get('/analise-projeto/item/obter-todos/' + analiseId)
}

export function cadastrar(data) {
    return axios.put('/analise-projeto/item/cadastrar/' + data.analiseId, {
        assunto: data.assunto,
        situacao: data.situacao,
        escopo: data.escopo,
        anomalia: data.anomalia,
    })
}

export function editar(data) {
    return axios.post('/analise-projeto/item/editar/' + data.id, {
        assunto: data.assunto,
        situacao: data.situacao,
        escopo: data.escopo,
        anomalia: data.anomalia,
    })
}

export function remover(id) {
    return axios.delete('/analise-projeto/item/remover/' + id)
}

export function alterarPosicao(itemA, itemB) {
    return axios.post('/analise-projeto/item/alterar-posicao/' + itemA + '/' + itemB)
}


