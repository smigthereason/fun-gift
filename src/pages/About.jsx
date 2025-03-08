// eslint-disable-next-line no-unused-vars
import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import TypedJS from "../components/TypedJS";
import Title from "../components/Title";
import One from "../assets/one-38484_1920.png";
import Two from "../assets/two.png";
import Three from "../assets/three.png";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const categories = ["How It Works."];

  return (
    <div
      id="abt"
      className="flex flex-col items-center justify-center min-h-screen min-w-full"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      {/* Hero Section */}
      <div className="relative sm:w-full  h-[300px] sm:h-[100px] mx-auto">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 font-beau">
            <TypedJS strings={categories} />
          </h1>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Step 1 */}
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {/* Image Section - Top on mobile and desktop */}
            <div className="mb-6">
              <img
                className="w-64 h-auto object-cover mx-auto"
                src={One}
                alt="Step One"
              />
            </div>

            {/* Text Section - Below image */}
            <div className="text-center px-4">
              <Title highlightText="Step" mainText="One" />
              <h3 className="text-2xl font-semibold mt-2">
                Choose a Gift Amount
              </h3>
              <p className="text-gray-300 text-lg mt-3">
                Select a value between KES 1,000 and KES 100,000
              </p>
            </div>

            {/* Divider - Visible on both mobile and desktop */}
            <div className="mt-10 w-full flex justify-center md:justify-end"></div>
          </div>

          {/* Step 2 */}
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {/* Image Section - Top on mobile and desktop */}
            <div className="mb-6">
              <img
                className="w-64 h-auto object-cover mx-auto"
                src={Two}
                alt="Step Two"
              />
            </div>

            {/* Text Section - Below image */}
            <div className="text-center px-4">
              <Title highlightText="Step" mainText="Two" />
              <h3 className="text-2xl font-semibold mt-2">
                Personalize Your Gift
              </h3>
              <p className="text-gray-300 text-lg mt-3">
                Add a special message and choose whether you are gifting
                yourself or someone else.
              </p>
            </div>

            {/* Divider - Visible on both mobile and desktop */}
            <div className="mt-10 w-full flex justify-center md:justify-end"></div>
          </div>

          {/* Step 3 */}
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {/* Image Section - Top on mobile and desktop */}
            <div className="mb-6">
              <img
                className="w-64 h-auto object-cover mx-auto"
                src={Three}
                alt="Step Three"
              />
            </div>

            {/* Text Section - Below image */}
            <div className="text-center px-4">
              <Title highlightText="Step" mainText="Three" />
              <h3 className="text-2xl font-semibold mt-2">Send & Redeem</h3>
              <p className="text-gray-300 text-lg mt-3">
                The recipient will receive a digital gift card that can be
                redeemed at our partnered supermarket outlets.
              </p>
            </div>
          </div>

          {/* Desktop connecting lines */}
          <div className="hidden md:block absolute top-1/2 left-1/3 w-1 h-16 border-r-2 border-white/30"></div>
          <div className="hidden md:block absolute top-1/2 left-2/3 w-1 h-16 border-r-2 border-white/30"></div>
        </div>
      </div>

      {/* Additional Section  */}
      <div
        className="relative -top-28 sm:top-0 w-full h-[600px] mx-auto flex justify-center items-center"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div className="w-full sm:w-4/6 flex flex-col justify-center items-center p-10 text-center">
          <Title highlightText="Why Choose" mainText="FunGift " />

          <ul className="relative sm:list-disc sm:list-inside list-none  mt-4 text-gray-300 text-xl  sm:text-left left-0">
            <li>
              <em>
                Flexible Gifting – Choose any amount within the available range.{" "}
              </em>
            </li>
            <li>
              <em>
                Hassle-Free – No need to pick out individual items; let the
                recipient{" "}
              </em>
            </li>
            <li>
              <em>
                Instant Delivery – Your gift is sent digitally for quick and
                easy redemption.
              </em>
            </li>
            <li>
              <em>
                {" "}
                Supermarket Redemption – Can be used at multiple outlets for
                convenience.
              </em>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
