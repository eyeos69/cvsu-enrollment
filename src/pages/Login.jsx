import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Logo from '../assets/university-logo.png';
import StudentImage from '../assets/student.jpg';
import TopNav from '../components/Topnav';

const Login = () => {
  const [ID, setId] = useState(''); // State for ID
  const [password, setPassword] = useState(''); // State for Password
  const [showPassword, setShowPassword] = useState(false); // State for password visibility toggle
  const [errorMessage, setErrorMessage] = useState(''); // State for error messages
  const [isLoading, setIsLoading] = useState(false); // State for loading indicator
  const navigate = useNavigate(); // Navigation hook

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Frontend validation
    if (!ID.trim() || !password.trim()) {
      setErrorMessage('Please fill in both ID and password fields');
      return;
    }

    try {
      setIsLoading(true); // Start loading
      setErrorMessage(''); // Clear previous error message

      // Send login request
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/login`, { ID, password });

      // Navigate only if login is successful
      if (response.status === 200) {
        alert('Login successful!');
        navigate('/studentdb'); // Navigate to the student dashboard
      }
    } catch (error) {
      // Handle errors based on status
      if (error.response) {
        if (error.response.status === 400) {
          setErrorMessage('Please fill in both ID and password fields');
        } else if (error.response.status === 401) {
          setErrorMessage('Invalid ID or password');
        } else {
          setErrorMessage('An error occurred. Please try again.');
        }
      } else {
        setErrorMessage('Cannot connect to the server. Please try again later.');
      }
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <div>
      {/* Top Navigation Bar */}
      <TopNav />

      {/* Main Content */}
      <div
        className="flex items-center justify-center min-h-screen bg-cover bg-center pt-[70px]"
        style={{ backgroundImage: `url(${StudentImage})` }}
      >
        {/* Login Card */}
        <div className="w-full max-w-md p-8 bg-white bg-opacity-95 shadow-lg rounded-lg">
          {/* Header */}
          <div className="flex flex-col items-center">
            <img src={Logo} alt="University Logo" className="w-20 h-20 mb-4" />
            <h2 className="text-3xl font-extrabold text-[#C61A01]">Login</h2>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* ID Input */}
            <div>
              <label htmlFor="id" className="block text-sm font-medium text-gray-700">
                ID
              </label>
              <input
                type="text"
                id="id"
                name="id"
                aria-label="ID"
                className="w-full px-4 py-2 mt-1 bg-gray-100 border rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#C61A01]"
                placeholder="Enter your ID"
                value={ID}
                onChange={(e) => setId(e.target.value)}
              />
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  aria-label="Password"
                  className="w-full px-4 py-2 mt-1 bg-gray-100 border rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#C61A01]"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 px-4 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {errorMessage && <p className="mt-4 text-sm text-red-600">{errorMessage}</p>}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 mt-6 text-white bg-[#C61A01] rounded-lg hover:bg-[#C61A01]/90 focus:outline-none focus:ring-2 focus:ring-[#C61A01]"
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Log In'}
            </button>
          </form>

          {/* Forgot Password */}
          <div className="text-center">
            <Link to="/forgot-password" className="text-sm text-[#C61A01] hover:underline">
              Forgot password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
