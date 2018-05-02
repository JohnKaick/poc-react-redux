import React from 'react'

import { Menu, Segment, Header, Input, Dropdown } from 'semantic-ui-react'

const limited = (w) => {
    return {
        maxHeight: w || 120,
        overflowY: 'auto',
        paddingTop: 1
    }
}

export default ({
    disciplina, disciplinas, disciplinaSelecionada,
    pasta, pastas, pastaSelecionada,
    elemento, elementos, elementoSelecionado
}) => (
        <Menu fluid size="huge" vertical>

            <Menu.Item className="submenu-limitado">
                <Menu.Header>Disciplinas</Menu.Header>
                <Menu.Menu>
                    {disciplinas.map(d =>
                        <Menu.Item
                            key={d._id}
                            active={d._id === disciplina}
                            onClick={() => { disciplinaSelecionada(d._id) }}>{d.nome}</Menu.Item>
                    )}
                </Menu.Menu>
            </Menu.Item>

            {pastas.length > 0 ? (
                <div>
                    <Menu.Item className="submenu-limitado">
                        <Menu.Header>Pastas</Menu.Header>
                        <Menu.Menu>
                            {pastas.map(p =>
                                <Menu.Item
                                    key={p._id}
                                    active={p._id === pasta}
                                    onClick={() => { pastaSelecionada(p._id) }}>{p.nome}</Menu.Item>
                            )}
                        </Menu.Menu>
                    </Menu.Item>
                </div>
            ) : null}

            {elementos.length > 0 ? (
                <div>
                    <Menu.Item className="submenu-limitado xx">
                        <Menu.Header>Elementos</Menu.Header>
                        <Menu.Menu>
                            {elementos.map(e =>
                                <Menu.Item
                                    key={e._id}
                                    active={e._id === elemento}
                                    onClick={() => { elementoSelecionado(e._id) }}>{e.nome}</Menu.Item>
                            )}
                        </Menu.Menu>
                    </Menu.Item>
                </div>
            ) : null}

        </Menu>
    )