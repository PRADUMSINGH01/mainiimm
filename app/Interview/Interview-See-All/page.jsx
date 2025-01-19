"use client";
import { BsChevronDoubleDown } from "react-icons/bs";
import { BsChevronDoubleUp } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

import BlogGrid from "@/components/Interview/BlogGrid";
async function fetchPosts() {
  // Simulating data fetching (Replace with your API or database call)

  return [
    {
      id: 1,
      title: "Top Tips for IIM Exams",
      excerpt: "Learn how to ace your IIM exams with these proven tips.",
      image: "/images/iim-tips.jpg",
      slug: "iim-exam-tips",
    },
    {
      id: 2,
      title: "How to Prepare for IIM Interviews",
      excerpt: "Key strategies to impress interviewers and secure your spot.",
      image: "/images/iim-interviews.jpg",
      slug: "iim-interview-tips",
    },
    {
      id: 3,
      title: "Time Management for CAT",
      excerpt:
        "Maximize your efficiency and score higher with time management.",
      image: "/images/time-management.jpg",
      slug: "time-management-cat",
    },
  ];
}

async function page() {
  const posts = await fetchPosts();

  return (
    <div className="flex flex-col w-full justify-center h-full items-center  mb-5">
      <div className="w-full flex justify-center items-center bg-gradient-to-r from-blue-500 to-teal-500  shadow-md rounded-b-md ">
        <div className="flex justify-between  w-full md:w-1/3 items-center h-20  mb-1 p-2">
          <button className="bg-black/70 p-2 items-center rounded-md text-white flex justify-between shadow-xl border-black tracking-wider">
            Letest <BsChevronDoubleUp className="ml-1" />
          </button>

          <button
            onClick={() => console.log("Most")}
            className="bg-black/70 p-2 rounded-md text-white flex items-center justify-between  shadow-xl border-black tracking-wider"
          >
            Most Liked <FaRegHeart className="ml-1" />
          </button>

          <button className="bg-black/70 p-2 flex items-center rounded-md text-white justify-between shadow-xl border-black tracking-wider">
            Old <BsChevronDoubleDown className="ml-1" />
          </button>
        </div>
      </div>

      <div className="flex md:w-1/3 w-full items-center h-10 text-white rounded-md  shadow-xl bg-black/80  my-10 ">
        <CiSearch className="bg-black/5 h-10 p-1  w-[10%] flex text-2xl  rounded-md text-white" />
        <input
          type="text"
          placeholder="Search Here "
          className=" bg-black/5 w-[90%] h-10  rounded-md tracking-wildest text-white outline-none placeholder:text-center placeholder:text-white/50"
        />
      </div>

      <hr />
      <BlogGrid posts={posts} />
    </div>
  );
}

export default page;
