import React from 'react'
import { Table, Icon, Button, Menu, Segment, Popup, Grid, Label, Tab, Item, Divider, Header, Card } from 'semantic-ui-react'
import { Link, NavLink } from 'react-router-dom'
import { DialogReplica, DialogItemCadastrarAssunto } from './../../../containers'
import Replica from './replica'
import ApItem from './item'

export default (props) => {

    const {
        onAprovar, onDeletar, onAlterarPosicao, handleClick, activeIndex, organizados, analise, projeto,
    } = props

    return (
        <div>
            {Object.keys(organizados || {}).map((assunto, posAssunto, pos) => (
                <div key={assunto}>

                    <div>

                        <div style={{ padding: 12, display: 'inline-block' }}>
                            <Label color="blue" horizontal>{posAssunto + 1}.0</Label> {assunto}
                        </div>

                        <DialogItemCadastrarAssunto analiseId={analise._id} assunto={assunto} >
                            <Button
                                size="small"
                                onClick={() => { }}
                                floated="right"
                                icon='plus'
                                content="Adicionar no grupo"
                                style={{ marginTop: 6, marginRight: 6 }}
                            />
                        </DialogItemCadastrarAssunto>

                    </div>

                    {organizados[assunto].map((item, posItem) => (
                        <ApItem
                            {...props}
                            key={item._id}
                            assunto={assunto}
                            posAssunto={posAssunto}
                            item={item}
                            posItem={posItem}
                        />
                    ))}

                    <br />

                </div>
            ))}
        </div>
    )
}
