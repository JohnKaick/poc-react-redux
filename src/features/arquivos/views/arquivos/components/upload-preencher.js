import React from 'react'

import {
    Modal, Header, Table, Input, Button
} from 'semantic-ui-react'

export default class extends React.Component {

    constructor(props) {
        super(props)
        this.salvar = this.salvar.bind(this)
        this.open = this.open.bind(this)
        this.close = this.close.bind(this)
        this.state = {
            opened: false,
            values: []
        }
    }

    // Scroll bug

    componentWillUpdate() {
        this.fixBody();
    }

    componentDidUpdate() {
        this.fixBody();
    }

    fixBody() {
        const anotherModal = document.getElementsByClassName('ui page modals').length;
        if (anotherModal > 0) document.body.classList.add('scrolling', 'dimmable', 'dimmed');
    }

    // Common

    salvar() {
        if (this.props.save) {
            this.props.save(this.state.values)
        }
        this.close()
    }

    open() {
        let values = this.props.analisados.novos.map(a => {
            return {
                nomenclatura: a.detalhes ? a.detalhes.nomenclatura : a.formatado.nome,
                revisao: a.detalhes ? a.detalhes.revisao : '00',
                numero: a.detalhes ? a.detalhes.numero : 'xx',
                assunto: a.detalhes ? a.detalhes.assunto : ''
            }
        })
        this.setState({ opened: true, values })
    }

    close() {
        this.setState({ opened: false })
    }

    change(i, e, { name, value }) {
        let values = [...this.state.values]
        values[i][name] = value
        this.setState({
            values: values
        });
    }

    render() {
        return (
            <Modal
                open={this.state.opened}
                trigger={this.props.children}
                onOpen={this.open}>

                <Header>Preencher envios</Header>

                <Modal.Content>
                    <Table basic>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell width={2}>Número</Table.HeaderCell>
                                <Table.HeaderCell width={6}>Nomenclatura</Table.HeaderCell>
                                <Table.HeaderCell width={2}>Revisão</Table.HeaderCell>
                                <Table.HeaderCell width={6}>Assunto</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {this.state.values.map((v, i) =>
                                <Table.Row key={i}>
                                    <Table.Cell>
                                        <Input name="numero" size="mini" fluid value={v.numero} onChange={this.change.bind(this, i)} />
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Input name="nomenclatura" size="mini" fluid value={v.nomenclatura} onChange={this.change.bind(this, i)} />
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Input name="revisao" size="mini" fluid value={v.revisao} onChange={this.change.bind(this, i)} />
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Input name="assunto" size="mini" fluid value={v.assunto} onChange={this.change.bind(this, i)} />
                                    </Table.Cell>
                                </Table.Row>
                            )}
                        </Table.Body>
                    </Table>
                </Modal.Content>

                <Modal.Actions>
                    <Button.Group>
                        <Button primary content="Salvar" onClick={this.salvar} />
                        <Button content="Cancelar" onClick={this.close} />
                    </Button.Group>
                </Modal.Actions>

            </Modal>
        )
    }

}