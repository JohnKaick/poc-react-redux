import React from 'react'
import { Container, Card, Menu, Icon } from 'semantic-ui-react'
import { ViewProjeto, Informacao, EnviarImagem } from './components'
import { FormProjeto, DialogParametro, DialogProjeto } from './containers'
import { Loader, SuperMenu, ImageTiler } from './../../components'

const ListItem = ({ titulo, valor }) => (
    <p>
        <span style={{ color: 'grey' }}>{titulo}</span> <br /> {valor}
    </p>
)

export default (props) => {

    const { projetoId, carregando } = props

    return (
        <Loader loading={carregando}>

            <SuperMenu menus={[
                <Menu.Item key="header" header>Projeto</Menu.Item>
            ]} />

            {projetoId ?
                <ViewProjeto {...props} />
                :
                <FormProjeto />
            }

        </Loader>
    )
}