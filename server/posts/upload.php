<?php
require __DIR__ . '/../config/session.php';
require __DIR__ . '/../config/cors.php';
require __DIR__ . '/../config/db.php';

initSession();
setCorsHeaders(['POST', 'OPTIONS']);
requireAdminSession();

$contentLength = (int) ($_SERVER['CONTENT_LENGTH'] ?? 0);
if ($contentLength > 0 && empty($_POST) && empty($_FILES)) {
    http_response_code(413);
    echo json_encode(['success' => false, 'error' => 'Request body exceeds server upload limits']);
    exit;
}

$postId = (int) ($_POST['post_id'] ?? 0);
if ($postId <= 0) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Missing or invalid post_id']);
    exit;
}

$pstmt = $pdo->prepare('SELECT id FROM posts WHERE id = ? LIMIT 1');
$pstmt->execute([$postId]);
if (!$pstmt->fetch()) {
    http_response_code(404);
    echo json_encode(['success' => false, 'error' => 'Post not found']);
    exit;
}

if (!isset($_FILES['file']) || !is_array($_FILES['file'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Missing file field']);
    exit;
}

$file     = $_FILES['file'];
$maxBytes = 50 * 1024 * 1024;

if ($file['error'] !== UPLOAD_ERR_OK) {
    $errMap = [
        UPLOAD_ERR_INI_SIZE   => 'File exceeds upload_max_filesize',
        UPLOAD_ERR_FORM_SIZE  => 'File exceeds form size limit',
        UPLOAD_ERR_PARTIAL    => 'File was only partially uploaded',
        UPLOAD_ERR_NO_FILE    => 'No file was uploaded',
        UPLOAD_ERR_NO_TMP_DIR => 'Missing temporary folder on server',
        UPLOAD_ERR_CANT_WRITE => 'Failed to write file to disk',
        UPLOAD_ERR_EXTENSION  => 'Upload blocked by server extension',
    ];
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'error'   => $errMap[(int) $file['error']] ?? 'Upload error',
    ]);
    exit;
}

if ($file['size'] <= 0 || $file['size'] > $maxBytes) {
    http_response_code(413);
    echo json_encode(['success' => false, 'error' => 'File too large (max 50MB)']);
    exit;
}

$ext = strtolower((string) pathinfo($file['name'], PATHINFO_EXTENSION));
$allowedExt = ['jpg', 'jpeg', 'png', 'webp', 'pdf', 'mp4'];
$blockedExt = ['php', 'phtml', 'php3', 'php4', 'php5', 'phps', 'exe', 'js', 'sh', 'html', 'htm', 'cgi', 'pl'];

if (in_array($ext, $blockedExt, true) || !in_array($ext, $allowedExt, true)) {
    http_response_code(415);
    echo json_encode(['success' => false, 'error' => 'File type not allowed']);
    exit;
}

if (preg_match('/\.(php|phtml|exe|js|sh|html|htm)(\.|$)/i', $file['name'])) {
    http_response_code(415);
    echo json_encode(['success' => false, 'error' => 'Dangerous filename rejected']);
    exit;
}

$allowedMime = [
    'image/jpeg', 'image/png', 'image/webp',
    'application/pdf', 'video/mp4',
];

if (function_exists('finfo_open')) {
    $finfo    = finfo_open(FILEINFO_MIME_TYPE);
    $detected = finfo_file($finfo, $file['tmp_name']);
    finfo_close($finfo);
} else {
    $detected = $file['type'] ?? 'application/octet-stream';
}

$extMimeFallback = [
    'jpg'  => 'image/jpeg',
    'jpeg' => 'image/jpeg',
    'png'  => 'image/png',
    'webp' => 'image/webp',
    'pdf'  => 'application/pdf',
    'mp4'  => 'video/mp4',
];

if (!in_array($detected, $allowedMime, true)) {
    if ($detected === 'application/octet-stream' && isset($extMimeFallback[$ext])) {
        $detected = $extMimeFallback[$ext];
    }
}

if (!in_array($detected, $allowedMime, true)) {
    http_response_code(415);
    echo json_encode(['success' => false, 'error' => 'Unsupported media type']);
    exit;
}

$uploadDir = __DIR__ . '/../uploads/';
if (!is_dir($uploadDir) && !mkdir($uploadDir, 0755, true)) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Upload directory unavailable']);
    exit;
}

$basename = preg_replace('/[^A-Za-z0-9._-]/', '_', basename($file['name']));
$filename = time() . '_' . bin2hex(random_bytes(8)) . '.' . $ext;
$destPath = $uploadDir . $filename;

if (!move_uploaded_file($file['tmp_name'], $destPath)) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Failed to store uploaded file']);
    exit;
}

$relativePath = 'uploads/' . $filename;

$stmt = $pdo->prepare(
    'INSERT INTO post_files (post_id, file_name, file_path, file_type, mime_type)
     VALUES (?, ?, ?, ?, ?)'
);
$stmt->execute([$postId, $basename, $relativePath, $ext, $detected]);

echo json_encode(['success' => true, 'file' => $relativePath]);
