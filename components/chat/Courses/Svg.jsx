"use client";
import React from "react";

const CourseSVG = () => {
  return (
    <svg
      viewBox="0 0 100 100"
      className="w-12 h-12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="courseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4f46e5" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
      </defs>
      <circle
        cx="50"
        cy="50"
        r="45"
        stroke="url(#courseGradient)"
        strokeWidth="5"
        fill="none"
      />
      <path
        d="M30 50 L45 65 L70 40"
        stroke="url(#courseGradient)"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CourseSVG;
