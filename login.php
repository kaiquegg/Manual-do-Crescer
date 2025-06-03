<?php
// Função para carregar dados do arquivo JSON
function carregarUsuarios() {
    $arquivo = 'usuarios.json';
    if (!file_exists($arquivo)) {
        return [];
    }
    $json = file_get_contents($arquivo);
    return json_decode($json, true);
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];
    $senha = $_POST['senha'];

    $usuarios = carregarUsuarios();

    foreach ($usuarios as $usuario) {
        if ($usuario['email'] === $email) {
            if (password_verify($senha, $usuario['senha'])) {
                echo '<script>alert("Login feito com sucesso!"); window.location.href = "index.html";</script>';
                exit();
            } else {
                echo "Senha incorreta!";
                exit();
            }
        }
    }
    echo '<script>alert("Usuário não encontrado!"); window.location.href = "cadastro.html";</script>';
}
?>
