import React from 'react';
import { Button } from './Button';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export const Contact: React.FC = () => {
  return (
    <section className="py-24 px-5 sm:px-10" id="contact">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <h2 className="text-4xl font-bold">Contato</h2>
          <p className="text-text-secondary">— Vamos conversar? —</p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* COLUNA DA ESQUERDA: INFORMAÇÕES */}
          <div className="flex flex-col gap-8">
            <p className="text-lg text-text-secondary leading-relaxed">
              Estou sempre aberto a novas oportunidades, colaborações em projetos SaaS 
              ou apenas para trocar uma ideia sobre arquitetura de software e Cloud.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <p className="text-sm text-text-secondary">E-mail</p>
                  <a href="mailto:jguilhermeppaiva@gmail.com" className="text-lg font-medium hover:text-primary transition-colors">
                    jguilhermeppaiva@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <p className="text-sm text-text-secondary">Localização</p>
                  <p className="text-lg font-medium text-text">Recife, PE</p>
                </div>
              </div>
            </div>

            {/* LINKS SOCIAIS */}
            <div className="mt-4 flex gap-4">
              <a 
                href="https://github.com/jguilhermepaiva" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-lg border-2 border-text-secondary/20 text-text-secondary transition-all hover:border-primary hover:text-primary"
              >
                <FaGithub size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/joao-guilherme-pontes-de-paiva/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-lg border-2 border-text-secondary/20 text-text-secondary transition-all hover:border-primary hover:text-primary"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* COLUNA DA DIREITA: FORMULÁRIO */}
          <form 
            action="https://formspree.io/f/xwvnqowq" 
            method="POST"
            className="flex flex-col gap-4 rounded-xl bg-[#1e2733] p-8 shadow-xl"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium">Nome</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required
                className="rounded-lg bg-[#151C25] border-2 border-transparent p-3 focus:border-primary outline-none transition-all"
                placeholder="Seu nome completo"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium">E-mail</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required
                className="rounded-lg bg-[#151C25] border-2 border-transparent p-3 focus:border-primary outline-none transition-all"
                placeholder="seuemail@exemplo.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium">Mensagem</label>
              <textarea 
                id="message" 
                name="message" 
                rows={4} 
                required
                className="rounded-lg bg-[#151C25] border-2 border-transparent p-3 focus:border-primary outline-none transition-all resize-none"
                placeholder="Como posso te ajudar?"
              ></textarea>
            </div>

            <Button variant="primary" className="mt-4 w-full" type='submit'>
              Enviar Mensagem
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};