<?php
$fone = $_GET['telefone'] ?? null;
$resposta = null;

if ($fone) {
    $resposta = [
        "nome" => "Mariana Castro",
        "operadora" => "Vivo",
        "localizacao" => "São Paulo - SP"
    ];
}
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8"/>
<title>Consulta Telefone</title>
<link rel="stylesheet" href="css/style.css"/>
</head>
<body>

<div style="padding: 30px">
  <h1>Consulta Telefone</h1>

  <form>
    <input type="text" name="telefone" placeholder="Digite o telefone" style="padding:10px; width:200px">
    <button style="padding:10px">Consultar</button>
  </form>

  <?php if ($resposta): ?>
    <div style="margin-top:20px">
      <p><b>Nome:</b> <?= $resposta["nome"] ?></p>
      <p><b>Operadora:</b> <?= $resposta["operadora"] ?></p>
      <p><b>Localização:</b> <?= $resposta["localizacao"] ?></p>
    </div>
  <?php endif; ?>

</div>

</body>
</html>
