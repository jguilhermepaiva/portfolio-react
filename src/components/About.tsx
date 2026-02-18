import React from "react";
import { Button } from "./Button";
import profilePic from "../assets/profile.png";

import { FaReact, FaPython, FaHtml5, FaCss3Alt, FaGitAlt, FaAws, FaNodeJs, FaDocker } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiTypescript,
  SiNextdotjs,
  SiPostgresql,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiJest,
  SiStorybook,
  SiNumpy,
  SiPandas,
} from "react-icons/si";
import Marquee from "react-fast-marquee";

const Skill: React.FC<{ icon: React.ReactNode }> = ({ icon }) => (
  <div className="flex flex-col items-center p-4 mx-4">
    {" "}
    {/* Ajustei o espaçamento */}
    <div className="text-5xl text-text-secondary transition-colors duration-300 hover:text-primary">{icon}</div>
  </div>
);

export const About: React.FC = () => {
  // 2. EXPANDINDO A LISTA DE HABILIDADES
  const skills = [
    // Front-end - Sua especialidade principal
    { icon: <FaReact />, name: "React" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <IoLogoJavascript />, name: "JavaScript" },
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3Alt />, name: "CSS3" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },

    // Back-end & Cloud - Foco no seu objetivo Cloud Engineer
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express" }, // Adicionado
    { icon: <FaPython />, name: "Python" },
    { icon: <FaAws />, name: "AWS" },
    { icon: <FaDocker />, name: "Docker" },
    { icon: <SiPostgresql />, name: "PostgreSQL" }, // Adicionado
    { icon: <SiMongodb />, name: "MongoDB" }, // Adicionado

    // Tools & Testing - Diferencial para vagas internacionais
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <SiJest />, name: "Jest" },
    { icon: <SiStorybook />, name: "Storybook" },

    // Academic Background / Data Science
    { icon: <SiNumpy />, name: "NumPy" },
    { icon: <SiPandas />, name: "Pandas" },
  ];

  return (
    // Container da seção com espaçamento vertical
    <section className="py-24" id="about">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-10 md:grid-cols-2">
        <div className="relative h-100 w-full">
          <div className="absolute bg-[#55E5A4] bottom-10 md:right-100 h-full w-[180px]  bg-primary"></div>
          <div className="absolute top-0 left-5 h-full w-full -translate-x-4 -translate-y-4">
            <div className="h-full w-full rounded-lg  object-cover">
              <img src={profilePic} alt="Sua Foto" className="h-[450px] w-[400px] rounded-lg" />
            </div>
          </div>
        </div>

        {/* COLUNA DA DIREITA: TEXTO */}
        <div className="flex flex-col items-start gap-6 text-left">
          {/* Título da Seção */}
          <div className="flex flex-col items-start gap-2 max-md:mt-10">
            <h2 className="text-4xl font-bold">Sobre mim</h2>
            <p className="text-text-secondary">— Who Am I? —</p>
          </div>

          {/* Parágrafo de descrição */}
          <p className="text-lg text-text-secondary">
            Sou Bacharel em Ciência da Computação pela UFPE e atuo como Engenheiro de Software Full-stack com 4 anos de experiência prática. Especialista no ecossistema React e TypeScript, tenho um histórico de liderança técnica na modernização de sistemas complexos e, atualmente, foco na construção de produtos escaláveis (SaaS) como Co-fundador do Freela Flow. Unindo rigor acadêmico e infraestrutura em nuvem, busco sempre entregar valor real através de arquiteturas limpas e eficientes.
          </p>

          <div className="w-full mt-4">
            <Marquee
              pauseOnHover={true}
              speed={15}
              gradient={true}
              gradientColor="#151C25" // Cor de fundo da sua seção
              gradientWidth={50}
            >
              {skills.map((skill) => (
                <Skill key={skill.name} icon={skill.icon} />
              ))}
            </Marquee>
          </div>

          {/* Botão de Download */}
          <div className="mt-8 max-md:self-center">
            <a href="/Curriculo_Joao_Guilherme.pdf.pdf" download="Curriculo_Joao_Guilherme.pdf">
              <Button variant="outline">Download Currículo</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
