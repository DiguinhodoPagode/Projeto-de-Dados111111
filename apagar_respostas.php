<?php
include "config.php";
$conn->query("DELETE FROM respostas");
echo json_encode(["status" => "ok"]);
$conn->close();
?>
