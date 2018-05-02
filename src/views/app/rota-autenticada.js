import React from 'react'

import { Redirect } from 'react-router-dom'

export default (props) => {

    const { conectado, location } = props

    let redirectToLogin = (<Redirect
        to={{
            pathname: '/login',
            state: { from: location }
        }}
    />)

    if (!conectado) {
        return redirectToLogin
    }
    
    let Component = props.component

    return (<Component {...props} />)

}