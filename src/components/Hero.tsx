import React from "react";
import { Button } from "./Button";
import profilePic from "../assets/profile.webp";

export const Hero: React.FC = () => {
  return (
    <section className="grid min-h-[80vh] grid-cols-1 items-center gap-12 px-5 py-8 sm:px-10 md:grid-cols-2">
      <div className="flex items-center justify-center md:order-2">
        <div className="grid h-96 w-96 items-center justify-center">
          <div className="bg-[#55E5A4] col-start-1 row-start-1 h-full w-full animate-blob overflow-hidden rounded-[45%_35%_70%_30%_/_30%_50%_50%_70%] bg-primary p-1"></div>
          <div className="col-start-1 row-start-1 h-full w-full p-1 overflow-hidden rounded-[45%_35%_70%_30%_/_30%_50%_50%_70%]">
            <img
              src={profilePic}
              alt="Foto de Perfil de João Guilherme"
              className="h-full w-full max-w-[400px] max-h-[400px] -translate-y-[-10px] object-cover"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-10 text-center md:order-1 md:text-left">
        <p className="text-lg text-text-secondary">João Guilherme Pontes de Paiva</p>
        <h1 className="text-5xl font-bold leading-tight lg:text-7xl">
          <span className="text-primary">Desenvolvedor Front-end</span> React e TypeScript.
        </h1>
        <p className="max-w-xl text-lg text-text-secondary">
          Desenvolvedor apaixonado por programação web, com 2 anos de experiência na criação de interfaces modernas e
          funcionais. Atuo principalmente com React, TypeScript, integração de APIs REST e metodologias ágeis, sempre
          buscando evoluir e contribuir de forma completa para os projetos.
        </p>

        <div className="self-center md:self-start">
          <Button variant="primary">Conheça mais</Button>
        </div>
      </div>
    </section>
  );
};
