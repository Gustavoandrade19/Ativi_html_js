// VALIDAÇÃO DA TELA DE LOGIN
function validarLogin(event) {
    event.preventDefault(); // Impede o recarregamento da página

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const erroEmail = document.getElementById('erro-email');
    const erroSenha = document.getElementById('erro-senha');

    let loginValido = true;

    // Regra: precisa ter '@'
    if (!email.includes('@gmail.com')) {
        erroEmail.style.display = 'block';
        loginValido = false;
    } else {
        erroEmail.style.display = 'none';
    }

    // Regra: mínimo 8 caracteres
    if (senha.length < 8) {
        erroSenha.style.display = 'block';
        loginValido = false;
    } else {
        erroSenha.style.display = 'none';
    }

    // Se válido, salva o estado de login e vai para a tela de dados pessoais
    if (loginValido) {
        localStorage.setItem('usuarioLogado', 'true');
        window.location.href = 'cadastro.html';
    }
}

// FUNÇÃO DE PROTEÇÃO: Impede o acesso se não estiver logado
function verificarAutenticacao() {
    if (localStorage.getItem('usuarioLogado') !== 'true') {
        alert('Acesso negado! Por favor, faça login primeiro.');
        window.location.href = 'index.html';
    }
}

// PROCESSAR FORMULÁRIO DE DADOS PESSOAIS
function salvarCadastro(event) {
    event.preventDefault();
    
    // Mostra mensagem de sucesso
    const msg = document.getElementById('msg-sucesso');
    msg.style.display = 'block';
    
    // Aguarda 1.5 segundos e envia o usuário para a tela de livros
    setTimeout(() => {
        window.location.href = 'livros.html';
    }, 1500);
}

// PROCESSAR FORMULÁRIO DE LIVROS
function salvarLivro(event) {
    event.preventDefault();
    
    const msg = document.getElementById('msg-sucesso-livro');
    msg.style.display = 'block';
    
    // Limpa os campos do formulário para permitir nova inserção
    document.getElementById('livros-form').reset();
    
    // Esconde a mensagem de sucesso após 3 segundos
    setTimeout(() => {
        msg.style.display = 'none';
    }, 3000);
}

// FUNÇÃO DE LOGOUT
function logout() {
    localStorage.removeItem('usuarioLogado');
    window.location.href = 'index.html';
}