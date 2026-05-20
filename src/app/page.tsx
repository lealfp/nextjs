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
import ScholarSection from "@/components/scholar-section";
import ExpertiseSection from "@/components/expertise-section";
import { FaRegFilePdf } from "react-icons/fa6";

export default async function Home() {
  // const [showPortfolio, setShowPortfolio] = useState(true);
  // const user = await currentUser();
  // const posts = await getPosts();
  // const dbUserId = await getDbUserId();
  const artigos = [
    {
      titulo: "Semantic Representations based on Language Models",
      link: "https://repositorio.unicamp.br/acervo/detalhe/1509363",
      ano: "2025",
      autores: "Pantoja, F.",
      revista: "Ph.D. Thesis",
    },
    {
      titulo: "Generating knowledge networks from phenotypic descriptions",
      link: "https://repositorio.unicamp.br/acervo/detalhe/9754565",
      autores: "Pantoja, F.",
      ano: "2016",
      revista: "Master's Thesis",
    },
    {
      titulo:
        "A bibliographic survey of Neural Language Models with applications in topic modeling and clinical studies",
      link: "https://www.ic.unicamp.br/~reltech/2024/24-01.pdf",
      autores: "Pantoja, F., Santanchè, A., Medeiros, C.B.",
      ano: "2024",
      revista:
        "Technical Report of the Instituto de Computação at Universidade Estadual de Campinas",
    },
    {
      titulo:
        "Harena Semantics: A Framework to Support Semantic Annotation in Citizen Science Systems",
      link: "https://www.scitepress.org/Link.aspx?doi=10.5220/0010785300003123",
      autores: "Pantoja, F., Carvalho, M., Santanchè, A.",
      ano: "2022",
      revista:
        "5th International Joint Conference on Biomedical Engineering Systems and Technologies (HEALTHINF)",
    },
    {
      titulo: "Generating knowledge networks from phenotypic descriptions",
      link: "https://ieeexplore.ieee.org/abstract/document/7870885",
      autores: "Pantoja, F., Cavoto, P., dos Reis, J., Santanchè, A.",
      ano: "2016",
      revista: "IEEE 12th International Conference on e-Science",
    },

    {
      titulo: "Semantic Interpretation of Biological Identification Keys",
      link: "https://eventos.dexl.lncc.br/sbbd2015/anais/SatelliteEvents.pdf",
      ano: "2015",
      autores: "Pantoja, F., dos Reis, J., Santanchè, A.",
      revista: "Simpósio Brasileiro de Banco de Dados (SBBD)",
    },
  ];

  const projects = [
    {
      title: "Blog System",
      description:
        "A system for creating, editing, and sharing blog-style posts.",
      // "Sistema para criação, edição e compartilhamento de posts ao estilo blog.",
      tech: ["Next.js", "Prisma", "Markdown"],
      link: "blog",
    },
    {
      title: "Social Network",
      description:
        "Social network with user authentication, creation and interaction on posts, and a follower system.",
      tech: ["Next.js", "Clerk", "Prisma", "PostgreSQL"],
      link: "redesocial",
    },
    // {
    //   title: "Sistema Escolar",
    //   description:
    //     "Plataforma web para gestão acadêmica com autenticação, controle de acesso e pagamentos.",
    //   tech: ["Next.js", "Prisma", "PostgreSQL"],
    //   // link: "#",
    // },
    // {
    //   title: "Loja online.",
    //   description: "Serviço eCommerce utilizando Shopify",
    //   tech: ["Shopify", "TypeScript", "Docker"],
    //   // link: "#",
    // },
    {
      title: "Access control via electronic turnstile",
      description:
        "Control access system integrated to arduino-based electronic turnstile, integrated to a tichekts payment system.",
      tech: ["SIG-UFRN", "Arduino", "Java", "MicroServiços"],
      // link: "#",
    },
  ];
  const items = [
    [["Pytorch"], ["JuPyter"]],
    [["Git"], ["Markdown"], ["SEO"], ["Clerk"], ["Prisma"]],
    [
      ["Tailwind CSS"],
      ["NextJS"],

      ["NodeJS"],
      ["AdonisJS"],
      ["JSF"],
      ["Spring Boot"],
    ],
    [["Java"], ["JavaScript"], ["Python"], ["Arduino"]],
    [["PostgreSQL"], ["Solr"], ["NoSQL"]],
    [["Docker"], ["Linux"]],
  ];

  // return (

  // );
  return (
    <main>
      <header className="w-full border-b border-gray-200 bg-primary sticky top-16 backdrop-blur supports-[backdrop-filter]:bg-primary/90">
        {/*<div className="max-w-6xl mx-auto px-4 py-6">*/}
        <div className="container mx-auto px-5">
          <section className="flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-semibold text-primary-foreground">
              {/*Fagner Leal Pantoja*/}
              Research & Software Development
            </h1>
          </section>

          {/* DIVISOR */}
          {/*<div className="my-4 h-px bg-[#085c77]" />*/}
          {/*<div className="my-4 h-px bg-primary-foreground/30" />*/}

          {/* ID SECTION */}
          {/*<section className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-3">

              <h2 className="text-gray-700 text-sm md:text-base text-primary-foreground/80  ">

              </h2>
            </div>
          </section>*/}
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
              <section className="max-w-3xl mx-auto ">
                <h3 className="text-xl font-semibold text-3xl font-semibold">
                  Biography
                </h3>
                <br />
                Holds a Bachelor's degree (2014) in Computer Science from the
                Universidade Federal do Pará (UFPA), and a Master's degree
                (2016) and a Ph.D. (2025) from the Universidade Estadual de
                Campinas (UNICAMP), at the Instituto de Computação (IC).
                <br /> <br />
                Currently works at the Universidade Federal do Pará as an
                Information Technology Analyst, maintaining administrative
                systems such as SIPAC and the RU module.
                <br /> <br />
                Has experience in developing web applications, with expertise in
                technologies such as Node.js, Java, and PostgreSQL. Focuses on
                building modern, clean, and functional interfaces, delivering
                high-quality user experiences through performance, aesthetics,
                and usability.
                <div className="py-8">
                  Curriculum Lattes:{" "}
                  <a
                    href="http://lattes.cnpq.br/3730346542804597"
                    target="_blank"
                    rel="noopener noreferrer"
                    // className="flex hover:underline"
                    // className="space-y-6 inline-flex items-start gap-2 hover:underline"
                    className="text-sky-600 hover:text-sky-800 underline underline-offset-2"
                  >
                    http://lattes.cnpq.br/3730346542804597
                  </a>
                </div>
                <div className="py-2">
                  ORCID:{" "}
                  <a
                    href="https://orcid.org/0000-0003-1784-5512"
                    target="_blank"
                    rel="noopener noreferrer"
                    // className="flex hover:underline"
                    className="inline-flex items-start gap-2 text-sky-600 hover:text-sky-800 underline underline-offset-2"
                  >
                    https://orcid.org/0000-0003-1784-5512
                  </a>
                </div>
                <div className="py-8 ">
                  GitHub:{" "}
                  <a
                    href="https://github.com/lealfp"
                    target="_blank"
                    rel="noopener noreferrer"
                    // className="flex hover:underline"
                    // className="inline-flex items-start gap-2 hover:underline"
                    className="inline-flex items-start gap-2 text-sky-600 hover:text-sky-800 underline underline-offset-2"
                  >
                    https://github.com/lealfp
                  </a>
                </div>
                <section className="max-w-3xl mx-auto py-5">
                  <div
                    className="flex justify-between items-center
                               px-5 py-4 rounded-xl
                               bg-muted/40
                               border border-border
                               "
                    // onClick={() => setOpen(!open)}
                  >
                    {/*className="flex justify-between items-center cursor-pointer px-5 py-4 rounded-xl bg-muted/40 hover:bg-muted/70 border border-border transition-all duration-200"*/}

                    <h3 className="text-2xl font-semibold tracking-tight">
                      Scholar
                    </h3>
                    {/*<span className="text-xl">{open ? "−" : "+"}</span>*/}
                  </div>

                  <div
                  // className={`transition-all duration-300 overflow-hidden ${
                  //   !open ? "max-h-1500 mt-1" : "max-h-0"
                  // }`}
                  >
                    <div className="grid md:grid-cols-2 lg:grid-cols-1  bg-background rounded-2xl shadow-md p-6 hover:shadow-xl transition border border-border">
                      {/*<div className="grid gap-4 p-4 border rounded-xl shadow-sm hover:shadow-md transition">*/}
                      Research interests include Natural Language Processing,
                      Information Retrieval, Language Models, Artificial
                      Intelligence, Databases, Software Engineering, and
                      Programming.
                      <br /> <br />
                      Collaborates on research in Medicine and Biology.
                      <br /> <br />
                      <h2 className="my-5 text-xl font-semibold mb-4">
                        Publications
                      </h2>
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
                                <span className="font-bold">
                                  {artigo.titulo}
                                </span>
                                , {artigo.revista}.{/*<FaRegFilePdf />*/}
                              </span>
                              {/*<FileText className="w-4 h-4 mt-1 text-red-500" />*/}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>
                {/*<ScholarSection />*/}
                <section className="max-w-3xl mx-auto ">
                  <div
                    // onClick={() => setOpen(!open)}
                    // className="flex justify-between items-center px-5 py-4 rounded-xl bg-muted/40  border border-border transition-all duration-200"
                    className="flex justify-between items-center
                               px-5 py-4 rounded-xl
                               bg-muted/40
                               border border-border
                               transition-all duration-200"
                  >
                    {/*<h3 className="text-xl font-semibold text-3xl font-semibold #447405">*/}
                    <h3 className="text-2xl font-semibold tracking-tight">
                      {/*<span className="text-gray-500">({projects.length})</span>*/}
                      Portfolio{" "}
                    </h3>
                    {/*<h2 className="text-2xl font-bold mb-6">Portfolio</h2>*/}
                    {/*<span className="text-xl">{open ? "−" : "+"}</span>*/}
                  </div>

                  {/*<div
                  >
                    <div className="grid md:grid-cols-2 lg:grid-cols-1  bg-background rounded-2xl shadow-md p-6 hover:shadow-xl transition border border-border">*/}
                  <div
                  // className={`transition-all duration-300 overflow-hidden ${
                  //   !open ? "max-h-1500 mt-1" : "max-h-0"
                  // }`}
                  >
                    <div className="grid md:grid-cols-2 lg:grid-cols-1  bg-background rounded-2xl shadow-md p-6 hover:shadow-xl transition border border-border">
                      Available for select freelance opportunities. Check out my
                      portfolio:
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-5">
                        {projects.map((project, index) => (
                          <div
                            key={index}
                            className="bg-background rounded-2xl shadow-md p-6 hover:shadow-xl transition border border-border"
                          >
                            <h3 className="text-xl font-semibold mb-3">
                              <a
                                href={project.link}
                                className=" font-medium hover:underline"
                              >
                                {project.title}
                              </a>
                            </h3>

                            <p className=" mb-4">{project.description}</p>

                            {/*<div className="flex flex-wrap gap-2 mb-4">
                            {project.tech.map((tech, i) => (
                              <span
                                key={i}
                                className="bg-gray-50 text-background text-sm px-3 py-1 rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>*/}
                            {project.link && (
                              <a
                                href={project.link}
                                className=" font-medium hover:underline bg-[#25D366] hover:bg-[#1ebe5d] active:scale-95 transition-all duration-150 text-white font-semibold px-5 py-3 rounded-2xl shadow-lg hover:shadow-2xl border border-white/20"
                              >
                                View Project →
                              </a>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
                {/*<Accordion />*/}
                {/*<ExpertiseSection />*/}
                <section className="max-w-3xl mx-auto py-10">
                  <div
                    className="flex justify-between items-center
                               px-5 py-4 rounded-xl
                               bg-muted/40
                               border border-border
                               transition-all duration-200"
                    // onClick={() => setOpen(!open)}
                  >
                    {/*className="flex justify-between items-center cursor-pointer px-5 py-4 rounded-xl bg-muted/40 hover:bg-muted/70 border border-border transition-all duration-200"*/}

                    <h3 className="text-2xl font-semibold tracking-tight">
                      Expertise
                    </h3>
                    {/*<span className="text-xl">{open ? "−" : "+"}</span>*/}
                  </div>

                  <div
                  // className={`transition-all duration-300 overflow-hidden ${
                  //   !open ? "max-h-1500 mt-1" : "max-h-0"
                  // }`}
                  >
                    <div className="grid md:grid-cols-2 lg:grid-cols-1  bg-background rounded-2xl shadow-md p-6 hover:shadow-xl transition border border-border">
                      {/*<div
                        className="grid md:grid-cols-2 lg:grid-cols-1  bg-background rounded-2xl shadow-md p-6 hover:shadow-xl transition border border-border flex justify-between items-center cursor-pointer
                                  px-5 py-4 rounded-xl
                                  bg-muted/40 hover:bg-muted/70
                                  border border-border
                                  transition-all duration-200"
                      >*/}
                      {/*<section className="max-w-3xl mx-auto ">*/}
                      {/*<div className="">*/}
                      {/*<h3 className="text-2xl font-semibold tracking-tight ">
                            Expertise
                          </h3>*/}
                      {/*</div>*/}
                      {/*<div className="grid gap-4 p-4 border rounded-xl shadow-sm hover:shadow-md transition">*/}
                      {/*<ul className="space-y-3  leading-relaxed">*/}
                      {/*<ul className="flex flex-wrap gap-3 leading-relaxed">
                        {items.map((item, index) => (
                          <li key={index} className="flex gap-2 text-left">
                            <span
                              key={index}
                              className="bg-gray-50 text-background text-sm px-3 py-1 rounded-full"
                            >
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>*/}
                      Web Systems Specialist, Software Architect, and Fullstack
                      Developer with experience in the following technologies:
                      <ul className="space-y-3 py-5 bold text-2xl">
                        {items.map((row, rowIndex) => (
                          <li
                            key={rowIndex}
                            className="flex flex-wrap gap-3 list-none"
                          >
                            {row.map((item, itemIndex) => (
                              <span
                                key={itemIndex}
                                className="bg-gray-100 text-background text-sm px-4 py-2 rounded-2xl shadow-sm"
                              >
                                {item}
                              </span>
                            ))}
                          </li>
                        ))}
                      </ul>
                      {/*</div>*/}
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
                      {/*"text-2xl font-semibold tracking-tight ">
                                    Expertise
                                  </h3></section>*/}
                    </div>
                  </div>
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
