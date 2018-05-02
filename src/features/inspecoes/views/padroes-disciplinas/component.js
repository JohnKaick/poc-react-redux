import React from 'react'
import { Grid } from 'semantic-ui-react'

import Loader from './../../../../components/loader'
import { Disciplina } from './components'
import FormDisciplina from './../../containers/form-disciplina'

export default (props) => {

    const {
        carregando, projetoAtual, disciplinas, disciplina, onDisciplinaSelecionada
    } = props

    return (
        <Loader loading={carregando}>
            <Grid container>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Disciplina
                            disciplinas={disciplinas}
                            disciplina={disciplina}
                            onDisciplinaSelecionada={onDisciplinaSelecionada}
                            projetoId={projetoAtual}
                        />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        {disciplina && (
                            <FormDisciplina disciplinaId={disciplina} />
                        )}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Loader>
    )
}