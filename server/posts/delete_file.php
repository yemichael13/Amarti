<?php
require __DIR__ . '/../config/session.php';
require __DIR__ . '/../config/cors.php';
require __DIR__ . '/../config/db.php';

initSession();
setCorsHeaders(['POST', 'OPTIONS']);
requireAdminSession();

$id = (int) ($_POST['id'] ?? 0);

if ($id <= 0) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Missing id']);
    exit;
}

$stmt = $pdo->prepare('SELECT file_path FROM post_files WHERE id = ? LIMIT 1');
$stmt->execute([$id]);
$row = $stmt->fetch();

if ($row) {
    $path = __DIR__ . '/../' . $row['file_path'];
    if (is_file($path)) {
        unlink($path);
    }
    $pdo->prepare('DELETE FROM post_files WHERE id = ?')->execute([$id]);
}

echo json_encode(['success' => true]);
