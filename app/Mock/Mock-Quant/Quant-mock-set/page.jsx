"use client"

import React,{useState} from 'react';
import { FaCheckCircle, FaClock, FaCircle } from 'react-icons/fa';
import Link from 'next/link'
import MockAnalysisComponent from '@/components/chat/mock/Mock-Ana';
const MockTestListComponent = () => {
  const mockTests = [
    { id: 1, name: 'Mock Test 1', completed: true },
    { id: 2, name: 'Mock Test 2', completed: false },
    { id: 3, name: 'Mock Test 3', completed: false },
    { id: 4, name: 'Mock Test 1', completed: true },
    { id: 5, name: 'Mock Test 2', completed: false },
    { id: 6, name: 'Mock Test 3', completed: false },
    { id: 7, name: 'Mock Test 1', completed: true },
    { id: 8, name: 'Mock Test 2', completed: false },
    { id: 9, name: 'Mock Test 3', completed: false },
  ];

  return (
    <div className="bg-gray-100 py-10 px-6 md:px-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        All Mock Tests
      </h2>
      <div className="bg-white shadow-md rounded-lg p-6">
        {mockTests.map((mock) => (
          <div
            key={mock.id}
            className="flex justify-between items-center py-4 border-b last:border-none"
          >
            {/* Icon and Name */}
            <div className="flex items-center space-x-4">
              <div className="text-indigo-500">
                {mock.completed ? (
                  <FaCheckCircle size={24} />
                ) : (
                  <FaCircle size={24} className="text-gray-400" />
                )}
              </div>
              <span className="text-lg font-medium text-gray-700">
                {mock.name}
              </span>
            </div>

            {/* Status */}
            <div>
              {mock.completed ? (
                <span className="text-green-500 font-semibold flex items-center">
                  Completed <FaCheckCircle size={16} className="ml-2" />
                
                </span>
              ) : (
                <span className="text-yellow-500 font-semibold flex items-center">
                  In Progress <FaClock size={16} className="ml-2" />
                </span>
              )}
            </div>
          </div>
        ))}
      </div>


      
         <MockAnalysisComponent/>
        
    </div>
  );
};

export default MockTestListComponent;
