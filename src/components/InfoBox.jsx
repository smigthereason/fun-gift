// eslint-disable-next-line no-unused-vars
import React from "react";

const InfoBox = () => {
  return (
    <div className=" text-white p-6 grid grid-cols-1 md:grid-cols-5 gap-4 text-center w-full">
      <div className="flex flex-col items-center bg-transparent filter backdrop-blur-md rounded-lg shadow-lg border border-white  transition-transform hover:scale-95 h-40">
        <span className="text-2xl">🎉</span>
        <p className="font-bold text-lg">Birthdays</p>
      </div>
      <div className="flex flex-col items-center bg-transparent filter backdrop-blur-md rounded-lg shadow-lg border border-white  transition-transform hover:scale-95 h-40">
        <span className="text-2xl">❤️</span>
        <p className="font-bold text-lg">Anniversaries</p>
      </div>
      <div className="flex flex-col items-center bg-transparent filter backdrop-blur-md rounded-lg shadow-lg border border-white  transition-transform hover:scale-95 h-40">
        <span className="text-2xl">🎁</span>
        <p className="font-bold text-lg">Holidays</p>
      </div>
      <div className="flex flex-col items-center bg-transparent filter backdrop-blur-md rounded-lg shadow-lg border border-white  transition-transform hover:scale-95 h-40">
        <span className="text-2xl">🎓</span>
        <p className="font-bold text-lg">Graduations</p>
      </div>
      <div className="flex flex-col items-center bg-transparent filter backdrop-blur-md rounded-lg shadow-lg border border-white  transition-transform hover:scale-95 h-40">
        <span className="text-2xl">🎊</span>
        <p className="font-bold text-lg">Special Moments</p>
      </div>
    </div>
  );
};

export default InfoBox;
