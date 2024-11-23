import React, { useState } from "react";
import Laya from "../assets/laya.png"; // Adjust the path based on your project structure
import { Link } from 'react-router-dom';

const Create = () => {
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

  const handleLogout = () => {
    alert("You have logged out.");
    // Implement actual logout functionality here (e.g., clear tokens, redirect)
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-100"
      
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[#081708]/80 flex items-center justify-center z-10"></div>
      <div className="w-full max-w-3xl bg-white p-8 shadow-lg rounded-lg z-30">
        {/* Header Section */}
        <div className="flex justify-center items-center mb-6">
          <div>
            <h1 className="text-3xl font-extrabold text-[#C61A01] text-center mb-2">
              Admission Application
            </h1>
            <h2 className="text-xl font-bold text-gray-700 text-center">
              Computer Studies Department - First Semester, 2025-2026
            </h2>
          </div>
        </div>

        {/* Question Section */}
        <div className="mb-6">
          <p className="text-gray-700 text-lg font-semibold mb-2">
            What type of applicant are you?
          </p>
          <select
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C61A01] focus:border-transparent"
            value={applicantType}
            onChange={(e) => setApplicantType(e.target.value)}
          >
            <option value="" disabled>
              Choose a type of applicant
            </option>
            <option value="als">Alternative Learning System (ALS) Passer</option>
            <option value="foreign">
              Foreign Undergraduate Student Applicant
            </option>
            <option value="shs">Senior High School Graduate</option>
            <option value="grade12">Currently Enrolled Grade 12 Student</option>
            <option value="bachelors">Bachelor's Degree Graduate</option>
            <option value="transferee">Transferee</option>
          </select>
        </div>

        {/* Additional Questions */}
        {["als", "foreign", "transferee", "bachelors"].includes(applicantType) && (
          <div className="mb-6">
            <p className="text-gray-700 text-lg font-semibold mb-2">
              Choose your preferred program:
            </p>
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C61A01] focus:border-transparent"
              value={preferredProgram}
              onChange={(e) => setPreferredProgram(e.target.value)}
            >
              <option value="" disabled>
                Select a program
              </option>
              <option value="cs">BS Computer Science</option>
              <option value="it">BS Information Technology</option>
            </select>
          </div>
        )}

        {["shs", "grade12"].includes(applicantType) && (
          <>
            <div className="mb-6">
              <p className="text-gray-700 text-lg font-semibold mb-2">
                What is your senior high school track?
              </p>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C61A01] focus:border-transparent"
                value={seniorHighTrack}
                onChange={(e) => {
                  setSeniorHighTrack(e.target.value);
                  setStrand("");
                }}
              >
                <option value="" disabled>
                  Select your track
                </option>
                <option value="academic">Academic Track</option>
                <option value="tech-voc">Technical-Vocational Track</option>
                <option value="sports">Sports</option>
                <option value="arts-des">Arts and Design</option>
              </select>
            </div>

            {seniorHighTrack === "academic" && (
              <div className="mb-6">
                <p className="text-gray-700 text-lg font-semibold mb-2">
                  What is your strand?
                </p>
                <select
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C61A01] focus:border-transparent"
                  value={strand}
                  onChange={(e) => setStrand(e.target.value)}
                >
                  <option value="" disabled>
                    Select a strand
                  </option>
                  <option value="stem">STEM</option>
                  <option value="abm">ABM</option>
                  <option value="humss">HUMSS</option>
                  <option value="gas">GAS</option>
                </select>
              </div>
            )}

            {seniorHighTrack === "tech-voc" && (
              <div className="mb-6">
                <p className="text-gray-700 text-lg font-semibold mb-2">
                  What is your strand?
                </p>
                <select
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C61A01] focus:border-transparent"
                  value={strand}
                  onChange={(e) => setStrand(e.target.value)}
                >
                  <option value="" disabled>
                    Select a strand
                  </option>
                  <option value="ict">ICT</option>
                  <option value="he">Home Economics</option>
                  <option value="ia">Industrial Arts</option>
                  <option value="afa">Agri-Fishery Arts</option>
                </select>
              </div>
            )}

            {seniorHighTrack && (
              <div className="mb-6">
                <p className="text-gray-700 text-lg font-semibold mb-2">
                  Choose your preferred program:
                </p>
                <select
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C61A01] focus:border-transparent"
                  value={preferredProgram}
                  onChange={(e) => setPreferredProgram(e.target.value)}
                >
                  <option value="" disabled>
                    Select a program
                  </option>
                  <option value="cs">BS Computer Science</option>
                  <option value="it">BS Information Technology</option>
                </select>
              </div>
            )}
          </>
        )}

        {/* Error Message */}
        {errorMessage && (
          <div className="mb-4 text-red-600 font-semibold">{errorMessage}</div>
        )}

    
        </div>
      </div>
    
  );
};

export default Create;