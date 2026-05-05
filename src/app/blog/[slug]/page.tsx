import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
// import { CMS_NAME } from "@/lib/constants";
import markdownToHtml from "@/lib/markdownToHtml";
// import Alert from "@/components/alert";
import Container from "@/components/container";
// import Header from "@/components/header";
import { PostBody } from "@/components/post-body";
import { PostHeader } from "@/components/post-header";
import Link from "next/link";
import PostCarousel from "@/components/PostCarousel";

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
export default async function Blog(props: Params) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <main>
      <header className="w-full border-b border-gray-200 bg-primary sticky top-16 backdrop-blur supports-[backdrop-filter]:bg-primary/90">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <section className="flex items-center justify-between">
            <h1 className="text-4xl md:text-3xl font-bold text-primary-foreground">
              <Link href="/blog" className="hover:underline">
                Blog
              </Link>
              {/*Blog*/}
            </h1>
          </section>

          {/* DIVISOR */}
          <div className="my-4 h-px bg-[#085c77]" />

          {/* ID SECTION */}
          <section className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* ESQUERDA */}
            <div className="flex items-center gap-3">
              {/*<img src="/orcid-logo.svg" alt="orcid" className="w-8 h-8" />*/}

              <h1 className="text-gray-700 text-sm md:text-base text-primary-foreground ">
                Thoughts, studies, research and insights by Fagner Leal Pantoja
                {/*https://orcid.org/0000-0002-3928-5432*/}
              </h1>
            </div>
          </section>
        </div>
      </header>
      {/*<Alert preview={post.preview} />*/}
      <Container>
        {/*<Header />*/}
        <article className="mb-32">
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
          />
          <PostBody content={content} />
        </article>
        <section className="mb-16">
          <PostCarousel posts={posts} />
        </section>

        {/*<section className="space-y-8">
          {rest.map((post) => (
            <article
              key={post.id}
              className="border-b pb-6 hover:opacity-80 transition cursor-pointer"
            >
              <h2 className="text-2xl font-semibold mb-1">{post.title}</h2>

              <p className="text-gray-600 mb-2">{post.excerpt}</p>

              <span className="text-sm text-gray-400">{post.date}</span>
            </article>
          ))}
        </section>*/}
      </Container>
      {/*<main className="max-w-6xl mx-auto px-4 py-12">
        // <header className="mb-12">
          <h1 className="text-4xl font-bold mb-2">Blog</h1>
          <p className="text-gray-600">
            Articles, research and insights on software and AI
          </p>
        </header>

        <section className="mb-16">
          <PostCarousel posts={featured} />
        </section>

        <section className="space-y-8">
          {rest.map((post) => (
            <article
              key={post.id}
              className="border-b pb-6 hover:opacity-80 transition cursor-pointer"
            >
              <h2 className="text-2xl font-semibold mb-1">{post.title}</h2>

              <p className="text-gray-600 mb-2">{post.excerpt}</p>

              <span className="text-sm text-gray-400">{post.date}</span>
            </article>
          ))}
        </section>
      </main>*/}
    </main>
  );
}

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | Next.js Blog Example with Markdown`;

  return {
    title,
    openGraph: {
      title,
      images: [post.ogImage.url],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
