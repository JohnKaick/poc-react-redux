import axios from 'axios'

export function obterProjetos() {
    return axios.get('/identity/projeto/obter-todos')
}

export function obterProjeto(id) {
    return axios.get('/identity/projeto/obter/' + id)
}

export function obterParametro(projetoId, id) {
    return axios.get('/identity/projeto/obter-parametro/' + projetoId + '/' + id)
}

export function cadastrar(data) {
    return axios.put('/identity/projeto/cadastrar', {
        empreendimento: data.empreendimento,
        exibicao: data.exibicao,
        informacao: data.informacao,
        areaConstruida: data.areaConstruida,
        areaPrivativa: data.areaPrivativa,
        areaLocavel: data.areaLocavel
    })
}

export function editar(data) {
    return axios.post('/identity/projeto/editar/' + data.id, {
        empreendimento: data.empreendimento,
        exibicao: data.exibicao,
        informacao: data.informacao,
        areaConstruida: data.areaConstruida,
        areaPrivativa: data.areaPrivativa,
        areaLocavel: data.areaLocavel
    })
}

export function cadastrarParametro(data) {
    return axios.post('/identity/projeto/cadastrar-parametro/' + data.projetoId, {
        nome: data.nome,
        valor: data.valor,
    })
}

export function editarParametro(data) {
    return axios.post('/identity/projeto/editar-parametro/' + data.projetoId + '/' + data.id, {
        nome: data.nome,
        valor: data.valor,
    })
}

export function inserirImagem(id, file) {
    return axios.post('/identity/projeto/inserir-imagem/' + id, file, {
        params: {
            size: file.size
        }
    })
}

export function removerImagem(id) {
    return axios.post('/identity/projeto/remover-imagem/' + id)
}

export function removerParametro(projetoId, id) {
    return axios.delete('/identity/projeto/remover-parametro/' + projetoId + '/' + id)
}
