import React from 'react'

import { Table, Icon, Button, Menu, Segment, Popup, Accordion, Label, Header, Loader, Image } from 'semantic-ui-react'
import { Link, NavLink } from 'react-router-dom'
import { DialogArquivo } from './../../../containers'
import AddArquivo from './../../../../../components/icones/add-file.png'

const styles = {
    clickableLabel: { cursor: 'pointer', marginTop: '5px' },
    AddArquivo: { cursor: 'pointer', width: '6em', marginLeft: 'auto', marginRight: 'auto' }
}

export default ({
    analise, showArquivoResult, showArquivos
}) => {

    let showButton;

    if (analise.arquivos && analise.arquivos.length > 5) {
        if (showArquivoResult) {
            showButton = (
                <Button secondary attached='bottom' icon="caret up" content="Ocultar" onClick={showArquivos} />
            )
        } else {
            showButton = (
                <Button secondary attached='bottom' icon="caret down" content="Mostrar todos" onClick={showArquivos} />
            )
        }
    } else {
        null
    }

    return (
        <div>

            <Menu borderless attached="top" >
                <Menu.Item header content='Arquivos' />
                <Menu.Menu position='right'>
                    <DialogArquivo analiseId={analise._id}>
                        <Menu.Item icon="plus" />
                    </DialogArquivo>
                </Menu.Menu>
            </Menu>

            <Segment attached>

                {!analise.arquivos ?
                    <Loader inline active />
                    :
                    (analise.arquivos.length == 0) ?
                        <DialogArquivo analiseId={analise._id}>
                            <div style={styles.AddArquivo}>
                                <Image src={AddArquivo} />
                            </div>
                        </DialogArquivo>
                        :
                        (analise.arquivos || []).map((a, i) => (
                            showArquivoResult || i <= 4 ?
                                <DialogArquivo key={i} id={a._id}>
                                    <Label style={styles.clickableLabel} basic>{a.arquivo}</Label>
                                </DialogArquivo>
                                : null
                        ))
                }

            </Segment>

            {showButton}

        </div>
    )
}