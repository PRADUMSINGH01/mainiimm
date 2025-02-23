import React from "react";
import FETCHDATA from "@/module/fetchdata";
import Link from "next/link";

const userss = await FETCHDATA("/RC");

export async function generateStaticParams() {
  return userss.map((user) => ({ id: user.Slug }));
}

const UserPage = async ({ params }) => {
  const post = userss.find((user) => user.Slug === params.id);

  if (!post) {
    return (
      <div className="text-center text-gray-500 mt-10">User not found</div>
    );
  }

  const rn = Math.floor(Math.random() * userss.length) || 0;
  const relatedPosts = userss.slice(rn, rn + 4);
  const arr = ["A", "B ", "C", "D"];
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white p-2 shadow-md shadow-black rounded-b-md">
        <h1 className="text-xl md:text-3xl text-white p-2 bg-black/85 text-center  first-letter:uppercase font-bold">
          {post.Title}
        </h1>
        <h1 className="text-2xl lg:p-2  p-1 m-5 tracking-wide">
          {post.passage.text}
        </h1>

        <h3 className="text-center text-2xl bg-black text-white p-2">
          {" "}
          Question{" "}
        </h3>
        {post.questions.map((items, index) => (
          <>
            <h2 className="text-xl m-5 font-bold ">
              {index + 1} {items.question}
            </h2>
            {items.options.map((items, index) => (
              <span className="p-2 mx-10 text-xl flex flex-col text-blue-500">
                {arr[index]} {items}
              </span>
            ))}
            <div className="flex w-full justify-center">
              <button className="mx-5 text-sm bg-black p-2 rounded-xl text-white">
                Show Answer{" "}
              </button>
            </div>
          </>
        ))}
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-10">
        {/* Post Content */}

        {/* Sidebar */}
        <aside className="w-full space-y-6">
          {/* Related Posts */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">Related Posts</h3>
            <ul className="space-y-2">
              {relatedPosts.map((item, index) => (
                <li key={index}>
                  <Link
                    href={`${item.Slug}`}
                    className="text-blue-500 hover:underline"
                  >
                    {item.Title || `Related Post ${item.Id}`}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">Subscribe</h3>
            <p className="text-gray-600 mb-4">
              Get the latest updates directly in your inbox.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="border rounded w-full px-4 py-2"
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Subscribe
              </button>
            </form>
          </div>
        </aside>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center space-y-4">
          <p>© 2024 IIM Target. All rights reserved.</p>
          <div className="space-x-4">
            <Link
              href="/Term-and-Condition"
              className="text-gray-400 hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="/Term-and-Condition"
              className="text-gray-400 hover:text-white"
            >
              Terms of Service
            </Link>
          </div>
          <div className="space-x-4">
            <Link
              href="https://twitter.com"
              target="_blank"
              className="text-gray-400 hover:text-white"
            >
              Twitter
            </Link>
            <Link
              href="https://facebook.com"
              target="_blank"
              className="text-gray-400 hover:text-white"
            >
              Facebook
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              className="text-gray-400 hover:text-white"
            >
              Instagram
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default UserPage;
