import axios from 'axios'

export function obter(id) {
    return axios.get('/ata/item/obter/' + id)
}

export function obterTodos(ataId) {
    return axios.get('/ata/item/obter-todos/' + ataId)
}

export function cadastrar(data) {
    return axios.put('/ata/item/cadastrar/' + data.ataId, {
        assunto: data.assunto,
        descricao: data.descricao,
        responsavel: data.responsavel,
        prazo: data.prazo,
        situacao: data.situacao,
        indice: data.indice,
        revisao: data.revisao,
        master: data.master,
    })
}

export function editar(data) {
    return axios.post('/ata/item/editar/' + data.id, {
        assunto: data.assunto,
        descricao: data.descricao,
        responsavel: data.responsavel,
        prazo: data.prazo,
        situacao: data.situacao,
        indice: data.indice,
        revisao: data.revisao,
        master: data.master
    })
}

export function remover(id) {
    return axios.delete('/ata/item/remover/' + id)
}

