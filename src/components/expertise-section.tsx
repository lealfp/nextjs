"use client";

// import AccordionItem from "./AccordionItem";
import Link from "next/link";
import { FaRegFilePdf } from "react-icons/fa6";

import { useState } from "react";

export default function ExpertiseSection() {
  const [open, setOpen] = useState(false);
  const items = [
    "Fullstack Developer",
    "Skills in Java, JavaScript, Arduino, Python",
    "NextJS, NodeJS, React, TailwindCSS, Clerk",
    "PostgreSQL, NoSQL, Docker, Linux",
    "Web Systems Specialist",
    "Software Architecture and Projects",
    "",
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

        <h3 className="text-2xl font-semibold tracking-tight">Expertise</h3>
        <span className="text-xl">{open ? "−" : "+"}</span>
      </div>

      <div
        className={`transition-all duration-300 overflow-hidden ${
          !open ? "max-h-1500 mt-1" : "max-h-0"
        }`}
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
          <ul className="space-y-3  leading-relaxed">
            {items.map((item, index) => (
              <li key={index} className="flex gap-2 text-left">
                {/*<span className="text-gray-500">[{index + 1}]</span>*/}
                {item}
                {/*<FaRegFilePdf className="mt-1 shrink-0" />*/}
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
  );
}
