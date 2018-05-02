import axios from 'axios'

export function obter(revisaoId) {
    return axios.get('/arquivo/arquivo/obter-revisao/' + revisaoId)
}

export function cadastrar(data) {
    return axios.put('/arquivo/arquivo/nova-revisao/' + data.arquivoId, {
        numero: data.numero,
        nomenclatura: data.nomenclatura,
        revisao: data.revisao,
        assunto: data.assunto,
        descricao: data.descricao,
        emissao: data.emissao
    })
}

export function editar(data) {
    return axios.post('/arquivo/arquivo/editar-revisao/' + data.id, data)
}

export function remover(id) {
    return axios.delete('/arquivo/arquivo/remover-revisao/' + id)
}