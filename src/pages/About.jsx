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

      {/* Step 1 */}
      <div
        className="relative w-full h-[500px] mx-auto mt-20 flex"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        {/* Left Image Section */}
        <div className="hidden sm:inline relative w-2/6 h-full rounded-lg overflow-hidden">
          <img
            className=" relative left-20 w-80 h-auto object-cover "
            src={One}
            alt="Step One"
          />
        </div>

        {/* Right Text Section */}
        <div className="w-full sm:w-3/6 flex flex-col justify-center p-2 relative sm:left-32 left-2 -top-20 sm:-top-20 sm:text-center">
          <Title highlightText="Step" mainText="One" />
          <h3 className="text-2xl">Choose a Gift Amount</h3>
          <p className="text-gray-300 text-xl mt-4 max-w-full">
            Select a value between KES 1,000 and KES 100,000
          </p>
        </div>
      </div>

      <div className="flex justify-center -mt-12 sm:mt-12">
        <div className="line border-b-2 border-white/50 w-32 sm:w-60 -rotate-45 "></div>
      </div>

      {/*  Step 2 */}
      <div
        className="relative w-full max-w-6xl h-[600px] mx-auto mt-20 flex"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {/* left Text Section */}

        <div className="w-full sm:w-3/6 flex flex-col justify-center p-2 relative -top-20 sm:-top-20 sm:text-center">
          <Title highlightText="Step" mainText="Two?" />
          <h3 className="text-2xl">Personalize Your Gift</h3>
          <p className="text-gray-300 text-xl mt-4 max-w-full">
            Add a special message and choose whether you’re gifting yourself or
            someone else.
          </p>
        </div>
        {/* Right Image Section */}
        <div className="hidden sm:inline relative left-40 top-20 w-2/6 h-full rounded-lg overflow-hidden ">
          <img
            className=" relative left-10 w-80 h-auto object-cover "
            src={Two}
            alt="Step Two"
          />
        </div>
      </div>

      <div className="flex justify-center -mt-12 sm:mt-12 relative -top-56 sm:top-0">
        <div className="line border-b-2 border-white/50 w-32 sm:w-60 rotate-45 "></div>
      </div>

      {/* Step 3 */}
      <div
        className="relative w-full h-[600px] mx-auto mt-20 flex"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        {/* Left Image Section */}
        <div className="hidden sm:inline relative w-2/6 h-full rounded-lg overflow-hidden">
          <img
            className=" relative left-20 top-20 w-80 h-auto object-cover "
            src={Three}
            alt="Step Three"
          />
        </div>

        {/* Right Text Section */}
        <div className="w-full sm:w-3/6 flex flex-col justify-center p-2 relative sm:left-32 left-2 -top-20 sm:-top-20 sm:text-center">
          <Title highlightText="Step" mainText="Three" />
          <h3 className="text-2xl">Send & Redeem</h3>
          <p className="text-gray-300 text-xl mt-4 max-w-full">
            The recipient will receive a digital gift card that can be redeemed
            at our partnered supermarket outlets.
          </p>
        </div>
      </div>

      <div className="flex justify-center -mt-12 sm:mt-12">
        <div className="line border-b-2 border-white/50 w-32 sm:w-60 -rotate-45 "></div>
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
