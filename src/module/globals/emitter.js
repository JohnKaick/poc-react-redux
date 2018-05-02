import Noty from 'noty'

import { EventEmitter } from 'fbemitter'

const emitter = new EventEmitter()

emitter.addListener('mensagem-erro', function (msg, err) {
    console.log(msg, err)
    let mensagem = new Noty({
        type: 'error',
        layout: 'bottomLeft',
        timeout: 4000,
        theme: 'metroui',
        text: msg
    })
    mensagem.show()
})


emitter.addListener('mensagem-sucesso', function (msg) {
    let mensagem = new Noty({
        type: 'success',
        layout: 'bottomLeft',
        timeout: 2000,
        theme: 'metroui',
        text: msg
    })
    mensagem.show()
})

emitter.addListener('mensagem-informativa', function (msg) {
    let mensagem = new Noty({
        type: 'info',
        layout: 'bottomLeft',
        timeout: 3000,
        theme: 'metroui',
        text: msg
    })
    mensagem.show()
})

export default (emitter)