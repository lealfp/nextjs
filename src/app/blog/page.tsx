import Link from "next/link";
// import { getAllPosts } from '@/lib/blog'
// import { formatDate } from '@/lib/date'

export const metadata = {
  title: "Blog | Node.js",
  description: "The latest Node.js news, migration guides and events summaries",
};

export default async function BlogPage() {
  // const posts = await getAllPosts()

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <header className="mb-10">
        <h1 className="text-4xl font-bold">Blog</h1>
        <p className="text-gray-500 mt-2">
          The latest Node.js news, migration guides and events summaries
        </p>
      </header>

      <div className="flex gap-4 mb-8 text-sm">
        <span className="font-semibold">Categories</span>
        <button className="text-green-600">Everything</button>
        <button>Announcements</button>
        <button>Releases</button>
        <button>Vulnerabilities</button>
        <button>Migration Guides</button>
        <button>Events</button>
      </div>

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
