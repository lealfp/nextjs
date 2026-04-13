// "use client";
import { getPosts } from "@/actions/post.action";
import { getDbUserId } from "@/actions/user.action";
import CreatePost from "@/components/CreatePost";
import PostCard from "@/components/PostCard";
import WhoToFollow from "@/components/WhoToFollow";
import { currentUser } from "@clerk/nextjs/server";
import Sidebar from "@/components/Sidebar";
import SidebarHome from "@/components/SidebarHome";
// import Cards from "@/components/Cards";
import Accordion from "@/components/Accordion";

export default async function Home() {
  // const [showPortfolio, setShowPortfolio] = useState(true);
  const user = await currentUser();
  // const posts = await getPosts();
  const dbUserId = await getDbUserId();

  return (
    <main>
      <header className="w-full border-b border-gray-200 bg-primary">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <section className="flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-semibold text-primary-foreground">
              Fagner Leal Pantoja
            </h1>
          </section>

          {/* DIVISOR */}
          <div className="my-4 h-px bg-[#085c77]" />

          {/* ID SECTION */}
          <section className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* ESQUERDA */}
            <div className="flex items-center gap-3">
              {/*<img src="/orcid-logo.svg" alt="orcid" className="w-8 h-8" />*/}

              <h2 className="text-gray-700 text-sm md:text-base text-primary-foreground">
                https://orcid.org/0000-0002-3928-5432
              </h2>
            </div>
          </section>
        </div>
      </header>
      {/* Hero */}
      {/*<aside className="sidebar">
        <img src="/profile.jpg" className="avatar" />

        <h2>Fagner Leal</h2>

        <p className="orcid">ORCID: 0000-0000-0000-0000</p>

        <div className="links">
          <a href="#">Google Scholar</a>
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
        </div>
      </aside>
      */}
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="hidden lg:block lg:col-span-3">
              {/*<Sidebar />*/}
              <SidebarHome />
            </div>

            {/*<Cards />*/}

            <div className="lg:col-span-9">
              {/* Projetos */}

              {/*<button
                onClick={() => setShowPortfolio(!showPortfolio)}
                className="mb-6 px-4 py-2 bg-primary text-primary-foreground rounded-lg"
              >
                {showPortfolio ? "Esconder Portfólio" : "Mostrar Portfólio"}
              </button>*/}

              {/*<section className="max-w-6xl mx-auto px-6 pb-20">*/}
              <section className="max-w-3xl mx-auto py-10">
                <h3 className="text-xl font-semibold text-3xl font-semibold">
                  Biography
                </h3>
                <Accordion />
                {/*<section className="max-w-6xl mx-auto px-6 py-20 text-center">*/}
                {/*<h1 className="text-5xl font-bold mb-6">Expertise</h1>*/}
                {/*<h2 className="text-3xl font-semibold mb-12 text-center">*/}
                <h3 className="text-xl font-semibold text-3xl font-semibold">
                  Expertise
                </h3>

                <p className="text-xl text-gray-600 max-w-2xl mx-auto text-left">
                  Fullstack Developer
                </p>

                <p className="text-xl text-gray-600 max-w-2xl mx-auto text-left w-[150%]">
                  Habilidades em Java, JavaScript, Node.js, React, Postgres,
                  Docker, Linux
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

              {/*<section className="max-w-6xl mx-auto px-6 pb-20">*/}
              <section className="max-w-3xl mx-auto py-10">
                {/*<h2 className="text-3xl font-semibold mb-12 text-center">*/}
                <h3 className="text-xl font-semibold text-3xl font-semibold">
                  Acadêmico
                </h3>
              </section>

              {/*<p className="text-left text-muted-foreground mb-4">*/}
              <p className="text-xl text-gray-600 max-w-2xl mx-auto text-left">
                Bachelor on Computer Science at UFPA
              </p>

              {/*<p className="text-left text-muted-foreground mb-4">*/}
              <p className="text-xl text-gray-600 max-w-2xl mx-auto text-left">
                Master on Computer Science at Unicamp
              </p>

              <p className="text-xl text-gray-600 max-w-2xl mx-auto text-left">
                {/*<p className="text-left text-muted-foreground mb-4">*/}
                Doctor on Computer Science at Unicamp
              </p>

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
                {/*</section>*/}
              </section>

              <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
                {/*<div className="lg:col-span-6">
                  {user ? <CreatePost /> : null}

                  <div className="space-y-6">
                    {posts.map((post) => (
                      <PostCard key={post.id} post={post} dbUserId={dbUserId} />
                    ))}
                  </div>
                </div>

                <div className="hidden lg:block lg:col-span-4 sticky top-20">
                  <WhoToFollow />
                </div>*/}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projetos */}

      <footer className="text-center py-10 border-t text-gray-500 bg-[#f5f5f5]">
        © {new Date().getFullYear()} Fagner Leal. Todos os direitos reservados.
      </footer>
    </main>
  );
}
