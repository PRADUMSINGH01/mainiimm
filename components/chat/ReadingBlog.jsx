// pages/blog-list.js (or any suitable name for your blog list page)

import Link from 'next/link';
import dino from '@/components/chat/dino.jpg'
import Image from 'next/image';
import ReadingComprehension from './SeachFilter';

export default function BlogListPage() {
  return (
    <div className="container mx-auto p-4 md:p-8 font-roboto min-h-screen">

<ReadingComprehension PageTitle={"Reading Comprehension"} UrlName={"/Reading-compre/"} DataFatchURL={'Reading'} ImCheck={false}/>

  
    </div>
  );
}