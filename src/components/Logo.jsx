// eslint-disable-next-line no-unused-vars
import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Logo from "../assets/fungift.png"

export default function LogoComponent() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div
      className="flex flex-col items-center overflow-hidden"
      data-aos="fade-in"
      data-aos-delay="500"
    >
      
        {/* Logo at the top */}
        <div className="mb-12 mt-6 logo-container">
          <img
            src={Logo}
            alt="Lexi Logo"
            className="relative top-4 w-20 h-20 mx-auto"
          />
        </div>
      
    </div>
  );
}
