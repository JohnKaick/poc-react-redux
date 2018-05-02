import axios from 'axios'

export function obter(id) {
    return axios.get('/diario-obra/item/obter/' + id)
}

export function obterTodos(diarioId) {
    return axios.get('/diario-obra/item/obter-todos/' + diarioId)
}

export function cadastrar(data) {
    return axios.put('/diario-obra/item/cadastrar/' + data.diarioId, {
        assunto: data.assunto,
        descricao: data.descricao,
        responsavel: data.responsavel,
        situacao: data.situacao,
    })
}

export function editar(data) {
    return axios.post('/diario-obra/item/editar/' + data.id, {
        assunto: data.assunto,
        descricao: data.descricao,
        responsavel: data.responsavel,
        situacao: data.situacao,
    })
}

export function inserirImagem(itemId, file) {
    return axios.post('/diario-obra/item/inserir-imagem/' + itemId, file, {
        params: {
            size: file.size
        }
    })
}

export function removerImagem(id) {
    return axios.post('/diario-obra/item/remover-imagem/' + id)
}

export function remover(id) {
    return axios.delete('/diario-obra/item/remover/' + id)
}

