const skills = [
  { category: "Frontend", items: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Vite"] },
  { category: "Backend", items: ["Node.js", "Express", "Firebase", "REST APIs"] },
  { category: "Ferramentas", items: ["Git", "GitHub", "VS Code", "Vercel", "Render"] },
  { category: "Outros", items: ["Autenticação (OAuth)", "Firestore (NoSQL)", "Integração de APIs de IA"] }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Skills <span className="text-primary">.</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((s, i) => (
          <div key={i} className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-gray-700 transition">
            <h3 className="text-lg font-bold mb-4 text-primary">{s.category}</h3>
            <div className="flex flex-wrap gap-2">
              {s.items.map((item, j) => (
                <span key={j} className="bg-gray-800 text-gray-300 px-3 py-1.5 rounded-lg text-sm border border-gray-700">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}