import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import FETCHDATAID from "@/module/fetchdataId";
import {
  BookOpenText,
  GraduationCap,
  Lightbulb,
  Clock,
  User,
} from "lucide-react";

async function fetchPost(slug) {
  const posts = await FETCHDATAID("/Interview");
  return posts.find((post) => post.slug === slug) || null;
}

export default async function PostPage({ params }) {
  const post = await fetchPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <header className="mb-12 text-center">
        <nav className="text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Home
          </Link>{" "}
          /{" "}
          <Link
            href="/interview"
            className="hover:text-blue-600 transition-colors"
          >
            Interviews
          </Link>
        </nav>

        <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
          {post.titles[0]}
        </h1>

        <div className="relative aspect-video rounded-xl shadow-lg overflow-hidden mb-8">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </header>

      {/* Main Content */}
      <div className="prose prose-lg max-w-none">
        {/* Introduction */}
        <section className="mb-16">
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            {post.paragraph[0]}
          </p>
        </section>

        {/* Personal Details */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <User className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">
              {post.titles[1]}
            </h2>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl">
            <p className="text-gray-600 leading-relaxed">{post.paragraph[1]}</p>
          </div>
        </section>

        {/* Education */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <GraduationCap className="w-8 h-8 text-green-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">
              {post.titles[2]}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <p className="text-gray-600 leading-relaxed">
                {post.paragraph[2]}
              </p>
            </div>
            <Link
              href="/"
              className="flex items-center justify-center p-6 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
            >
              <BookOpenText className="w-6 h-6 mr-2" />
              {post.linksTitle[1] || "Study Resources"}
            </Link>
          </div>
        </section>

        {/* Exam Preparation */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Clock className="w-8 h-8 text-purple-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">
              {post.titles[3]}
            </h2>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl">
            <p className="text-gray-600 leading-relaxed">{post.paragraph[3]}</p>
          </div>
        </section>

        {/* Experience & Tips */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {post.titles[4]}
            </h2>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <p className="text-gray-600 leading-relaxed">
                {post.paragraph[4]}
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center mb-6">
              <Lightbulb className="w-8 h-8 text-yellow-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">
                {post.titles[5]}
              </h2>
            </div>
            <div className="bg-yellow-50 p-6 rounded-xl">
              <p className="text-gray-600 leading-relaxed">
                {post.paragraph[5]}
              </p>
            </div>
          </section>
        </div>

        {/* Final Section */}
        <section className="bg-blue-50 p-8 rounded-xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {post.titles[6]}
          </h2>
          <p className="text-gray-600 leading-relaxed">{post.paragraph[6]}</p>
          <Link
            href="/"
            className="mt-6 inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            {post.linksTitle[0] || "Practice Now"}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </section>
      </div>
    </article>
  );
}
