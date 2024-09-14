import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-6">
      <div className="container mx-auto px-6 text-center text-white">
        <p>&copy; 2024 MotivateMe. All Rights Reserved.</p>
        <div className="mt-4">
          <a
            href="https://facebook.com"
            className="text-gray-400 mx-2 hover:text-white"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com"
            className="text-gray-400 mx-2 hover:text-white"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com"
            className="text-gray-400 mx-2 hover:text-white"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
