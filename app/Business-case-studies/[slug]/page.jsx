import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import FETCHDATAID from "@/module/fetchdataId";
import { ChevronRight } from "lucide-react";
import Business from "@/components/chat/Test/Business";
async function fetchPost(slug) {
  const posts = await FETCHDATAID("/bcs");
  return posts.find((post) => post.Slug === slug) || null;
}

export default async function PostPage({ params }) {
  const post = await fetchPost(params.slug);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
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

  return <Business caseStudyData={post} />;
}
