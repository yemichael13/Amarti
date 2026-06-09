import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Seo from "../components/Seo";
import PageMotion from "../components/motion/PageMotion";

export default function NotFound() {
  return (
    <div>
      <Seo
        title="Page Not Found"
        description="The page you are looking for could not be found."
        path="/404"
        noindex
      />
      <Navbar />
      <PageMotion>
        <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 py-24 text-center">
          <h1 className="text-6xl font-bold text-green-800 mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-8">This page does not exist.</p>
          <Link
            to="/"
            className="bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </PageMotion>
      <Footer />
    </div>
  );
}
