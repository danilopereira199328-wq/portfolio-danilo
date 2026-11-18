export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-darker/80 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-white">DP.dev</a>
        <div className="space-x-6 text-gray-300">
          <a href="#about" className="hover:text-white transition">Sobre</a>
          <a href="#projects" className="hover:text-white transition">Projetos</a>
          <a href="#skills" className="hover:text-white transition">Skills</a>
          <a href="#contact" className="hover:text-white transition">Contacto</a>
        </div>
      </div>
    </nav>
  );
}