import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faCircleUser,
  faKey,
  faSignOutAlt,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/Navbar";

const animationSettings = {
  transition: { duration: 1.5 },
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const UserProfile: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 bg-white p-6 shadow-lg">
          <ul className="space-y-4">
            <li className="flex text-lg mb-5 md:text-xl items-center text-gray-700 hover:text-indigo-600 cursor-pointer">
              <FontAwesomeIcon icon={faCircleUser} className="mr-2 text-2xl" />
              Profile
            </li>
            <li className="flex text-lg mb-5 md:text-xl items-center text-gray-700 hover:text-indigo-600 cursor-pointer">
              <FontAwesomeIcon icon={faKey} className="mr-2" />
              Change Password
            </li>
            <li>
              <Link
                to="/login"
                className="flex text-lg mb-5 md:text-xl items-center text-gray-700 hover:text-red-600 cursor-pointer"
              >
                <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
                Logout
              </Link>
            </li>
          </ul>
        </div>

        {/* User Information */}
        <AnimatePresence>
          <motion.div
            className="flex-1 p-6 md:p-10 flex justify-center items-center"
            {...animationSettings}
          >
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
              <div className="flex items-center justify-center mb-4">
                <FontAwesomeIcon
                  icon={faCircleUser}
                  className="text-6xl md:text-8xl text-gray-700"
                />
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold">Name:</h3>
                  <p className="text-base md:text-lg">John Doe</p>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold">Email:</h3>
                  <p className="text-base md:text-lg">johndoe@example.com</p>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold">Joined:</h3>
                  <p className="text-base md:text-lg">January 1, 2024</p>
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <button className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-sm hover:bg-indigo-500 focus:outline-none">
                  <FontAwesomeIcon icon={faEdit} className="mr-2" />
                  Edit
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};

export default UserProfile;
