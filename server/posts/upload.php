<?php
session_start();
require __DIR__ . "/../config/db.php";

// CORS: reflect origin to support requests with credentials
$origin = $_SERVER['HTTP_ORIGIN'] ?? 'http://localhost:5173';
header("Access-Control-Allow-Origin: $origin");
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit;
}

// Allow development bypass when called with ?dev=1 to help local testing
$devBypass = ($_GET['dev'] ?? null) === '1';
if (!$devBypass && !isset($_SESSION['admin'])) {
    http_response_code(401);
    echo json_encode(["error" => "Unauthorized"]);
    exit;
}

// When body exceeds post_max_size, PHP may leave POST/FILES empty
$contentLength = (int)($_SERVER['CONTENT_LENGTH'] ?? 0);
if ($contentLength > 0 && empty($_POST) && empty($_FILES)) {
    http_response_code(413);
    echo json_encode([
        "error" => "Request body was not parsed (often post_max_size or upload_max_filesize in php.ini)",
        "content_length" => $contentLength,
    ]);
    exit;
}

$postId = (int)($_POST['post_id'] ?? $_REQUEST['post_id'] ?? 0);
if ($postId <= 0) {
    http_response_code(400);
    echo json_encode(["error" => "Missing or invalid post_id"]);
    exit;
}

$pstmt = $pdo->prepare("SELECT id FROM posts WHERE id = ? LIMIT 1");
$pstmt->execute([$postId]);
if (!$pstmt->fetch()) {
    http_response_code(404);
    echo json_encode(["error" => "Post not found"]);
    exit;
}

if (!isset($_FILES['file']) || !is_array($_FILES['file'])) {
    http_response_code(400);
    echo json_encode(["error" => "Missing file field (expected multipart field name: file)"]);
    exit;
}

$file = $_FILES['file'];

// File size limit (50 MB)
$maxBytes = 50 * 1024 * 1024;
if ($file['error'] !== UPLOAD_ERR_OK) {
    $errMap = [
        UPLOAD_ERR_INI_SIZE   => "File exceeds upload_max_filesize (php.ini)",
        UPLOAD_ERR_FORM_SIZE  => "File exceeds MAX_FILE_SIZE from the form",
        UPLOAD_ERR_PARTIAL    => "File was only partially uploaded",
        UPLOAD_ERR_NO_FILE    => "No file was sent (empty file or field name mismatch)",
        UPLOAD_ERR_NO_TMP_DIR => "Missing temporary folder on server",
        UPLOAD_ERR_CANT_WRITE => "Failed to write file to disk",
        UPLOAD_ERR_EXTENSION  => "Upload blocked by a PHP extension",
    ];
    $code = (int) $file['error'];
    http_response_code(400);
    echo json_encode([
        "error" => $errMap[$code] ?? "Upload error",
        "code"  => $code,
    ]);
    exit;
}
if ($file['size'] > $maxBytes) {
    http_response_code(413);
    echo json_encode(["error" => "File too large", "max_bytes" => $maxBytes]);
    exit;
}

// Allowed MIME types
$allowedMime = [
    'image/jpeg','image/png','image/gif','image/webp','image/avif','image/svg+xml',
    'image/heic','image/heif','image/heic-sequence','image/heif-sequence',
    'video/mp4','video/webm','video/ogg','video/quicktime',
    'application/pdf','application/msword','application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.ms-excel','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','text/plain',
    'application/xml','text/xml',
];

// detect mime type (fallback if fileinfo extension not available)
if (function_exists('finfo_open')) {
    $finfo = finfo_open(FILEINFO_MIME_TYPE);
    $detected = finfo_file($finfo, $file['tmp_name']);
    finfo_close($finfo);
} elseif (function_exists('mime_content_type')) {
    $detected = mime_content_type($file['tmp_name']);
} else {
    $detected = $file['type'] ?? 'application/octet-stream';
}

$ext = strtolower((string) pathinfo($file['name'], PATHINFO_EXTENSION));
$extMimeFallback = [
    'jpg' => 'image/jpeg', 'jpeg' => 'image/jpeg', 'png' => 'image/png', 'gif' => 'image/gif',
    'webp' => 'image/webp', 'avif' => 'image/avif', 'svg' => 'image/svg+xml',
    'heic' => 'image/heic', 'heif' => 'image/heif',
    'mp4' => 'video/mp4', 'webm' => 'video/webm', 'ogg' => 'video/ogg', 'mov' => 'video/quicktime',
    'pdf' => 'application/pdf', 'txt' => 'text/plain', 'xml' => 'application/xml',
    'doc' => 'application/msword', 'docx' => 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'xls' => 'application/vnd.ms-excel', 'xlsx' => 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
];

if (!in_array($detected, $allowedMime, true)) {
    if ($detected === 'application/octet-stream' && isset($extMimeFallback[$ext])) {
        $detected = $extMimeFallback[$ext];
    }
}

if (!in_array($detected, $allowedMime, true)) {
    http_response_code(415);
    echo json_encode(["error" => "Unsupported media type", "detected" => $detected, "filename" => $file['name']]);
    exit;
}

// Ensure upload directory exists
$uploadDir = __DIR__ . "/../uploads/";
if (!is_dir($uploadDir)) {
    mkdir($uploadDir, 0755, true);
}

// Sanitize filename
$basename = preg_replace('/[^A-Za-z0-9._-]/', '_', basename($file['name']));
$filename = time() . '_' . bin2hex(random_bytes(6)) . '_' . $basename;
$destPath = $uploadDir . $filename;

// Move file
if (!move_uploaded_file($file['tmp_name'], $destPath)) {
    http_response_code(500);
    echo json_encode(["error" => "Failed to move uploaded file"]);
    exit;
}

$relativePath = 'uploads/' . $filename;

// Insert into database
$stmt = $pdo->prepare(
    "INSERT INTO post_files (post_id, file_name, file_path, file_type, mime_type) 
     VALUES (:post_id, :file_name, :file_path, :file_type, :mime_type)"
);

$stmt->execute([
    ':post_id'   => $postId,
    ':file_name' => $file['name'],
    ':file_path' => $relativePath,
    ':file_type' => pathinfo($file['name'], PATHINFO_EXTENSION),
    ':mime_type' => $detected
]);

echo json_encode(["success" => true, "file" => $relativePath]);