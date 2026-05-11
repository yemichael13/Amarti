import { API } from "../api.js";

const API_BASE = "http://localhost:8000";

export const getFileUrl = (path) => {
  if (!path) return null;
  return `${API_BASE}/${path}`;
};

function buildCreateFormData(postData) {
  const fd = new FormData();
  fd.append("title", postData.title || "");
  fd.append("content", postData.content || "");
  fd.append("excerpt", postData.excerpt || "");
  fd.append("is_published", postData.is_published ? 1 : 0);
  return fd;
}

async function uploadOneFile(postId, file) {
  const id = Number(postId);
  if (!Number.isFinite(id) || id <= 0) {
    throw new Error("Invalid post id for upload");
  }
  if (!file || !(file instanceof Blob) || file.size <= 0) {
    throw new Error("Invalid or empty file for upload");
  }

  const url = API.uploadFile;
  const attempt = async (withDev) => {
    const fd = new FormData();
    fd.append("post_id", String(id));
    fd.append("file", file, file.name || "upload");
    const u = withDev ? `${url}?dev=1` : url;
    return fetch(u, { method: "POST", body: fd, credentials: "include" });
  };

  let res = await attempt(false);
  if (res.status === 401 && window.location.hostname === "localhost") {
    res = await attempt(true);
  }

  let data = {};
  try {
    data = await res.json();
  } catch {
    data = {};
  }

  if (!res.ok) {
    throw new Error(data.error || data.message || `Upload failed (${res.status})`);
  }
  if (data.success === false) {
    throw new Error(data.error || "Upload failed");
  }
  return data;
}

export const adminPostsAPI = {
  async getAll() {
    const res = await fetch(API.listPosts, { credentials: "include" });
    if (!res.ok) throw new Error("Failed to load posts");
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  },

  async get(idOrSlug) {
    const str = String(idOrSlug);
    const isNumeric = /^\d+$/.test(str);
    const qs = isNumeric ? `?id=${str}` : `?slug=${encodeURIComponent(str)}`;
    let res = await fetch(`${API.getPost}${qs}`, { credentials: "include" });
    if (res.status === 401 && window.location.hostname === "localhost") {
      res = await fetch(`${API.getPost}${qs}&dev=1`);
    }
    if (!res.ok) throw new Error("Failed to fetch post");
    const data = await res.json();
    if (data === null) throw new Error("Post not found");
    return data;
  },

  async getById(id) {
    return await adminPostsAPI.get(id);
  },

  async getBySlug(slug) {
    return await adminPostsAPI.get(slug);
  },

  async create(postData, files = []) {
    let res = await fetch(API.createPost, {
      method: "POST",
      body: buildCreateFormData(postData),
      credentials: "include",
    });

    if (res.status === 401 && window.location.hostname === "localhost") {
      res = await fetch(API.createPost + "?dev=1", {
        method: "POST",
        body: buildCreateFormData(postData),
      });
    }

    const data = await res.json();
    if (!data.success) throw new Error(data.error || "Failed to create post");

    const postId = Number(data.post_id);
    if (!Number.isFinite(postId) || postId <= 0) {
      throw new Error("Server did not return a valid post_id; cannot upload files.");
    }

    for (let i = 0; i < files.length; i++) {
      const f = files[i];
      if (!f || f.size <= 0 || f.size > 50 * 1024 * 1024) continue;
      await uploadOneFile(postId, f);
    }

    return data;
  },

  async uploadFiles(postId, files = []) {
    for (let i = 0; i < files.length; i++) {
      const f = files[i];
      if (!f || f.size <= 0 || f.size > 50 * 1024 * 1024) continue;
      await uploadOneFile(postId, f);
    }
  },

  async update(id, postData) {
    const fd = new FormData();
    fd.append("id", id);
    fd.append("title", postData.title || "");
    fd.append("content", postData.content || "");
    fd.append("excerpt", postData.excerpt || "");
    fd.append("is_published", postData.is_published ? 1 : 0);

    const res = await fetch(API.updatePost, { method: "POST", body: fd, credentials: "include" });
    const data = await res.json();
    if (!data.success) throw new Error(data.error || "Failed to update post");
    return data;
  },

  async deleteFile(fileId) {
    const fd = new FormData();
    fd.append("id", fileId);
    const res = await fetch(API.deleteFile, { method: "POST", body: fd, credentials: "include" });
    const data = await res.json();
    if (!data.success) throw new Error(data.error || "Failed to delete file");
    return data;
  },

  async delete(id) {
    const fd = new FormData();
    fd.append("id", id);
    const res = await fetch(API.deletePost, {
      method: "POST",
      body: fd,
      credentials: "include",
    });
    const data = await res.json();
    if (!data.success) throw new Error(data.error || "Failed to delete");
    return data;
  },
};

export default adminPostsAPI;
