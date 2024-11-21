import React from 'react';
import FETCHDATA from '@/module/fetchdata';
import Link from 'next/link';

const userss = await FETCHDATA('/RC');

export async function generateStaticParams() {
  return userss.map((user) => ({ id: user.Id }));
}

const UserPage = async ({ params }) => {
  const post = userss.find((user) => user.Id === params.id);

  if (!post) {
    return <div className="text-center text-gray-500 mt-10">User not found</div>;
  }

  const rn = Math.floor(Math.random() * userss.length) || 0;
  const relatedPosts = userss.slice(rn, rn + 4);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white py-4 shadow-md shadow-black rounded-b-md">
        <h1 className="text-xl md:text-3xl text-black text-center  first-letter:uppercase font-bold">{post.Title}</h1>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-10">
        {/* Post Content */}
        <section className="w-full lg:w-full bg-white rounded-lg shadow-lg p-6">
          {[post.Section_One, post.Section_Two, post.Section_Three, post.Section_Four, post.Section_Five].map(
            (section, index) =>
              section && (
                <p
                  key={index}
                  className="text-xl mt-5 tracking-wide text-gray-700 first-letter:text-2xl first-letter:text-blue-500 w-full"
                >
                  {section}
                </p>
              )
          )}

          <h2 className="mt-10 text-xl font-bold bg-blue-600 text-white p-2 rounded">Questions</h2>
         
          
          
          
          
          
          
          
          <section className="w-full lg:w-full bg-white rounded-lg md:p-6">
            {/* Dynamic Content Sections */}

            {/* Questions Section */}
            <div className="mt-6 space-y-8 w-full">
              {/* Question 1 */}
              {post.question_One && (
                <div className='w-full'>
                  <p className="font-semibold text-blue-800 w-full flex">1. {post.question_One}</p>
                  <div className="md:ml-4 space-y-2">
                    <label className="block text-gray-700">{post.question_One_option_One}</label>
                    <label className="block text-gray-700">{post.question_One_option_Two}</label>
                    <label className="block text-gray-700">{post.question_One_option_Three}</label>
                    {post.answerOne && (
                      <p className="text-green-600 mt-2 font-medium">Answer: {post.answerOne}</p>
                    )}
                  </div>
                </div>
              )}

              {/* Question 2 */}
              {post.question_Two && (
                <div>
                  <p className="font-semibold text-blue-800">2. {post.question_Two}</p>
                  <div className="md:ml-4">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" className="w-5 h-5" />
                      <label className="text-gray-700">{post.question_Two_option_One}</label>
                    </div>
                    <label className="block text-gray-700 mt-2">{post.question_Two_option_Two}</label>
                    <label className="block text-gray-700 mt-2">{post.question_Two_option_Three}</label>
                    {post.answerTwo && (
                      <p className="text-green-600 mt-2 font-medium">Answer: {post.answerTwo}</p>
                    )}
                  </div>
                </div>
              )}

              {/* Question 3 */}
              {post.question_Three && (
                <div>
                  <p className="font-semibold text-blue-800">3. {post.question_Three}</p>
                  <div className="md:ml-4 space-y-2">
                    <label className="block text-gray-700">{post.question_Three_option_One}</label>
                    <label className="block text-gray-700">{post.question_Three_option_Two}</label>
                    <label className="block text-gray-700">{post.question_Three_option_Three}</label>
                    {post.answerThree && (
                      <p className="text-green-600 mt-2 font-medium">Answer: {post.answerThree}</p>
                    )}
                  </div>
                </div>
              )}

              {/* Question 4 */}
              {post.question_Four && (
                <div>
                  <p className="font-semibold text-blue-800">4. {post.question_Four}</p>
                  <div className="md:ml-4 space-y-2">
                    <label className="block text-gray-700">{post.question_Four_option_One}</label>
                    <label className="block text-gray-700">{post.question_Four_option_Two}</label>
                    <label className="block text-gray-700">{post.question_Four_option_Three}</label>
                    {post.answerFour && (
                      <p className="text-green-600 mt-2 font-medium">Answer: {post.answerFour}</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </section>

          
          
          
          


          
        </section>

        {/* Sidebar */}
        <aside className="w-full lg:w-1/4 space-y-6">
          {/* Related Posts */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">Related Posts</h3>
            <ul className="space-y-2">
              {relatedPosts.map((item) => (
                <li key={item.Id}>
                  <Link
                    href={`${item.Id}`}
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
            <p className="text-gray-600 mb-4">Get the latest updates directly in your inbox.</p>
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
            <Link href="/Term-and-Condition" className="text-gray-400 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/Term-and-Condition" className="text-gray-400 hover:text-white">
              Terms of Service
            </Link>
          </div>
          <div className="space-x-4">
            <Link href="https://twitter.com" target="_blank" className="text-gray-400 hover:text-white">
              Twitter
            </Link>
            <Link href="https://facebook.com" target="_blank" className="text-gray-400 hover:text-white">
              Facebook
            </Link>
            <Link href="https://instagram.com" target="_blank" className="text-gray-400 hover:text-white">
              Instagram
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default UserPage;
