<?php
require __DIR__ . '/../config/session.php';
require __DIR__ . '/../config/cors.php';

initSession();
setCorsHeaders(['POST', 'OPTIONS']);

destroySession();

echo json_encode(['success' => true]);
