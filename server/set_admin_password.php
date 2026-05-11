<?php
/**
 * Set (or create) an admin user password using PHP's password_hash,
 * matching server/auth/login.php password_verify() logic.
 *
 * Usage:
 *   php server/set_admin_password.php aamaartii33@gmail.com "NewPlaintextPassword"
 */

require __DIR__ . "/config/db.php";

$email = $argv[1] ?? null;
$plain = $argv[2] ?? null;

if (!$email || !$plain) {
    fwrite(STDERR, "Usage: php server/set_admin_password.php <email> <plaintext-password>\n");
    exit(1);
}

$hash = password_hash($plain, PASSWORD_DEFAULT);
if (!$hash) {
    fwrite(STDERR, "Failed to hash password.\n");
    exit(1);
}

$stmt = $pdo->prepare("
    INSERT INTO users (email, password)
    VALUES (?, ?)
    ON DUPLICATE KEY UPDATE password = VALUES(password)
");
$stmt->execute([$email, $hash]);

echo "OK email={$email}\n";

