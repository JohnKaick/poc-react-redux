import React from 'react';

import { Menu, Dropdown, Popup, Input, Button, Icon } from 'semantic-ui-react'
import { Link, NavLink } from 'react-router-dom'

import SuperMenu from './../../../../components/super-menu'
import DialogDiario from './../dialog-diario'

export default class extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
    }

    render() {
        const { carregando, projeto } = this.props
        return (
            <SuperMenu menus={[
                <Menu.Item key="header" header>Diário de obra</Menu.Item>,
                <Menu.Item
                    onClick={() => { }}
                    as={NavLink}
                    to={'/' + projeto + '/diario-obra'}
                    key="painel">
                    <Icon inverted name='list layout' />
                    Painel
                </Menu.Item>
            ]} />
        )
    }
}