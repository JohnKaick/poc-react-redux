import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, Dropdown, Image, Icon } from 'semantic-ui-react'

import logo from './logo.png'

const UserTrigger = ({ exibicao, avatar }) => (
    <div>
        <Image
            id="avatarHeaderBar"
            src={avatar}
            onError={() => {
                document.getElementById('avatarHeaderBar').src = '../module/content/images/avatar-no-image.png'
            }}
            avatar />
        <span style={{ paddingLeft: 5 }}>{exibicao}</span>
    </div>
)

export default class extends React.Component {

    render() {

        const { session, projeto, modulo, desconectar } = this.props

        return (
            <Menu size="large" style={{ marginBottom: 0 }}>
                <div className="ui container">

                    <Menu.Item as={Link} to="/">
                        <img style={{ width: 60 }} src={logo} alt="Wisein logo" />
                    </Menu.Item>

                    {projeto ?
                        <Menu.Item exact as={NavLink} to={"/" + projeto._id}>{projeto.exibicao}</Menu.Item> :
                        <Menu.Item exact as={NavLink} to="/">Projetos</Menu.Item>
                    }

                    {projeto ? (
                        <Dropdown text='Menu' pointing className='link item'>
                            <Dropdown.Menu>
                                <Dropdown.Item exact as={NavLink} to={"/" + projeto._id}>Informações</Dropdown.Item>
                                <Dropdown.Item as={NavLink} to={"/" + projeto._id + '/inspecoes'}>Inspeções</Dropdown.Item>
                                <Dropdown.Item as={NavLink} to={"/" + projeto._id + '/analise-projeto'}>Análise de Projeto</Dropdown.Item>
                                <Dropdown.Item as={NavLink} to={"/" + projeto._id + '/arquivos'}>Arquivos</Dropdown.Item>
                                <Dropdown.Item as={NavLink} to={"/" + projeto._id + '/atas'}>Ata de Reunião</Dropdown.Item>
                                <Dropdown.Item as={NavLink} to={"/" + projeto._id + '/diario-obra'}>Diário de Obra</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    ) : null}

                    <Menu.Menu position='right'>
                        <Dropdown
                            item
                            trigger={<UserTrigger exibicao={session.usuario.exibicao} avatar={session.usuario.avatar} />}
                            icon={null}>
                            <Dropdown.Menu>
                                <Dropdown.Item
                                    as={Link}
                                    to="/perfil"
                                    content="Perfil" />
                                <Dropdown.Item
                                    as={Link}
                                    to="/empresa"
                                    content="Minha empresa" />
                                <Dropdown.Divider />
                                <Dropdown.Item
                                    content="Sair"
                                    onClick={desconectar} />
                            </Dropdown.Menu>
                        </Dropdown>
                    </Menu.Menu>

                </div>
            </Menu>
        )
    }
}
