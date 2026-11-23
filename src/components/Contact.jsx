export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 bg-gray-900/30">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Vamos Conversar <span className="text-primary">.</span></h2>
        <p className="text-gray-400 mb-10">
          Estou aberto a oportunidades, colaborações ou apenas a trocar ideias sobre tecnologia.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
          <a href="mailto:danilopereira199328@gmail.com" className="bg-primary hover:bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2">
            ✉️ Email
          </a>
          <a href="https://github.com/danilopereira199328-wq" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition border border-gray-700 flex items-center justify-center gap-2">
            💻 GitHub
          </a>
          <a href="https://www.linkedin.com/in/danilo-pereira-a6bb98290/" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2">
            💼 LinkedIn
          </a>
        </div>
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Danilo Pereira. Feito com React & Tailwind.
        </p>
      </div>
    </section>
  );
}