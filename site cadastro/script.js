function verificarSenhas() {
    var senha = document.getElementById('iSenha').value;
    var confirmarSenha = document.getElementById('iConfirmSenha').value;

    if (senha !== confirmarSenha) {
        alert('As senhas não são iguais');
        return false;
    }

    return true;
}

function registrar() {
    if (verificarSenhas()) {
        alert('Cadastro efetuado com sucesso');
        window.location.href = "../Landing page/index.html";
    }
}