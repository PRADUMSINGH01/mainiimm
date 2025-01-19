import { notFound } from "next/navigation";
import Image from "next/image";
<<<<<<< HEAD
import Link from "next/link";
import FETCHDATAID from "@/module/fetchdataId";
async function fetchPost(slug) {
  // Simulated post data (Replace with API or DB fetch logic)
  const posts = await FETCHDATAID("/Interview");
  /*
=======
import Link from 'next/link';
async function fetchPost(slug) {
  // Simulated post data (Replace with API or DB fetch logic)
  const posts = [
    {
      id: 1,
      title: "Top Tips for IIM Exams",
      content:"Lorem ipsum, dolor sit ametconsecteturadipisicingelit. Perferendis, ducimus tenetur quidem sequi nulla consequuntur accusamus suscipit dolorem quia. Sint sunt, rem maxime esse accusamus veritatis iusto dicta sit facere qui iste odio temporibus quibusdam numquam nam alias inventore autem similique vel mollitia beatae sequi quae quaerat soluta! Quam, molestiae. Maximize your efficiency and score higher with time management. Maximize your efficiency and score higher with time management. Maximize your efficiency and score higher with time management,Here are the best tips for preparing for IIM exams...  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, ducimus tenetur quidem sequi nulla consequuntur accusamus suscipit dolorem quia. Sint sunt, rem maxime esse accusamus veritatis iusto dicta sit facere qui iste odio temporibus quibusdam numquam nam alias inventore autem similique vel mollitia beatae sequi quae quaerat soluta! Quam, molestiae.",
      image: "/images/iim-tips.jpg",
      slug: "iim-exam-tips",
    },
    {
      id: 2,
      title: "How to Prepare for IIM Interviews",
      content: "Lorem ipsum, dolor sit amet consecteturdipisicingelitPerferendis, ducimus tenetur quidem sequi nulla consequuntur accusamus suscipit dolorem quia. Sint sunt, rem maxime esse accusamus veritatis iusto dicta sit facere qui iste odio temporibus quibusdam numquam nam alias inventore autem similique vel mollitia beatae sequi quae quaerat soluta! Quam, molestiae. Maximize your efficiency and score higher with time management. Maximize your efficiency and score higher with time management. Maximize your efficiency and score higher with time management,Key strategies to impress interviewers and secure your spot. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, ducimus tenetur quidem sequi nulla consequuntur accusamus suscipit dolorem quia. Sint sunt, rem maxime esse accusamus veritatis iusto dicta sit facere qui iste odio temporibus quibusdam numquam nam alias inventore autem similique vel mollitia beatae sequi quae quaerat soluta! Quam, molestiae",
      image: "/images/iim-interviews.jpg",
      slug: "iim-interview-tips",
    },
    {
      id: 3,
      title: "Time Management for CAT",
      content:"Lorem ipsum, dolor sit ametconsecteturadipisicingelit. Perferendis, ducimus tenetur quidem sequi nulla consequuntur accusamus suscipit dolorem quia. Sint sunt, rem maxime esse accusamus veritatis iusto dicta sit facere qui iste odio temporibus quibusdam numquam nam alias inventore autem similique vel mollitia beatae sequi quae quaerat soluta! Quam, molestiae. Maximize your efficiency and score higher with time management. Maximize your efficiency and score higher with time management. Maximize your efficiency and score higher with time management. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, ducimus tenetur quidem sequi nulla consequuntur accusamus suscipit dolorem quia. Sint sunt, rem maxime esse accusamus veritatis iusto dicta sit facere qui iste odio temporibus quibusdam numquam nam alias inventore autem similique vel mollitia beatae sequi quae quaerat soluta! Quam, molestiae. Maximize your efficiency and score higher with time management. Maximize your efficiency and score higher with time management. Maximize your efficiency and score higher with time management.",
      image: "/images/time-management.jpg",
      slug: "time-management-cat",
    },
    // Add more posts

    /*
>>>>>>> aed51d819786bc4a6e1ff7d3a35ef4d5e89ecadb
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
<<<<<<< HEAD
=======
  ];
>>>>>>> aed51d819786bc4a6e1ff7d3a35ef4d5e89ecadb

  return posts.find((post) => post.slug === slug) || null;
}

export default async function PostPage({ params }) {
  const post = await fetchPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8 ">
<<<<<<< HEAD
      <h1 className="text-3xl font-bold mb-4 tracking-wider break-all hyphens-manual">
        {post.titles[0]}
      </h1>
=======
      <h1 className="text-3xl font-bold mb-4 tracking-wider">{post.title}</h1>
>>>>>>> aed51d819786bc4a6e1ff7d3a35ef4d5e89ecadb
      <div className="relative w-full h-64 mb-8">
        <Image
          src={post.image}
          alt={post.title}
          layout="fill"
          objectFit="cover"
        />
      </div>
<<<<<<< HEAD
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
        {post.titles[3]}{" "}
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
        {post.titles[5]}{" "}
      </Link>

      <h2 className="text-2xl font-bold m-4">{post.titles[5]}</h2>
      <p className="prose prose-lg    text-lg  tracking-wider break-all hyphens-manual	">
        {post.paragraph[5]}
      </p>
      <h2 className="text-2xl font-bold m-4">{post.titles[6]}</h2>
      <p className="prose prose-lg    text-lg  tracking-wider break-all hyphens-manual	">
        {post.paragraph[6]}
      </p>
=======
      <p className="prose prose-lg text-lg  tracking-wider">{post.content}</p>

      <h2 className="text-3xl font-bold m-4">{post.title}</h2>
      <p className="prose prose-lg   text-lg  tracking-wider break-all hyphens-manual	">{ post.content}</p>

      <h2 className="text-3xl font-bold m-4">{ post.title}</h2>
      <p className="prose prose-lg    text-lg  tracking-wider break-all hyphens-manual	">{ post.content}</p>

      <Link href={'/'} className="w-full bg-black/80 underline decoration-white/70 hover:decoration-blue-700/50	underline-offset-4
 flex h-10 items-center justify-center text-white rounded-md shadow-md my-3">{  post.title} </Link>

      <h2 className="text-3xl font-bold m-4">{ post.title}</h2>
      <p className="prose prose-lg   text-lg  tracking-wider break-all hyphens-manual	">{post.content}</p>

      <h2 className="text-3xl font-bold m-4">{ post.title}</h2>
      <p className="prose prose-lg   text-lg  tracking-wider break-all hyphens-manual	">{ post.content} </p>

      <Link href={'/'} className="w-full bg-black/80 underline decoration-white/70 hover:decoration-blue-700/50	underline-offset-4
 flex h-10 items-center justify-center text-white rounded-md shadow-md  my-3">{  post.title} </Link>

      <h2 className="text-3xl font-bold m-4">{ post.title}</h2>
      <p className="prose prose-lg    text-lg  tracking-wider break-all hyphens-manual	">{post.content}</p>
>>>>>>> aed51d819786bc4a6e1ff7d3a35ef4d5e89ecadb
    </article>
  );
}
