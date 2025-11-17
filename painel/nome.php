<?php
$nome = $_GET['nome'] ?? null;
$resposta = null;

if ($nome) {
    $resposta = [
        "idade" => "29 anos",
        "cidade" => "Curitiba",
        "registro" => "Localizado"
    ];
}
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8"/>
<title>Consulta Nome</title>
<link rel="stylesheet" href="css/style.css"/>
</head>
<body>

<div style="padding: 30px">
  <h1>Consulta Nome Completo</h1>

  <form>
    <input type="text" name="nome" placeholder="Digite o nome completo" style="padding:10px; width:260px">
    <button style="padding:10px">Consultar</button>
  </form>

  <?php if ($resposta): ?>
    <div style="margin-top:20px">
      <p><b>Idade:</b> <?= $resposta["idade"] ?></p>
      <p><b>Cidade:</b> <?= $resposta["cidade"] ?></p>
      <p><b>Status:</b> <?= $resposta["registro"] ?></p>
    </div>
  <?php endif; ?>

</div>

</body>
</html>
