import React from "react";
import { ProjectCard } from "./ProjectCard";

export const Projects: React.FC = () => {
  const myProjects = [
    {
      title: "Freela Flow",
      description:
        "Plataforma SaaS para gestão de freelancers, focada em organização de fluxo de trabalho e faturamento.",
      tags: ["React", "TypeScript", "Node.js", "AWS"],
      // githubUrl: REMOVIDO PARA ESTE PROJETO
      liveUrl: "https://freelaflow.ai/", 
      images: [
        "/freelaflow1.png", 
        "/freelaflow2.png",
        "/freelaflow3.png",
        "/freelaflow4.png",
      ],
    },
    {
      title: "Shopify Data Sync Tool",
      description: "Micro-SaaS focado na sincronização de dados automatizada para lojistas internacionais.",
      tags: ["Python", "React", "AWS", "Shopify API"],
      githubUrl: "#", // Este continua aparecendo
      liveUrl: "https://feedflow-frontend.vercel.app/",
      images: ["/feedflow1.png", "/feedflow2.png", "/feedflow3.png", "/feedflow4.png"],
    },
    {
      title: "Settle Up",
      description: "Utilitário para divisão de despesas em grupo, com cálculos automáticos de quem deve para quem.",
      tags: ["React", "Context API", "TypeScript"],
      githubUrl: "#",
      liveUrl: "https://settle-up-nu.vercel.app/",
      images: ["/settleup1.png", "/settleup2.png", "/settleup3.png"],
    },
    {
      title: "Advanced Todo List",
      description: "Gerenciador de tarefas com persistência de dados e filtros de categoria.",
      tags: ["React", "Local Storage", "CSS Modules"],
      githubUrl: "#",
      liveUrl: "https://todo-project-three-omega.vercel.app/",
      images: ["/todo1.png"],
    },
  ];

  return (
    <section className="py-24 px-5 sm:px-10 bg-[#0f1623]" id="projects">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-4xl font-bold text-white">Projetos</h2>
          <p className="text-gray-400 mt-2">— Meus Trabalhos Recentes —</p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {myProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};