"use client";
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

async function page() {
  const posts = await fetchPosts();

  return (
    <div className="flex flex-col w-full justify-center h-full items-center p-2 bg-black/5 mb-5">
      <div className="flex justify-between md:w-1/3 w-full items-center h-20  mb-10 ">
        <button className="bg-black/20 p-2 rounded-md text-white outline shadow-xl border-black">
          Letest{" "}
        </button>

        <button
          onClick={() => console.log("Most")}
          className="bg-black/20 p-2 rounded-md text-white outline shadow-xl border-black"
        >
          Most Liked
        </button>

        <button className="bg-black/20 p-2 rounded-md text-white outline shadow-xl border-black">
          Old{" "}
        </button>
      </div>
      <div className="flex justify-center md:w-1/3 w-full items-center h-10 text-white rounded-md outline  shadow-xl   mb-10 ">
        <input
          type="text"
          placeholder="Search Here "
          className="w-full bg-black/10 h-10 p-1 rounded-md shadow-md   outline-none placeholder:text-center placeholder:text-black/50"
        />
      </div>
      <BlogGrid posts={posts} />
    </div>
  );
}

export default page;
