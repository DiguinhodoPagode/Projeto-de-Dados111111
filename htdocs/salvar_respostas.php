<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header("Content-Type: application/json; charset=utf-8");
include "config.php";

// Lê os dados JSON enviados pelo JavaScript
$dados = json_decode(file_get_contents("php://input"), true);

if (!$dados) {
    echo json_encode(["status" => "erro", "mensagem" => "Nenhum dado recebido."]);
    exit;
}

// Acessa os dados
$nome = $dados['nome'];
$email = $dados['email'];
$nascimento = $dados['nascimento'];
$p1 = $dados['p1'];
$p2 = $dados['p2'];
$p3 = $dados['p3'];
$p4 = $dados['p4'];
$p5 = $dados['p5'];
$p6 = $dados['p6'];

$stmt = $conn->prepare("INSERT INTO respostas (nome, email, nascimento, p1, p2, p3, p4, p5, p6) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");
$stmt->bind_param("sssssssss", $nome, $email, $nascimento, $p1, $p2, $p3, $p4, $p5, $p6);

if ($stmt->execute()) {
    echo json_encode(["status" => "ok", "mensagem" => "Respostas salvas com sucesso."]);
} else {
    echo json_encode(["status" => "erro", "mensagem" => "Erro ao salvar respostas: " . $stmt->error]);
}

$stmt->close();
$conn->close();
?>
