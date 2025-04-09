import Link from "next/link";
import Image from "next/image";
import bsc from "@/public/bcs.jpg";
import bscpre from "@/public/cat.svg";
import bscGPT from "@/public/bcs.webp";
import monthpre from "@/public/monthpre.svg";
// Output the SVG as a string (could be inserted into HTML or saved as a file)

export default function BusinessCard({ post, urltitle }) {
  const { Slug, headerTitle } = post;
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
      href={`${urltitle}/${Slug}`}
      className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
    >
      <div className="relative h-48">
        <Image
          src={image[i]}
          alt={"Image"}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <h4 className="text-lg font-bold text-gray-800 mb-2">{headerTitle}</h4>
      </div>
    </Link>
  );
}
