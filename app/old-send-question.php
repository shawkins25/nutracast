<!-- app/send-question.php -->

<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $log_file = __DIR__ . '/debug_log.txt';
    file_put_contents($log_file, "Reached PHP at " . date('c') . "\n", FILE_APPEND);
    echo json_encode([
        "success" => $success,
        "mail_returned" => $success,
        "server" => gethostname(),
        "cwd" => __DIR__,
    ]);
    // Raw input
    $raw_input = file_get_contents('php://input');
    file_put_contents($log_file, "Raw input: $raw_input\n", FILE_APPEND);
    $data = json_decode($raw_input, true);
    if ($data === null) {
        file_put_contents($log_file, "JSON decode failed: " . json_last_error_msg() . "\n", FILE_APPEND);
    }
    $name = htmlspecialchars($data['name'] ?? 'No name');
    $question = htmlspecialchars($data['question'] ?? 'No question');
    file_put_contents($log_file, "Parsed Name: $name\n", FILE_APPEND);
    file_put_contents($log_file, "Parsed Question: $question\n", FILE_APPEND);
    $to = "shawkins@nutramaxlabs.com, amorgan@nutramaxlabs.com";
    $subject = "New Chaplain Podcast Question from $name";
    $message = "Name: $name\n\nQuestion:\n$question";
    $headers = "From: Chaplain Podcast Form <chaplain_podcast@nutramaxlabs.com>\r\n";
    $success = mail($to, $subject, $message, $headers);
    if ($success) {
        file_put_contents($log_file, "Mail sent successfully.\n", FILE_APPEND);
        http_response_code(200);
        echo json_encode(["success" => true]);
    } else {
        file_put_contents($log_file, "Mail sending failed.\n", FILE_APPEND);
        http_response_code(500);
        echo json_encode(["success" => false]);
    }
}
?>