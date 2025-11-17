<?php
$cnpj = $_GET['cnpj'] ?? null;
$resposta = null;

if ($cnpj) {
    $resposta = [
        "empresa" => "Tech Solutions LTDA",
        "abertura" => "2012",
        "situacao" => "Ativa"
    ];
}
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8"/>
<title>Consulta CNPJ</title>
<link rel="stylesheet" href="css/style.css"/>
</head>
<body>

<div style="padding: 30px">
  <h1>Consulta CNPJ</h1>

  <form>
    <input type="text" name="cnpj" placeholder="Digite o CNPJ" style="padding:10px; width:200px">
    <button style="padding:10px">Consultar</button>
  </form>

  <?php if ($resposta): ?>
    <div style="margin-top:20px">
      <p><b>Empresa:</b> <?= $resposta["empresa"] ?></p>
      <p><b>Abertura:</b> <?= $resposta["abertura"] ?></p>
      <p><b>Situação:</b> <?= $resposta["situacao"] ?></p>
    </div>
  <?php endif; ?>

</div>

</body>
</html>
