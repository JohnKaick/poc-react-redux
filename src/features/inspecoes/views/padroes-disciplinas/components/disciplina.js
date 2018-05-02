import React from 'react'

import { Menu, Icon, Button } from 'semantic-ui-react'

import DialogDisciplina from './../../../containers/dialog-disciplina'

export default ({
    disciplina, disciplinas, onDisciplinaSelecionada, projetoId
}) => (
        <Menu fluid vertical>

            <Menu.Item header className="menu-limitado-header">
                Disciplinas
                <DialogDisciplina projetoId={projetoId}>
                    <Icon name="plus" style={{ cursor: 'pointer' }} />
                </DialogDisciplina>
            </Menu.Item>

            <Menu.Item className="menu-limitado submenu-limitado">
                {disciplinas.map(d =>
                    <Menu.Item
                        key={d._id}
                        active={d._id === disciplina}
                        onClick={() => { onDisciplinaSelecionada(d._id) }}>
                        {d.nome}
                    </Menu.Item>
                )}
            </Menu.Item>
        </Menu>
    )