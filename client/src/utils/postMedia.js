/** Matches server/posts/upload.php: file_type is extension; mime_type is detected. */

export function isPostImageFile(f) {
  if (!f) return false;
  if (f.mime_type && String(f.mime_type).startsWith("image/")) return true;
  const ext = String(f.file_type || "").toLowerCase().replace(/^\./, "");
  return ["jpg", "jpeg", "png", "gif", "webp", "avif"].includes(ext);
}

export function getPostImageFiles(files) {
  if (!Array.isArray(files)) return [];
  return files.filter(isPostImageFile);
}

export function getFirstPostImageFile(files) {
  const imgs = getPostImageFiles(files);
  return imgs[0] ?? null;
}
