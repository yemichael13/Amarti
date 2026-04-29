import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import News from "./pages/News";
import Services from "./pages/Services";
import EcoTourism from "./pages/Eco-Tourism";
import Training from "./pages/Training";
import Contact from "./pages/Contact";





const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);
  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (

      <Routes location={location} key={location.pathname}>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/eco-tourism" element={<EcoTourism />} />
        <Route path="/training" element={<Training />} />
        <Route path="/contact" element={<Contact />} />

        {/* Fallback */}
        <Route path="*" element={<Home />} />
      </Routes>

  );
};

function App() {

  return (

      <Router>
        <ScrollToTop />
        <AnimatedRoutes />

      </Router>

  );
}

export default App
