<<<<<<< HEAD
import { useState } from "react";
=======
import React, { useState } from "react";
import LogoutConfirmationModal from "./LogoutConfirmationModal";
>>>>>>> 972bf1191cd592bdb8f287b1dda1099eaa9efa6a
import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaUser,
  FaClipboardList,
  FaBook,
  FaBell,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";


const StudentDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
<<<<<<< HEAD
  const navigate = useNavigate(); // React Router's navigation hook for programmatic navigation
=======
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
>>>>>>> 972bf1191cd592bdb8f287b1dda1099eaa9efa6a

  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    avatar: "https://via.placeholder.com/100",
  };

  // Logout handler
  const handleLogout = () => {
<<<<<<< HEAD
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      navigate("/login"); // Redirect to login page
    }
=======
    // Clear session data
    localStorage.removeItem("userToken");
    sessionStorage.clear();
    navigate("/");
>>>>>>> 972bf1191cd592bdb8f287b1dda1099eaa9efa6a
  };

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`w-64 bg-[#081708] text-white flex flex-col fixed top-0 left-0 h-full z-50 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 lg:relative lg:translate-x-0`}
      >
<<<<<<< HEAD
        
        <div className="p-6 flex flex-col items-center border-b border-gray-700">
          <Link
          to='home'>
          <img
            src={user.avatar}
            alt="Profile"
            className="rounded-full w-20 h-20 mb-3 border-4 border-white cursor-pointer"
            onClick={() => setIsSidebarOpen(false)}
          />
          </Link>
          
=======
        <div className="p-6 flex flex-col items-center border-b border-gray-700">
          <Link to="home">
            <img
              src={user.avatar}
              alt="Profile"
              className="rounded-full w-20 h-20 mb-3 border-4 border-white cursor-pointer"
              onClick={() => setIsSidebarOpen(false)}
            />
          </Link>

>>>>>>> 972bf1191cd592bdb8f287b1dda1099eaa9efa6a
          <h2
            className="text-xl font-semibold cursor-pointer"
            onClick={() => setIsSidebarOpen(false)}
          >
<<<<<<< HEAD
            
            {user.name}
            
=======
            {user.name}
>>>>>>> 972bf1191cd592bdb8f287b1dda1099eaa9efa6a
          </h2>
          <p className="text-sm text-gray-400">{user.email}</p>
        </div>
        <nav className="flex-1 mt-4">
          <ul className="space-y-2">
            <li>
              <Link
                to="profile"
                className="px-4 py-2 flex items-center space-x-3 hover:bg-gray-700 rounded-lg cursor-pointer"
                onClick={() => setIsSidebarOpen(false)}
              >
                <FaUser />
                <span>Profile</span>
              </Link>
            </li>
            {/* Other navigation links */}
            <li>
<<<<<<< HEAD
              <Link
                to="courses"
                className="px-4 py-2 flex items-center space-x-3 hover:bg-gray-700 rounded-lg cursor-pointer"
                onClick={() => setIsSidebarOpen(false)}
              >
                <FaBook />
                <span>Courses</span>
              </Link>
            </li>
            <li>
              <Link
                to="enroll"
                className="px-4 py-2 flex items-center space-x-3 hover:bg-gray-700 rounded-lg cursor-pointer"
                onClick={() => setIsSidebarOpen(false)}
              >
                <FaClipboardList />
                <span>Enroll</span>
              </Link>
            </li>
            <li>
              <Link
                to="notifications"
                className="px-4 py-2 flex items-center space-x-3 hover:bg-gray-700 rounded-lg cursor-pointer"
                onClick={() => setIsSidebarOpen(false)}
              >
                <FaBell />
                <span>Notifications</span>
              </Link>
            </li>
            <li>
              <Link
                to="settings"
                className="px-4 py-2 flex items-center space-x-3 hover:bg-gray-700 rounded-lg cursor-pointer"
                onClick={() => setIsSidebarOpen(false)}
              >
                <FaCog />
                <span>Settings</span>
              </Link>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="w-full px-4 py-2 flex items-center space-x-3 hover:bg-red-600 rounded-lg cursor-pointer mt-auto"
              >
=======
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full px-4 py-2 flex items-center space-x-3 hover:bg-red-600 rounded-lg cursor-pointer mt-auto"
              >
>>>>>>> 972bf1191cd592bdb8f287b1dda1099eaa9efa6a
                <FaSignOutAlt />
                <span>Logout</span>
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 bg-[#081708] text-white p-2 rounded-md"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {/* Main Content */}
<<<<<<< HEAD
      <main className="flex-1  overflow-y-auto h-full p-8">
=======
      <main className="flex-1 overflow-y-auto h-full p-8">
>>>>>>> 972bf1191cd592bdb8f287b1dda1099eaa9efa6a
        <Outlet /> {/* This renders the nested route components */}
      </main>

      {/* Logout Confirmation Modal */}
      <LogoutConfirmationModal
        isOpen={isModalOpen}
        onConfirm={handleLogout}
        onCancel={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default StudentDashboard;
