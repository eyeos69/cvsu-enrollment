
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
        </div>

        {/* Progress Indicator */}
          <div>
      <Stepper />
    </div>
      </main>
    </>
  );
};

export default Create;