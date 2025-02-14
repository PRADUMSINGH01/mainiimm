// components/CourseCard.js
"use client";
import { useState } from "react";
import image from "@/app/math.jpg";
import DILR from "@/app/DILR.svg";
import Image from "next/image";
const CourseCard = () => {
  const [showTopics, setShowTopics] = useState(false);

  const data = [
    {
      title: "Introduction to Next.js",
      description:
        "Learn the fundamentals of Next.js and build server-rendered React applications.",
      image: image,
      topics: [
        "Setting up a Next.js project",
        "Routing and Navigation",
        "Data Fetching and SSR",
        "API Routes",
        "Deployment Strategies",
      ],
    },
    {
      title: "Introduction to Next.js",
      description:
        "Learn the fundamentals of Next.js and build server-rendered React applications.",
      image: DILR,
      topics: [
        "Setting up a Next.js project",
        "Routing and Navigation",
        "Data Fetching and SSR",
        "API Routes",
        "Deployment Strategies",
      ],
    },
    {
      title: "Introduction to Next.js",
      description:
        "Learn the fundamentals of Next.js and build server-rendered React applications.",
      image: image,
      topics: [
        "Setting up a Next.js project",
        "Routing and Navigation",
        "Data Fetching and SSR",
        "API Routes",
        "Deployment Strategies",
      ],
    },
  ];
  return (
    <>
      <div className="relative h-full p-5 flex  flex-col items-center justify-around overflow-hidden">
        <h1 className="text-white z-10 text-4xl font-bold ">
          Self Placed Course{" "}
        </h1>
        <p className="z-10 mb-10 text-white/85">
          Experience Best self placed Course and practice questions and mock as
          well .
        </p>
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-red-500 to-pink-200 bg-[length:400%_400%] animate-gradient flex flex-row w-full" />

        {/* The Card is placed on top with a higher z-index */}
        <div className="relative z-10 flex justify-between items-center w-full p-1 mb-10">
          {data ? (
            data.map((items) => (
              <>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm transform transition-transform duration-300 hover:scale-105">
                  {/* Header Image or Inline SVG if no image URL is provided */}
                  {items.image ? (
                    <Image
                      src={items.image}
                      alt="hee"
                      width={400}
                      height={40}
                    />
                  ) : (
                    <div className="w-full h-48 flex items-center justify-center bg-gray-200">
                      {/* Inline SVG representing a math/calculator icon */}
                      <svg
                        className="w-24 h-24"
                        viewBox="0 0 64 64"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* Outer rectangle for the calculator */}
                        <rect
                          width="64"
                          height="64"
                          rx="8"
                          ry="8"
                          fill="#4F46E5"
                        />
                        {/* Screen */}
                        <rect
                          x="10"
                          y="10"
                          width="44"
                          height="12"
                          fill="white"
                        />
                        {/* Button rows */}
                        <rect
                          x="10"
                          y="28"
                          width="12"
                          height="12"
                          fill="white"
                        />
                        <rect
                          x="26"
                          y="28"
                          width="12"
                          height="12"
                          fill="white"
                        />
                        <rect
                          x="42"
                          y="28"
                          width="12"
                          height="12"
                          fill="white"
                        />
                        <rect
                          x="10"
                          y="44"
                          width="12"
                          height="12"
                          fill="white"
                        />
                        <rect
                          x="26"
                          y="44"
                          width="12"
                          height="12"
                          fill="white"
                        />
                        <rect
                          x="42"
                          y="44"
                          width="12"
                          height="12"
                          fill="white"
                        />
                      </svg>
                    </div>
                  )}

                  {/* Card Content */}
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-800">
                      {items.title}
                    </h2>
                    <p className="mt-2 text-gray-600">{items.description}</p>

                    {/* Toggle Topics Button */}
                    <div className="mt-4">
                      <button
                        onClick={() => setShowTopics((prev) => !prev)}
                        className="flex items-center text-indigo-600 hover:text-indigo-800 font-semibold focus:outline-none"
                      >
                        <span className="mr-2">
                          {showTopics ? "Hide Topics" : "Show Topics"}
                        </span>
                        <svg
                          className={`w-5 h-5 transition-transform duration-200 ${
                            showTopics ? "transform rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                    </div>

                    {/* Topics List */}
                    {showTopics && (
                      <>
                        <hr className="my-4 border-gray-300" />
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">
                          Course Topics
                        </h3>
                        <ul className="space-y-3">
                          {items.topics.map((topic, index) => (
                            <li key={index} className="flex items-center">
                              {/* Checkmark Icon */}
                              <svg
                                className="w-4 h-4 text-green-500 mr-2 flex-shrink-0"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              <span className="text-gray-600">{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </div>
              </>
            ))
          ) : (
            <>Loading ...</>
          )}
        </div>
      </div>
    </>
  );
};

export default CourseCard;
