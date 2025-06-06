//import BlogGrid from "../components/BlogGrid";
import Link from "next/link";
import BusinessGrid from "@/components/chat/Business/BusinessGrid";
import FETCHDATAID from "@/module/fetchdataId";
async function fetchPosts() {
  const data = await FETCHDATAID("/bcs");
  // Simulating data fetching (Replace with your API or database call)
  return data;
}

export default async function Page() {
  const posts = await fetchPosts();
  //console.log(posts);
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-teal-500 text-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-1">
            Welcome to Business Case Studies{" "}
          </h2>
          <p className="text-md">
            Discover New New Studies, Market experiences, and more.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between ">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">
            Latest Business Case studies
          </h3>
          <Link href={"Interview/Interview-See-All"}>See All</Link>
        </div>
        <BusinessGrid posts={posts} UrlTitle={"/Business-case-studies"} />
      </section>
    </div>
  );
}
