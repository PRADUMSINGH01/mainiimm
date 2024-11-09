import React from 'react';
import FETCHDATA from '@/module/fetchdata';
import Link from 'next/link';
// Fetch user data
const userss = await FETCHDATA('/Reading');

export async function generateStaticParams() {
  return userss.map(user => ({ id: user.Id }));

}

// Main UserPage component
const UserPage = async ({ params }) => {
  const post = userss.find(user => user.Id === params.id); // Find the user by ID
  // const post = userss[params.id];

  const rn =   await Math.floor(Math.random() * 10) || 3 ;
  const rnt =  await Math.floor(Math.random() * 11) || 6 ;
  if (!post) {
    return <div>User not found</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="bg-[#5a77f6d0] shadow-md py-4 h-auto ">

          <h1 className="text-lg md:text-3xl  p-1 font-sans text-[#fdfbff] text-center   ">{post.Question}</h1>
          
      </header>

      {/* Main Content Section */}
      <main className="container mx-auto px-4 py-8 flex flex-col lg:flex-row mt-10  ">


        <div className="w-[100%] px-1 flex  flex-col">
        <span className='text-xl mt-5 w-full tracking-wider word-wrap: break-word first-letter:text-2xl'>
          {post.Section_One}
        </span>

        <span className='text-xl mt-5 w-full tracking-wider word-wrap: break-word'>
          {post.Section_Two}
        </span>

        <span className='text-xl mt-5 w-full tracking-wider word-wrap: break-word'>
          {post.Section_Three}
        </span>

        <span className='text-xl mt-5 w-full tracking-wider word-wrap: break-word'>
          {post.Section_Four}
        </span>

        <span className='text-xl mt-5 w-full tracking-wider word-wrap: break-word'>
          {post.Section_Five}
        </span>




<h1 className='mt-10 bg-[#5e77bb] p-1 font-bold rounded-md text-white'>Questions </h1>

<div className="flex flex-col justify-between h-auto  ">

<span     className='mt-10   font-semibold text-blue-800   '> 1. {post.question_One}</span>
<span     className='mt-10   font-semibold text-blue-800   '>2. {post.question_Two}</span>
<span   className='mt-10   font-semibold text-blue-800   '>3. {post.question_Three}</span>
<span     className='mt-10   font-semibold text-blue-800   '>4. {post.question_Four}</span>
<span     className='mt-10   font-semibold text-blue-800   '>5. {post.question_Five}</span>

</div>

<h1 className='mt-10 bg-yellow-300 p-1 font-bold rounded-md mb-10'>Answer </h1>

<div className="flex flex-col justify-between h-auto  ">

<span     className='mt-10   font-semibold text-green-600   '> 1. {post.answer}</span>
<span     className='mt-10   font-semibold text-green-600   '>2. {post.answerOne}</span>
<span   className='mt-10   font-semibold text-green-600   '>3. {post.answerTwo}</span>
<span     className='mt-10   font-semibold text-green-600   '>4. {post.answerThree}</span>
<span     className='mt-10   font-semibold text-green-600   '>5. {post.answerFour}</span>

</div>


        </div>
       
     






















        <aside className="w-full lg:w-1/4 pl-0 lg:pl-6">
          <div className="bg-white rounded-lg shadow-lg p-4 mb-6">
            <h3 className="text-xl font-bold mb-4">Related Posts</h3>
            <ul>
              {
                userss.slice(params+rn,params+rnt).map((item)=>(
                  <li><Link href={`/Business-case-studies/${item.Id}`} className="text-blue-500 hover:underline">Related Post {item.Id}</Link></li>

                ))
               }
{/*                
              // <li><Link href="/post2" className="text-blue-500 hover:underline">Related Post 2</Link></li>
              // <li><Link href="/post3" className="text-blue-500 hover:underline">Related Post 3</Link></li> */}
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-4">
            <h3 className="text-xl font-bold mb-4">Subscribe</h3>
            <p className="mb-2">Get the latest updates directly in your inbox.</p>
            <form>
              <input
                type="email"
                placeholder="Enter your email"
                className="border p-2 w-full rounded mb-2"
                required
              />
              <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
                Subscribe
              </button>
            </form>
          </div>
        </aside>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="mb-2">© 2024 IIM Target. All rights reserved.</p>
          <div className="flex justify-center mb-2">
            <Link href="/Term-and-Condition" className="text-gray-400 hover:text-white mx-4">Privacy Policy</Link>
            <Link href="/Term-and-Condition" className="text-gray-400 hover:text-white mx-4">Terms of Service</Link>
          </div>
          <div className="flex justify-center">
            <Link href="https://twitter.com" className="text-gray-400 hover:text-white mx-2" target="_blank">Twitter</Link>
            <Link href="https://facebook.com" className="text-gray-400 hover:text-white mx-2" target="_blank">Facebook</Link>
            <Link href="https://instagram.com" className="text-gray-400 hover:text-white mx-2" target="_blank">Instagram</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default UserPage;
