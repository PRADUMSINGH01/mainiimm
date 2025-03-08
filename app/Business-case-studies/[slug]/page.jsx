import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import FETCHDATAID from "@/module/fetchdataId";
import { ChevronRight, BookOpen, Lightbulb, GraduationCap } from "lucide-react";

async function fetchPost(slug) {
  const posts = await FETCHDATAID("/bcs");
  return posts.find((post) => post.slug === slug) || null;
}

export default async function PostPage({ params }) {
  const post = await fetchPost(params.slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">404</h1>
          <p className="text-lg text-gray-600">Case study not found</p>
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            Return to homepage <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <header className="mb-12">
          <nav className="mb-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-900 transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Case Studies</span>
          </nav>

          <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-6">
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
        <div className="prose prose-lg max-w-none lg:prose-xl">
          <section className="mb-16">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {post.paragraph[0]}
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="flex items-center text-xl font-semibold mb-4">
                  <GraduationCap className="w-6 h-6 mr-2 text-blue-600" />
                  Key Details
                </h3>
                <p className="text-gray-600">{post.paragraph[1]}</p>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="flex items-center text-xl font-semibold mb-4">
                  <BookOpen className="w-6 h-6 mr-2 text-green-600" />
                  Educational Background
                </h3>
                <p className="text-gray-600">{post.paragraph[2]}</p>
              </div>
            </div>
          </section>

          {/* Dynamic Sections */}
          {post.titles.slice(3).map((title, index) => (
            <section key={index} className="mb-12">
              <div className="flex items-center mb-6">
                <div className="h-12 w-1 bg-blue-600 rounded-full mr-4" />
                <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-8">
                {post.paragraph[index + 3]}
              </p>

              {(index === 0 || index === 2) && (
                <Link
                  href="/"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {post.linksTitle[index === 0 ? 1 : 0]}
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Link>
              )}
            </section>
          ))}

          {/* Key Takeaways */}
          <section className="mt-16 p-8 bg-blue-50 rounded-xl">
            <div className="flex items-center mb-6">
              <Lightbulb className="w-8 h-8 text-yellow-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">
                Key Takeaways
              </h3>
            </div>
            <ul className="list-disc pl-6 space-y-4 text-gray-700">
              {post.paragraph.slice(-2).map((point, index) => (
                <li key={index} className="leading-relaxed">
                  {point}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </article>
  );
}
