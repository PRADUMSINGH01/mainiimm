import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import FETCHDATAID from "@/module/fetchdataId";
async function fetchPost(slug) {
  // Simulated post data (Replace with API or DB fetch logic)
  const posts = await FETCHDATAID("/bcs");
  /*
     * first title about interview 
     * second title about person details
     * third title about education and percentages
     * fourth title about exam prepation
     * five title exam day experience.
     * six title tips and trick to solve .
     * seven title iims calls 
     * eight title about iim interview and questions 
     * 
     * BlogPost_One = {
     * slug:rahul-interview-experience
     * title:[title........s]
     * para:[paras.........s]
     * links:[links........s]
     * headline:[headline..s]
     *let i = 0
     let j = pa.length-1 =6
     ti = []
     pa = []
     newarray = [] 
     * while (i>=j) {
      newarray.push(ti[i],pa[i])
      i++
    
     }
     return newarray = [t1,p1,t2,p2,t3,p3]
     * }
     */

  return posts.find((post) => post.slug === slug) || null;
}

export default async function PostPage({ params }) {
  const post = await fetchPost(params.slug);

  if (!post) {
    return (
      <div className="flex justify-center w-full items-center h-full mt-[15rem] text-red-500 text-4xl ">
        Not Case Study On this Url...
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8 ">
      <h1 className="text-3xl font-bold mb-4 tracking-wider break-all hyphens-manual">
        {post.titles[0]}
      </h1>
      <div className="relative w-full h-64 mb-8">
        <Image
          src={post.image}
          alt={post.title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <p className="prose prose-lg text-lg   tracking-wider">
        {post.paragraph[0]}
      </p>

      <h2 className="text-2xl font-bold m-4">{post.titles[1]}</h2>
      <p className="prose prose-lg   text-lg  tracking-wider break-all hyphens-manual	">
        {post.paragraph[1]}
      </p>

      <h2 className="text-2xl font-bold m-4">{post.titles[2]}</h2>
      <p className="prose prose-lg    text-lg  tracking-wider break-all hyphens-manual	">
        {post.paragraph[2]}
      </p>

      <Link
        href={"/"}
        className="w-full bg-black/80 underline decoration-white/70 hover:decoration-blue-700/50	underline-offset-4
 flex h-10 items-center justify-center text-white rounded-md shadow-md my-3"
      >
        {post.linksTitle[1] || "Learn Every day Guys"}{" "}
      </Link>

      <h2 className="text-2xl font-bold m-4">{post.titles[3]}</h2>
      <p className="prose prose-lg   text-lg  tracking-wider break-all hyphens-manual	">
        {post.paragraph[3]}
      </p>

      <h2 className="text-2xl font-bold m-4">{post.titles[4]}</h2>
      <p className="prose prose-lg   text-lg  tracking-wider break-all hyphens-manual	">
        {post.paragraph[4]}{" "}
      </p>

      <Link
        href={"/"}
        className="w-full bg-black/80 underline decoration-white/70 hover:decoration-blue-700/50	underline-offset-4
 flex h-10 items-center justify-center text-white rounded-md shadow-md  my-3"
      >
        {post.linksTitle[0] || "Practice More Guy"}{" "}
      </Link>

      <h2 className="text-2xl font-bold m-4">{post.titles[5]}</h2>
      <p className="prose prose-lg    text-lg  tracking-wider break-all hyphens-manual	">
        {post.paragraph[5]}
      </p>
      <h2 className="text-2xl font-bold m-4">{post.titles[6]}</h2>
      <p className="prose prose-lg    text-lg  tracking-wider break-all hyphens-manual	">
        {post.paragraph[6]}
      </p>
    </article>
  );
}
