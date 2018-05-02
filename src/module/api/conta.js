import axios from 'axios'

export function autenticar(data) {
    return axios.post('/identity/conta/autenticar', {
        login: data.usuario,
        senha: data.senha
    })
}

export function alterarSenha(senhaAtual, senhaNova) {
    return axios.post('/identity/conta/alterar-senha', {
        senhaNova: senhaNova,
        senhaAtual: senhaAtual
    })
}

export function confirmarConta(token) {
    return axios.post('/identity/conta/confirmar-conta/' + token)
}

export function recuperarConta(data) {
    return axios.post('/identity/conta/recuperar-senha', {
        email: data.email
    })
}

export function recuperarTrocaSenha(senha, token) {
    return axios.post('/identity/conta/recuperar-senha-cb/' + token, {
        senha: senha
    })
}

export function cadastrarConta(data) {
    return axios.post('/identity/conta/cadastrar', {
        exibicao: data.exibicao,
        email: data.email,
        senha: data.senha
    })
}

export function obterStatusServidor() {
    return axios.get('/identity/server-status')
}