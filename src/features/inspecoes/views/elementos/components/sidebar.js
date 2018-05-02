import React from 'react'
import { Menu, Button, Dropdown } from 'semantic-ui-react'
import DialogGrupo from './../../../containers/dialog-grupo'

export default (props) => {

    const { currents, onGrupoSelecionado, projetoAtual } = props

    return (
        <div>
            <Menu fluid size="huge" vertical>
                {currents.map((grupos, i) => (
                    <Menu.Item key={i} className="submenu-limitado x">
                        <Menu.Header>{grupos.title}</Menu.Header>
                        <Menu.Menu>
                            {grupos.itens.map(g =>
                                <Menu.Item
                                    key={g._id}
                                    active={grupos.selected && g._id === grupos.selected._id}
                                    onClick={() => { onGrupoSelecionado(g._id, i, currents, grupos) }}>{g.nome}</Menu.Item>
                            )}
                        </Menu.Menu>
                    </Menu.Item>
                ))}
            </Menu>
        </div>
    )
}