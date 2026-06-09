<?php
require __DIR__ . '/../config/session.php';
require __DIR__ . '/../config/cors.php';
require __DIR__ . '/../config/db.php';

initSession();
setCorsHeaders(['POST', 'OPTIONS']);
requireAdminSession();

$id           = (int) ($_POST['id'] ?? 0);
$title        = trim($_POST['title'] ?? '');
$content      = trim($_POST['content'] ?? '');
$excerpt      = trim($_POST['excerpt'] ?? '');
$is_published = isset($_POST['is_published']) ? (int) $_POST['is_published'] : 0;

if ($id <= 0) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Missing id']);
    exit;
}

if ($title === '' || $content === '') {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Title and content are required']);
    exit;
}

$stmt = $pdo->prepare('UPDATE posts SET title = ?, content = ?, excerpt = ?, is_published = ? WHERE id = ?');
$stmt->execute([$title, $content, $excerpt, $is_published, $id]);

echo json_encode(['success' => true]);
