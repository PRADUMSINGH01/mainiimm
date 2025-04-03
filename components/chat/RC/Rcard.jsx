"use client";
import { BookOpen, ArrowUpRight, Clock, Signal } from "lucide-react";
import Link from "next/link";
export default function RCPassageList({ passages }) {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="mb-12 text-center space-y-2">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Reading Comprehension
        </h1>
        <p className="text-gray-500 text-lg">Curated academic passages</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {passages.map((passage) => (
          <div
            key={passage.id}
            className="group relative bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
          >
            {/* Gradient Accent */}
            <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Difficulty Badge */}
            <div className="absolute top-4 right-4">
              <div
                className={`px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm ${
                  passage.difficulty === "Easy"
                    ? "bg-green-100/80 text-green-700"
                    : passage.difficulty === "Medium"
                    ? "bg-yellow-100/80 text-yellow-700"
                    : "bg-red-100/80 text-red-700"
                }`}
              >
                <Signal className="inline-block w-4 h-4 mr-2 -mt-0.5" />
                {passage.difficulty}
              </div>
            </div>

            {/* Content */}
            <div className="relative space-y-4">
              {/* Category */}
              <div className="flex items-center gap-2 text-sm text-blue-600 font-medium">
                <BookOpen className="w-5 h-5" />
                {passage.category}
              </div>

              {/* Title */}
              <h2 className="text-xl font-semibold text-gray-900">
                {passage.Title}
              </h2>

              {/* Excerpt */}
              <p className="text-gray-600 leading-relaxed line-clamp-3">
                {passage.excerpt}
              </p>

              {/* Progress & CTA */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Clock className="w-4 h-4" />
                  <span>{passage.readTime} min</span>
                </div>
                <Link
                  href={`/Reading-compre/RC/${passage.Slug}`}
                  className="flex items-center gap-2 px-4 py-2 bg-black hover:bg-gray-800 text-white rounded-full transition-colors"
                >
                  Read
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Hover Effect */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-100 rounded-2xl pointer-events-none transition-all duration-300" />
          </div>
        ))}
      </div>
    </div>
  );
}
