import React from "react";
export function Educacion() {

  // Se crea una constante que luego se mapea a la variable ed en este caso para mostrar dónde he estudiado, evitando el repetir código que puedo escribir una sola vez.

  const educacion = [
    {
      titulo: "Educación Media",
      institucion: "Colegio María Auxiliadora de Santiago",
      periodo: "2016 - 2020",
      descripcion: "Licenciado Científico-Humanista - Colegio María Auxiliadora de Santiago",
    },
    
    {
      titulo: "Educación Superior - Analista Programador",
      institucion: "INACAP Santiago Centro",
      periodo: "2022 - 2024",
      descripcion: "Carrera enfocada en el diseño, desarrollo y análisis de sistemas informáticos, con competencias en programación, gestión de bases de datos y soluciones tecnológicas adaptadas a las necesidades del mercado.",
    },
  ];

  return (
    <section className="py-20 bg-slate-300" id="educacion">

        {/* Container Educación*/}
      <div className="container max-w-4xl mx-auto"> 

        {/* Título Container*/}
        <h2 className="text-3xl font-bold mb-8 text-center">Educación</h2>
        <div className="space-y-8">
          {educacion.map((ed) => (
            <div
              key={ed.titulo}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-shadow"
            >
                {/* Nombre Título Educación */}
              <h3 className="text-xl font-semibold mb-2">{ed.titulo}</h3>

                {/* Institución y Período */}
              <p className="text-gray-600 mb-2">
                {ed.institucion} | {ed.periodo}
              </p>

              {/* Descripción */}
              <p className="text-gray-600 mb-4">{ed.descripcion}</p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

