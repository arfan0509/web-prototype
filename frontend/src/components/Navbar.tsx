import React, { useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4 sticky z-50 top-0 flex items-center justify-between font-sans">
      <Link to="/" className="flex items-center">
        <h1 className="text-3xl font-bold ml-0 sm:ml-8 mr-3">AES 256</h1>
        <div className="w-10 h-10">
          <DotLottieReact
            src="https://lottie.host/b035ee6c-af50-4020-9ce3-b9e96188a2e9/LQ8Yci9vKA.json"
            loop
            autoplay
          />
        </div>
      </Link>

      <div className="hidden md:flex text-lg font-medium ml-auto mr-32">
        <Link
          to="/"
          className="text-white hover:underline transition duration-300 ease-in-out mr-16"
        >
          Home
        </Link>
        <Link
          to="/converter"
          className="text-white hover:underline transition duration-300 ease-in-out"
        >
          Converter
        </Link>
      </div>

      <div className="flex items-center space-x-6 sm:mr-8">
        <Link
          to="/user-profile"
          className="text-white hover:ring-2 hover:ring-white transition duration-300 ease-in-out p-1.5 rounded-full"
        >
          <FontAwesomeIcon icon={faUserCircle} className="text-4xl" />
        </Link>
        <button
          onClick={toggleMenu}
          className="md:hidden text-white hover:text-gray-400 transition duration-300 ease-in-out focus:outline-none"
        >
          <FontAwesomeIcon
            icon={isOpen ? faTimes : faBars}
            className="text-2xl"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 right-0 bg-gray-800 w-full px-8 py-4 md:hidden">
          <Link
            to="/"
            className="block text-white hover:underline transition duration-300 ease-in-out mb-4"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/converter"
            className="block text-white hover:underline transition duration-300 ease-in-out"
            onClick={toggleMenu}
          >
            Converter
          </Link>
        </div>
      )}
    </nav>
  );
}
