// components/BlogPost.js

import Head from "next/head";
import Image from "next/image";

const BlogPost = ({ post }) => {
  const { title, author, date, content, tags, image, excerpt } = post;

  return (
    <>
      {/* SEO Metadata */}
      <Head>
        <title>{title} | Blog</title>
        <meta name="description" content={excerpt} />
        <meta name="author" content={author} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={excerpt} />
        <meta property="og:image" content={image} />
        <meta property="og:type" content="article" />
      </Head>

      <article className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Featured Image */}
        {image && (
          <div className="relative h-64 md:h-96 w-full">
            <Image
              src={image}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>
        )}

        {/* Content Container */}
        <div className="p-6 sm:p-10">
          {/* Title and Meta Information */}
          <header className="mb-8">
            <h1 className="text-4xl font-extrabold text-gray-900 leading-tight tracking-tight mb-4">
              {title}
            </h1>
            <div className="flex items-center space-x-4 text-gray-500 text-sm">
              <p>
                By <span className="font-medium text-gray-800">{author}</span>
              </p>
              <p>|</p>
              <p>{new Date(date).toLocaleDateString()}</p>
            </div>
          </header>

          {/* Article Content */}
          <section className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
            {content.split("\n").map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </section>

          {/* Tags */}
          <footer className="mt-10">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gradient-to-r from-blue-500 to-teal-500 text-white text-sm font-medium px-3 py-1 rounded-full shadow-md hover:scale-105 transition-transform"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </footer>
        </div>
      </article>
    </>
  );
};

export default BlogPost;
