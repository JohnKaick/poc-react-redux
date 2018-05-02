import React from 'react'
import { Button, Label, Header, Card } from 'semantic-ui-react'
import { DialogReplica, DialogItemCadastrar, DialogItemCadastrarAssunto } from './../../../containers'
import Replica from './replica'

const LabelSituacao = ({ situacao }) => {
    if (situacao === 'finalizado') {
        return <Label style={{ float: 'right' }} color='green' content='Finalizado' />
    } else if (situacao === 'pendente') {
        return <Label style={{ float: 'right' }} color='orange' content='Pendente' />
    } else {
        return <Label style={{ float: 'right' }} content='Informativo' />
    }
}

export default (props) => {

    const {
        onAprovar, onDeletar, onAlterarPosicao, handleClick, activeIndex, organizados, itens, analise, projeto,
        assunto, posAssunto, item, posItem
    } = props

    return (
        <Card key={item._id} fluid>

            <Card.Content>

                <Label ribbon basic content={(posAssunto + 1) + '.' + (posItem + 1)} />

                <LabelSituacao situacao={item.situacao} />

                <Header size='tiny'>{item.escopo}</Header>

                <p style={{ padding: '5px', whiteSpace: 'pre-line' }}>
                    {item.anomalia}
                </p>

                {(item.replicas && item.replicas.length > 0) ?
                    <Replica
                        onAprovar={onAprovar}
                        onDeletar={onDeletar}
                        handleClick={handleClick}
                        activeIndex={activeIndex}
                        itemId={item._id}
                        replicas={item.replicas} />
                    : null
                }

                <br />

                <DialogItemCadastrarAssunto id={item._id}>
                    <Button basic icon='edit' content='Editar' floated="right" />
                </DialogItemCadastrarAssunto>

                <DialogReplica itemId={item._id} >
                    <Button basic icon='reply' content='Responder' floated="right" />
                </DialogReplica>

                <Button.Group basic floated="right" size='tiny'>

                    <Button
                        icon='arrow up'
                        disabled={posItem === 0}
                        onClick={() => { onAlterarPosicao(item, organizados[assunto][posItem - 1]) }} />

                    <Button
                        icon='arrow down'
                        disabled={posItem === (organizados[assunto].length - 1)}
                        onClick={() => { onAlterarPosicao(item, organizados[assunto][posItem + 1]) }} />

                </Button.Group>

            </Card.Content>

        </Card>

    )


}
