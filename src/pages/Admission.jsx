import React, { useState } from "react";
<<<<<<< HEAD
import AdmissionNav from "../components/AdmissionNav";
import { useAppContext } from "../contexts/AppContext";
import Laya from "../assets/laya.png";
import { Link } from "react-router-dom";

const Create = () => {
  const {
    applicantType,
    setApplicantType,
    seniorHighTrack,
    setSeniorHighTrack,
    strand,
    setStrand,
    preferredProgram,
    setPreferredProgram,
  } = useAppContext();

  const [errorMessage, setErrorMessage] = useState("");

  // Config for strands and programs
  const strandOptions = {
    "Academic": [
      { value: "stem", label: "Science, Technology, Engineering, and Mathematics (STEM)" },
      { value: "abm", label: "Accountancy, Business, and Management (ABM)" },
      { value: "humss", label: "Humanities and Social Sciences (HUMSS)" },
      { value: "gas", label: "General Academic Strand (GAS)" },
    ],
    "Technical-Vocational": [
      { value: "afa", label: "Agri-Fishery Arts (AFA)" },
      { value: "he", label: "Home Economics (HE)" },
      { value: "ia", label: "Industrial Arts (IA)" },
      { value: "ict", label: "Information and Communications Technology (ICT)" },
    ],
    "Arts and Design": [
      { value: "ad", label: "Arts and Design" },
    ],
    "Sports": [
      { value: "sports", label: "Sports" },
    ],
  };

  const programOptions = {
    stem: ["BS Computer Science", "BS Information Technology"],
    abm: ["BS Computer Science", "BS Information Technology"],
    humss: ["BS Computer Science", "BS Information Technology"],
    gas: ["BS Computer Science", "BS Information Technology"],
    afa: ["BS Computer Science", "BS Information Technology"],
    he: ["BS Computer Science", "BS Information Technology"],
    ia: ["BS Computer Science", "BS Information Technology"],
    ict: ["BS Computer Science", "BS Information Technology"],
    ad: ["BS Computer Science", "BS Information Technology"], // Example programs for Arts and Design
    sports: ["BS Computer Science", "BS Information Technology"],
  };

  // Form Submission Handler
  const handleSubmit = () => {
    if (
      ["shs", "grade12"].includes(applicantType) &&
      !["stem", "ict"].includes(strand)
=======
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
>>>>>>> 972bf1191cd592bdb8f287b1dda1099eaa9efa6a
    ) {
      setErrorMessage(
        "You must be a STEM or ICT student to choose the selected program."
      );
      return;
    }

    setErrorMessage("");
    alert("Application successfully created!");
<<<<<<< HEAD
    navigate("/createapplication/details"); // Redirect to details page upon successful submission
=======
    
  };

  const handleLogout = () => {
    alert("You have logged out.");
    // Implement actual logout functionality here (e.g., clear tokens, redirect)
>>>>>>> 972bf1191cd592bdb8f287b1dda1099eaa9efa6a
  };

  return (
    <div
<<<<<<< HEAD
      className="flex items-center justify-center min-h-screen bg-fixed bg-cover bg-center pb-[70px] pt-[70px]"
      style={{
        backgroundImage: `url(${Laya})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <AdmissionNav user={null} />
      <div className="top-0 left-0 w-full h-full bg-[#081708]/80 flex fixed items-center justify-center z-10"></div>
      <div className="w-full max-w-3xl bg-white p-8 shadow-lg rounded-lg z-30">
=======
      className="min-h-screen flex items-center justify-center bg-gray-100"
      
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[#081708]/80 flex items-center justify-center z-10"></div>
      <div className="w-full max-w-3xl bg-white p-8 shadow-lg rounded-lg z-30">
        {/* Header Section */}
>>>>>>> 972bf1191cd592bdb8f287b1dda1099eaa9efa6a
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

<<<<<<< HEAD
        {/* Applicant Type Selection */}
=======
        {/* Question Section */}
>>>>>>> 972bf1191cd592bdb8f287b1dda1099eaa9efa6a
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
<<<<<<< HEAD
            <option value="foreign">Foreign Undergraduate Student Applicant</option>
=======
            <option value="foreign">
              Foreign Undergraduate Student Applicant
            </option>
>>>>>>> 972bf1191cd592bdb8f287b1dda1099eaa9efa6a
            <option value="shs">Senior High School Graduate</option>
            <option value="grade12">Currently Enrolled Grade 12 Student</option>
            <option value="bachelors">Bachelor's Degree Graduate</option>
            <option value="transferee">Transferee</option>
          </select>
        </div>

<<<<<<< HEAD
        {/* Preferred Program */}
=======
        {/* Additional Questions */}
>>>>>>> 972bf1191cd592bdb8f287b1dda1099eaa9efa6a
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
<<<<<<< HEAD
              {programOptions.stem.map((program, index) => (
                <option key={index} value={program.toLowerCase()}>
                  {program}
                </option>
              ))}
=======
              <option value="cs">BS Computer Science</option>
              <option value="it">BS Information Technology</option>
>>>>>>> 972bf1191cd592bdb8f287b1dda1099eaa9efa6a
            </select>
          </div>
        )}

<<<<<<< HEAD
        {/* SHS/Grade 12 Questions */}
=======
>>>>>>> 972bf1191cd592bdb8f287b1dda1099eaa9efa6a
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
<<<<<<< HEAD
                  setPreferredProgram("");
=======
>>>>>>> 972bf1191cd592bdb8f287b1dda1099eaa9efa6a
                }}
              >
                <option value="" disabled>
                  Select your track
                </option>
<<<<<<< HEAD
                {Object.keys(strandOptions).map((track) => (
                  <option key={track} value={track}>
                    {track.replace("-", " ")}
                  </option>
                ))}
              </select>
            </div>

            {seniorHighTrack && (
=======
                <option value="academic">Academic Track</option>
                <option value="tech-voc">Technical-Vocational Track</option>
                <option value="sports">Sports</option>
                <option value="arts-des">Arts and Design</option>
              </select>
            </div>

            {seniorHighTrack === "academic" && (
>>>>>>> 972bf1191cd592bdb8f287b1dda1099eaa9efa6a
              <div className="mb-6">
                <p className="text-gray-700 text-lg font-semibold mb-2">
                  What is your strand?
                </p>
                <select
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C61A01] focus:border-transparent"
                  value={strand}
<<<<<<< HEAD
                  onChange={(e) => {
                    setStrand(e.target.value);
                    setPreferredProgram("");
                  }}
=======
                  onChange={(e) => setStrand(e.target.value)}
>>>>>>> 972bf1191cd592bdb8f287b1dda1099eaa9efa6a
                >
                  <option value="" disabled>
                    Select a strand
                  </option>
<<<<<<< HEAD
                  {strandOptions[seniorHighTrack].map(({ value, label }) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
=======
                  <option value="stem">STEM</option>
                  <option value="abm">ABM</option>
                  <option value="humss">HUMSS</option>
                  <option value="gas">GAS</option>
>>>>>>> 972bf1191cd592bdb8f287b1dda1099eaa9efa6a
                </select>
              </div>
            )}

<<<<<<< HEAD
            {strand && (
              <div className="mb-6">
                <p className="text-gray-700 text-lg font-semibold mb-2">
                  What is your preferred program?
=======
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
>>>>>>> 972bf1191cd592bdb8f287b1dda1099eaa9efa6a
                </p>
                <select
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C61A01] focus:border-transparent"
                  value={preferredProgram}
                  onChange={(e) => setPreferredProgram(e.target.value)}
                >
                  <option value="" disabled>
                    Select a program
                  </option>
<<<<<<< HEAD
                  {programOptions[strand].map((program, index) => (
                    <option key={index} value={program.toLowerCase()}>
                      {program}
                    </option>
                  ))}
=======
                  <option value="cs">BS Computer Science</option>
                  <option value="it">BS Information Technology</option>
>>>>>>> 972bf1191cd592bdb8f287b1dda1099eaa9efa6a
                </select>
              </div>
            )}
          </>
        )}

        {/* Error Message */}
        {errorMessage && (
<<<<<<< HEAD
          <p className="text-red-500 text-sm mt-4">{errorMessage}</p>
        )}

        {/* Submit Button */}
       
          <div className="mt-6">
            <button
              type="button"
              onClick={handleSubmit}
              className="w-full py-2 bg-[#C61A01] text-white font-bold rounded-lg"
            >
              Continue to Details
            </button>
          </div>
      
      </div>
    </div>
  );
};

export default Create;
=======
          <div className="mb-4 text-red-600 font-semibold">{errorMessage}</div>
        )}

    
        </div>
      </div>
    
  );
};

export default Create;
>>>>>>> 972bf1191cd592bdb8f287b1dda1099eaa9efa6a
