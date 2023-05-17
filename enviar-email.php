<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Dados do formulário
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $local = $_POST['local'];
    $mensagem = $_POST['mensagem'];

    // Configurações do e-mail
    $to = "carlosaraujo26032009@gmail.com";
    $subject = "Relato de Xenofobia";
    $message = "Nome: " . $nome . "\n" .
               "E-mail: " . $email . "\n" .
               "Local onde ocorreu: " . $local . "\n" .
               "Descrição do incidente: " . $mensagem;

    // Enviar o e-mail
    $headers = "From: " . $email . "\r\n" .
               "Reply-To: " . $email . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    if (mail($to, $subject, $message, $headers)) {
        echo "E-mail enviado com sucesso!";
    } else {
        echo "Ocorreu um erro ao enviar o e-mail.";
    }
}
?>
