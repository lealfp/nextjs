"use client";

// import AccordionItem from "./AccordionItem";
import Link from "next/link";
import { FaRegFilePdf } from "react-icons/fa6";

import { useState } from "react";

export default function ScholarSection() {
  const [open, setOpen] = useState(false);
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
    <section className="max-w-3xl mx-auto py-10">
      <div
        className="flex justify-between items-center cursor-pointer
                   px-5 py-4 rounded-xl
                   bg-muted/40 hover:bg-muted/70
                   border border-border
                   transition-all duration-200"
        onClick={() => setOpen(!open)}
      >
        {/*className="flex justify-between items-center cursor-pointer px-5 py-4 rounded-xl bg-muted/40 hover:bg-muted/70 border border-border transition-all duration-200"*/}

        <h3 className="text-2xl font-semibold tracking-tight">Scholar</h3>
        <span className="text-xl">{open ? "−" : "+"}</span>
      </div>

      <div
        className={`transition-all duration-300 overflow-hidden ${
          !open ? "max-h-1500 mt-1" : "max-h-0"
        }`}
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-1  bg-background rounded-2xl shadow-md p-6 hover:shadow-xl transition border border-border">
          {/*<div className="grid gap-4 p-4 border rounded-xl shadow-sm hover:shadow-md transition">*/}
          Active in the areas of Natural Language Processing, Information
          Retrieval, Language Models, Artificial Intelligence, Databases,
          Software Engineering, and Programming.
          <br /> <br />
          Collaborates on research in Medicine and Biology.
          <br /> <br /> 
          <h2 className="my-5 text-xl font-semibold mb-4">Publications</h2>
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
                    <span className="font-bold">{artigo.titulo}</span>,{" "}
                    {artigo.revista}.{/*<FaRegFilePdf />*/}
                  </span>
                  {/*<FileText className="w-4 h-4 mt-1 text-red-500" />*/}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
