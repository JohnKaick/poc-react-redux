import { handleActions } from 'redux-actions'

const defaultState = {
    
    'view_login_cadastro_input_exibicao': 'Como você prefere ser chamado?',
    'view_login_cadastro_input_email': 'Qual o seu e-mail profissional?',
    'view_login_cadastro_input_senha': 'Defina uma senha segura',
    'view_login_cadastro_button_tem_conta': 'Já tenho conta',
    'view_login_cadastro_button_cadastrar': 'Cadastrar',

    'view_login_login_input_usuario': 'Qual o seu e-mail de acesso?',
    'view_login_login_input_senha': 'Digite sua senha aqui.',
    'view_login_login_button_criar_conta': 'Criar conta',
    'view_login_login_button_entrar': 'Entrar',

    'view_login_recuperar_senha_input_recuperar_senha': 'Digite a nova senha',
    'view_login_recuperar_senha_input_confirmar_senha': 'Confirme a senha',
    'view_login_recuperar_senha_button_alterar_senha': 'Alterar minha senha',

    'view_login_recuperar_input_recuperar_email': 'Qual o seu e-mail de acesso?',
    'view_login_recuperar_button_voltar': 'Retornar',
    'view_login_recuperar_button_recuperar': 'Recuperar',

    'view_login_page_recuperar': 'Recuperar minha conta.'
}

export default handleActions({

}, defaultState)