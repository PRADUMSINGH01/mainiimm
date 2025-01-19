//import BlogGrid from "../components/BlogGrid";
import Link from 'next/link'
import BlogGrid from "@/components/Interview/BlogGrid";
async function fetchPosts() {
  // Simulating data fetching (Replace with your API or database call)
  return [
    {
      id: 1,
      title: "Top Tips for IIM Exams",
      excerpt: "Learn how to ace your IIM exams with these proven tips.",
      image: "/images/iim-tips.jpg",
      slug: "iim-exam-tips",
    },
    {
      id: 2,
      title: "How to Prepare for IIM Interviews",
      excerpt: "Key strategies to impress interviewers and secure your spot.",
      image: "/images/iim-interviews.jpg",
      slug: "iim-interview-tips",
    },
    {
      id: 3,
      title: "Time Management for CAT",
      excerpt:
        "Maximize your efficiency and score higher with time management.",
      image: "/images/time-management.jpg",
      slug: "time-management-cat",
    },
  ];
}

export default async function Page() {
  const posts = await fetchPosts();

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-teal-500 text-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-1">
            Welcome to Interview Experience{" "}
          </h2>
          <p className="text-md">
            Discover IIM exam preparation tips, interview experiences, and more.
          </p>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between ">
        <h3 className="text-2xl font-bold text-gray-800 mb-8">Latest  Interview Posts</h3>
        <Link href={'Interview/Interview-See-All'}>See All</Link>

        </div>
        <BlogGrid posts={posts} />
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between ">
        <h3 className="text-2xl font-bold text-gray-800 mb-8">Latest preparation Posts</h3>
        <Link href={'/Interview/preparation-See-All'}>See All</Link>

        </div>
        <BlogGrid posts={posts} />
      </section>
    </div>
  );
}
