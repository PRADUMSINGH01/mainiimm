import Link from 'next/link';
import React from 'react';
import { AiFillTags } from 'react-icons/ai';

const RCBlog = ({ title, link, Id, tag }) => {
  return (
    <Link
      href={link}
      className="group border border-gray-300 w-full md:w-[28rem] h-full md:h-[10rem] m-5 p-4 flex flex-col justify-between shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow duration-300"
    >
      {/* Header */}
      <div className="flex w-full justify-between items-start">
        <div className="flex items-center">
          <span className="flex items-center justify-center h-[2.5rem] w-[2.5rem] rounded-full bg-blue-100 text-blue-600 font-bold shadow">
            {Id}
          </span>
        </div>
        <h1 className="ml-4 flex-1 text-black text-lg font-semibold line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h1>
      </div>

      {/* Footer */}
      <div className="w-full flex justify-between items-center mt-4">
        <span className="flex items-center text-sm font-medium">
          {tag === "Easy" ? (
            <p className="text-green-600 flex items-center">
              <AiFillTags className="mr-1" /> Easy
            </p>
          ) : (
            <p className="text-red-600 flex items-center">
              <AiFillTags className="mr-1" /> Hard
            </p>
          )}
        </span>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 hover:scale-105 transition-transform duration-200">
          Solve
        </button>
      </div>
    </Link>
  );
};

export default RCBlog;
