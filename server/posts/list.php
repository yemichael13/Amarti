<?php
require __DIR__ . '/../config/session.php';
require __DIR__ . '/../config/cors.php';
require __DIR__ . '/../config/db.php';

initSession();
setCorsHeaders(['GET', 'OPTIONS']);

$isAdmin = isset($_SESSION['admin']);

$id   = isset($_GET['id']) ? (int) $_GET['id'] : 0;
$slug = trim($_GET['slug'] ?? '');

if ($id > 0 || $slug !== '') {
    if ($id > 0) {
        $sql    = 'SELECT id, title, slug, excerpt, content, created_at, is_published FROM posts WHERE id = ?';
        $params = [$id];
    } else {
        $sql    = 'SELECT id, title, slug, excerpt, content, created_at, is_published FROM posts WHERE slug = ?';
        $params = [$slug];
    }

    if (!$isAdmin) {
        $sql .= ' AND is_published = 1';
    }

    $sql .= ' LIMIT 1';

    $stmt = $pdo->prepare($sql);
    $stmt->execute($params);
    $post = $stmt->fetch();

    if (!$post) {
        echo json_encode(null);
        exit;
    }

    $fstmt = $pdo->prepare(
        'SELECT id, post_id, file_name, file_path, file_type, mime_type FROM post_files WHERE post_id = ? ORDER BY id ASC'
    );
    $fstmt->execute([(int) $post['id']]);
    $post['files'] = $fstmt->fetchAll();

    echo json_encode($post);
    exit;
}

$sql = 'SELECT id, title, slug, excerpt, content, created_at, is_published FROM posts';
if (!$isAdmin) {
    $sql .= ' WHERE is_published = 1';
}
$sql .= ' ORDER BY created_at DESC';

$stmt  = $pdo->query($sql);
$posts = $stmt->fetchAll();

if (count($posts) === 0) {
    echo json_encode([]);
    exit;
}

$ids          = array_column($posts, 'id');
$placeholders = implode(',', array_fill(0, count($ids), '?'));

$fstmt = $pdo->prepare(
    "SELECT id, post_id, file_name, file_path, file_type, mime_type FROM post_files WHERE post_id IN ($placeholders) ORDER BY id ASC"
);
$fstmt->execute($ids);
$files = $fstmt->fetchAll();

$grouped = [];
foreach ($files as $f) {
    $grouped[$f['post_id']][] = $f;
}

foreach ($posts as &$p) {
    $p['files'] = $grouped[$p['id']] ?? [];
}
unset($p);

echo json_encode($posts);
