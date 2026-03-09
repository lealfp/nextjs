export default function Home() {
  const projects = [
    {
      title: "Sistema SaaS Educacional",
      description:
        "Plataforma web para gestão acadêmica com autenticação, controle de acesso e pagamentos.",
      tech: ["Next.js", "Prisma", "PostgreSQL"],
      link: "#",
    },
    {
      title: "eCommerce",
      description:
        "Serviço backend para análise e estruturação de grandes volumes de dados.",
      tech: ["Node.js", "TypeScript", "Docker"],
      link: "#",
    },
    {
      title: "Agência de Serviços",
      description:
        "Serviço backend para análise e estruturação de grandes volumes de dados.",
      tech: ["Node.js", "TypeScript", "Docker"],
      link: "#",
    },

    {
      title: "Plataforma de Conteúdo Científico",
      description:
        "Sistema para publicação e organização de artigos acadêmicos.",
      tech: ["Next.js", "Tailwind", "Clerk"],
      link: "#",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-bold mb-6">Fagner Leal</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Desenvolvedor Fullstack | Doutor | Especialista em Sistemas Web,
          Arquitetura e Soluções Escaláveis.
        </p>
      </section>

      {/* Projetos */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
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
      </section>

      {/* Footer */}
      <footer className="text-center py-10 border-t text-gray-500">
        © {new Date().getFullYear()} Fagner Leal. Todos os direitos reservados.
      </footer>
    </main>
  );
}
