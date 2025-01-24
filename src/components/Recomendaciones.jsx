import React from "react";
import { useNavigate} from 'react-router-dom'


{/* SECCIÓN RECOMENDACIONES / RECOMENDATION SECTION */}
export function Recomendaciones() {
  const navigate = useNavigate();
  return (
    <section className="py-20 bg-orange-100" id="habilidades">
      <div className="container max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-black">
          Recomendaciones
        </h2>

        {/* Párrafo Explicativo acerca de la sección de Recomendaciones Mutlimedia */}
        <p className="text-lg text-gray-700 mb-6 leading-relaxed text-center">
          Bienvenido a la sección de recomendaciones multimedia, donde puedes
          explorar y compartir tus gustos conmigo.
          <br />
          <br />
          Este sistema utiliza Django REST para gestionar todas las
          funcionalidades CRUD, permitiéndote crear, actualizar
          y eliminar tus propias recomendaciones.
        </p>

        {/* Botón Recomendaciones Usuarios */}
        <div className="flex justify-center gap-4">
          <button
            className="bg-blue-500 mt-6 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
            onClick={() => navigate("/recomendacionesusuarios-crear")}
          >
            Recomendar Multimedia
          </button>
        </div>

        {/* Botón Mis Recomendaciones */}
        <div className="flex justify-center gap-6">
          <button
            className="bg-blue-500 mt-6 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
            onClick={() => navigate("/recomendacionespersonales")}
          >
            Mis Recomendaciones
          </button>
        </div>
      </div>
    </section>
  );
}
