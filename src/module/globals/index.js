import axios from 'axios'

const apiUrl = {
    'production': 'https://srv.wisein.co',
    'development': 'http://localhost:9090'
}

class Globals {

    constructor() {
        this.history = null
        this.avatarAddress = 'https://s3-sa-east-1.amazonaws.com/ativati-dev/avatar/'
        this.session = {
            authenticated: false
        }
        this.config()
    }

    config() {
        axios.defaults.baseURL = apiUrl[process.env.NODE_ENV]
        axios.interceptors.response.use(function (response) {
            return response;
        }, function (error) {
            return Promise.reject(error);
        });
    }

}

export function getImageAddress(imagem) {
    if (!imagem) return 'sem-imagem.jpg'
    const projetoSid = imagem.__projetoSid
    const token = imagem.token
    const azureKey = "?sv=2015-12-11&ss=f&srt=o&sp=r&se=2020-01-01T17:45:44Z&st=2016-12-29T09:45:44Z&spr=https&sig=1OIYQrwQAY%2BXZa48iLMvN%2FxQcw0xDkl6pQzKTqRPTps%3D"
    return 'https://wisein.file.core.windows.net/projeto-files/' + projetoSid + '/images/' + token + '.jpg' + azureKey
}

export default (new Globals())