import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Seo from "../../components/Seo";
import PageMotion from "../../components/motion/PageMotion";
import Reveal from "../../components/motion/Reveal";
import { API } from "../../api.js";

export default function Login({ onLogin }) {
  const navigate = useNavigate();
  const { setAuthed } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const fd = new FormData();
      fd.append("email", email);
      fd.append("password", password);

      const res = await fetch(API.login, {
        method: "POST",
        body: fd,
        credentials: "include",
      });

      const data = await res.json();

      if (data.success) {
        setAuthed(true);
        onLogin && onLogin();
        navigate("/admin");
      } else {
        setError("Invalid credentials");
      }
    } catch {
      setError("Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageMotion>
      <Seo title="Admin Login" path="/admin/login" noindex />
      <div className="min-h-screen bg-linear-to-br from-green-50 to-green-100 flex items-center justify-center px-4 py-12">
        <Reveal className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-green-800 mb-2">Admin sign in</h1>
              <p className="text-gray-600">Use your admin email and password</p>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
                {error}
              </div>
            )}

            <form onSubmit={submit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="email"
                  autoComplete="username"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="password"
                  autoComplete="current-password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-green-700 text-white font-semibold py-3 rounded-lg hover:bg-green-800 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Signing in…" : "Sign in"}
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </PageMotion>
  );
}
