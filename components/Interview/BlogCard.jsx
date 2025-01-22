import Link from "next/link";
import Image from "next/image";
import bsc from "@/public/bcs.jpg";
import bscpre from "@/public/cat.svg";
import bscGPT from "@/public/bcs.webp";
import monthpre from "@/public/monthpre.svg";
// Output the SVG as a string (could be inserted into HTML or saved as a file)

export default function BlogCard({ post, urltitle }) {
  const { titles, paragraph, slug } = post;
  const image = [
    monthpre,
    bscGPT,
    bscpre,
    bscGPT,
    bscpre,
    bsc,
    bscGPT,
    bscpre,
    bsc,
    bscGPT,
    bscpre,
    bsc,
    bscGPT,
    bscpre,
    bsc,
    bscGPT,
    bscpre,
    bsc,
    bscGPT,
    bscpre,
    bsc,
  ];
  const i = Math.floor(Math.random() * 20) + 1;
  return (
    <Link
      href={`${urltitle}/${slug}`}
      className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
    >
      <div className="relative h-48">
        <Image
          src={image[i]}
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
