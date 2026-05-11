import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import Container from "@/components/container";
import { PostBody } from "@/components/post-body";
import { PostHeader } from "@/components/post-header";
import Link from "next/link";
import PostCarousel from "@/components/PostCarousel";

// const posts = [
//   {
//     id: "1",
//     title: "Understanding Neural Language Models",
//     excerpt: "An overview of neural language models and their applications.",
//   },
//   {
//     id: "2",
//     title: "Semantic Web in Practice",
//     excerpt: "How semantic technologies improve data understanding.",
//   },
//   {
//     id: "3",
//     title: "Modern Web Development",
//     excerpt: "Best practices using Next.js and modern tools.",
//   },
// ];
// export const metadata: Metadata = {
//   title: "Home | Fagner Leal Pantoja",
//   description:
//     "Personal website of Fagner Leal Pantoja, a Fullstack Developer. Available for select freelance projects.",
// };
export default async function Blog(props: Params) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) return notFound();

  const content = await markdownToHtml(post.content || "");

  return (
    <>
      {/* ✅ HEADER ALINHADO */}
      <main>
        <header className="w-full border-b border-gray-200 bg-primary sticky top-16 backdrop-blur supports-[backdrop-filter]:bg-primary/90">
          {/*<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">*/}
          {/*<h1 className="text-3xl md:text-4xl font-bold text-primary-foreground">*/}
          {/*<div className="max-w-6xl mx-auto px-4 py-6 ">*/}
          <div className="container mx-auto px-5">
            <section className="flex items-center justify-between">
              <h1 className="text-4xl md:text-3xl font-bold text-primary-foreground">
                <Link href="/blog" className="hover:underline">
                  Blog
                </Link>
              </h1>
            </section>

            <div className="my-4 h-px bg-primary-foreground/30" />

            {/*<h2 className="text-sm md:text-base text-primary-foreground/80 max-w-2xl">*/}
            <h2 className="text-gray-700 text-sm md:text-base text-primary-foreground/80 ">
              Thoughts, studies, research and insights
            </h2>
          </div>
        </header>

        {/* ✅ CONTEÚDO */}
        <Container>
          <article className="">
            <PostHeader
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
            />

            {/* 🔥 IMPORTANTE: evita desalinhamento do texto */}
            <div className="mt-10 ">
              {/*<div className="mt-10 max-w-3xl">*/}
              <PostBody content={content} />
            </div>
          </article>

          {/* ✅ CARROSSEL */}
          {/*<section className="mb-16">
            <PostCarousel posts={posts} />
          </section>*/}
        </Container>
      </main>
    </>
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

  if (!post) return notFound();

  const title = `${post.title} | Blog by Fagner Leal Pantoja`;

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
