<?php
session_start();
require __DIR__ . "/../config/db.php";

// CORS: reflect origin to support requests with credentials
$origin = $_SERVER['HTTP_ORIGIN'] ?? 'http://localhost:5173';
header("Access-Control-Allow-Origin: $origin");
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit;
}

$isAdmin = isset($_SESSION['admin']);

// optionally filter by id or slug
$id = $_GET['id'] ?? null;
$slug = $_GET['slug'] ?? null;

if ($id || $slug) {
    if ($id) {
        $sql = "SELECT id, title, slug, excerpt, content, created_at, is_published FROM posts WHERE id = ?";
        $params = [$id];
    } else {
        $sql = "SELECT id, title, slug, excerpt, content, created_at, is_published FROM posts WHERE slug = ?";
        $params = [$slug];
    }
    if (!$isAdmin) {
        $sql .= " AND is_published = 1";
    }
    $sql .= " LIMIT 1";
    $stmt = $pdo->prepare($sql);
    $stmt->execute($params);

    $post = $stmt->fetch();
    if (!$post) {
        echo json_encode(null);
        exit;
    }

    // fetch files
    $fstmt = $pdo->prepare("SELECT id, post_id, file_name, file_path, file_type, mime_type FROM post_files WHERE post_id = ? ORDER BY id ASC");
    $fstmt->execute([$post['id']]);
    $files = $fstmt->fetchAll();
    $post['files'] = $files;

    echo json_encode($post);
    exit;
}

$sql = "SELECT id, title, slug, excerpt, content, created_at, is_published FROM posts";
if (!$isAdmin) {
    $sql .= " WHERE is_published = 1";
}
$sql .= " ORDER BY created_at DESC";
$stmt = $pdo->query($sql);

$posts = $stmt->fetchAll();

if (count($posts) === 0) {
    echo json_encode([]);
    exit;
}

$ids = array_column($posts, 'id');
$placeholders = implode(',', array_fill(0, count($ids), '?'));

$fstmt = $pdo->prepare("SELECT id, post_id, file_name, file_path, file_type, mime_type FROM post_files WHERE post_id IN ($placeholders) ORDER BY id ASC");
$fstmt->execute($ids);
$files = $fstmt->fetchAll();

$grouped = [];
foreach ($files as $f) {
    $grouped[$f['post_id']][] = $f;
}

foreach ($posts as &$p) {
    $p['files'] = $grouped[$p['id']] ?? [];
}

echo json_encode($posts);
