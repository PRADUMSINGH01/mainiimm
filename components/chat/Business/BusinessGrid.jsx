import BusinessCard from "./Businesscard";
export default function BusinessGrid({ posts, UrlTitle }) {
  //console.log(posts);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <BusinessCard key={post.id} post={post} urltitle={UrlTitle} />
      ))}
    </div>
  );
}
