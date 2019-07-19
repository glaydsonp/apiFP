<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: text/html; charset=utf-8');
include_once "conexao.php";
try {

	$sql = $conexao->prepare('SELECT * FROM `test`.`clientes` WHERE `clientes`.`inserido` = 0 ORDER BY `id_cliente` LIMIT 10 ');

	$sql->execute();

	$dados = "[";

	while ($lista = $sql->fetch()) {
		if ($dados != "[") {
			$dados .= ",";
		}
		$dados .= '{"id_cliente": "' . $lista["id_cliente"] . '",';
		$dados .= '"email": "' . $lista["email"] . '",';
		$dados .= '"senha": "' . $lista["senha"] . '",';
		$dados .= '"nome": "' . $lista["nome"] . '",';
		$dados .= '"sobrenome": "' . $lista["sobrenome"] . '",';
		$dados .= '"caminho": "' . $lista["caminho"] . '",';
		$dados .= '"nivel": "' . $lista["nivel"] . '"}';
	}
	$dados .= "]";
	echo $dados;
} catch (Exception $ex) {
	echo "erro ao listar: " . $ex->getMessage();
};
