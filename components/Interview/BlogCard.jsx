import Link from "next/link";
import Image from "next/image";

export default function BlogCard({ post }) {
  const { titles, paragraph, image, slug } = post;
  console.log(post);
  return (
    <Link
      href={`/Interview/${slug}`}
      className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
    >
      <div className="relative h-48">
        <Image
          src={image}
          alt={titles[0]}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <h4 className="text-lg font-bold text-gray-800 mb-2">{titles[0]}</h4>
        <p className="text-gray-600 text-sm h-[3rem] break-all truncate ">
          {paragraph[0]}
        </p>
      </div>
    </Link>
  );
}
