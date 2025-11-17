<?php
$cpf = $_GET['cpf'] ?? null;
$resposta = null;

if ($cpf) {
    $resposta = [
        "nome" => "Carlos Pereira",
        "nascimento" => "1987-04-12",
        "mae" => "Maria Pereira"
    ];
}
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8"/>
<title>Consulta CPF</title>
<link rel="stylesheet" href="css/style.css"/>
</head>
<body>

<div style="padding: 30px">
  <h1>Consulta CPF</h1>

  <form>
    <input type="text" name="cpf" placeholder="Digite o CPF" style="padding:10px; width:200px">
    <button style="padding:10px">Consultar</button>
  </form>

  <?php if ($resposta): ?>
    <div style="margin-top:20px">
      <p><b>Nome:</b> <?= $resposta["nome"] ?></p>
      <p><b>Nascimento:</b> <?= $resposta["nascimento"] ?></p>
      <p><b>Mãe:</b> <?= $resposta["mae"] ?></p>
    </div>
  <?php endif; ?>

</div>

</body>
</html>
