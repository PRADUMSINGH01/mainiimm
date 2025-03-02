"use client";
import { useEffect } from "react";
import Link from "next/link";
import { useState } from "react";
import FETCHDATA from "@/module/fetchdata";
import BlogPost from "./BlogPost";

export default function ReadingComprehension({
  PageTitle,
  DataFatchURL,
  UrlName,
  ImCheck,
}) {
  const [readingComprehensionPassages, setdata] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const questionsPerPage = 10;

  useEffect(() => {
    async function data() {
      const res = await FETCHDATA("/bcs");
      setdata(res);
    }
    data();
    return setdata([]);
  }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPassages = readingComprehensionPassages.filter((passage) => {
    const titleMatch = passage.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const difficultyMatch =
      selectedDifficulty === "All" || passage.difficulty === selectedDifficulty;
    const categoryMatch =
      selectedCategory === "All" || passage.category === selectedCategory;
    return titleMatch && difficultyMatch && categoryMatch;
  });

  const topics = Array.from(
    new Set(filteredPassages.map((question) => question.topic))
  );

  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = filteredPassages.slice(
    indexOfFirstQuestion,
    indexOfLastQuestion
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container  md:ml-10 ">
      <h1 className="text-3xl font-bold   mb-10 text-center bg-gradient-to-r from-blue-500 to-teal-500 w-full h-20 py-3 rounded-b-md  ">
        {PageTitle}
      </h1>

      {/* Search Bar */}
      <div className="mb-4 flex items-center justify-center ">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border rounded-lg p-2 w-1/2  to-teal-500"
        />
      </div>

      {/* Filter Options */}
      <div className="flex justify-between m-4 w-full items-center">
        <div>
          <label htmlFor="difficulty">Difficulty:</label>
          <select
            id="difficulty"
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            className="border rounded-lg p-2 ml-2"
          >
            <option value="All">All</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>
        <div className="m-4">
          <label htmlFor="category">Category: </label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border rounded-lg p-2 "
          >
            <option value="All">All</option>
            <option value="Technology">Technology</option>
            <option value="Environment">Environment</option>
            {/* Add more categories as needed */}
          </select>
        </div>
      </div>

      {/* 
<div className="flex flex-wrap justify-between">
  
  </div> */}

      <div className=" flex flex-col w-full justify-around items-center">
        {currentQuestions.map((item) => (
          <BlogPost
            URL={`${UrlName}/${item.Id}`}
            ImCheck={true}
            Question={item.title}
            Id={item.Id}
          />
        ))}
      </div>

      <div className="flex justify-center mt-6 mb-10">
        {Array.from({
          length: Math.ceil(filteredPassages.length / questionsPerPage),
        }).map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`px-3 py-2 mx-1 rounded-lg ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
