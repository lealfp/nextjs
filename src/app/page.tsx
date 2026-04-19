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
  // const user = await currentUser();
  // const posts = await getPosts();
  // const dbUserId = await getDbUserId();
  const items = [
    "Fullstack Developer",
    "Skills in Java, JavaScript, Node.js, React, PostgreSQL, Docker, Linux",
    "Web Systems Specialist",
    "Software Architecture and Projects",
  ];
  const artigos = [
    {
      titulo:
        "A bibliographic survey of Neural Language Models with applications in topic modeling and clinical studies",
      link: "https://www.ic.unicamp.br/~reltech/2024/24-01.pdf",
    },
    {
      titulo:
        "Harena Semantics: A Framework to Support Semantic Annotation in Citizen Science Systems",
      link: "https://www.scitepress.org/Link.aspx?doi=10.5220/0010785300003123",
    },
    {
      titulo: "Generating knowledge networks from phenotypic descriptions",
      link: "https://ieeexplore.ieee.org/abstract/document/7870885",
    },
    {
      titulo: "Semantic Representations based on Language Models",
      link: "https://repositorio.unicamp.br/acervo/detalhe/1509363",
    },
    {
      titulo: "Semantic Interpretation of Biological Identification Keys",
      link: "https://eventos.dexl.lncc.br/sbbd2015/anais/SatelliteEvents.pdf",
    },
  ];
  return (
    <main>
      <header className="w-full border-b border-gray-200 bg-primary sticky top-16 backdrop-blur supports-[backdrop-filter]:bg-primary/90">
        <div className="max-w-6xl mx-auto px-4 py-6">
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
                Systems Analyst and Software Developer
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
        <div className="max-w-6xl mx-auto px-4">
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
                Federal University of Pará (UFPA) and Master's (2016) and
                Doctorate (2025) degrees from the State University of Campinas
                (UNICAMP), at the Institute of Computing (IC).
                <br /> <br />
                Currently working on Universidade Federal do Pará as Technology
                Information Analyst. Hw works maintaing the administrative
                systems, like: SIPAC, RU module, etc.
                <br /> <br />
                Experience focuses on developing modern digital solutions.
                Expertise includes creating web applications using technologies
                such as Node.js and Java, with a focus on building clean,
                functional interfaces and a good user experience, always
                striving to combine performance, aesthetics, and usability.
                <br /> <br />
                Available for select freelance opportunities.
                {/*Possui títulos de Bacharel (2014) em Ciência da Computação pela
                Universidade Federal do Pará (UFPA) e de Mestre (2016) e Doutor
                (2025) pela Universidade Estadual de Campinas (UNICAMP), no
                Instituto de Computação (IC).
                Com atuação no desenvolvimento de soluções digitais modernas.
                Experiência na criação de aplicações web utilizando tecnologias
                como Node.js e Java, com foco na construção de interfaces
                limpas, funcionais e com boa experiência para o usuário,
                buscando sempre unir desempenho, estética e usabilidade.*/}
                {/*
                longo da trajetória, foram desenvolvidos projetos que envolvem
                desde a estruturação de páginas e sistemas até a implementação
                de funcionalidades interativas, como componentes dinâmicos,
                integração com APIs e otimização para diferentes dispositivos.
                Também há experiência na configuração de deploys, domínios e
                ambientes de produção, garantindo que as aplicações estejam
                acessíveis, seguras e performáticas. As habilidades incluem
                desenvolvimento front-end moderno, organização de código, uso de
                boas práticas com componentes reutilizáveis e adaptação a
                diferentes necessidades de projeto. Além disso, há um
                compromisso contínuo com o aprendizado e a evolução técnica,
                acompanhando as tendências do ecossistema web.
                A seguir, são apresentados alguns dos projetos desenvolvidos,
                que refletem a evolução prática e técnica na área.*/}
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
                  <ul className="grid gap-4 p-4 border rounded-xl shadow-sm hover:shadow-md transition">
                    {items.map((item, index) => (
                      <li
                        key={index}
                        // className="p-4 border rounded-xl shadow-sm hover:shadow-md transition"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              </section>
              {/*<section className="max-w-6xl mx-auto px-6 pb-20">*/}
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
                  <ul className="list-disc pl-5 space-y-2">
                    {artigos.map((artigo, index) => (
                      <li key={index}>
                        <a
                          href={artigo.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          {artigo.titulo}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      {/* Projetos */}

      <footer className="text-center py-10 border-t text-gray-500 bg-[#f5f5f5]">
        © {new Date().getFullYear()} Fagner Leal. All rights reserved.
      </footer>
    </main>
  );
}
