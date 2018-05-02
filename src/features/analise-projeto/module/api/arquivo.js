import axios from 'axios'

export function obter(id) {
    return axios.get('/analise-projeto/arquivo-analisado/obter/' + id)
}

export function cadastrar(data) {
    return axios.put('/analise-projeto/arquivo-analisado/cadastrar/' + data.analiseId, {
        desenho: data.desenho,
        arquivo: data.arquivo,
        revisao: data.revisao,
        emissao: data.emissao,
        descricao: data.descricao,
    })
}

export function editar(data) {
    return axios.post('/analise-projeto/arquivo-analisado/editar/' + data.id, {
        desenho: data.desenho,
        arquivo: data.arquivo,
        revisao: data.revisao,
        emissao: data.emissao,
        descricao: data.descricao,
    })
}

export function remover(id) {
    return axios.delete('/analise-projeto/arquivo-analisado/remover/' + id)
}
