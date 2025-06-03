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

// Função para salvar dados no arquivo JSON
function salvarUsuarios($usuarios) {
    $json = json_encode($usuarios, JSON_PRETTY_PRINT);
    file_put_contents('usuarios.json', $json);
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $senha = password_hash($_POST['senha'], PASSWORD_DEFAULT);

    $usuarios = carregarUsuarios();
    
    // Verifica se o email já está cadastrado
    foreach ($usuarios as $usuario) {
        if ($usuario['email'] === $email) {
            echo "Email já cadastrado!";
            exit();
        }
    }

    $novoUsuario = [
        'nome' => $nome,
        'email' => $email,
        'senha' => $senha
    ];
    
    $usuarios[] = $novoUsuario;
    salvarUsuarios($usuarios);

    echo '<script>alert("Cadastro feito com sucesso!"); window.location.href = "cadastro.html";</script>';
}
?>
