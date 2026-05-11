<?php
require __DIR__ . "/config/db.php";

$email = $argv[1] ?? 'aamaartii33@gmail.com';
$stmt = $pdo->prepare("SELECT id, email, password FROM users WHERE email = ? LIMIT 1");
$stmt->execute([$email]);
$row = $stmt->fetch();

if (!$row) {
    echo "NOT_FOUND\n";
    exit(2);
}

echo "FOUND id={$row['id']} email={$row['email']} passlen=" . strlen($row['password']) . "\n";

