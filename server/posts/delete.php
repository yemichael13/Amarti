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
    echo json_encode(['success' => false, 'error' => 'Missing ID']);
    exit;
}

$fstmt = $pdo->prepare('SELECT file_path FROM post_files WHERE post_id = ?');
$fstmt->execute([$id]);
$files = $fstmt->fetchAll();

foreach ($files as $file) {
    $path = __DIR__ . '/../' . $file['file_path'];
    if (is_file($path)) {
        unlink($path);
    }
}

$pdo->prepare('DELETE FROM post_files WHERE post_id = ?')->execute([$id]);
$pdo->prepare('DELETE FROM posts WHERE id = ?')->execute([$id]);

echo json_encode(['success' => true]);
