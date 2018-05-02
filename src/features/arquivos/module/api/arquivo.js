import axios from 'axios'

// Revisão

export function obterRevisao(revisaoId) {
    return axios.get('/arquivo/arquivo/obter-revisao/' + revisaoId)
}

export function cadastrarRevisao(data) {
    return axios.put('/arquivo/arquivo/nova-revisao/' + data.arquivoId, {
        numero: data.numero,
        nomenclatura: data.nomenclatura,
        revisao: data.revisao,
        assunto: data.assunto,
        descricao: data.descricao,
        emissao: data.emissao
    })
}

export function editarRevisao(data) {
    return axios.post('/arquivo/arquivo/editar-revisao/' + data.id, data)
}

export function removerRevisao(id) {
    return axios.delete('/arquivo/arquivo/remover-revisao/' + id)
}


// Arquivo

export function obter(id) {
    return axios.get('/arquivo/arquivo/obter/' + id)
}

export function obterTodos(grupoId) {
    return axios.get('/arquivo/arquivo/obter-todos/' + grupoId)
}

export function cadastrar(data) {
    return axios.put('/arquivo/arquivo/cadastrar/' + data.grupoId, {
        numero: data.numero,
        nomenclatura: data.nomenclatura,
        revisao: data.revisao,
        assunto: data.assunto,
        descricao: data.descricao,
        emissao: data.emissao
    })
}

export function upload(revisaoId, file, progress) {
    return axios.post('/arquivo/arquivo/upload/' + revisaoId, file, {
        params: {
            name: file.name,
            type: file.type,
            size: file.size,
            last: file.lastModified
        }
    })
}

export function editar(data) {
    return axios.post('/arquivo/arquivo/editar/' + data.revisaoId, data)
}


export function remover(id) {
    return axios.delete('/arquivo/arquivo/remover/' + id)
}

// download

export function download(revisaoId) {
    return axios.defaults.baseURL + '/arquivo/arquivo/download/' + revisaoId + '?token=' + axios.defaults.headers.common['Authorization']
}

export function downloadMultiplos(grupoId, tipos) {
    return axios.defaults.baseURL + '/arquivo/arquivo/download-multiplos/' + grupoId + '?token=' + axios.defaults.headers.common['Authorization']
}