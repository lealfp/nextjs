import Link from "next/link";
// import { getAllPosts } from '@/lib/blog'
// import { formatDate } from '@/lib/date'

import Container from "@/components/container";
import HeroPost from "@/components/hero-post";
import MoreStories from "@/components/more-stories";
import { getAllPosts } from "@/lib/api";
import DateFormatter from "@/components/date-formatter";

import PostCarousel from "@/components/PostCarousel";
import Avatar from "@/components/avatar";

export const metadata = {
  title: "Blog | Fagner Leal Pantoja",
  description:
    "Thoughts, studies, research and insights by Fagner Leal Pantoja.",
};
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
export default async function BlogPage() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);
  const posts = allPosts;
  return (
    <main className="">
      <header className="w-full border-b border-gray-200 bg-primary sticky top-16 backdrop-blur supports-[backdrop-filter]:bg-primary/90">
        {/*<div className="max-w-6xl mx-auto px-4 py-6">*/}
        <div className="container mx-auto px-5">
          {/*<section className="flex items-center justify-between">*/}
          <h1 className="text-4xl md:text-3xl font-bold text-primary-foreground">
            Blog
          </h1>
          {/*</section>*/}

          {/* DIVISOR */}
          {/*<div className="my-4 h-px bg-[#085c77]" />*/}
          {/*<div className="my-4 h-px bg-primary-foreground/30" />*/}

          {/*<div className="flex items-center gap-3">

            <h2 className="text-gray-700 text-sm md:text-base text-primary-foreground/80 ">
              Thoughts, studies, research and insights
            </h2>
          </div>*/}
        </div>
      </header>

      {/*<PostCarousel posts={posts} />*/}

      <Container>
        {/*<Intro />*/}

        <div>
          {posts.map((post) => (
            <article
              key={post.slug}
              className="flex justify-between gap-6 group cursor-pointer"
            >
              {/* TEXTO */}

              <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
                <div>
                  <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:underline"
                    >
                      {post.title}
                    </Link>
                  </h3>

                  <div className="mb-4 md:mb-0 text-lg">
                    <DateFormatter dateString={post.date} />
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mt-3">
                    <span>⭐ {}</span>
                    {/*<span>👁 {post.views}</span>*/}
                    <span>💬 {}</span>
                  </div>
                </div>
                <div>
                  <p className="text-lg leading-relaxed mb-4">{post.excerpt}</p>
                  <Avatar
                    name={post.author.name}
                    picture={post.author.picture}
                  />
                </div>
              </div>
              {/*<div className="flex-1">
                <p className="text-sm text-gray-500 mb-1">{post.slug}</p>

                <h2 className="text-2xl font-bold leading-snug group-hover:underline">
                  {post.title}
                </h2>
                <p className="text-gray-600 mt-1 line-clamp-2">{post.slug}</p>

              </div>

              <div className="w-32 h-24 flex-shrink-0">
                <img
                  src={post.coverimage}
                  alt={post.title}
                  className="w-full h-full object-cover rounded"
                />
              </div>*/}
            </article>
          ))}
        </div>

        {/*<HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />*/}

        {/*{morePosts.length > 0 && <MoreStories posts={morePosts} />}*/}
      </Container>

      {/*<ul className="space-y-8">
        {posts.map((post) => (
          <li key={post.slug} className="border-b pb-6">
            <Link
              href={`/blog/${post.slug}`}
              className="text-xl font-semibold text-green-700 hover:underline"
            >
              {post.title}
            </Link>

            <div className="text-sm text-gray-500 mt-1">
              {post.author} • {formatDate(post.date)}
            </div>

            {post.category && (
              <span className="inline-block mt-2 text-xs bg-gray-100 px-2 py-1 rounded">
                {post.category}
              </span>
            )}
          </li>
        ))}
      </ul>*/}
    </main>
  );
}

// // src/app/blog/page.tsx

// import PostCarousel from "@/components/PostCarousel";

// const posts = [
//   {
//     id: "1",
//     title: "Neural Language Models",
//     excerpt: "Overview of neural language models and applications.",
//     date: "2025-01-10",
//   },
//   {
//     id: "2",
//     title: "Semantic Web",
//     excerpt: "Improving data understanding using semantics.",
//     date: "2025-02-15",
//   },
//   {
//     id: "3",
//     title: "Next.js Best Practices",
//     excerpt: "Modern web development techniques.",
//     date: "2025-03-01",
//   },
//   {
//     id: "4",
//     title: "AI in Medicine"main className="">
//   <header className="w-full border-b border-gray-200 bg-primary sticky top-16 backdrop-blur supports-[backdrop-filter]:bg-primary/90">
//     <div className="max-w-6xl mx-auto px-4 py-6">
//       <section className="flex items-center justify-between">
//         <h1 className="text-4xl md:text-3xl font-bold text-primary-foreground">
//           Blog
//         </h1>
//       </section>

//       {/* DIVISOR */}
//       <div className="my-4 h-px bg-[#085c77]" />

//       {/* ID SECTION */}
//       <section className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
//         {/* ESQUERDA */}
//         <div className="flex items-center gap-3">
//           {/*<img src="/orcid-logo.svg" alt="orcid" className="w-8 h-8" />*/}

