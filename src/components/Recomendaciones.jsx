import React from "react";

export function Recomendaciones() {
  return (
    <section className="py-20 bg-orange-100" id="habilidades">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-black">
          Recomendaciones
        </h2>

        {/* Párrafo Explicativo acerca de la sección de Recomendaciones Mutlimedia */}
        <p className="text-lg text-gray-700 mb-6 leading-relaxed text-center">
          Bienvenido a la sección de recomendaciones multimedia, donde puedes
          explorar y compartir tus gustos conmigo y otros usuarios.
          <br />
          <br />
          Este sistema utiliza Django REST para gestionar todas las
          funcionalidades CRUD, permitiéndote crear un usuario, agregar, editar
          y eliminar tus propias recomendaciones.
          <br />
          <br />
          Cada recomendación está asociada a un usuario único. Aunque puedes ver
          las recomendaciones de otros usuarios, solo puedes gestionar las que
          has creado en tu sesión.
        </p>

        {/* Botón Recomendaciones Usuarios */}
        <div className="flex justify-center gap-4">
          <button
            className="bg-blue-500 mt-6 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
            onClick={() => alert("Aquí irá tu funcionalidad")}
          >
            Recomendar Multimedia
          </button>
        </div>

        {/* Botón Mis Recomendaciones */}
        <div className="flex justify-center gap-6">
          <button
            className="bg-blue-500 mt-6 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
            onClick={() => alert("Aquí irá tu funcionalidad")}
          >
            Mis Recomendaciones
          </button>
        </div>
      </div>
    </section>
  );
}
