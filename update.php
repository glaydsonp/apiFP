<?php
//ESTA API ESTÁ UTILIZANDO O BENCO DE DADOS AULA COM A TABELA
//USUÁRIOS E UTILIZA ENVIO E RETORNO EM OBJETOS
header("Access-Control-Allow-Origin:http://localhost:8100");
//header('Access-Control-Allow-Methods:PUT');
header("Content-Type: application/x-www-form-urlencoded");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
//RECUPERAÇÃO DO FORMULÁRIO
$data = file_get_contents("php://input");
$objData = json_decode($data);
echo "data: ";
var_dump($data);
// TRANSFORMA OS DADOS
$id = $objData->id_cliente;
// print_r("id: ".$id);

// LIMPA OS DADOS
$id = trim($id);
$dados; // RECEBE ARRAY PARA RETORNO
// INSERE OS DADOS
include_once "conexao.php";
//VERIFICA SE TEM CONEXÃO
$sql = " UPDATE `test`.`clientes` SET `clientes`.`inserido` = 1 WHERE `clientes`.`id_cliente` =" . $id;
// print_r($sql);
// $sql = "UPDATE `test`.`clientes` SET `inserido` = 1 WHERE `id_cliente` = " . $id;

$query = $conexao->prepare($sql);
$query->execute();
if (!$query) {
    $dados = array('mensage' => "Não foi possivel editar os dados ");
    echo json_encode($dados);
} else {
    $dados = array('mensage' => "Os dados foram editados com sucesso.");
    echo json_encode($dados);
}