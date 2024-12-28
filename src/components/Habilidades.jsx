import React from 'react';

export function Habilidades() {
  const habilidades = [
    { name: "React", level: "Intermedio" },
    { name: "Jira", level: "Básico" },
    { name: "Node.js", level: "Intermedio" },
    { name: "Python", level: "Intermedio" },
    { name: "Tailwind CSS", level: "Básico" },
    { name: "GitHub", level: "Básico" },
  ];

  return (
    <section className="py-20 bg-purple-100" id="habilidades">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-purple-800">Habilidades</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {habilidades.map((habilidad) => (
            <div
              key={habilidad.name}
              className="p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow"
            >
                {/* Nombre Habilidad */}
              <h3 className="font-semibold text-lg mb-2 text-purple-800">{habilidad.name}</h3>

                {/* Nivel de Habilidad */}
              <p className="text-sm text-purple-600">{habilidad.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
