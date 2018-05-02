import axios from 'axios'

export function obter(id) {
    return axios.get('/analise-projeto/relatorio/obter/' + id)
}

export function obterTodos(projetoId) {
    return axios.get('/analise-projeto/relatorio/obter-todos/' + projetoId)
}

export function cadastrar(data) {
    return axios.put('/analise-projeto/relatorio/cadastrar/' + data.projetoId, {
        titulo: data.titulo,
        revisao: data.revisao,
        data: data.data,
    })
}

export function editar(data) {
    return axios.post('/analise-projeto/relatorio/editar/' + data.id, {
        titulo: data.titulo,
        revisao: data.revisao,
        data: data.data,
    })
}

export function migrar(id) {
    return axios.post('/analise-projeto/relatorio/migrar/' + id)
}

export function transmitir(id) {
    return axios.post('/analise-projeto/relatorio/transmitir/' + id)
}

export function remover(id) {
    return axios.delete('/analise-projeto/relatorio/remover/' + id)
}

