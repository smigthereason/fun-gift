// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

export default function SchedulePage() {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    reason: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulating a successful scheduling action
    alert(`Gift Scheduled Successfully!\nDate: ${formData.date}\nTime: ${formData.time}\nA confirmation email would be sent.`);
  };

  return (
    <div className="max-w-2xl mx-auto text-gray-300">
      <h2 className="text-2xl font-bold mb-6 text-white">Schedule Gift</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2 text-gray-300">Date</label>
          <input
            type="date"
            required
            className="w-full p-3 border border-white/50 rounded-lg"
            onChange={(e) => setFormData({...formData, date: e.target.value})}
          />
        </div>
        <div>
          <label className="block mb-2 text-gray-300">Time</label>
          <input
            type="time"
            required
            className="w-full p-3 border border-white/50 rounded-lg"
            onChange={(e) => setFormData({...formData, time: e.target.value})}
          />
        </div>
       
        <button
          type="submit"
          className="w-full py-3 bg-purple-700 text-white rounded-lg hover:bg-purple-800 transition-colors duration-200"
        >
          Schedule Gift
        </button>
      </form>
    </div>
  );
}
