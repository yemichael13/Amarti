import { API, getFileUrl } from "../api.js";

export { getFileUrl };

export const postsAPI = {
  async getAll() {
    const res = await fetch(API.listPosts);
    if (!res.ok) throw new Error("Failed to load posts");
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  },

  async getBySlug(slug) {
    const res = await fetch(`${API.getPost}?slug=${encodeURIComponent(slug)}`);
    if (!res.ok) throw new Error("Failed to load post");
    const data = await res.json();
    if (data === null) throw new Error("Post not found");
    return data;
  },

  async getLatest(limit = 3) {
    const data = await postsAPI.getAll();
    return data.slice(0, limit);
  },
};

export default postsAPI;
