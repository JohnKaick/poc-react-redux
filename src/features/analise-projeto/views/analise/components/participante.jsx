import React from 'react'
import { Grid, List, Button, Menu, Segment, Icon, Popup, Label, Feed, Loader, Header, Image } from 'semantic-ui-react'
import { DialogParticipante } from './../../../containers'
import AddParticipante from './../../../../../components/icones/new-user.png'

const styles = {
    p: { marginTop: '5px' },
    addParticipante: { cursor: 'pointer', width: '6em', marginLeft: 'auto', marginRight: 'auto' }
}

export default ({
    onDesvincular, participantes, participante, analise, projeto, showParticipanteResult, showParticipantes,
}) => {

    let showButton;
    if (participantes && participantes.length > 5) {
        if (showParticipanteResult) {
            showButton = (
                <Button secondary attached='bottom' icon="caret up" content="Ocultar" onClick={showParticipantes} />
            )
        } else {
            showButton = (
                <Button secondary attached='bottom' icon="caret down" content="Mostrar todos" onClick={showParticipantes} />
            )
        }
    } else {
        null
    }

    return (
        <div>

            <Menu borderless attached="top" >
                <Menu.Item header content='Participantes' />
                <Menu.Menu position='right'>
                    <DialogParticipante projetoId={projeto} participantes={participantes} analiseId={analise._id}>
                        <Menu.Item icon="plus" />
                    </DialogParticipante>
                </Menu.Menu>
            </Menu>

            <Segment attached>
                {!participantes ?
                    <Loader inline active />
                    :
                    (participantes.length == 0) ?
                        <DialogParticipante projetoId={projeto} participantes={participantes} analiseId={analise._id}>
                            <div style={styles.addParticipante}>
                                <Image src={AddParticipante} />
                            </div>
                        </DialogParticipante>
                        :
                        participantes.map((p, i) => (
                            showParticipanteResult || i <= 4 ?
                                <div style={styles.p} key={i}>
                                    {p.responsavel ?
                                        <Label color='blue'>
                                            {p.nome} {p.sobrenome}
                                            <Icon name='delete' onClick={() => { onDesvincular(analise._id, p._id) }} />
                                        </Label>
                                        :
                                        <Label basic>
                                            {p.nome} {p.sobrenome}
                                            <Icon name='delete' onClick={() => { onDesvincular(analise._id, p._id) }} />
                                        </Label>
                                    }
                                </div>
                                :
                                null
                        ))
                }
            </Segment>
            {showButton}
        </div>
    )
}