//           <h1 className="text-gray-700 text-sm md:text-base text-primary-foreground ">
//             Thoughts, studies, research and insights by Fagner Leal Pantoja
//             {/*https://orcid.org/0000-0002-3928-5432*/}
//           </h1>
//         </div>
//       </section>
//     </div>
//   </header>

//   <PostCarousel posts={posts} />

//   <Container>
//     {/*<Intro />*/}
//     <HeroPost
//       title={heroPost.title}
//       coverImage={heroPost.coverImage}
//       date={heroPost.date}
//       author={heroPost.author}
//       slug={heroPost.slug}
//       excerpt={heroPost.excerpt}
//     />
//     {morePosts.length > 0 && <MoreStories posts={morePosts} />}
//   </Container>

//   {/*<ul className="space-y-8">
//     {posts.map((post) => (
//       <li key={post.slug} className="border-b pb-6">
//         <Link
//           href={`/blog/${post.slug}`}
//           className="text-xl font-semibold text-green-700 hover:underline"
//         >
//           {post.title}
//         </Link>

//         <div className="text-sm text-gray-500 mt-1">
//           {post.author} • {formatDate(post.date)}
//         </div>

//         {post.category && (
//           <span className="inline-block mt-2 text-xs bg-gray-100 px-2 py-1 rounded">
//             {post.category}
//           </span>
//         )}
//       </li>
//     ))}
//   </ul>*/}
// ,
//     excerpt: "Applications of AI in clinical studies.",
//     date: "2025-03-20",
//   },

//   {
//     id: "5",
//     title: "AI in Medicine",
//     excerpt: "Applications of AI in clinical studies.",
//     date: "2025-03-20",
//   },
// ];

// export default function BlogPage() {
//   const featured = posts.slice(0, 3);
//   const rest = posts.slice(3);

//   return (
//     <main className="max-w-6xl mx-auto px-4 py-12">
//       {/* HEADER */}
//       <header className="mb-12">
//         <h1 className="text-4xl font-bold mb-2">Blog</h1>
//         <p className="text-gray-600">
//           Articles, research and insights on software and AI
//         </p>
//       </header>

//       {/* CARROSSEL */}
//       <section className="mb-16">
//         <PostCarousel posts={featured} />
//       </section>

//       {/* LISTA EDITORIAL */}
//       <section className="space-y-8">
//         {rest.map((post) => (
//           <article
//             key={post.id}
//             className="border-b pb-6 hover:opacity-80 transition cursor-pointer"
//           >
//             <h2 className="text-2xl font-semibold mb-1">{post.title}</h2>

//             <p className="text-gray-600 mb-2">{post.excerpt}</p>

//             <span className="text-sm text-gray-400">{post.date}</span>
//           </article>
//         ))}
//       </section>
//     </main>
//   );
// }

// src/app/blog/page.tsx

// const posts = [
//   {
//     id: "1",
//     author: "Leo Godin",
//     title: "Claude Code is Great",
//     subtitle: "You Just Need to Learn How to Use It",
//     date: "Mar 2",
//     views: "3.1K",
//     comments: 87,
//     image: "/post1.jpg",
//   },
//   {
//     id: "2",
//     author: "Marina Wyss",
//     title: "AI Agents: Complete Course",
//     subtitle: "From beginner to intermediate to production.",
//     date: "Dec 6, 2025",
//     views: "6.4K",
//     comments: 265,
//     image: "/post2.jpg",
//   },
//   {
//     id: "3",
//     author: "Shruti Mangawa",
//     title: "Why Reading More Books Wasn’t Making Me Smarter",
//     subtitle: "I realized I had been reading wrong my entire life",
//     date: "Dec 11, 2025",
//     views: "15K",
//     comments: 692,
//     image: "/post3.jpg",
//   },
// ];

// export default function BlogPage() {
//   return (
//     <main className="max-w-5xl mx-auto px-4 py-10">
//       {/* TABS */}
//       <div className="flex gap-6 border-b mb-8">
//         <button className="pb-2 border-b-2 border-black font-medium">
//           For you
//         </button>
//         <button className="pb-2 text-gray-500 hover:text-black">
//           Featured
//         </button>
//       </div>

//       {/* LISTA */}
//       <div className="space-y-10">
//         {posts.map((post) => (
//           <article
//             key={post.id}
//             className="flex justify-between gap-6 group cursor-pointer"
//           >
//             {/* TEXTO */}
//             <div className="flex-1">
//               <p className="text-sm text-gray-500 mb-1">{post.author}</p>

//               <h2 className="text-2xl font-bold leading-snug group-hover:underline">
//                 {post.title}
//               </h2>

//               <p className="text-gray-600 mt-1 line-clamp-2">{post.subtitle}</p>

//               {/* META */}
//               <div className="flex items-center gap-4 text-sm text-gray-500 mt-3">
//                 <span>⭐ {post.date}</span>
//                 <span>👁 {post.views}</span>
//                 <span>💬 {post.comments}</span>
//               </div>
//             </div>

//             {/* IMAGEM */}
//             <div className="w-32 h-24 flex-shrink-0">
//               <img
//                 src={post.image}
//                 alt={post.title}
//                 className="w-full h-full object-cover rounded"
//               />
//             </div>
//           </article>
//         ))}
//       </div>
//     </main>
//   );
// }
