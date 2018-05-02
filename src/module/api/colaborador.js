import axios from 'axios'

export function obter(id) {
    return axios.get('/identity/colaborador/' + id)
}

export function obterTodos(exclude) {

    let e = exclude.reduce((str, ex, i) => {
        if ((i + 1) < exclude.length) {
            return str += ex + ','
        } else {
            return str += ex
        }
    }, '')

    return axios({
        method: 'get',
        url: '/identity/colaborador',
        params: {
            exclude: e
        }
    })
}

export function cadastrar(data) {
    return axios.put('/identity/colaborador/cadastrar', {
        projetoId: data.projetoId,
        nome: data.nome,
        sobrenome: data.sobrenome,
        email: data.email,
        cliente: data.cliente,
        area: data.area,
        cargo: data.cargo,
    })
}

export function editar(data) {
    return axios.post('/identity/colaborador/editar/' + data.id, {
        nome: data.nome,
        sobrenome: data.sobrenome,
        email: data.email,
        cliente: data.cliente,
        area: data.area,
        cargo: data.cargo,
    })
}