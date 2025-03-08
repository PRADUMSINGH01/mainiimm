// app/components/UserContent.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  Clock,
  ChevronLeft,
  Bookmark,
  Share,
  MessageCircle,
  Check,
} from "lucide-react";

export default function UserContent({ post, relatedPosts }) {
  const [showAnswer, setShowAnswer] = useState(null);
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Floating Navigation */}
      <nav className="sticky top-0 bg-white/90 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-blue-600"
          >
            <ChevronLeft className="w-5 h-5 mr-1" />
            <span className="hidden sm:inline">All Posts</span>
          </Link>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsBookmarked(!isBookmarked)}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <Bookmark
                className={`w-5 h-5 ${
                  isBookmarked ? "text-blue-600 fill-current" : "text-gray-600"
                }`}
              />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Share className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Article Header */}
        <header className="mb-12 text-center">
          <div className="mb-6 inline-flex items-center gap-2 text-sm text-gray-500 bg-gray-100 px-4 py-2 rounded-full">
            <BookOpen className="w-4 h-4" />
            <span>{post.category || "General Education"}</span>
            <span>•</span>
            <Clock className="w-4 h-4" />
            <span>{post.readTime || 8} min read</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
            {post.Title}
          </h1>
        </header>

        {/* Passage Content */}
        <article className="prose prose-lg max-w-none mb-16 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <div className="text-gray-700 leading-relaxed space-y-6">
            {post.passage.text.split("\n").map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </div>
        </article>

        {/* Practice Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px bg-gray-200 flex-1" />
            <h2 className="text-xl font-semibold text-gray-900 px-4">
              Practice Questions
            </h2>
            <div className="h-px bg-gray-200 flex-1" />
          </div>

          <div className="space-y-8">
            {post.questions.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-blue-200 transition-all"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-medium">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 flex-1">
                    {item.question}
                  </h3>
                </div>

                <div className="grid gap-3 md:grid-cols-2 ml-12">
                  {item.options.map((option, optIndex) => (
                    <button
                      key={optIndex}
                      className="p-4 rounded-lg border border-gray-200 hover:border-blue-300 bg-white text-left transition-all"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                          <span className="text-blue-600 font-medium">
                            {String.fromCharCode(65 + optIndex)}
                          </span>
                        </div>
                        <span className="text-gray-700">{option}</span>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="mt-6 ml-12">
                  <button
                    onClick={() =>
                      setShowAnswer(showAnswer === index ? null : index)
                    }
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                  >
                    <Check className="w-5 h-5" />
                    {showAnswer === index ? "Hide Answer" : "Reveal Answer"}
                  </button>
                  {showAnswer === index && (
                    <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
                      <p className="text-green-700 font-medium">
                        {item.correctAnswer}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Related Content */}
        <section className="mb-16">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Continue Learning
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            {relatedPosts.map((post) => (
              <Link
                key={post.Slug}
                href={`/${post.Slug}`}
                className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 z-10" />
                <div className="p-6 relative z-20">
                  <span className="inline-block mb-2 px-3 py-1 bg-white/90 text-sm rounded-full">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-semibold text-white group-hover:text-blue-200 transition-colors">
                    {post.Title}
                  </h3>
                  <div className="mt-2 flex items-center gap-2 text-sm text-white/80">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime || 5} min read</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
            <div className="space-y-4">
              <h4 className="text-white font-medium">IIM Target</h4>
              <p className="max-w-xs">
                Empowering students with quality learning resources
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-white font-medium">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/blog" className="hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/courses" className="hover:text-white">
                    Courses
                  </Link>
                </li>
                <li>
                  <Link href="/guides" className="hover:text-white">
                    Study Guides
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-white font-medium">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/terms" className="hover:text-white">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="hover:text-white">
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-white font-medium">Connect</h4>
              <div className="flex items-center gap-4">
                <Link href="#" className="hover:text-white">
                  Twitter
                </Link>
                <Link href="#" className="hover:text-white">
                  LinkedIn
                </Link>
                <Link href="#" className="hover:text-white">
                  YouTube
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm">
            © {new Date().getFullYear()} IIM Target. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
