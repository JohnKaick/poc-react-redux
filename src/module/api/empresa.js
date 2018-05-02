import axios from 'axios'

export function obterAtual() {
    return axios.get('/identity/empresa/atual')
}

export function obterAdmin() {
    return axios.get('/identity/empresa/obter-admin')
}

export function cadastrarEmpresa(data) {
    return axios.put('/identity/empresa', data)
}

export function convidarUsuario(email) {
    return axios.put('/identity/empresa/invite', { email })
}