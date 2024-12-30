import React from "react";

export function AboutMe() {
  return (
    <section className="py-20 bg-purple-200" id="about">
      <div className="container max-w-4xl mx-auto text-center">
        
        {/* Título Acerca de Mí */}

        <h2 className="text-3xl font-bold mb-8 text-center">Acerca de mí</h2>
        <div className="flex flex-col md:flex-row items-center">
          {/* Descripción */}
          <div>
            {/* Párrafo 1 */}

            <p className="text-base leading-relaxed text-gray-700">
              Me gusta la programación porque me permite resolver problemas
              reales y crear herramientas útiles. Disfruto transformar ideas en
              productos que funcionan y aportan valor.
            </p>

            {/* Párrafo 2 */}

            <p className="text-base leading-relaxed text-gray-700 mt-4">
              Durante mi formación, trabajé en proyectos usando Python, Django,
              PostgreSQL, React y Tailwind CSS. Uno de mis favoritos fue un
              sistema de gestión de reservas, donde integré APIs RESTful para
              hacer todo más sencillo y eficiente.
            </p>

            {/* Párrafo 3 */}

            <p className="text-base leading-relaxed text-gray-700 mt-4">
              Para mí, programar es como resolver puzzles: un desafío constante
              que combina lógica y creatividad. Me motiva seguir aprendiendo y
              trabajando en soluciones que sean útiles para otros y para mí.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
