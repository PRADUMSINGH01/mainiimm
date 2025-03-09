// app/[id]/page.tsx
import FETCHDATA from "@/module/fetchdata";
import Link from "next/link";
import UserContent from "@/components/chat/RC/RCDYNMIC";
export async function generateStaticParams() {
  const userss = await FETCHDATA("/RC");
  return userss.map((user) => ({ id: user.Slug }));
}

export default async function UserPage({ params }) {
  const userss = await FETCHDATA("/RC");
  const post = userss.find((user) => user.Slug === params.id);
  const rn = Math.floor(Math.random() * userss.length) || 0;
  const relatedPosts = userss.slice(rn, rn + 4);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <div className="max-w-md text-center space-y-4">
          <div className="text-6xl">📚</div>
          <h1 className="text-3xl font-bold text-gray-900">Post Not Found</h1>
          <p className="text-gray-600">
            The requested article could not be found
          </p>
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return <UserContent post={post} relatedPosts={relatedPosts} />;
}
