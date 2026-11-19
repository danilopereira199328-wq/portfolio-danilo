import { motion } from 'framer-motion';

const projects = [
  {
    title: "DizAI",
    description: "Chat com IA em tempo real, múltiplas conversas, login com Google, dark/light mode e exportação de conversas.",
    tech: ["React", "Node.js", "Firebase", "Groq API"],
    github: "https://github.com/danilopereira199328-wq/dizai-app",
    demo: "https://dizai-frontend.vercel.app",
    image: "/dizai.png"
  },
  {
    title: "Movie Search App",
    description: "Pesquisa de filmes com filtros, favoritos, trailers e onde assistir. Integração com APIs externas (OMDb/TMDB).",
    tech: ["React", "TMDB API", "Firebase Auth"],
    github: "https://github.com/danilopereira199328-wq/movie-search-app",
    demo: "https://movie-search-app-convite-pt.vercel.app",
    image: "/movie-search.png"
  },
  {
    title: "Convite PT",
    description: "Plataforma para criação e gestão de convites digitais para eventos.",
    tech: ["React", "Vite", "CSS"],
    github: "https://github.com/danilopereira199328-wq/convite-pt",
    demo: "https://convite-pt.vercel.app",
    image: "/convite.png"
  },
  {
    title: "Tramponorte",
    description: "Website institucional para a empresa Tramponorte, focado em serviços e apresentação da marca.",
    tech: ["React", "Vite", "Tailwind CSS"],
    github: "https://github.com/danilopereira199328-wq/tramponorte",
    demo: "https://tramponorte.onrender.com/",
    image: "/tramponorte.png"
  },
  {
    title: "Finanças Pro",
    description: "Dashboard de gestão financeira com gráficos e controlo de despesas.",
    tech: ["React", "Chart.js", "Firebase"],
    github: "https://github.com/danilopereira199328-wq/financas-pro-frontend",
    demo: "https://financas-pro-frontend-ce9m.vercel.app/",
    image: "/financas.png"
  },
  {
    title: "Videotubecd",
    description: "Plataforma de partilha de vídeos inspirada no YouTube, com pesquisa e reprodução.",
    tech: ["React", "YouTube API", "CSS"],
    github: "https://github.com/danilopereira199328-wq/videotubecd",
    demo: "https://videotubecd.vercel.app",
    image: "/videotube.png"
  },
  {
    title: "Currículo PT",
    description: "Ferramenta online para criação e gestão de currículos profissionais.",
    tech: ["React", "Vite", "PDF Generation"],
    github: "https://github.com/danilopereira199328-wq/curriculo-pt",
    demo: "https://curriculopt.vercel.app",
    image: "/curriculo.png"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Projetos
        </motion.h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((p, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants}
              className="bg-gray-800 rounded-2xl border border-gray-700 shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1 transition duration-300 flex flex-col overflow-hidden"
            >
              <img 
                src={p.image} 
                alt={p.title} 
                className="w-full h-48 object-cover border-b border-gray-700" 
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-2 text-white">{p.title}</h3>
                <p className="text-gray-400 mb-4 flex-grow text-sm">{p.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tech.map((t, j) => (
                    <span key={j} className="bg-blue-600/20 text-blue-400 text-xs px-2 py-1 rounded-full border border-blue-500/30">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-auto">
                  {p.github !== "#" && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 font-medium text-sm transition">
                      💻 GitHub
                    </a>
                  )}
                  {p.demo !== "#" && (
                    <a href={p.demo} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 font-medium text-sm transition">
                      🚀 Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}