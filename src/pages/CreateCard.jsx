// pages/ChatPage.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState, useRef, useEffect } from "react";
import GiftCardCreator from "../components/GiftCardCreator";
import { format } from "date-fns";

function CreateCard() {
  const [messages] = useState([]);

  const chatContainerRef = useRef(null);
  // eslint-disable-next-line no-unused-vars
  const formatTimestamp = (isoString) => {
    return format(new Date(isoString), "HH:mm");
  };

  useEffect(() => {
    // Auto-scroll to bottom when a new message is added
    chatContainerRef.current?.scrollTo({
      top: chatContainerRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <div className="h-full flex flex-col bg-gray-900/20 text-white">
      {/* Chat Messages Container */}
      <div
        ref={chatContainerRef}
        className="flex-1  overflow-y-auto p-4 space-y-4"
      >
        <GiftCardCreator />
      </div>
    </div>
  );
}

export default CreateCard;
