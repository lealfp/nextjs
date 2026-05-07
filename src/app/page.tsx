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
// import { FileText } from "lucide-react";
import { FaRegFilePdf } from "react-icons/fa6";

export default async function Home() {
  // const [showPortfolio, setShowPortfolio] = useState(true);
  // const user = await currentUser();
  // const posts = await getPosts();
  // const dbUserId = await getDbUserId();
  const items = [
    "Fullstack Developer",
    "Skills in Java, JavaScript, Arduino, Python",
    "NextJS, NodeJS, React, TailwindCSS, Clerk",
    "PostgreSQL, NoSQL, Docker, Linux",
    "Web Systems Specialist",
    "Software Architecture and Projects",
    "",
  ];
  const artigos = [
    {
      titulo:
        "A bibliographic survey of Neural Language Models with applications in topic modeling and clinical studies",
      link: "https://www.ic.unicamp.br/~reltech/2024/24-01.pdf",
      autores: "Pantoja, F., Santanchè, A., Medeiros, C.B.",
      ano: "2026",
      revista:
        "Technical Report of the Instituto de Computação at Universidade Estadual de Campinas",
    },
    {
      titulo:
        "Harena Semantics: A Framework to Support Semantic Annotation in Citizen Science Systems",
      link: "https://www.scitepress.org/Link.aspx?doi=10.5220/0010785300003123",
      autores: "Pantoja, F., Santanchè, A., Carvalho, M.",
      ano: "2022",
      revista:
        "5th International Joint Conference on Biomedical Engineering Systems and Technologies (HEALTHINF)",
    },
    {
      titulo: "Generating knowledge networks from phenotypic descriptions",
      link: "https://ieeexplore.ieee.org/abstract/document/7870885",
      autores: "Pantoja, F., Cavoto, P., dos Reis, J., SantSachè, A.",
      ano: "2016",
      revista: "IEEE 12th International Conference on e-Science",
    },

    {
      titulo: "Semantic Representations based on Language Models",
      link: "https://repositorio.unicamp.br/acervo/detalhe/1509363",
      ano: "2025",
      autores: "Pantoja, F.",
      revista: "Ph.D. Thesis",
    },
    {
      titulo: "Semantic Interpretation of Biological Identification Keys",
      link: "https://eventos.dexl.lncc.br/sbbd2015/anais/SatelliteEvents.pdf",
      ano: "2015",
      autores: "Pantoja, F., dos Reis, J., Santanchè, A.",
      revista: "Simpósio Brasileiro de Banco de Dados (SBBD)",
    },
  ];
  return (
    <main>
      <header className="w-full border-b border-gray-200 bg-primary sticky top-16 backdrop-blur supports-[backdrop-filter]:bg-primary/90">
        {/*<div className="max-w-6xl mx-auto px-4 py-6">*/}
        <div className="container mx-auto px-5">
          <section className="flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-semibold text-primary-foreground">
              Fagner Leal Pantoja
            </h1>
          </section>

          {/* DIVISOR */}
          {/*<div className="my-4 h-px bg-[#085c77]" />*/}
          <div className="my-4 h-px bg-primary-foreground/30" />

          {/* ID SECTION */}
          <section className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* ESQUERDA */}
            <div className="flex items-center gap-3">
              {/*<img src="/orcid-logo.svg" alt="orcid" className="w-8 h-8" />*/}

              <h2 className="text-gray-700 text-sm md:text-base text-primary-foreground/80  ">
                Researcher and Full-Stack Software Developer
                {/*https://orcid.org/0000-0002-3928-5432*/}
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
      <div className="">
        {/*<div className="max-w-6xl mx-auto px-4">*/}
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-12 ">
            <div className="hidden lg:block lg:col-span-3">
              {/*<Sidebar />*/}
              <SidebarHome />
            </div>

            {/*<Cards />*/}

            <div className="lg:col-span-9">
              <section className="max-w-3xl mx-auto py-10">
                <h3 className="text-xl font-semibold text-3xl font-semibold">
                  Biography
                </h3>
                <br />
                Holds a Bachelor's degree (2014) in Computer Science from the
                Universidade Federal do Pará (UFPA), and a Master's degree
                (2016) and a Ph.D. (2025) from the Universidade Estadual de
                Campinas (UNICAMP), at the Institute of Computing (IC).
                <br /> <br />
                Currently works at the Universidade Federal do Pará as an
                Information Technology Analyst, maintaing administrative systems
                such as SIPAC and the RU module.
                <br /> <br />
                Has experience in developing modern web applications, with
                expertise includes technologies such as Node.js, Java, and
                PostgreSQL. Focuses on building clean, functional interfaces and
                delivering a strong user experience by combining performance,
                aesthetics, and usability.
                <br /> <br />
                Available for select freelance opportunities.
                <section className="max-w-3xl mx-auto py-10">
                  <div
                    className="flex justify-between items-center cursor-pointer
                               px-5 py-4 rounded-xl
                               bg-muted/40 hover:bg-muted/70
                               border border-border
                               transition-all duration-200"
                  >
                    <h3 className="text-2xl font-semibold tracking-tight">
                      Scholar
                    </h3>
                  </div>
                  <div className="grid gap-4 p-4 border rounded-xl shadow-sm hover:shadow-md transition">
                    Active in the areas of Natural Language Processing,
                    Information Retrieval, Language Models, Artificial
                    Intelligence, Databases, Software Engineering, and
                    Programming.
                    <br /> <br />
                    Collaborates on research in Medicine and Biology.
                    <br /> <br />
                    <h2 className="text-xl font-semibold mb-4">Publications</h2>
                    <ul className="space-y-3  leading-relaxed">
                      {artigos.map((artigo, index) => (
                        <li key={index} className="flex gap-2 text-left">
                          {/*<span className="text-gray-500">[{index + 1}]</span>*/}
                          <FaRegFilePdf className="mt-1 shrink-0" />
                          <a
                            href={artigo.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            // className="flex hover:underline"
                            className="flex items-start gap-2 hover:underline"
                          >
                            <span className="">
                              {artigo.autores}, {artigo.ano},{" "}
                              <span className="font-bold">{artigo.titulo}</span>
                              , {artigo.revista}.{/*<FaRegFilePdf />*/}
                            </span>
                            {/*<FileText className="w-4 h-4 mt-1 text-red-500" />*/}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>
                <Accordion />
                <section className="max-w-3xl mx-auto ">
                  <div
                    className="flex justify-between items-center cursor-pointer
                               px-5 py-4 rounded-xl
                               bg-muted/40 hover:bg-muted/70
                               border border-border
                               transition-all duration-200"
                  >
                    <h3 className="text-2xl font-semibold tracking-tight ">
                      Expertise
                    </h3>
                  </div>
                  <div className="grid gap-4 p-4 border rounded-xl shadow-sm hover:shadow-md transition">
                    <ul className="space-y-3  leading-relaxed">
                      {items.map((item, index) => (
                        <li key={index} className="flex gap-2 text-left">
                          {/*<span className="text-gray-500">[{index + 1}]</span>*/}
                          {item}
                          {/*<FaRegFilePdf className="mt-1 shrink-0" />*/}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/*<ul className="grid gap-4 p-4 border rounded-xl shadow-sm hover:shadow-md transition">
                    {items.map((item, index) => (
                      <li
                        key={index}
                        // className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
                        className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-700 transition hover:border-zinc-300 hover:bg-white dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300"
                        // className="p-4 border rounded-xl shadow-sm hover:shadow-md transition"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>*/}
                </section>
              </section>
              {/*<section className="max-w-6xl mx-auto px-6 pb-20">*/}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
