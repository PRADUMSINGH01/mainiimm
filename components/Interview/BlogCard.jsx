import Link from "next/link";
import Image from "next/image";

export default function BlogCard({ post }) {
  const { title, excerpt, image, slug } = post;

  return (
    <Link
      href={`/Interview/${slug}`}
      className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
    >
      <div className="relative h-48">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <h4 className="text-lg font-bold text-gray-800 mb-2">{title}</h4>
        <p className="text-gray-600 text-sm">{excerpt}</p>
      </div>
    </Link>
  );
}
