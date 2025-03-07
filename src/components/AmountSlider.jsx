// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Slider from "@mui/material/Slider";

const AmountSlider = () => {
  const [amount, setAmount] = useState(1000);

  return (
    <div className="mb-8">
      {/* Label */}
      <label className="block text-gray-300 mb-4 text-lg font-semibold">
        Amount: KES {amount.toLocaleString()}
      </label>

      {/* Styled Slider */}
      <Slider
        value={amount}
        min={1000}
        max={100000}
        step={1000}
        onChange={(e, value) => setAmount(value)}
        sx={{
          color: "#4F46E5", // Custom color (Tailwind's purple-600)
          "& .MuiSlider-thumb": {
            backgroundColor: "#fff", // Thumb color
            border: "3px solid #4F46E5", // Thumb border
            width: 20, // Larger thumb
            height: 20,
            "&:hover": {
              boxShadow: "0px 0px 10px rgba(79, 70, 229, 0.6)", // Glow effect
            },
          },
          "& .MuiSlider-track": {
            backgroundColor: "#4F46E5", // Track color
          },
          "& .MuiSlider-rail": {
            backgroundColor: "#ccc", // Rail color (gray)
          },
        }}
        className="w-full"
      />
    </div>
  );
};

export default AmountSlider;
