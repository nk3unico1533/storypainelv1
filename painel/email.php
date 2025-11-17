<?php
$email = $_GET['email'] ?? null;
$resposta = null;

if ($email) {
    $resposta = [
        "dono" => "Roberto Lima",
        "desde" => "2017",
        "vazamentos" => 4
    ];
}
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8"/>
<title>Consulta Email</title>
<link rel="stylesheet" href="css/style.css"/>
</head>
<body>

<div style="padding: 30px">
  <h1>Consulta Email</h1>

  <form>
    <input type="text" name="email" placeholder="Digite o email" style="padding:10px; width:240px">
    <button style="padding:10px">Consultar</button>
  </form>

  <?php if ($resposta): ?>
    <div style="margin-top:20px">
      <p><b>Dono:</b> <?= $resposta["dono"] ?></p>
      <p><b>Desde:</b> <?= $resposta["desde"] ?></p>
      <p><b>Vazamentos:</b> <?= $resposta["vazamentos"] ?></p>
    </div>
  <?php endif; ?>

</div>

</body>
</html>
