// eslint-disable-next-line no-unused-vars
import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./About";
import Navbar from "../components/Navbar";
import Logo from "../assets/fungift.png";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div
        className="flex flex-col items-center overflow-hidden p-4 relative top-20 pb-20"
        data-aos="fade-in"
        data-aos-delay="500"
      >
        {/* Welcome text */}
        <div className=" ">
          <h1 className="text-4xl font-bold  bg-gradient-to-r from-pink-400 via-purple-300 to-purple-400 bg-clip-text text-transparent mb-8">
            Welcome To
          </h1>
          <img
            className="w-80 h-auto object-cover mx-auto block"
            src={Logo}
            alt="Logo"
          />

          <p className="text-gray-300 max-w-6xl font-semibold text-center mb-12 text-2xl p-4">
            FunGift makes gifting easy and fun! Whether you are celebrating a
            birthday, an anniversary, or just want to make a day special, you
            can create a custom gift hamper in just a few clicks. Choose from a
            wide range of products, add a personal message, and we will take
            care of the rest. Let us get started!
          </p>
        </div>

        <About />

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 w-full max-w-6xl p-6">
          {/* Chat Card */}
          <div className="bg-transparent filter backdrop-blur-md rounded-lg shadow-lg border border-white  transition-transform hover:scale-95">
            <div className="p-6">
              <h2 className="text-xl font-semibold bg-gradient-to-r from-pink-400 via-purple-300 to-purple-400 bg-clip-text text-transparent mb-3">
                Create Gift Card
              </h2>
              <p className="text-white mb-8 h-12">
                Choose from a wide range of products, add a personal message,
                and we will take care of the rest.
              </p>
              <Link
                to="/create"
                className="bg-purple-800 hover:bg-white  text-white hover:text-purple-700 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl mb-16 transition-transform hover:scale-95"
              >
                Create
              </Link>
            </div>
          </div>

          {/* Schedule Card */}
          <div className="bg-transparent filter backdrop-blur-md rounded-lg shadow-lg border border-white  transition-transform hover:scale-95">
            <div className="p-6">
              <h2 className="text-xl font-semibold bg-gradient-to-r from-pink-400 via-purple-300 to-purple-400 bg-clip-text text-transparent mb-3">
                Gift A Friend
              </h2>
              <p className="text-white mb-8 h-12">
                Schedule your gifts to be delivered to a friend or loved one on a
                specific date.
              </p>
              <Link
                to="/schedule"
                className="bg-purple-800 hover:bg-white  text-white hover:text-purple-700 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl mb-16 transition-transform hover:scale-95"
              >
                Schedule
              </Link>
            </div>
          </div>
        </div>

        {/* Get Started Button */}
        <Link
          to="/create"
          className="bg-purple-800 hover:bg-white  text-white hover:text-purple-700 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl mb-16 transition-transform hover:scale-95"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
