"use client"
import React from 'react';
import { FaCreditCard, FaLock } from 'react-icons/fa';
import Link from 'next/link';

const RazorpayPayment = ({PaymentHandle}) => {
 

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-500 to-blue-600 p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-md w-full">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-center rounded-t-lg">
          <h2 className="text-2xl font-bold text-white">Complete Your Purchase</h2>
          <p className="text-white mt-2">Secure payment through Razorpay</p>
        </div>
        <div className="p-6">
          <button 
            onClick={PaymentHandle} 
            className="w-full bg-yellow-500 hover:bg-yellow-400 text-white font-semibold py-2 rounded-lg transition duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center"
          >
            <FaCreditCard className="mr-2" /> Pay Now
          </button>
          <div className="mt-4 text-center text-gray-500">
            <FaLock className="inline mr-1" />
            <span>Your payment is secure.</span>
          </div>
        </div>
        <div className="p-4 text-center">
          <Link href="/" className="text-blue-600 hover:underline">
            Go back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RazorpayPayment;
