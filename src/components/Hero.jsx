export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
        Danilo Pereira
      </h1>
      <p className="text-xl md:text-2xl text-gray-400 mb-8">
        Desenvolvedor Full-Stack | React & Node.js
      </p>
      <p className="max-w-2xl text-gray-500 mb-8">
        Construo aplicações web modernas, escaláveis e com foco na experiência do utilizador.
        Apaixonado por IA e desenvolvimento de produtos.
      </p>
      <div className="flex gap-4 flex-wrap justify-center">
        <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition shadow-lg shadow-blue-500/30">
          Ver Projetos
        </a>
        <a href="#contact" className="border border-gray-600 hover:border-white text-white px-8 py-3 rounded-lg font-medium transition">
          Contactar
        </a>
        <a href="Curriculo_Com_Candidatura_Espontanea_Danilo_Pereira.pdf" download className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-medium transition border border-gray-600">
          📄 Descarregar CV
        </a>
      </div>
    </section>
  );
}