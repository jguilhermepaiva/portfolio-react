import React from 'react';
import { Button } from './Button'; 
import profilePic from '../assets/profile.webp';

import {
  FaReact,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaAngular,
  FaNodeJs,
  FaDocker,
} from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import {
  SiTypescript,
  SiNextdotjs,
  SiPostgresql,
  SiMongodb,
  SiExpress,
} from 'react-icons/si';
import Marquee from 'react-fast-marquee';


const Skill: React.FC<{ icon: React.ReactNode }> = ({ icon }) => (
  <div className="flex flex-col items-center p-4 mx-4"> {/* Ajustei o espaçamento */}
    <div className="text-5xl text-text-secondary transition-colors duration-300 hover:text-primary">
      {icon}
    </div>
  </div>
);

export const About: React.FC = () => {
  // 2. EXPANDINDO A LISTA DE HABILIDADES
  const skills = [
    // Front-end
    { icon: <FaReact />, name: 'React' },
    { icon: <IoLogoJavascript />, name: 'JavaScript' },
    { icon: <SiTypescript />, name: 'TypeScript' },
    { icon: <SiNextdotjs />, name: 'Next.js' },
    { icon: <FaAngular />, name: 'Angular' },
    { icon: <FaHtml5 />, name: 'HTML5' },
    { icon: <FaCss3Alt />, name: 'CSS3' },
    // Back-end
    { icon: <FaNodeJs />, name: 'Node.js' },
    { icon: <SiExpress />, name: 'Express' },
    { icon: <FaPython />, name: 'Python' },
    // Database & DevOps
    { icon: <SiPostgresql />, name: 'PostgreSQL' },
    { icon: <SiMongodb />, name: 'MongoDB' },
    { icon: <FaDocker />, name: 'Docker' },
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
            Sou um desenvolvedor apaixonado pelo que faço, com 2 anos de experiência na criação de interfaces modernas e funcionais com React e TypeScript. Tenho experiência com integração de APIs REST, versionamento com Git e metodologias ágeis. Também tenho alguma vivência no back-end com Node.js e Python, e estou sempre em busca de novos aprendizados para evoluir como profissional.
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
                <Skill key={skill.name} icon={skill.icon}/>
              ))}
            </Marquee>
          </div>

          {/* Botão de Download */}
          <div className="mt-8 max-md:self-center">
            <Button variant="outline">Download Currículo</Button>
          </div>

        </div>
      </div>
    </section>
  );
};