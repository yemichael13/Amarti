import React from "react";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <main className="pt-28 px-6 md:px-20">
        <h1 className="text-3xl font-bold">Contact</h1>
        <p className="mt-4 text-gray-700">
          This is a placeholder Contact page.
        </p>
      </main>
    </div>
  );
};

export default Contact;