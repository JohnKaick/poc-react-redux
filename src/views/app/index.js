import React from 'react'
import { Provider } from 'react-redux'
import HttpsRedirect from 'react-https-redirect';

import { store } from './../../module/store'
import Router from './router'
import { USUARIO_LOGADO } from './../../module/constants'

let credentials = localStorage.getItem('credentials')

if (credentials) {
    let parsed = JSON.parse(credentials)
    store.dispatch(USUARIO_LOGADO(parsed))
}

export default class extends React.Component {
    render() {
        return (
            <HttpsRedirect>
                <Provider store={store}>
                    <Router />
                </Provider>
            </HttpsRedirect>
        )
    }
}