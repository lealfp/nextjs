import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";

type Props = {
  morePosts: Post[];
};
//
const posts = [
  {
    id: "1",
    title: "Understanding Neural Language Models",
    excerpt: "An overview of neural language models and their applications.",
  },
  {
    id: "2",
    title: "Semantic Web in Practice",
    excerpt: "How semantic technologies improve data understanding.",
  },
  {
    id: "3",
    title: "Modern Web Development",
    excerpt: "Best practices using Next.js and modern tools.",
  },
];

export default function MoreStories({ morePosts }: Props) {
  return (
    <section>
      {/*<div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {morePosts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>*/}
      {/*<h5 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
        More Stories
      </h5>

      <div className="flex gap-6 border-b mb-8">
        <button className="pb-2 border-b-2 border-black font-medium">
          For you
        </button>
        <button className="pb-2 text-gray-500 hover:text-black">
          Featured
        </button>
      </div>*/}

      <div className="space-y-10">
        {posts.map((post) => (
          <article
            key={post.id}
            className="flex justify-between gap-6 group cursor-pointer"
          >
            {/* TEXTO */}
            <div className="flex-1">
              <p className="text-sm text-gray-500 mb-1">{post.author}</p>

              <h2 className="text-2xl font-bold leading-snug group-hover:underline">
                {post.title}
              </h2>

              <p className="text-gray-600 mt-1 line-clamp-2">{post.subtitle}</p>

              {/* META */}
              <div className="flex items-center gap-4 text-sm text-gray-500 mt-3">
                <span>⭐ {post.date}</span>
                <span>👁 {post.views}</span>
                <span>💬 {post.comments}</span>
              </div>
            </div>

            {/* IMAGEM */}
            <div className="w-32 h-24 flex-shrink-0">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover rounded"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
