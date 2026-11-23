const experience = [
  {
    year: "23/07/2026 – 02/12/2026",
    title: "CET em Tecnologias e Programação de Sistemas de Informação",
    description: "Formação técnica especializada em desenvolvimento de software, com foco em HTML, SQL, Phyton, React, Node.js, Firebase e boas práticas de programação. Atualmente em fase de conclusão.",
  },
  {
    year: "2025 - Presente",
    title: "Desenvolvedor Full-Stack (Freelancer)",
    description: "Desenvolvimento de aplicações web com React, Node.js e Firebase. Projetos como DizAI e Só Cusquices.",
  },
 
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Formação e Experiência <span className="text-primary">.</span></h2>
      <div className="relative border-l border-gray-800 ml-4 md:ml-0">
        {experience.map((exp, i) => (
          <div key={i} className="mb-10 ml-6">
            <span className="absolute -left-2 flex items-center justify-center w-4 h-4 bg-primary rounded-full ring-4 ring-darker"></span>
            <span className="text-sm font-semibold text-primary">{exp.year}</span>
            <h3 className="text-xl font-bold text-white mt-1">{exp.title}</h3>
            <p className="text-gray-400 mt-2 text-sm leading-relaxed">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}