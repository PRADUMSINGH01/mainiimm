// app/interview/[slug]/page.jsx
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
  Share2,
  MessageCircle,
} from "lucide-react";

// Utility function for date formatting
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const post = await fetchPost(params.slug);
  
  if (!post) return {
    title: "Interview Experience Not Found",
    description: "The requested interview experience could not be found.",
  };

  return {
    title: `${post.titles[0]} | Interview Prep Pro`,
    description: post.paragraph[0].substring(0, 160),
    alternates: {
      canonical: `https://yourdomain.com/interview/${params.slug}`,
    },
    openGraph: {
      title: post.titles[0],
      description: post.paragraph[0].substring(0, 160),
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.titles[0],
        },
      ],
      publishedTime: post.date,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.titles[0],
      description: post.paragraph[0].substring(0, 160),
      images: [post.image],
    },
  };
}

async function fetchPost(slug) {
  const posts = await FETCHDATAID("/Interview");
  return posts.find((post) => post.slug === slug) || null;
}

export default async function PostPage({ params }) {
  const post = await fetchPost(params.slug);

  if (!post) {
    notFound();
  }

  // Structured data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.titles[0],
    description: post.paragraph[0],
    image: post.image,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: post.author || 'Interview Prep Pro Team',
      url: 'https://yourdomain.com/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Interview Prep Pro',
      logo: {
        '@type': 'ImageObject',
        url: 'https://yourdomain.com/logo.png',
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <article className="max-w-3xl mx-auto py-8 px-4 lg:px-0">
        {/* Progress Indicator */}
        <div className="fixed top-0 left-0 h-1 bg-blue-100 w-full z-50">
          <div 
            className="h-full bg-blue-600 transition-all duration-300"
            style={{ width: '30%' }}
            aria-hidden="true"
          />
        </div>

        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6 hidden sm:block">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/interview" className="hover:text-blue-600 transition-colors">Interviews</Link>
            </li>
            <li>/</li>
            <li aria-current="page" className="text-gray-600 truncate max-w-[200px]">
              {post.titles[0]}
            </li>
          </ol>
        </nav>

        {/* Article Header */}
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 leading-tight">
            {post.titles[0]}
          </h1>
          
          <div className="flex items-center text-sm text-gray-500 space-x-4 mb-6">
            <time dateTime={post.date} className="flex items-center">
              {formatDate(post.date)}
            </time>
            <span className="text-gray-300">•</span>
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {post.readTime} read
            </span>
          </div>

          <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
            <Image
              src={post.image}
              alt={`Visual representation of ${post.titles[0]} interview experience`}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </div>
        </header>

        {/* Floating Table of Contents */}
        <aside className="hidden lg:block fixed right-8 top-1/3 bg-white p-4 rounded-xl shadow-lg max-w-xs border border-gray-100">
          <h3 className="font-semibold mb-3 text-gray-800">Table of Contents</h3>
          <nav aria-label="Article sections">
            <ul className="space-y-2 text-sm">
              {post.titles.slice(1).map((title, index) => (
                <li key={index}>
                  <a 
                    href={`#section-${index+1}`}
                    className="hover:text-blue-600 transition-colors text-gray-600 block py-1"
                  >
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Introduction Section */}
          <section className="prose lg:prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed">
              {post.paragraph[0]}
            </p>
          </section>

          {/* Author Bio */}
          <div className="bg-blue-50 p-6 rounded-xl flex items-start space-x-4 border border-blue-100">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">About the Author</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {post.authorBio || "Seasoned professional with extensive experience in technical interviews and career mentorship. Passionate about helping candidates unlock their full potential."}
              </p>
            </div>
          </div>

          {/* Interview Experience Sections */}
          <section id="section-1" className="scroll-mt-20">
            <div className="flex items-center mb-4">
              <User className="w-7 h-7 text-blue-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-900">
                {post.titles[1]}
              </h2>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <p className="text-gray-700 leading-relaxed">
                {post.paragraph[1]}
              </p>
            </div>
          </section>

          <section id="section-2" className="scroll-mt-20">
            <div className="flex items-center mb-4">
              <GraduationCap className="w-7 h-7 text-green-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-900">
                {post.titles[2]}
              </h2>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <p className="text-gray-700 leading-relaxed">
                  {post.paragraph[2]}
                </p>
              </div>
              <Link
                href="/resources"
                className="flex items-center justify-center p-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors group"
              >
                <BookOpenText className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
                <span>{post.linksTitle[1] || "Explore Study Resources"}</span>
              </Link>
            </div>
          </section>

          <section id="section-3" className="scroll-mt-20">
            <div className="flex items-center mb-4">
              <Clock className="w-7 h-7 text-purple-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-900">
                {post.titles[3]}
              </h2>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <p className="text-gray-700 leading-relaxed">
                {post.paragraph[3]}
              </p>
            </div>
          </section>

          {/* Experience & Tips Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            <section id="section-4" className="scroll-mt-20">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {post.titles[4]}
              </h2>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <p className="text-gray-700 leading-relaxed">
                  {post.paragraph[4]}
                </p>
              </div>
            </section>

            <section id="section-5" className="scroll-mt-20">
              <div className="flex items-center mb-4">
                <Lightbulb className="w-7 h-7 text-yellow-600 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900">
                  {post.titles[5]}
                </h2>
              </div>
              <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100">
                <p className="text-gray-700 leading-relaxed">
                  {post.paragraph[5]}
                </p>
              </div>
            </section>
          </div>

          {/* Final CTA */}
          <section id="section-6" className="scroll-mt-20">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl text-center border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {post.titles[6]}
              </h2>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto leading-relaxed">
                {post.paragraph[6]}
              </p>
              <Link
                href="/practice"
                className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium group"
              >
                <span>{post.linksTitle[0] || "Start Practicing Now"}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1"
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
            </div>
          </section>

          {/* Social Sharing */}
          <div className="py-8 border-t border-gray-100">
            <div className="flex flex-col items-center space-y-4">
              <p className="text-gray-600">Share this interview experience:</p>
              <div className="flex space-x-4">
                <button className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                  <Share2 className="w-5 h-5 text-gray-700" />
                </button>
                {/* Add more social platform buttons */}
              </div>
            </div>
          </div>

          {/* Newsletter CTA */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="max-w-md mx-auto text-center">
              <Lightbulb className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Get Weekly Interview Insights
              </h3>
              <p className="text-gray-600 mb-6">
                Join our newsletter and receive expert tips, success stories, and interview strategies
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-xs sm:max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Floating Action Buttons (Mobile) */}
        <div className="lg:hidden fixed bottom-4 right-4 flex space-x-3">
          <button className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors">
            <MessageCircle className="w-6 h-6 text-gray-700" />
          </button>
          <button className="p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors">
            <Share2 className="w-6 h-6" />
          </button>
        </div>
      </article>
    </>
  );
}