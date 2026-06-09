<?php
require __DIR__ . '/../config/session.php';
require __DIR__ . '/../config/cors.php';
require __DIR__ . '/../config/db.php';

initSession();
setCorsHeaders(['GET', 'OPTIONS']);

$authenticated = false;

if (isset($_SESSION['admin'])) {
    $stmt = $pdo->prepare('SELECT id FROM users WHERE id = ? LIMIT 1');
    $stmt->execute([(int) $_SESSION['admin']]);
    $authenticated = (bool) $stmt->fetch();

    if (!$authenticated) {
        destroySession();
    }
}

echo json_encode(['authenticated' => $authenticated]);
