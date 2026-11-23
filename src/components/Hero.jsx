export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20">
      <h1 className="text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text tracking-tight">
        Danilo Pereira
      </h1>
      <p className="text-xl md:text-2xl text-gray-400 mb-4 font-medium">
        Estudante de Tecnologias e Programação de Sistemas de Informação
      </p>
      <p className="text-sm md:text-base text-primary font-semibold mb-8">
        CET em curso (23/07/2026 – 02/12/2026) | Quase a concluir
      </p>
      <p className="max-w-2xl text-gray-500 mb-10 leading-relaxed">
        Apaixonado por desenvolvimento web e criação de soluções digitais. 
        Atualmente a concluir o CET em Tecnologias e Programação de Sistemas de Informação, 
        com foco em React, Node.js e Firebase.
      </p>
      <div className="flex gap-4 flex-wrap justify-center">
        <a href="#projects" className="bg-primary hover:bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold transition shadow-lg shadow-primary/30">
          Ver Projetos
        </a>
        <a href="#contact" className="border border-gray-700 hover:border-primary text-white px-8 py-3 rounded-lg font-semibold transition">
          Contactar
        </a>
        <a href="/cv.pdf" download className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold transition border border-gray-700">
          📄 Descarregar CV
        </a>
      </div>
    </section>
  );
}