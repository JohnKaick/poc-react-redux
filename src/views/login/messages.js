const globalization = {
    'pt-br': {
        'input_cadastro_exibicao': 'Como você prefere ser chamado?',
        'input_cadastro_email': 'Qual o seu e-mail profissional?',
        'input_cadastro_senha': 'Defina uma senha segura',
        'button_tem_conta': 'Já tenho conta',
        'button_cadastrar': 'Cadastrar'
    }
}

export default (key) => {
    return globalization['pt-br'][key]
}