// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AmountSlider from "./AmountSlider";
import {
  AcademicCapIcon,
  ChartBarIcon,
  GiftIcon,
  TrophyIcon,
} from "@heroicons/react/24/solid";

const GiftCardCreator = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState(1000);
  const [message, setMessage] = useState("");
  const [recipientEmail, setRecipientEmail] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [selectedTheme, setSelectedTheme] = useState("Top Achiever");

  const themes = [
    {
      id: "Top Achiever",
      name: "Top Achiever",
      color: "bg-purple-500",
      icon: <AcademicCapIcon className="w-12 h-12 text-white" />,
    },
    {
      id: "Most Improved",
      name: "Most Improved",
      color: "bg-red-500",
      icon: <ChartBarIcon className="w-12 h-12 text-white" />,
    },
    {
      id: "Sports Award",
      name: "Sports Award",
      color: "bg-blue-500",
      icon: <TrophyIcon className="w-12 h-12 text-white" />,
    },
    {
      id: "general",
      name: "General",
      color: "bg-green-500",
      icon: <GiftIcon className="w-12 h-12 text-white" />,
    },
  ];

  // Get selected theme object
  const selectedThemeObj = themes.find((theme) => theme.id === selectedTheme);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      amount,
      message,
      recipientEmail,
      senderEmail,
      selectedTheme,
    });
    alert("Gift Card Created Successfully!");

    // Redirect to schedule page
    if (window.confirm("Do you want to schedule the gift?")) {
      navigate("/schedule");
    }
  };

  return (
    <div id="top" className="max-w-2xl mx-auto p-6  rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-center">Create Gift Card</h2>

      {/* Theme Icon Display */}
      <div className="mb-8 text-center">
        <div
          className={`inline-block p-4 rounded-full bg-opacity-20 ${selectedThemeObj.color.replace(
            "text",
            "bg"
          )}`}
        >
          <div className={selectedThemeObj.color}>{selectedThemeObj.icon}</div>
        </div>
      </div>

      {/* Theme Selection */}
      <div className="mb-8">
        <label className="block text-gray-300 mb-4">Select Theme</label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {themes.map((theme) => (
            <button
              key={theme.id}
              onClick={() => setSelectedTheme(theme.id)}
              className={`${theme.color} ${
                selectedTheme === theme.id ? "ring-4 ring-black" : ""
              } text-white text-xs sm:text-lg p-4 rounded-lg transition-all duration-200`}
            >
              {theme.name}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <AmountSlider amount={amount} setAmount={setAmount} />
      </div>

      {/* Message Input */}
      <div className="mb-8">
        <label className="block text-gray-300 mb-4">Personalized Message</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          rows="4"
          placeholder="Write your personal message here..."
        />
      </div>

      {/* Email Inputs */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-gray-300 mb-4">Recipient Email</label>
          <input
            type="email"
            value={recipientEmail}
            onChange={(e) => setRecipientEmail(e.target.value)}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="recipient@example.com"
          />
        </div>
        <div>
          <label className="block text-gray-300 mb-4">Your Email</label>
          <input
            type="email"
            value={senderEmail}
            onChange={(e) => setSenderEmail(e.target.value)}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="your@email.com"
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors duration-200"
      >
        Create Gift Card
      </button>
    </div>
  );
};

export default GiftCardCreator;
