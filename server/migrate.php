<?php
/**
 * Simple migration runner for this project.
 *
 * Usage:
 *   php server/migrate.php
 */

require __DIR__ . "/config/db.php";

$migrationsDir = __DIR__ . "/migrations";
if (!is_dir($migrationsDir)) {
    fwrite(STDERR, "Migrations directory not found: {$migrationsDir}\n");
    exit(1);
}

$pdo->exec("
    CREATE TABLE IF NOT EXISTS migrations (
        id INT UNSIGNED NOT NULL AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        applied_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (id),
        UNIQUE KEY uniq_migrations_name (name)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
");

$files = glob($migrationsDir . "/*.sql") ?: [];
sort($files, SORT_NATURAL);

if (!$files) {
    echo "No migrations found.\n";
    exit(0);
}

function stripSqlComments(string $sql): string {
    $lines = preg_split("/\R/", $sql);
    $out = [];
    foreach ($lines as $line) {
        // remove full-line and trailing '--' comments
        if (preg_match('/^\s*--/', $line)) continue;
        $line = preg_replace('/\s+--.*$/', '', $line);
        $out[] = $line;
    }
    return implode("\n", $out);
}

function splitSqlStatements(string $sql): array {
    $sql = trim($sql);
    if ($sql === '') return [];

    // This project uses simple SQL migrations (no procedures/triggers).
    // Split by ';' safely enough for our current schema files.
    $parts = preg_split('/;\s*(\R|$)/', $sql);
    $stmts = [];
    foreach ($parts as $p) {
        $stmt = trim($p);
        if ($stmt !== '') $stmts[] = $stmt;
    }
    return $stmts;
}

$appliedStmt = $pdo->prepare("SELECT 1 FROM migrations WHERE name = ? LIMIT 1");
$markApplied = $pdo->prepare("INSERT INTO migrations (name) VALUES (?)");

foreach ($files as $path) {
    $name = basename($path);

    $appliedStmt->execute([$name]);
    if ($appliedStmt->fetchColumn()) {
        echo "SKIP  {$name}\n";
        continue;
    }

    $raw = file_get_contents($path);
    if ($raw === false) {
        fwrite(STDERR, "Failed reading migration: {$name}\n");
        exit(1);
    }

    $sql = stripSqlComments($raw);
    $statements = splitSqlStatements($sql);

    if (!$statements) {
        echo "SKIP  {$name} (empty)\n";
        $markApplied->execute([$name]);
        continue;
    }

    echo "APPLY {$name}\n";
    try {
        foreach ($statements as $stmt) {
            $pdo->exec($stmt);
        }
        $markApplied->execute([$name]);
    } catch (Throwable $e) {
        // MySQL DDL statements (CREATE TABLE, etc.) perform implicit commits,
        // so we avoid wrapping migrations in a transaction.
        fwrite(STDERR, "FAILED {$name}: " . $e->getMessage() . "\n");
        exit(1);
    }
}

echo "Done.\n";

