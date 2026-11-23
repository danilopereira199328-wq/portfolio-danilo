import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience'; // NOVO
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-darker text-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience /> {/* NOVO */}
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;