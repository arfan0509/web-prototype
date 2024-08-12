import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 sticky z-50 top-0 flex items-center justify-between">
      <Link to="/">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold ml-0 sm:ml-8 mr-3">AES 256</h1>

          <div className="w-10 h-10">
            <DotLottieReact
              src="https://lottie.host/b035ee6c-af50-4020-9ce3-b9e96188a2e9/LQ8Yci9vKA.json"
              loop
              autoplay
            />
          </div>
        </div>
      </Link>
      <div className="flex items-center">
        <Link
          to="/user-profile"
          className="text-white hover:ring-2 hover:ring-white transition duration-300 ease-in-out p-1.5 rounded-full"
        >
          <FontAwesomeIcon icon={faUserCircle} className="text-4xl" />
        </Link>
      </div>
    </nav>
  );
}
