<?php

header("Access-Control-Allow-Origin:http://localhost:8100");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: POST, PUT, GET, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization");
// header("Content-Type:application/json");
header("Content-Type: application/x-www-form-urlencoded");

$data = json_decode(file_get_contents('php://input'));

include_once "conexao.php";
try {
    // $data['id_cliente'] = 1;
    //SELECT * FROM `test`.`clientes` WHERE `clientes`.`inserido` = 0 LIMIT 3'
    $sql = "UPDATE `test`.`clientes` SET `inserido` = 1 WHERE `id_cliente` = " . $data;
    $query = $conexao->prepare($sql);
    $query->execute();

} catch (Exception $ex) {
    echo json_encode("erro ao postar: " . $ex->getMessage());
};
