export const API_URL = import.meta.env.VITE_API_URL;
export const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://aamaartii.com.et';

/** Build absolute URL for uploaded media stored under server/uploads/ */
export function getFileUrl(path) {
  if (!path) return null;
  const clean = String(path).replace(/^\/+/, '');
  return `${API_URL}/${clean}`;
}

export const api = {
  login: `${API_URL}/auth/login.php`,
  logout: `${API_URL}/auth/logout.php`,
  checkAuth: `${API_URL}/auth/check.php`,
  listPosts: `${API_URL}/posts/list.php`,
  getPost: `${API_URL}/posts/get.php`,
  createPost: `${API_URL}/posts/create.php`,
  updatePost: `${API_URL}/posts/update.php`,
  deletePost: `${API_URL}/posts/delete.php`,
  uploadFile: `${API_URL}/posts/upload.php`,
  deleteFile: `${API_URL}/posts/delete_file.php`,
  newsletter: `${API_URL}/newsletter/subscribe.php`,
};

export const API = api;
