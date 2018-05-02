import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Icon, Menu, Input, Loader } from 'semantic-ui-react'
import { SuperMenu } from './../../components'
import { TiledList, TableList } from './components'

export default (props) => {
    
    const {
        viewType, viewMode, pesquisa, carregando, onPesquisaChange
    } = props

    return (
        <div>

            <SuperMenu menus={[
                <Menu.Item key="header" header>Projetos</Menu.Item>,
                <Menu.Item key="tiled" active={viewType === 'tiled'} onClick={() => { viewMode('tiled') }}>
                    <Icon name="block layout" />
                </Menu.Item>,
                <Menu.Item key="table" active={viewType === 'table'} onClick={() => { viewMode('table') }}>
                    <Icon name="table" />
                </Menu.Item>,
                <Menu.Menu key="menu" position='right'>
                    <Menu.Item
                        icon="plus"
                        content="Novo projeto"
                        as={NavLink}
                        to={'/projeto/cadastrar'} />
                    <Menu.Item >
                        <Input value={pesquisa} placeholder="Pesquisar..." onChange={onPesquisaChange} icon="search" />
                    </Menu.Item>
                </Menu.Menu>
            ]} />

            {!carregando ?
                <Container>
                    {viewType === 'tiled' ? <TiledList {...props} /> : null}
                    {viewType === 'table' ? <TableList {...props} /> : null}
                </Container>
                :
                <Container textAlign="center">
                    <Loader active={carregando} inline />
                </Container>
            }

        </div>
    )
}