<?php
header("Content-Type: application/json; charset=utf-8");
include "config.php";

$resultado = $conn->query("SELECT * FROM respostas ORDER BY data_envio DESC");

$respostas = [];
while ($row = $resultado->fetch_assoc()) {
    $respostas[] = $row;
}

echo json_encode($respostas);

$conn->close();
?>
