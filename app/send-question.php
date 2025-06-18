<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $name = htmlspecialchars($data['name']);
    $question = htmlspecialchars($data['question']);
    $to = "shawkins@nutramaxlabs.com";
    $subject = "New Nutracast Question from $name";
    $message = "Name: $name\n\nQuestion:\n$question";
    $headers = "From: form@nutracast.com";
    $success = mail($to, $subject, $message, $headers);
    if ($success) {
        http_response_code(200);
        echo json_encode(["success" => true]);
    } else {
        http_response_code(500);
        echo json_encode(["success" => false]);
    }
}
