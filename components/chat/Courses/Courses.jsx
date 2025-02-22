"use client";
import { useState } from "react";
import image from "@/app/math.jpg";
import DILR from "@/app/DILR.svg";
import Image from "next/image";
import { RazorPayOrderCreateQuant } from "@/module/CoursePayment/QuantPayment";
import { RazorPayOrderCreateLIDI } from "@/module/CoursePayment/LIDIPayment";
import { verificationPayment } from "@/module/VerifyPayment";
const CourseCard = () => {
  // Define payment functions before using them in the course data array.
  const createOrderQuant = async () => {
    try {
      const data = await RazorPayOrderCreateQuant();
      //console.log(data);
      if (data.staus === 200) {
        launchRazorpay(data.order.id);
      } else {
        console.error("Order creation failed:", data.error);
      }
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  const createOrderLIDI = async () => {
    try {
      const data = await RazorPayOrderCreateLIDI();
      // console.log(data);
      if (data.staus === 200) {
        launchRazorpay(data.order.id);
      } else {
        console.error("Order creation failed:", data.error);
      }
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  const launchRazorpay = (orderId) => {
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: 50000,
      currency: "INR",
      name: "IIM TARGET",
      description: "Payment",
      image: "/your-logo.png",
      order_id: orderId,
      handler: async function (response) {
        const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
          response;
        try {
          const verificationResponse = await verificationPayment(
            razorpay_payment_id,
            razorpay_order_id,
            razorpay_signature
          );
          console.log(verificationResponse);
          if (verificationResponse.status === 200) {
            alert("Payment Verified!");
          } else {
            alert("Payment Verification Failed!");
          }
        } catch (error) {
          console.error("Payment verification failed:", error);
        }
      },
      prefill: { name: "", email: "", contact: "" },
      theme: { color: "#3399cc" },
    };

    const rzp = new Razorpay(options);
    rzp.open();
  };

  // Now that functions are defined, declare your course data.
  const courses = [
    {
      title: "Quantitative Mastery for CAT: Concepts, Practice & Live Sessions",
      description:
        "CAT Quant Excellence: Fundamentals to Advanced Problem Solving",
      image: image,
      price: 1999.0,
      Action: createOrderQuant,
      topics: [
        "Structured Live Sessions",
        "Topic-Wise Modules Complete Course",
        "Include interactive Q&A segments so students can clarify doubts in real time",
        "Self-Placed Practice Questions",
        "Mock Tests and Timed Quizzes",
        "Recorded Video Lectures and Recap Sessions",
        "Study Plans and Time Management Tips",
        "Set up weekly or biweekly Tests to track progress",
      ],
    },
    {
      title: "DILR Decoded for CAT: Strategies, Practice & Live Doubt Clearing",
      description:
        "Mastering DILR for CAT: Data Interpretation & Logical Reasoning Simplified",
      image: image,
      price: 2999.0,
      Action: createOrderLIDI,
      topics: [
        "Structured Live Sessions",
        "Organize regular interactive sessions covering key DILR topics such as data interpretation sets (tables, charts, graphs) and logical reasoning puzzles (seating arrangements, series, syllogisms).",
        "Dedicated Doubt-Solving Workshops",
        "Curated Practice Question Bank",
        "Mock Tests and Timed Quizzes",
        "Recorded Video Lectures and Recap Sessions",
      ],
    },
  ];

  // Create a separate showTopics state for each course.
  const [showTopics, setShowTopics] = useState(courses.map(() => false));

  return (
    <div className="relative h-full p-5 flex flex-col items-center justify-around overflow-hidden">
      <h1 className="text-white z-10 text-4xl font-bold">Self Placed Course</h1>
      <p className="z-10 mb-10 text-white/85">
        Experience Best self placed Course and practice questions and mock as
        well.
      </p>
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-red-500 to-pink-200 bg-[length:400%_400%] animate-gradient flex flex-row w-full" />

      <div className="relative z-10 flex justify-around flex-wrap items-center w-full p-1 mb-10">
        {courses ? (
          courses.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm transform transition-transform duration-300 hover:scale-105 my-5"
            >
              {item.image ? (
                <div className="h-10rem flex object-cover overflow-hidden">
                  <Image
                    src={item.image}
                    alt="Course image"
                    width={400}
                    height={30}
                    className="object-fill"
                  />
                </div>
              ) : (
                <div className="w-full h-48 flex items-center justify-center bg-gray-200">
                  <svg
                    className="w-24 h-24"
                    viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="64" height="64" rx="8" ry="8" fill="#4F46E5" />
                    <rect x="10" y="10" width="44" height="12" fill="white" />
                    <rect x="10" y="28" width="12" height="12" fill="white" />
                    <rect x="26" y="28" width="12" height="12" fill="white" />
                    <rect x="42" y="28" width="12" height="12" fill="white" />
                    <rect x="10" y="44" width="12" height="12" fill="white" />
                    <rect x="26" y="44" width="12" height="12" fill="white" />
                    <rect x="42" y="44" width="12" height="12" fill="white" />
                  </svg>
                </div>
              )}
              <span className="tracking-widest m-3 text-red-500 font-semibold">
                Classes will be Start on 1 March
              </span>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  {item.title}
                </h2>
                <p className="mt-2 text-gray-600">{item.description}</p>

                <div className="mt-4 flex justify-between">
                  <button
                    onClick={item.Action}
                    className="bg-green-500/90 hover:bg-green-600 shadow-md p-3 rounded-xl text-white"
                  >
                    Price {item.price}.00
                  </button>

                  <button
                    onClick={() =>
                      setShowTopics((prev) => {
                        const newState = [...prev];
                        newState[index] = !newState[index];
                        return newState;
                      })
                    }
                    className="flex items-center text-indigo-600 hover:text-indigo-800 font-semibold focus:outline-none"
                  >
                    <span className="mr-2">
                      {showTopics[index] ? "Hide Topics" : "Show Topics"}
                    </span>
                    <svg
                      className={`w-5 h-5 transition-transform duration-200 ${
                        showTopics[index] ? "transform rotate-180" : ""
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
                {showTopics[index] && (
                  <>
                    <hr className="my-4 border-gray-300" />
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">
                      Course Topics
                    </h3>
                    <ul className="space-y-3">
                      {item.topics.map((topic, idx) => (
                        <li key={idx} className="flex items-center">
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
          ))
        ) : (
          <>Loading ...</>
        )}
      </div>
    </div>
  );
};

export default CourseCard;
