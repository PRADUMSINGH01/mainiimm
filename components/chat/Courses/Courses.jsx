"use client";
import { useState } from "react";
import Image from "next/image";
import { FaCheckCircle, FaChevronDown, FaClock, FaStar } from "react-icons/fa";
import { Calculator, BarChart, Zap, BookOpen } from "lucide-react";
import countImage from "@/public/cat.svg";
import { RazorPayOrderCreateLIDI } from "@/module/CoursePayment/LIDIPayment";
import { RazorPayOrderCreateQuant } from "@/module/CoursePayment/QuantPayment";
const CourseCard = () => {
  const [expandedCourse, setExpandedCourse] = useState(null);
  const [loading, setLoading] = useState(false);

  // Payment handling functions (same as previous)
  const handlePayment = async (createOrderFunction) => {
    try {
      setLoading(true);
      const data = await createOrderFunction();
      console.log(data);
      launchRazorpay(data.order.id);
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
      title: "Quantitative Aptitude",
      description: "Master essential math concepts",
      image: countImage,
      price: 1999,
      discountedPrice: 1499,
      features: [
        "Algebra & Arithmetic",
        "Advanced Geometry",
        "Data Interpretation",
        "Weekly Mock Tests",
        "Time Management",
        "Live Doubt Solving",
      ],
      action: () => handlePayment(RazorPayOrderCreateQuant),
      duration: "8 Weeks",
      lessons: "45 Lessons",
    },
    {
      title: "DILR Strategy",
      description: "Excel in data interpretation",
      image: countImage,
      price: 999,
      discountedPrice: 799,
      features: [
        "Logical Puzzles",
        "Case Study Analysis",
        "Visualization Techniques",
        "CAT Pattern Practice",
        "Expert Feedback",
      ],
      action: () => handlePayment(RazorPayOrderCreateLIDI),
      duration: "6 Weeks",
      lessons: "32 Lessons",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-850 rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg"
          >
            <div className="relative aspect-[3/2]">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute top-2 right-2 bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full text-xs flex items-center gap-1">
                <FaStar className="w-3 h-3" />
                <span>Bestseller</span>
              </div>
            </div>

            <div className="p-4 space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-0.5 text-sm">
                    {course.description}
                  </p>
                </div>
                <div className="bg-blue-100 dark:bg-blue-900 p-1.5 rounded-md">
                  {index === 0 ? (
                    <Calculator className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  ) : (
                    <BarChart className="w-5 h-5 text-green-600 dark:text-green-400" />
                  )}
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-1">
                  <BookOpen className="w-4 h-4" />
                  <span>{course.lessons}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaClock className="w-4 h-4" />
                  <span>{course.duration}</span>
                </div>
              </div>

              <div className="border-t pt-3 mt-3">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="text-xl font-bold text-gray-900 dark:text-gray-100">
                      ₹{course.discountedPrice.toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-500 line-through">
                      ₹{course.price.toLocaleString()}
                    </div>
                  </div>
                  <button
                    onClick={course.action}
                    disabled={loading}
                    className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-all flex items-center gap-1.5"
                  >
                    {loading ? (
                      <>
                        <span className="animate-spin">🌀</span>
                        Processing...
                      </>
                    ) : (
                      <>
                        <Zap className="w-4 h-4" />
                        Enroll Now
                      </>
                    )}
                  </button>
                </div>

                <button
                  onClick={() =>
                    setExpandedCourse(expandedCourse === index ? null : index)
                  }
                  className="w-full mt-3 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 py-1.5 rounded-md transition-colors flex items-center justify-center gap-1 text-sm"
                >
                  <span className="font-medium">
                    {expandedCourse === index ? "Hide" : "Show"} Details
                  </span>
                  <FaChevronDown
                    className={`transition-transform ${
                      expandedCourse === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {expandedCourse === index && (
                  <ul className="mt-3 space-y-2 animate-fade-in">
                    {course.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-gray-700 dark:text-gray-300 text-sm"
                      >
                        <FaCheckCircle className="flex-shrink-0 w-4 h-4 text-green-500 mt-0.5 mr-2" />
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center border-t pt-6">
        <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2 text-xs">
          <FaClock className="w-3 h-3" />
          Next cohort starts March 1st • Limited seats
        </p>
      </div>
    </div>
  );
};

export default CourseCard;
