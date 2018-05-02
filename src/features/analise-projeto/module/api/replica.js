import axios from 'axios'

export function cadastrar(data) {
    return axios.put('/analise-projeto/replica/cadastrar/' + data.itemId, {
        situacaoSugerida: data.situacaoSugerida,
        mensagem: data.mensagem,
    })
}

export function aprovar(itemId, id) {
    return axios.post('/analise-projeto/replica/aprovar/' + itemId + '/' + id)
}

export function remover(itemId, id) {
    return axios.delete('/analise-projeto/replica/remover/' + itemId + '/' + id)
}

