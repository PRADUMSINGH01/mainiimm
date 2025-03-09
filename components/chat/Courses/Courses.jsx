"use client";
import { useState } from "react";
import Image from "next/image";
import {
  ChevronDown,
  CheckCircle2,
  Clock,
  BookOpen,
  Zap,
  Calculator,
  BarChart,
} from "lucide-react";

import { RazorPayOrderCreateLIDI } from "@/module/CoursePayment/LIDIPayment";
import { RazorPayOrderCreateQuant } from "@/module/CoursePayment/QuantPayment";
import { verificationPayment } from "@/module/VerifyPayment";

const CourseCard = () => {
  const [expandedCourse, setExpandedCourse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlePayment = async (createOrderFunction) => {
    try {
      setLoading(true);
      const data = await createOrderFunction();
      if (data.status === 200) {
        launchRazorpay(data.order.id);
      }
    } catch (error) {
      console.error("Payment error:", error);
      alert("Payment failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const launchRazorpay = (orderId) => {
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      name: "CAT Prep Academy",
      description: "Course Enrollment",
      image: "/logo.png",
      order_id: orderId,
      handler: async (response) => {
        try {
          const verification = await verificationPayment(
            response.razorpay_payment_id,
            response.razorpay_order_id,
            response.razorpay_signature
          );
          verification.status === 200
            ? alert("Enrollment Successful!")
            : alert("Verification Failed");
        } catch (error) {
          console.error("Verification error:", error);
        }
      },
      theme: { color: "#2563eb" },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const courses = [
    {
      title: "Quantitative Aptitude Mastery",
      description: "Comprehensive coverage from basics to advanced concepts",
      image: "/quant.jpg",
      price: 1999,
      icon: <Calculator className="w-6 h-6 text-blue-600" />,
      features: [
        "Algebra & Arithmetic Fundamentals",
        "Advanced Geometry Concepts",
        "Data Interpretation Techniques",
        "Weekly Mock Tests & Analysis",
        "Time Management Strategies",
        "Live Doubt Solving Sessions",
      ],
      action: () => handlePayment(RazorPayOrderCreateQuant),
    },
    {
      title: "DILR Strategy Intensive",
      description: "Master data interpretation & logical reasoning",
      image: "/dilr.jpg",
      price: 999,
      icon: <BarChart className="w-6 h-6 text-green-600" />,
      features: [
        "Logical Puzzle Solving Framework",
        "Data Case Study Analysis",
        "Visualization Techniques",
        "Speed Accuracy Balance",
        "CAT Pattern Practice Sets",
        "Expert Feedback Sessions",
      ],
      action: () => handlePayment(RazorPayOrderCreateLIDI),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-2">
          <h1 className="text-5xl font-bold text-white p-2  bg-clip-text bg-gradient-to-r from-blue-400 to-purple-300">
            CAT Excellence Program
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Transform your preparation with AI-powered analytics and expert
            mentoring
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/50 backdrop-blur-lg rounded-3xl p-8 hover:bg-gray-800/60 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Visual Element */}
                <div className="relative flex-shrink-0 w-full lg:w-1/3">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${course.color} rounded-2xl transform rotate-2 group-hover:rotate-0 transition-transform`}
                  />
                  <div className="relative aspect-square flex items-center justify-center p-8">
                    <svg
                      viewBox="0 0 1200 800"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient
                          id="grad1"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop
                            offset="0%"
                            style={{ stopColor: "#1a365d", stopOpacity: 1 }}
                          />
                          <stop
                            offset="100%"
                            style={{ stopColor: "#2d3748", stopOpacity: 1 }}
                          />
                        </linearGradient>

                        <filter id="softGlow">
                          <feGaussianBlur stdDeviation="8" result="glow" />
                          <feMerge>
                            <feMergeNode in="glow" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>

                      {/* Background */}
                      <rect width="100%" height="100%" fill="url(#grad1)" />

                      {/* Abstract Math Elements */}
                      <g opacity="0.4" filter="url(#softGlow)">
                        <path
                          d="M200 600 Q 400 300 600 600 T 1000 600"
                          stroke="#4F46E5"
                          strokeWidth="4"
                          fill="none"
                        />
                        <circle
                          cx="850"
                          cy="200"
                          r="80"
                          fill="#818cf8"
                          opacity="0.3"
                        />
                        <rect
                          x="300"
                          y="100"
                          width="120"
                          height="120"
                          transform="rotate(45 300 100)"
                          fill="#60a5fa"
                          opacity="0.2"
                        />
                      </g>

                      {/* Main Quant Symbol */}
                      <g
                        transform="translate(400 200)"
                        fill="none"
                        stroke="#fbbf24"
                        strokeWidth="3"
                      >
                        <path
                          d="M100 350 L300 350 M200 250 L200 450"
                          strokeLinecap="round"
                        />
                        <path
                          d="M500 350 Q 400 250 300 350 T 100 350"
                          opacity="0.8"
                        />
                        <text
                          x="300"
                          y="550"
                          fontFamily="Arial"
                          fontSize="60"
                          fill="#f3f4f6"
                          textAnchor="middle"
                        >
                          ∑
                        </text>
                      </g>

                      {/* Dynamic Elements */}
                      <g stroke="#60a5fa" strokeWidth="2">
                        <line
                          x1="150"
                          y1="650"
                          x2="1050"
                          y2="650"
                          strokeDasharray="8 8"
                        />
                        <polygon
                          points="580,620 600,650 620,620"
                          fill="#60a5fa"
                        />
                        <circle
                          cx="800"
                          cy="500"
                          r="40"
                          fill="none"
                          strokeDasharray="10 5"
                        />
                      </g>

                      {/* Floating Numbers */}
                      <g
                        fontFamily="Arial"
                        fontSize="24"
                        fill="#f3f4f6"
                        opacity="0.7"
                      >
                        <text x="100" y="180" transform="rotate(-15 100 180)">
                          ∫
                        </text>
                        <text x="1000" y="700">
                          π
                        </text>
                        <text x="150" y="500">
                          ∞
                        </text>
                        <text x="1000" y="300">
                          ∇
                        </text>
                      </g>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      {course.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-white mb-2">
                    {course.title}
                  </h2>
                  <p className="text-gray-400 text-lg mb-6">
                    {course.subtitle}
                  </p>

                  <div className="flex items-center gap-4 mb-8">
                    <div className="bg-gradient-to-br from-blue-400 to-purple-400 rounded-xl p-4">
                      <span className="text-2xl font-bold text-white">
                        ₹{course.price.toLocaleString()}
                      </span>
                    </div>
                    <button
                      onClick={course.action}
                      className="bg-gradient-to-br from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white px-8 py-4 rounded-xl font-medium transition-all"
                    >
                      Enroll Now
                    </button>
                  </div>

                  <div className="border-t border-white/10 pt-6">
                    <button
                      onClick={() =>
                        setExpandedCourse(
                          expandedCourse === index ? null : index
                        )
                      }
                      className="w-full flex items-center justify-between text-gray-300 hover:text-white"
                    >
                      <span className="font-medium">Program Features</span>
                      <ChevronDown
                        className={`w-6 h-6 transition-transform ${
                          expandedCourse === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {expandedCourse === index && (
                      <ul className="mt-6 space-y-4 animate-fade-in">
                        {course.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-3 text-gray-300"
                          >
                            <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            <Clock className="w-5 h-5 text-purple-400" />
            Next cohort starts March 1st • Limited seats
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
