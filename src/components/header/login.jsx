import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [view, setView] = useState("signin");

  const renderForm = () => {
    switch (view) {
      case "register":
        return (
          <>
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
              Good to see you again
            </h2>
            <div className="bg-white rounded-xl shadow-lg p-8 w-[90%] max-w-md">
              {/* Fullname */}
              
              <div className="mb-5">
                <label className="block text-gray-700 mb-2 font-medium">
                  Full Name
                </label>
                <div className="flex items-center border rounded-lg px-3 py-2">
                  <FaUser className="text-gray-500 mr-2" />
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full outline-none text-gray-700"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="mb-5">
                <label className="block text-gray-700 mb-2 font-medium">
                  Email
                </label>
                <div className="flex items-center border rounded-lg px-3 py-2">
                  <FaUser className="text-gray-500 mr-2" />
                  <input
                    type="email"
                    placeholder="e.g. elon@tesla.com"
                    className="w-full outline-none text-gray-700"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="mb-6">
                <label className="block text-gray-700 mb-2 font-medium">
                  Password
                </label>
                <div className="flex items-center border rounded-lg px-3 py-2">
                  <FaLock className="text-gray-500 mr-2" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    className="w-full outline-none text-gray-700"
                  />
                  <button
                    type="button"
                    className="text-gray-500 text-sm ml-2"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {/* Role */}
              <div className="mb-6">
                <label className="block text-gray-700 mb-2 font-medium">
                  Role
                </label>
                <div className="flex items-center border rounded-lg px-3 py-2">
                  <input
                    type="text"
                    placeholder="user/admin"
                    className="w-full outline-none text-gray-700"
                  />
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold py-2 rounded-full hover:from-green-500 hover:to-green-700 transition-all">
                Register
              </button>

              <div className="flex justify-between mt-4 text-sm">
                <button
                  className="text-blue-700 hover:underline"
                  onClick={() => setView("signin")}
                >
                  Already have an account?
                </button>
              </div>
            </div>
          </>
        );

      case "forgot":
        return (
          <>
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
              Good to see you again
            </h2>
            <div className="bg-white rounded-xl shadow-lg p-8 w-[90%] max-w-md">
              {/* Email */}
              <div className="mb-5">
                <label className="block text-gray-700 mb-2 font-medium">
                  Enter your email
                </label>
                <div className="flex items-center border rounded-lg px-3 py-2">
                  <FaUser className="text-gray-500 mr-2" />
                  <input
                    type="email"
                    placeholder="e.g. elon@tesla.com"
                    className="w-full outline-none text-gray-700"
                  />
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-blue-400 to-blue-600 text-white font-semibold py-2 rounded-full hover:from-blue-500 hover:to-blue-700 transition-all">
                Get OTP
              </button>

              <div className="flex justify-between mt-4 text-sm">
                <button
                  className="text-blue-700 hover:underline"
                  onClick={() => setView("signin")}
                >
                  Back to Sign In
                </button>
              </div>
            </div>
          </>
        );

      default:
        return (
          <>
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
              Good to see you again
            </h2>
            <div className="bg-white rounded-xl shadow-lg p-8 w-[90%] max-w-md">
              {/* Email */}
              
              <div className="mb-5">
                <label className="block text-gray-700 mb-2 font-medium">
                  Your email
                </label>
                <div className="flex items-center border rounded-lg px-3 py-2">
                  <FaUser className="text-gray-500 mr-2" />
                  <input
                    type="email"
                    placeholder="e.g. elon@tesla.com"
                    className="w-full outline-none text-gray-700"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="mb-6">
                <label className="block text-gray-700 mb-2 font-medium">
                  Your password
                </label>
                <div className="flex items-center border rounded-lg px-3 py-2">
                  <FaLock className="text-gray-500 mr-2" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="e.g. ilovemangools123"
                    className="w-full outline-none text-gray-700"
                  />
                  <button
                    type="button"
                    className="text-gray-500 text-sm ml-2"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {/* Role */}
              <div className="mb-6">
                <label className="block text-gray-700 mb-2 font-medium">
                  Your role
                </label>
                <div className="flex items-center border rounded-lg px-3 py-2">
                  <input
                    type="text"
                    placeholder="user/admin"
                    className="w-full outline-none text-gray-700"
                  />
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold py-2 rounded-full hover:from-green-500 hover:to-green-700 transition-all">
                Sign In
              </button>

              <div className="flex justify-between mt-4 text-sm">
                <button
                  className="text-blue-700 hover:underline"
                  onClick={() => setView("register")}
                >
                  Don't have an account?
                </button>
                <button
                  className="text-blue-700 hover:underline"
                  onClick={() => setView("forgot")}
                >
                  Forgot password?
                </button>
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#fff8e1] to-[#fffde7]">
      {/* Logo */}
      <div className="flex items-center mb-4">
        <div className="w-5 h-5 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full mr-2"></div>
        <h1 className="text-2xl font-bold text-gray-800">Mangools</h1>
      </div>

      {renderForm()}
    </div>
  );
};

export default LoginPage;

