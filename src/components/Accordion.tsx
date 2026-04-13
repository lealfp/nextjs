"use client";

// import AccordionItem from "./AccordionItem";

import { useState } from "react";

const projects = [
  {
    title: "Rede Social",
    description:
      "Rede social com autenticação de usuários, criação e interação em publicações, sistema de seguidores.",
    tech: ["Next.js", "Prisma", "PostgreSQL"],
    link: "redesocial",
  },
  {
    title: "Sistema Escolar",
    description:
      "Plataforma web para gestão acadêmica com autenticação, controle de acesso e pagamentos.",
    tech: ["Next.js", "Prisma", "PostgreSQL"],
    link: "#",
  },
  {
    title: "Loja online.",
    description: "Serviço eCommerce utilizando Shopify",
    tech: ["Shopify", "TypeScript", "Docker"],
    // link: "#",
  },
  {
    title: "Controle de Acesso via catraca eletrônica",
    description: "Serviço eCommerce utilizando Shopify",
    tech: ["SIG-UFRN", "Arduino", "Java", "MicroServiços"],
    link: "#",
  },
];

export default function Accordion() {
  const [open, setOpen] = useState(false);

  return (
    <section className="max-w-3xl mx-auto py-10">
      <div
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center cursor-pointer"
      >
        <h3 className="text-xl font-semibold text-3xl font-semibold">
          Portfolio <span className="text-gray-500">({projects.length})</span>
        </h3>

        {/*<h2 className="text-2xl font-bold mb-6">Portfolio</h2>*/}
        <span className="text-xl">{open ? "−" : "+"}</span>
      </div>

      <div
        className={`transition-all duration-300 overflow-hidden ${
          open ? "max-h-1500 mt-4" : "max-h-0"
        }`}
      >
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

        {/*<p className="text-sm mb-2">
          📍 {item.city}, {item.country}
        </p>

        {item.link && (
          <a href={item.link} className="text-primary hover:underline text-sm">
            Ver organização →
          </a>
        )}*/}
        {/*</div>*/}
      </div>
    </section>
  );
}
