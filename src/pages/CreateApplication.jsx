<<<<<<< HEAD
import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaClipboardList,
  FaUser,
  FaEnvelope,
  FaUsers,
  FaGraduationCap,
  FaFileAlt,
  FaCalendarAlt,
  FaSignOutAlt,
} from "react-icons/fa";

const AdmissionsPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const user = {
    name: "Jane Applicant",
    email: "jane.applicant@example.com",
    avatar: "https://via.placeholder.com/100",
  };

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      navigate("/apply");
    }
  };

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`w-64 bg-[#001800] text-white flex flex-col fixed top-0 left-0 h-full z-50 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 lg:relative lg:translate-x-0`}
      >
        <div className="p-6 flex flex-col items-center border-b border-gray-700">
          <img
            src={user.avatar}
            alt="Profile"
            className="rounded-full w-20 h-20 mb-3 border-4 border-white cursor-pointer"
            onClick={() => setIsSidebarOpen(false)}
          />
          <h2
            className="text-xl font-semibold cursor-pointer"
            onClick={() => setIsSidebarOpen(false)}
          >
            {user.name}
          </h2>
          <p className="text-sm text-gray-400">{user.email}</p>
=======

import React, { useState } from "react";
import AdmissionNav from '../components/AdmissionNav';
import Stepper from "../components/Stepper";

const Create = () => {
  // Define the progress phases
  const phases = [
    'Application Details',
    'Personal Info',
    'Contact Details',
    'Family Profile',
    'Educational Info',
    'Upload Requirements',
    'Schedule Appointment',
  ];

    const [applicantType, setApplicantType] = useState("");
    const [seniorHighTrack, setSeniorHighTrack] = useState("");
    const [strand, setStrand] = useState("");
    const [preferredProgram, setPreferredProgram] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
  
    const handleSubmit = () => {
      // Check if the applicant is from "academic" or "tech-voc" track
      if (
        ["shs", "grade12"].includes(applicantType) && // Only check for these type
        !["stem", "ict"].includes(strand) // Ensure they choose either "stem" or "ict" strand
      ) {
        setErrorMessage(
          "You must be a STEM or ICT student to choose the selected program."
        );
        return;
      }
  
      setErrorMessage("");
      alert("Application successfully created!");
      
    };

  return (
    <>
      {/* Admission Navigation Bar */}
      <AdmissionNav user={null} />
    

      {/* Page Content */}
      <main className="mt-[80px] container mx-auto px-4">
        {/* Page Title */}
        <div className="text-center my-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Admission Application
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            Computer Studies Department - First Semester, 2025-2026
          </p>
>>>>>>> 972bf1191cd592bdb8f287b1dda1099eaa9efa6a
        </div>
        <nav className="flex-1 mt-4">
          <ul className="space-y-2">
            <li>
              <Link
                to="details"
                className="px-4 py-2 flex items-center space-x-3 hover:bg-gray-700 rounded-lg cursor-pointer"
                onClick={() => setIsSidebarOpen(false)}
              >
                <FaClipboardList />
                <span>Application Details</span>
              </Link>
            </li>
            <li>
              <Link
                to="personal"
                className="px-4 py-2 flex items-center space-x-3 hover:bg-gray-700 rounded-lg cursor-pointer"
                onClick={() => setIsSidebarOpen(false)}
              >
                <FaUser />
                <span>Personal Info</span>
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                className="px-4 py-2 flex items-center space-x-3 hover:bg-gray-700 rounded-lg cursor-pointer"
                onClick={() => setIsSidebarOpen(false)}
              >
                <FaEnvelope />
                <span>Contact Details</span>
              </Link>
            </li>
            <li>
              <Link
                to="family"
                className="px-4 py-2 flex items-center space-x-3 hover:bg-gray-700 rounded-lg cursor-pointer"
                onClick={() => setIsSidebarOpen(false)}
              >
                <FaUsers />
                <span>Family Profile</span>
              </Link>
            </li>
            <li>
              <Link
                to="education"
                className="px-4 py-2 flex items-center space-x-3 hover:bg-gray-700 rounded-lg cursor-pointer"
                onClick={() => setIsSidebarOpen(false)}
              >
                <FaGraduationCap />
                <span>Educational Info</span>
              </Link>
            </li>
            <li>
              <Link
                to="requirements"
                className="px-4 py-2 flex items-center space-x-3 hover:bg-gray-700 rounded-lg cursor-pointer"
                onClick={() => setIsSidebarOpen(false)}
              >
                <FaFileAlt />
                <span>Upload Requirements</span>
              </Link>
            </li>
            <li>
              <Link
                to="appointment"
                className="px-4 py-2 flex items-center space-x-3 hover:bg-gray-700 rounded-lg cursor-pointer"
                onClick={() => setIsSidebarOpen(false)}
              >
                <FaCalendarAlt />
                <span>Schedule Appointment</span>
              </Link>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="w-full px-4 py-2 flex items-center space-x-3 hover:bg-red-600 rounded-lg cursor-pointer mt-auto"
              >
                <FaSignOutAlt />
                <span>Logout</span>
              </button>
            </li>
          </ul>
        </nav>
      </aside>

<<<<<<< HEAD
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
=======
        {/* Progress Indicator */}
          <div>
      <Stepper />
>>>>>>> 972bf1191cd592bdb8f287b1dda1099eaa9efa6a
    </div>
      </main>
    </>
  );
};

<<<<<<< HEAD
export default AdmissionsPage;
=======
export default Create;
>>>>>>> 972bf1191cd592bdb8f287b1dda1099eaa9efa6a
