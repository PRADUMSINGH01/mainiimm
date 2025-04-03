"use client";
import { useState, useEffect } from "react";
import { FiPlus, FiX, FiTag, FiDroplet, FiCheck, FiMic, FiMoon, FiSun, FiZap, FiClock, FiStar, FiRefreshCw, FiSparkles } from "react-icons/fi";

const NoteTaker = ({ onSave }) => {
  // ... existing states ...
  const [showAIInspiration, setShowAIInspiration] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [timeCapsuleDays, setTimeCapsuleDays] = useState(null);

  // New creative features
  const aiPrompts = [
    "Write about a memory that shaped you...",
    "Describe your perfect day...",
    "What would you tell your future self?",
    "List three things you're grateful for...",
  ];

  // Calculate days until time capsule unlock
  useEffect(() => {
    if (note.timeCapsuleDate) {
      const diff = new Date(note.timeCapsuleDate) - new Date();
      setTimeCapsuleDays(Math.ceil(diff / (1000 * 60 * 60 * 24)));
    }
  }, [note.timeCapsuleDate]);

  // New reset functionality
  const handleFullReset = () => {
    resetNote();
    setIsAnimating(false);
    setShowAIInspiration(false);
    setTimeCapsuleDays(null);
  };

  // New AI inspiration handler
  const injectAIInspiration = () => {
    setNote({
      ...note,
      content: aiPrompts[Math.floor(Math.random() * aiPrompts.length)]
    });
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  // Add to existing creative controls
  const cosmicThemes = [
    // ... existing themes ...
    { name: "Galaxy", bg: "radial-gradient(#000428, #004e92)", text: "#ffffff" },
    { name: "Aurora", bg: "linear-gradient(to right, #00b4db, #0083b0)", text: "#e6faff" },
  ];

  // Add to JSX return:
  // ... inside the header section after save button ...
  <button
    type="button"
    onClick={handleFullReset}
    className="px-4 py-2 bg-gradient-to-r from-gray-500 to-gray-700
      text-white rounded-lg hover:scale-105 transition-transform flex gap-2"
  >
    <FiRefreshCw size={16} /> Reset
  </button>

  // Add AI Inspiration Section
  {showAIInspiration && (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
      <div className="grid grid-cols-2 gap-3">
        {aiPrompts.map((prompt, index) => (
          <div
            key={index}
            onClick={() => {
              setNote({ ...note, content: prompt });
              setShowAIInspiration(false);
            }}
            className="p-3 border rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <FiSparkles className="inline mr-2" />
            {prompt}
          </div>
        ))}
      </div>
    </div>
  )}

  // Add Animation Control
  <div className="flex items-center gap-2 text-sm">
    <label className="flex items-center gap-1">
      <input
        type="checkbox"
        checked={isAnimating}
        onChange={(e) => setIsAnimating(e.target.checked)}
        className="w-4 h-4"
      />
      Cosmic Pulse
    </label>
  </div>

  // Enhanced Time Capsule Display
  {note.timeCapsuleDate && (
    <div className="flex items-center gap-2 text-sm bg-black/10 dark:bg-white/10 p-2 rounded">
      <FiClock />
      <span className="font-mono">
        {timeCapsuleDays > 0 
          ? `Unlocks in ${timeCapsuleDays} days`
          : "Time capsule ready!"}
      </span>
      <button
        onClick={() => setNote({ ...note, timeCapsuleDate: null })}
        className="ml-auto text-red-400 hover:text-red-600"
      >
        <FiX />
      </button>
    </div>
  )}

  // Add AI Inspiration Trigger
  <button
    type="button"
    onClick={() => setShowAIInspiration(!showAIInspiration)}
    className="absolute bottom-4 right-4 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:scale-110 transition-transform"
  >
    <FiSparkles className="text-yellow-400" />
  </button>


}