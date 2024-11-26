import React from 'react';
import { Link } from 'react-router-dom';
import Entrance from '../assets/entrance.png';

const Hero = () => {
  return (
    <div id="main">
      <div className="relative w-full h-screen">
        {/* Background Image */}
        <img
          className="w-full h-full object-cover"
          src={Entrance}
          alt="Entrance"
        />

<<<<<<< HEAD
        {/* Overlay Content */}
        <div className="absolute inset-0 bg-[#081708]/80 flex items-center justify-center z-10">
          <div className="text-center text-white space-y-6 px-4 sm:px-8">
            <h1 className="text-3xl sm:text-5xl font-bold text-[#c5ffdf]">
              Your Journey Starts Here
            </h1>
            <p className="text-base sm:text-lg px-2 sm:px-6 text-[#c5ffdf]">
              "A comprehensive curriculum designed to equip you with in-demand
              skills in programming, software development, and more."
            </p>

            {/* Centered Apply Button */}
            <div className="flex justify-center">
              <Link to="/apply">
                <button className="mainButton text-lg sm:text-2xl text-[#C61A01] font-bold bg-white py-3 sm:py-4 px-6 sm:px-8 rounded-full shadow-md hover:bg-[#C61A01] hover:text-white transition duration-300">
                  APPLY NOW
                </button>
              </Link>
=======
        <div className="absolute top-0 left-0 w-full h-full bg-[#081708]/80 flex items-center justify-center z-10">
          <div className="text-center text-white space-y-6">
            <img src={Logo} alt="University Logo" className="w-32 h-32 mx-auto hidden sm:block " />
            <h1 className="text-4xl font-bold text-[#c5ffdf]">CvSU BACOOR WEBSITE</h1>
            <p className="text-lg px-10 text-[#c5ffdf] ">Register for courses, manage your profile, and access academic information tailored for the Department of Computer Studies.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 h-[100px] px-10 md:px-[20%] gap-6 mt-10 my-ce w-full">
              {/* Log In Panel */}
              <Link
                to="/login"
                className="bg-white/90 rounded-lg shadow-lg p-3 pb-6 hover:bg-opacity-60 transition duration-300 cursor-pointer"
              >
                <h2 className=" text-2xl sm:text-3xl font-bold text-[#C61A01] text-center">LOGIN</h2>
                <p className="text-center text-[15px] text-[#000000] hidden sm:block mt-3 text-sm">Already have an account? Access your account and manage your profile.</p>
              </Link>

              {/* Apply Panel */}
              <Link
                to="/apply"
                className="bg-white/90 rounded-lg shadow-lg p-3 pb-6 hover:bg-opacity-60 transition duration-300 cursor-pointer"
              >
                <h2 className=" text-2xl sm:text-3xl text-[#C61A01] font-bold text-center">APPLY</h2>
                <p className="text-center text-[15px] text-[#000000] hidden sm:block mt-3 text-sm">New Enrolee? Transferee? Start your application for new courses or programs.</p>
              </Link>

              </div>
>>>>>>> 972bf1191cd592bdb8f287b1dda1099eaa9efa6a
            </div>
          </div>
        </div>

        {/* White Rectangle at the Bottom */}
        <div className="absolute bottom-0 w-full bg-[#E8E8E8] h-16 sm:h-24 flex items-center justify-center z-20">
          <p className="text-xs sm:text-lg text-[#033D04] font-semibold text-center px-4">
            Begin your journey today with Cavite State University
          </p>
        </div>
      </div>
<<<<<<< HEAD
    </div>
=======
>>>>>>> 972bf1191cd592bdb8f287b1dda1099eaa9efa6a
  );
};

export default Hero;