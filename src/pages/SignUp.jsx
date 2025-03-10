// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [, setIsUsernameFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  

  return (
    <div className="relative flex justify-center items-center min-h-screen">
      <div className="relative -top-4 w-80 h-80 p-6 rounded-lg shadow-lg flex flex-col items-center bg-white">
        {/* Panda Face */}
        <div className="relative -top-20 w-24 h-24 bg-white border-4 border-black rounded-full flex justify-center items-center mb-6">
          <div className="absolute -top-4 w-10 h-10 bg-black rounded-t-full -left-4 transform rotate-[-30deg] z-[-1]"></div>
          <div className="absolute -top-4 w-10 h-10 bg-black rounded-t-full -right-4 transform rotate-[30deg] z-[-1]"></div>
          <div className="absolute w-3 h-3 bg-pink-400 rounded-4xl left-3 top-10"></div>
          <div className="absolute w-3 h-3 bg-pink-400 rounded-4xl right-3 top-10"></div>
          <div className="absolute w-6 h-6 bg-black rounded-full left-4 top-6 transform rotate-[-20deg] transition-transform ${isUsernameFocused ? 'top-4 left-7' : ''}"></div>
          <div className="absolute w-6 h-6 bg-black rounded-full right-4 top-6 transform rotate-[20deg] transition-transform ${isUsernameFocused ? 'top-4 right-7' : ''}"></div>
          <div className="absolute w-3 h-3 bg-white rounded-full left-7 top-7"></div>
          <div className="absolute w-3 h-3 bg-white rounded-full right-7 top-7"></div>
          {/* Nose */}
          <div className="absolute w-4 h-4 top-14 bg-transparent">
            <div className="absolute w-full h-full bg-black rounded-t-full"></div>
            <div className="absolute top-1 -left-1 w-3 h-5 bg-white rounded-full"></div>
            <div className="absolute top-1 -right-1 w-3 h-5 border-b-black bg-white rounded-full"></div>
          </div>
          {/* Mouth */}
          <div className="absolute w-8 h-4 top-16 bg-transparent transform rotate-[180deg]">
            <div className="absolute w-full h-3 bg-black rounded-t-full z-[-1]"></div>
            <div className="absolute top-1 -left-1 w-5 h-4 bg-white rounded-full z-[-1]"></div>
            <div className="absolute top-1 -right-1 w-5 h-4 bg-white rounded-full z-[-1]"></div>
          </div>
        </div>

        {/* Hands */}
        <div
          className={`absolute w-10 h-20 bg-black rounded-t-full rounded-b-full left-10 -top-10 z-[-1] transition-all duration-600 ease-in-out ${
            isPasswordFocused ? "h-14 rotate-[30deg] -top-10 left-28 z-[0]" : ""
          }`}
        ></div>
        <div
          className={`absolute w-10 h-20 bg-black rounded-t-full rounded-b-full right-10 -top-10 z-[-1] transition-all duration-600 ease-in-out ${
            isPasswordFocused
              ? "h-14 -rotate-[30deg] -top-10 right-28 z-[0]"
              : ""
          }`}
        ></div>

        {/* Signup Form */}
        <form className="absolute top-10 flex flex-col w-full p-8 rounded-lg shadow-lg">
          <label className="text-gray-700 font-semibold">Username:</label>
          <input
            type="text"
            placeholder="Enter username..."
            className="border-b-2 border-gray-700 p-2 focus:outline-none focus:border-purple-800 mb-4"
            onFocus={() => setIsUsernameFocused(true)}
            onBlur={() => setIsUsernameFocused(false)}
          />
          <label className="text-gray-700 font-semibold">Password:</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password..."
              className="border-b-2 border-gray-700 p-2 focus:outline-none focus:border-purple-800 w-full"
              onFocus={() => setIsPasswordFocused(true)}
              onBlur={() => setIsPasswordFocused(false)}
            />
            <button
              type="button"
              className="absolute right-2 top-3 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <button className="bg-purple-800 text-white hover:bg-purple-400 py-2 rounded-full uppercase font-semibold tracking-wide mt-4">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;