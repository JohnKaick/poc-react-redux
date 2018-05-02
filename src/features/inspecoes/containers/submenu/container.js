import React from 'react';
import { NavLink } from 'react-router-dom'
import { Menu, Dropdown, Popup } from 'semantic-ui-react'

import SuperMenu from './../../../../components/super-menu'

{/*<Popup
                    key="painel"
                    inverted
                    position="bottom center"
                    content="Estatísticas gerais das inspeções."
                    trigger={
                        <Menu.Item
                            exact
                            as={NavLink}
                            to={'/' + projeto + '/inspecoes'}>Painel</Menu.Item>
                    } />,
                <Popup
                    key="vistorias"
                    inverted
                    position="bottom center"
                    content=""
                    trigger={
                        <Menu.Item
                            exact
                            as={NavLink}
                            to={'/' + projeto + '/inspecoes/vistorias'}>Vistorias</Menu.Item>
                    } />,
                */}

export default class extends React.Component {
    render() {
        const { projeto } = this.props
        return (
            <SuperMenu menus={[
                <Menu.Item key="header" header>Inspeções</Menu.Item>,

                <Popup
                    key="empreendimento"
                    inverted
                    position="bottom center"
                    content="Todos os elementos e áreas do empreendimento."
                    trigger={
                        < Menu.Item
                            as={NavLink}
                            exact
                            to={'/' + projeto + '/inspecoes'} > Elementos</Menu.Item >
                    } />,

                <Dropdown key="padroes" item text='Padrões'>
                    <Dropdown.Menu>
                        <Dropdown.Item
                            exact
                            as={NavLink}
                            to={'/' + projeto + '/inspecoes/padroes/disciplinas'} text='Disciplinas' />
                        <Dropdown.Item
                            exact
                            as={NavLink}
                            to={'/' + projeto + '/inspecoes/padroes/elementos'} text='Elementos' />
                        <Dropdown.Item
                            exact
                            as={NavLink}
                            to={'/' + projeto + '/inspecoes/padroes/grupos'} text='Grupos' />
                        <Dropdown.Item
                            exact
                            as={NavLink}
                            to={'/' + projeto + '/inspecoes/padroes/modelos'} text='Modelos' />
                    </Dropdown.Menu>
                </Dropdown>
            ]
            } />
        )
    }
}