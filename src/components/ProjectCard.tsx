import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string; // <--- AGORA É OPCIONAL (tem o ?)
  liveUrl?: string;
  images: string[];
}

export const ProjectCard: React.FC<ProjectProps> = ({ title, description, tags, githubUrl, liveUrl, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <>
      <div className="group overflow-hidden rounded-xl bg-[#1e2733] transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 flex flex-col h-full">
        {/* Container da Imagem */}
        <div 
          className="relative h-48 w-full overflow-hidden cursor-zoom-in"
          onClick={() => setIsModalOpen(true)}
        >
          <img 
            src={images[currentIndex]} 
            alt={`${title} screenshot ${currentIndex + 1}`} 
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
          />
          
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none">
            <span className="bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">Ver Imagem</span>
          </div>

          {images.length > 1 && (
            <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 transition-opacity group-hover:opacity-100">
              <button onClick={prevImage} className="rounded-full bg-black/60 p-1.5 text-white hover:bg-primary transition-colors hover:scale-110 z-10">
                <FaChevronLeft size={14} />
              </button>
              <button onClick={nextImage} className="rounded-full bg-black/60 p-1.5 text-white hover:bg-primary transition-colors hover:scale-110 z-10">
                <FaChevronRight size={14} />
              </button>
            </div>
          )}

          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5 z-10">
            {images.map((_, idx) => (
              <div 
                key={idx} 
                className={`h-1.5 w-1.5 rounded-full transition-all shadow-sm ${idx === currentIndex ? 'bg-primary w-3' : 'bg-white/70'}`}
              />
            ))}
          </div>
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map(tag => (
              <span key={tag} className="text-[10px] uppercase tracking-wider font-bold text-primary bg-primary/10 px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
          <p className="text-gray-400 text-sm mb-6 line-clamp-3 flex-grow">{description}</p>
          
          <div className="flex gap-4 pt-4 border-t border-gray-700">
            {/* --- SÓ RENDERIZA SE TIVER URL --- */}
            {githubUrl && (
              <a 
                href={githubUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-primary transition-colors"
              >
                <FaGithub size={18} /> Code
              </a>
            )}

            {liveUrl && (
              <a 
                href={liveUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-primary transition-colors"
              >
                <FaExternalLinkAlt size={16} /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors p-2"
            >
              <FaTimes size={24} />
            </button>
            <img 
              src={images[currentIndex]} 
              alt={`Full view of ${title}`} 
              className="max-h-[85vh] w-auto rounded-lg shadow-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
};