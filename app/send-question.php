<?php

/**
 * send-question.php
 *
 * Receives JSON { name, question } and sends an email via Resend.
 * Logs debug info to debug_log.txt.
 *
 * Requirements:
 * - PHP with cURL enabled
 * - RESEND_API_KEY available as an environment variable OR set below
 *
 * Optional (only if your PHP server must use an HTTP proxy):
 * - set $PROXY to something like "http://172.16.0.129:3128"
 */
header("Content-Type: application/json; charset=UTF-8");
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["success" => false, "error" => "Method not allowed"]);
    exit;
}
$log_file = __DIR__ . "/debug_log.txt";
function log_line($file, $msg)
{
    file_put_contents($file, "[" . date("c") . "] " . $msg . "\n", FILE_APPEND);
}
// ---------- Read + parse input ----------
$raw_input = file_get_contents("php://input");
log_line($log_file, "Raw input: " . $raw_input);
$data = json_decode($raw_input, true);
if (!is_array($data)) {
    log_line($log_file, "JSON decode failed: " . json_last_error_msg());
    http_response_code(400);
    echo json_encode(["success" => false, "error" => "Invalid JSON"]);
    exit;
}
$name = trim($data["name"] ?? "");
$question = trim($data["question"] ?? "");
if ($question === "") {
    http_response_code(400);
    echo json_encode(["success" => false, "error" => "Question is required"]);
    exit;
}
// Keep content safe for email text
$safeName = ($name !== "") ? $name : "Anonymous";
$safeQuestion = $question;
log_line($log_file, "Parsed Name: " . $safeName);
log_line($log_file, "Parsed Question: " . $safeQuestion);
// ---------- Resend config ----------
$RESEND_API_KEY = getenv("RESEND_API_KEY");
// If you *cannot* set env vars on this host, you can temporarily hardcode it:
// $RESEND_API_KEY = "re_xxxxxxxxxxxxxxxxxxxxxxxxx";
if (!$RESEND_API_KEY) {
    log_line($log_file, "Missing RESEND_API_KEY env var");
    http_response_code(500);
    echo json_encode(["success" => false, "error" => "Server misconfigured (missing RESEND_API_KEY)"]);
    exit;
}
// IMPORTANT: "from" must be a verified sender/domain in Resend
$FROM = "Chaplain Podcast Form <chaplain_podcast@nutramaxlabs.com>";
// For testing: send to both
$TO = [
    "shawkins@nutramaxlabs.com",
    "amorgan@nutramaxlabs.com"
];
$subject = "New Chaplain Podcast Question from {$safeName}";
$text = "Name: {$safeName}\n\nQuestion:\n{$safeQuestion}";
$payload = [
    "from" => $FROM,
    "to" => $TO,
    "subject" => $subject,
    "text" => $text,
];
// If your PHP server needs a proxy to reach the internet, set it here.
// Leave as null if not needed.
$PROXY = null; // e.g. "http://172.16.0.129:3128";
// ---------- Call Resend ----------
$ch = curl_init("https://api.resend.com/emails");
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_HTTPHEADER => [
        "Authorization: Bearer {$RESEND_API_KEY}",
        "Content-Type: application/json",
    ],
    CURLOPT_POSTFIELDS => json_encode($payload),
    CURLOPT_TIMEOUT => 20,
]);
if ($PROXY) {
    curl_setopt($ch, CURLOPT_PROXY, $PROXY);
}
$responseBody = curl_exec($ch);
$curlErr = curl_error($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);
log_line($log_file, "Resend HTTP: " . $httpCode);
if ($curlErr) {
    log_line($log_file, "cURL error: " . $curlErr);
}
log_line($log_file, "Resend response: " . $responseBody);
// ---------- Return result ----------
if ($curlErr) {
    http_response_code(500);
    echo json_encode(["success" => false, "error" => "Network error calling Resend", "details" => $curlErr]);
    exit;
}
if ($httpCode < 200 || $httpCode >= 300) {
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "error" => "Resend returned non-2xx",
        "status" => $httpCode,
        "details" => $responseBody,
    ]);
    exit;
}
http_response_code(200);
echo json_encode([
    "success" => true,
    "resend" => json_decode($responseBody, true),
]);
