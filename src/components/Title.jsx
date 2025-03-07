// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
const Title = ({ mainText, highlightText }) => {
  return (
    <div>
      <h2 className="text-4xl font-light mb-4">
        {highlightText && <span className="text-gray-300 font-bold">{highlightText} </span>}
        {mainText}
      </h2>
      <div className="flex justify-center mb-6">
        <div className="line border-b-2 border-white/50 w-16"></div>
      </div>
    </div>
  );
};

export default Title;