<?php
// Configurações do banco de dados
$host = "sql305.infinityfree.com"; 
$usuario ="if0_40300970";
$senha = "6L7StuLCPbdugf";
$banco = "if0_40300970_dadosresposta";
$porta = 3306;

// Cria a conexão
$conn = new mysqli($host, $usuario, $senha, $banco, $porta);

// Verifica se houve erro
if ($conn->connect_error) {
    die(json_encode(["status" => "erro", "mensagem" => "Falha na conexão com o banco: " . $conn->connect_error]));
}

// Garante que o charset seja UTF-8
$conn->set_charset("utf8mb4");
?>
