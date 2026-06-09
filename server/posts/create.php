<?php
require __DIR__ . '/../config/session.php';
require __DIR__ . '/../config/cors.php';
require __DIR__ . '/../config/db.php';

initSession();
setCorsHeaders(['POST', 'OPTIONS']);
requireAdminSession();

$title        = trim($_POST['title'] ?? '');
$content      = trim($_POST['content'] ?? '');
$excerpt      = trim($_POST['excerpt'] ?? '');
$is_published = isset($_POST['is_published']) ? (int) $_POST['is_published'] : 0;

if ($title === '' || $content === '') {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Missing required fields']);
    exit;
}

$slug = strtolower(trim(preg_replace('/[^A-Za-z0-9-]+/', '-', $title), '-'));
if ($slug === '') {
    $slug = 'post-' . time();
}

$stmt = $pdo->prepare('
    INSERT INTO posts (title, slug, content, excerpt, is_published)
    VALUES (?, ?, ?, ?, ?)
');

try {
    $stmt->execute([$title, $slug, $content, $excerpt, $is_published]);
    echo json_encode([
        'success' => true,
        'post_id' => (int) $pdo->lastInsertId(),
    ]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error'   => 'Failed to create post',
    ]);
}
