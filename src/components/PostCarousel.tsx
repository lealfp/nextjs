// "use client";

// import { useState } from "react";

// type Post = {
//   id: string;
//   title: string;
//   excerpt: string;
// };

// export default function PostCarousel({ posts }: { posts: Post[] }) {
//   const [index, setIndex] = useState(0);

//   const prev = () => {
//     setIndex((i) => (i === 0 ? posts.length - 1 : i - 1));
//   };

//   const next = () => {
//     setIndex((i) => (i === posts.length - 1 ? 0 : i + 1));
//   };

//   const getIndex = (i: number) => {
//     return (i + posts.length) % posts.length;
//   };

//   const left = posts[getIndex(index - 1)];
//   const center = posts[index];
//   const right = posts[getIndex(index + 1)];

//   return (
//     <div className="relative w-full max-w-4xl mx-auto py-10">
//       <div className="flex items-center justify-center gap-4 overflow-hidden">
//         {/* LEFT */}
//         <div className="w-1/4 opacity-50 scale-90 hidden md:block transition">
//           <Card post={left} />
//         </div>

//         {/* CENTER */}
//         <div className="w-full md:w-2/4 scale-100 transition">
//           <Card post={center} highlight />
//         </div>

//         {/* RIGHT */}
//         <div className="w-1/4 opacity-50 scale-90 hidden md:block transition">
//           <Card post={right} />
//         </div>
//       </div>

//       {/* CONTROLES */}
//       <div className="flex justify-between mt-6">
//         <button onClick={prev} className="px-4 py-2 border rounded">
//           ←
//         </button>
//         <button onClick={next} className="px-4 py-2 border rounded">
//           →
//         </button>
//       </div>
//     </div>
//   );
// }

// function Card({ post, highlight = false }: any) {
//   return (
//     <div
//       className={`p-6 rounded-xl border shadow-sm transition
//       ${highlight ? "bg-white shadow-md" : "bg-gray-50"}`}
//     >
//       <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
//       <p className="text-gray-600 text-sm">{post.excerpt}</p>
//     </div>
//   );
// }

// src/components/PostCarousel.tsx

"use client";

import { useState } from "react";

export default function PostCarousel({ posts }: any) {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((i: number) => (i === 0 ? posts.length - 1 : i - 1));

  const next = () =>
    setIndex((i: number) => (i === posts.length - 1 ? 0 : i + 1));

  const get = (i: number) => posts[(i + posts.length) % posts.length];

  const left = get(index - 1);
  const center = get(index);
  const right = get(index + 1);

  return (
    <div className="relative">
      <div className="flex items-center justify-center gap-4">
        {/* LEFT */}
        <div className="hidden md:block w-1/4 opacity-50 scale-90">
          <Card post={left} />
        </div>

        {/* CENTER */}
        <div className="w-full md:w-2/4">
          <Card post={center} highlight />
        </div>

        {/* RIGHT */}
        <div className="hidden md:block w-1/4 opacity-50 scale-90">
          <Card post={right} />
        </div>
      </div>

      {/* BOTÕES */}
      <div className="flex justify-between mt-6">
        <button onClick={prev} className="px-4 py-2 border rounded">
          ←
        </button>
        <button onClick={next} className="px-4 py-2 border rounded">
          →
        </button>
      </div>
    </div>
  );
}

function Card({ post, highlight = false }: any) {
  return (
    <div
      className={`p-6 rounded-xl border transition
      ${highlight ? "shadow-md bg-white" : "bg-gray-50"}`}
    >
      <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
      <p className="text-gray-600 text-sm">{post.excerpt}</p>
    </div>
  );
}
