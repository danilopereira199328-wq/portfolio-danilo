import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Sobre', href: '#about' },
    { name: 'Formação', href: '#experience' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-darker/80 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="flex flex-col">
          <span className="text-lg font-bold text-white tracking-tight leading-none">Danilo Pereira</span>
          <span className="text-[10px] text-primary font-semibold tracking-wider uppercase">CET - Tecnologias e Programação</span>
        </a>
        
        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-gray-300 font-medium">
          {links.map(link => (
            <a key={link.name} href={link.href} className="hover:text-primary transition">{link.name}</a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-darker border-b border-gray-800 px-4 pb-4 space-y-2">
          {links.map(link => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="block text-gray-300 hover:text-white py-2">
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}