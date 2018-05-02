import axios from 'axios'

export function obter(id) {
    return axios.get('/checklist/md-elemento/obter/' + id)
}

export function obterTodos(pastaId) {
    return axios.get('/checklist/md-elemento/obter-pasta/' + pastaId)
}

export function cadastrar(data) {
    return axios.put('/checklist/md-elemento/cadastrar', {
        pasta: data.pastaId,
        grupo: data.grupoId,
        nome: data.nome,
        descritivo: data.descritivo,
        prefix: data.prefix,
        metodo: data.metodo,
        vidaUtil: data.vidaUtil,
        pesoGut: data.pesoGut,
    })
}

export function editar(data) {
    return axios.post('/checklist/md-elemento/editar/' + data.id, {
        pasta: data.pastaId,
        grupo: data.grupoId,
        nome: data.nome,
        descritivo: data.descritivo,
        prefix: data.prefix,
        metodo: data.metodo,
        vidaUtil: data.vidaUtil,
        pesoGut: data.pesoGut,
    })
}

export function remover(id) {
    return axios.delete('/checklist/md-elemento/remover/' + id)
}

