import React from "react";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        {/* Pinterest Logo SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-6 h-6 fill-red-500"
        >
          <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.417 7.629 11.054-.106-.938-.202-2.377.042-3.402.222-.957 1.432-6.097 1.432-6.097s-.366-.731-.366-1.813c0-1.696.983-2.964 2.205-2.964 1.04 0 1.543.78 1.543 1.717 0 1.046-.666 2.609-1.01 4.057-.288 1.214.611 2.203 1.813 2.203 2.176 0 3.857-2.3 3.857-5.612 0-2.933-2.11-4.986-5.128-4.986-3.494 0-5.557 2.618-5.557 5.317 0 1.048.403 2.173.906 2.782.1.123.114.231.084.355-.092.389-.3 1.214-.34 1.383-.053.229-.172.28-.398.17-1.49-.69-2.424-2.862-2.424-4.61 0-3.763 2.738-7.224 7.898-7.224 4.145 0 7.36 2.958 7.36 6.906 0 4.12-2.602 7.437-6.208 7.437-1.212 0-2.35-.63-2.738-1.376l-.746 2.838c-.27 1.033-1 2.325-1.489 3.111C9.646 23.897 10.808 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
        </svg>
        <span className="text-2xl font-bold text-red-500">Pinterest</span>
      </div>

      {/* Search */}
      <div className="flex-1 mx-6">
        <input
          type="text"
          placeholder="Search wallpapers..."
          className="w-full px-4 py-2 rounded-full bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Buttons */}
      <div className="space-x-4">
        <button className="px-4 py-2 rounded-full bg-red-500 text-white hover:bg-red-600">
          Log in
        </button>
        <button className="px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300">
          Sign up
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
