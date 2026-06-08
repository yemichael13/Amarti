import React, { useState } from "react";
import Logo from "../assets/amarti_logo.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { key: "news", path: "/news", label: "News" },
    { key: "home", path: "/", label: "Home" },
    { key: "about", path: "/about", label: "About" },
    { key: "services", path: "/services", label: "Services" },
    { key: "eco-tourism", path: "/eco-tourism", label: "Eco-Tourism" },
    { key: "innovation-sustainability", path: "/innovation-sustainability", label: "Innovation" },
    { key: "contact", path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed w-full z-50 top-5 px-6 md:px-20 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full">
        <Link to="/" className="cusror-pointer object-contain rounded-full">
          <img
            src={Logo}
            alt="ILDS"
            className="w-full h-full object-contain rounded-full"
          />
        </Link>
        
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-6 rounded-sm text-white text-lg justify-center px-6 items-center font-medium h-10 border bg-black/40 border-white/50 backdrop-blur-md shadow-lg">

        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const activeClass = isActive
            ? 'text-black font-semibold bg-white py-2 px-4 rounded-sm'
            : 'hover:text-white/70 transition py-2';

          return (
            <li key={item.path}>
              <Link to={item.path} className={activeClass}>
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        {/* Simple hamburger icon */}
        <div className="space-y-1 bg-green-900 p-2 rounded-sm border border-white">
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </div>
      </button>

      {/* Sidebar for Mobile */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-bold ">Menu</h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              className="text-black text-2xl px-2"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              ×
            </button>
          </div>
        </div>
        <ul className="flex flex-col gap-4 p-6 text-lg font-medium">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const activeClass = isActive
              ? "text-white bg-black font-semibold py-2 px-4 rounded-lg"

              : "h transition py-2";

            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={activeClass}
                  onClick={() => setIsOpen(false)} // close sidebar on click
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;