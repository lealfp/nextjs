import { getPosts } from "@/actions/post.action";
import { getDbUserId } from "@/actions/user.action";
import CreatePost from "@/components/CreatePost";
import PostCard from "@/components/PostCard";
import WhoToFollow from "@/components/WhoToFollow";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser();
  const posts = await getPosts();
  const dbUserId = await getDbUserId();

  const projects = [
    {
      title: "Rede Social",
      description:
        "Rede social com autenticação de usuários, criação e interação em publicações, sistema de seguidores.",
      tech: ["Next.js", "Prisma", "PostgreSQL"],
      link: "redesocial",
    },
    {
      title: "Sistema SaaS Educacional",
      description:
        "Plataforma web para gestão acadêmica com autenticação, controle de acesso e pagamentos.",
      tech: ["Next.js", "Prisma", "PostgreSQL"],
      link: "#",
    },
    {
      title: "Loja online.",
      description: "Serviço eCommerce utilizando Shopify",
      tech: ["Shopify", "TypeScript", "Docker"],
      link: "#",
    },
    {
      title: "Controle de Acesso via catraca eletrônica",
      description: "Serviço eCommerce utilizando Shopify",
      tech: ["SIG-UFRN", "Arduino", "Java", "MicroServiços"],
      link: "#",
    },
    // {
    //   title: "Plataforma de Conteúdo Científico",
    //   description:
    //     "Sistema para publicação e organização de artigos acadêmicos.",
    //   tech: ["Next.js", "Tailwind", "Clerk"],
    //   link: "#",
    // },
  ];

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-bold mb-6">Fagner Leal Pantoja</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto text-left">
          Desenvolvedor Fullstack
        </p>

        <p className="text-xl text-gray-600 max-w-2xl mx-auto text-left w-[150%]">
          Habilidades em Java, JavaScript, Node.js, React, Postgres, Docker,
          Linux
        </p>

        <p className="text-xl text-gray-600 max-w-2xl mx-auto text-left">
          Especialista em Sistemas Web
        </p>

        <p className="text-xl text-gray-600 max-w-2xl mx-auto text-left">
          Arquitetura e Projetos de Software
        </p>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto text-left">
          Mestre/Doutor em Ciência da Computação
        </p>
      </section>
      {/* Projetos */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-semibold mb-12 text-center">Portfólio</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>

              <p className="text-gray-600 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 text-sm px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                className="text-blue-600 font-medium hover:underline"
              >
                Ver projeto →
              </a>
            </div>
          ))}
        </div>
      </section>
      {/* Projetos */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-semibold mb-12 text-center">Acadêmico</h2>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 text-left">
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Processsamento de Linguagem Natural
        </p>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Modelos de Linguagem
        </p>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Inteligência Artificial
        </p>
      </section>
      {/* Projetos */}
      {/*<section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-semibold mb-12 text-center">Projetos</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>

              <p className="text-gray-600 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 text-sm px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                className="text-blue-600 font-medium hover:underline"
              >
                Ver projeto →
              </a>
            </div>
          ))}
        </div>
      </section>*/}
      {/* Footer */}
      <footer className="text-center py-10 border-t text-gray-500">
        © {new Date().getFullYear()} Fagner Leal. Todos os direitos reservados.
      </footer>
    </main>
  );
  // return (
  //   <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
  //     <div className="lg:col-span-6">
  //       {user ? <CreatePost /> : null}

  //       <div className="space-y-6">
  //         {posts.map((post) => (
  //           <PostCard key={post.id} post={post} dbUserId={dbUserId} />
  //         ))}
  //       </div>
  //     </div>

  //     <div className="hidden lg:block lg:col-span-4 sticky top-20">
  //       <WhoToFollow />
  //     </div>
  //   </div>
  // );
}
