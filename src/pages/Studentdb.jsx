import React, { useState } from "react";
import LogoutConfirmationModal from "./LogoutConfirmationModal";

const StudentDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    avatar: "https://via.placeholder.com/100",
  };

  // Logout handler
  const handleLogout = () => {
    // Clear session data
    localStorage.removeItem("userToken");
    sessionStorage.clear();
    navigate("/login");
  };

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`w-64 bg-[#081708] text-white flex flex-col fixed top-0 left-0 h-full z-50 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 lg:relative lg:translate-x-0`}
      >
        <div className="p-6 flex flex-col items-center border-b border-gray-700">
          <Link to="home">
            <img
              src={user.avatar}
              alt="Profile"
              className="rounded-full w-20 h-20 mb-3 border-4 border-white cursor-pointer"
              onClick={() => setIsSidebarOpen(false)}
            />
          </Link>

          <h2
            className="text-xl font-semibold cursor-pointer"
            onClick={() => setIsSidebarOpen(false)}
          >
            {user.name}
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
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full px-4 py-2 flex items-center space-x-3 hover:bg-red-600 rounded-lg cursor-pointer mt-auto"
              >
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
      <main className="flex-1 overflow-y-auto h-full p-8">
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
