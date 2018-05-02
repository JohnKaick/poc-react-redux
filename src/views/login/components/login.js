import React from 'react'

import './login.css'

import { Grid, Card, Image, Icon } from 'semantic-ui-react'

import logo from './logo.png'
import FormLogin from './form-login'
import FormRecuperar from './form-recuperar'
import FormCadastrar from './form-cadastrar'
import FormRecuperarSenha from './form-recuperar-senha'

export default (props) => {
    const {
        status, statusError, carregando, globalization, pagina, background, onToggle
    } = props

    return (
        <Grid id="gridLogin" verticalAlign="middle"
            style={{ backgroundImage: 'url(' + background + ')' }}>
            <Grid.Column
                largeScreen={6}
                computer={6}
                tablet={16}
                mobile={16}
                textAlign="left">
                <div style={{ padding: 40 }}>
                    <Card id="cardLogin" fluid>

                        {!statusError ?
                            <Card.Content>
                                <Image src={logo} size="tiny" style={{ marginBottom: 20 }} />
                                {pagina === 'login' ? <FormLogin {...props} /> : null}
                                {pagina === 'recuperar' ? <FormRecuperar {...props} /> : null}
                                {pagina === 'cadastro' ? <FormCadastrar {...props} /> : null}
                                {pagina === 'reset' ? <FormRecuperarSenha {...props} /> : null}
                            </Card.Content>
                            : null
                        }

                        {pagina === 'login' && !statusError ?
                            <Card.Content>
                                <p>
                                    <a onClick={(e) => { onToggle(e, 'recuperar') }}>
                                        <Icon name="key" /> <span> {globalization['view_login_page_recuperar']} </span>
                                    </a>
                                </p>
                                <p>
                                    <a onClick={(e) => { onToggle(e, 'cadastro') }}>
                                        <Icon name="user" /> <span>Não tem uma conta? Cadastre-se.</span>
                                    </a>
                                </p>
                            </Card.Content>
                            :
                            null
                        }

                        {pagina === 'recuperar' && !statusError ?
                            <Card.Content>
                                <a onClick={(e) => { onToggle(e, 'login') }}>
                                    <Icon name="arrow left" /> <span>Lembrei a minha senha!</span>
                                </a>
                            </Card.Content>
                            :
                            null
                        }

                        {pagina === 'cadastro' && !statusError ?
                            <Card.Content>
                                <a onClick={(e) => { onToggle(e, 'login') }}>
                                    <Icon name="arrow left" /> <span>Já tenho uma conta</span>
                                </a>
                            </Card.Content>
                            :
                            null
                        }

                        {statusError ?
                            <Card.Content>
                                <Image src={logo} size="tiny" style={{ marginBottom: 20 }} />
                                <p>Desculpe, aparentemente nossos servidores estão em manutenção. Poderia tentar acessar daqui alguns minutos? <br /> <br /> Agradecemos a sua compreensão.</p>
                            </Card.Content>
                            : null
                        }

                    </Card>
                </div>
            </Grid.Column>
            <Grid.Column
                only="large screen"
                largeScreen={10}
                computer={10}>
                <div id="slogan" className="">
                    {/*<h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>*/}
                    <h1>"Ao olhar para o próximo século, os líderes serão aqueles que capacitam os outros."</h1>
                    <p>Bill Gates</p>
                </div>
            </Grid.Column>
        </Grid >
    )
}