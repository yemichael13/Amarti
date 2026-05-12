import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Reveal from "../motion/Reveal";
import { postsAPI, getFileUrl } from "../../utils/api";
import { getFirstPostImageFile } from "../../utils/postMedia";

const Latest_Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLatestPosts = async () => {
      try {
        setLoading(true);
        const data = await postsAPI.getLatest(3);
        setPosts(Array.isArray(data) ? data : []);
        setError(null);
      } catch (err) {
        setError("Failed to load latest news");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestPosts();
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="py-20 bg-green-900">
      <Reveal>
        <h1 className="text-center text-white text-4xl md:text-6xl font-bold mb-12">Latest News</h1>
      </Reveal>

      {loading && <div className="text-center text-white text-xl">Loading…</div>}

      {error && <div className="text-center text-red-200 text-xl">{error}</div>}

      {!loading && !error && posts.length === 0 && (
        <div className="text-center text-white text-xl">No news yet.</div>
      )}

      {!loading && !error && posts.length > 0 && (
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.map((post, index) => {
              const img = getFirstPostImageFile(post.files);
              const imageUrl = img ? getFileUrl(img.file_path) : null;
              return (
                <Reveal key={post.id} delay={0.1 * index}>
                  <Link
                    to={`/news/${post.slug}`}
                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 block h-full"
                  >
                    {imageUrl && (
                      <img
                        src={imageUrl}
                        alt={post.title}
                        className="w-full h-48 object-cover"
                      />
                    )}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-green-700 mb-2 line-clamp-2">{post.title}</h3>
                      {post.excerpt && (
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                      )}
                      <div className="flex justify-between items-center text-xs text-gray-500">
                        <span>{formatDate(post.created_at)}</span>
                        <span className="text-green-700 font-semibold">Read more</span>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
          <Reveal delay={0.3}>
            <div className="text-center mt-10">
              <Link
                to="/news"
                className="inline-block bg-white text-green-800 font-semibold px-6 py-3 rounded-lg  transition-colors duration-300"
              >
                View all news
              </Link>
            </div>
          </Reveal>
        </div>
      )}
    </div>
  );
};

export default Latest_Posts;
