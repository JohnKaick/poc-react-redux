import React from 'react'

import { Grid, Menu, Segment, Header, Input, Button } from 'semantic-ui-react'

import Loader from './../../../../../components/loader'
import DialogElemento from './../../../containers/dialog-elemento'
import FormElemento from './../../../containers/form-elemento'
import Navegacao from './navegacao'

export default (props) => {

    const {
        carregando
    } = props

    return (
        <Loader loading={carregando}>
            <Grid container>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Navegacao
                            disciplina={props.disciplina}
                            disciplinas={props.disciplinas}
                            disciplinaSelecionada={props.disciplinaSelecionada}
                            pasta={props.pasta}
                            pastas={props.pastas}
                            pastaSelecionada={props.pastaSelecionada}
                            elemento={props.elemento}
                            elementos={props.elementos}
                            elementoSelecionado={props.elementoSelecionado} />
                        {(props.disciplina && props.pasta) ? (
                            <DialogElemento disciplinaId={props.disciplina} pastaId={props.pasta}>
                                <Button fluid primary icon="add" content="Cadastrar elemento" />
                            </DialogElemento>
                        ) : null}
                    </Grid.Column>
                    <Grid.Column width={12}>
                        {props.elemento ?
                            <FormElemento
                                disciplinaId={props.disciplina}
                                pastaId={props.pasta}
                                elementoId={props.elemento} />
                            : null}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Loader>
    )
}