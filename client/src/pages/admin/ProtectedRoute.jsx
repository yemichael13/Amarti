import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { authed, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-green-50">
        <p className="text-green-800 font-medium">Checking session…</p>
      </div>
    );
  }

  if (!authed) return <Navigate to="/admin/login" replace />;

  return children;
}
