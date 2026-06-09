<?php
require __DIR__ . '/../config/cors.php';
require __DIR__ . '/../config/db.php';

setCorsHeaders(['POST', 'OPTIONS']);

$email = trim($_POST['email'] ?? '');

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid email']);
    exit;
}

try {
    $stmt = $pdo->prepare('INSERT INTO newsletter (email, created_at) VALUES (?, NOW())');
    $stmt->execute([$email]);
    echo json_encode(['success' => true]);
} catch (PDOException $e) {
    if ((int) $e->errorInfo[1] === 1062) {
        http_response_code(409);
        echo json_encode(['success' => false, 'error' => 'Email already subscribed']);
        exit;
    }
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Subscription failed']);
}
