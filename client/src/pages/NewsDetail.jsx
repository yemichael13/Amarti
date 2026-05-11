import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageMotion from "../components/motion/PageMotion";
import { postsAPI, getFileUrl } from "../utils/api";
import { getFirstPostImageFile, isPostImageFile } from "../utils/postMedia";

const NewsDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) {
        setError("Missing article link.");
        setLoading(false);
        return;
      }
      try {
        setError(null);
        const data = await postsAPI.getBySlug(slug);
        setPost(data);
      } catch (err) {
        setPost(null);
        setError(err.message || "Failed to load news");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  const heroImage = post ? getFirstPostImageFile(post.files) : null;
  const galleryFiles =
    post?.files?.filter((f) => !heroImage || f.id !== heroImage.id) || [];

  return (
    <div>
      <Navbar />

      <PageMotion>
        <div className="min-h-screen bg-gray-50 pt-28 pb-20 px-6 md:px-20">
          {loading && (
            <div className="max-w-4xl mx-auto text-center text-gray-600 py-12">Loading…</div>
          )}

          {!loading && error && (
            <div className="max-w-4xl mx-auto text-center text-red-600 py-12">
              {error}
              <div className="mt-6">
                <Link to="/news" className="text-green-700 font-semibold">
                  ← Back to News
                </Link>
              </div>
            </div>
          )}

          {!loading && !error && post && (
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow overflow-hidden">
              {heroImage && (
                <img
                  src={getFileUrl(heroImage.file_path)}
                  alt={heroImage.file_name || post.title}
                  className="w-full h-64 md:h-80 object-cover"
                />
              )}

              <div className="p-8">
                <h1 className="text-3xl md:text-5xl font-bold text-green-700 mb-3">{post.title}</h1>

                <div className="text-sm text-gray-500 mb-6 space-y-1">
                  <p>Published on {new Date(post.created_at).toLocaleDateString()}</p>
                </div>

                <div
                  className="max-w-none mb-10 text-gray-800 leading-relaxed [&_a]:text-green-700 [&_a]:underline [&_img]:max-w-full [&_img]:rounded-lg"
                  dangerouslySetInnerHTML={{ __html: post.content || "" }}
                />

                {galleryFiles.length > 0 && (
                  <>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Attachments</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {galleryFiles.map((f) => {
                        const url = getFileUrl(f.file_path);
                        if (isPostImageFile(f) || f.mime_type?.startsWith("image/")) {
                          return (
                            <img
                              key={f.id}
                              src={url}
                              alt={f.file_name}
                              className="rounded-lg w-full h-64 object-cover"
                            />
                          );
                        }
                        if (f.mime_type?.startsWith("video/")) {
                          return (
                            <video key={f.id} controls className="rounded-lg w-full">
                              <source src={url} type={f.mime_type} />
                            </video>
                          );
                        }
                        return (
                          <a
                            key={f.id}
                            href={url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-green-700 underline font-medium"
                          >
                            {f.file_name}
                          </a>
                        );
                      })}
                    </div>
                  </>
                )}

                <div className="mt-10">
                  <Link to="/news" className="text-green-700 font-semibold">
                    ← Back to News
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </PageMotion>

      <Footer />
    </div>
  );
};

export default NewsDetail;
