import axios from 'axios'

export function obterEmpresaAtual() {
    return axios.get('/identity/usuario/empresa-atual')
}

export function obterPerfil() {
    return axios.get('/identity/perfil')
}

export function salvarPerfil(data) {
    return axios.post('/identity/perfil', {
        nome: data.nome,
        sobrenome: data.sobrenome,
        exibicao: data.exibicao,
        telefone: data.telefone,
        celular: data.celular
    })
}

export function uploadAvatar(file) {
    return axios.post('/identity/perfil/avatar', file)
}