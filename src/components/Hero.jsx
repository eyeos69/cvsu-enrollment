import React from 'react';
import { Link } from 'react-router-dom';
import Laya from '../assets/laya.png';
import Logo from '../assets/university-logo.png'; // Logo image path

const Hero = () => {
  return (
    <div id="main">
      <div className="relative w-full h-screen">
        <img
          className="w-full h-full object-cover object-center"
          src={Laya}
          alt="Laya"
        />

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
            </div>
          </div>
        </div>
      </div>
  );
};

export default Hero;