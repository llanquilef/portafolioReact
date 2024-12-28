import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createR_Usuarios } from "../api/recomendacionapi"; 
import { toast } from "react-hot-toast";

export function RecomendacionesUsuariosFormPage() {
  const [nombre, setNombre] = useState("");
  const [autor, setAutor] = useState("");
  const [comentario, setComentario] = useState("");
  const [añoPublicacion, setAñoPublicacion] = useState("");
  const [tipoMultimedia, setTipoMultimedia] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("nombre", nombre);
    formData.append("autor", autor);
    formData.append("comentario", comentario);
    formData.append("añoPublicacion", añoPublicacion);
    formData.append("tipoMultimedia", tipoMultimedia);

    try {
      await createR_Usuarios(formData); 
      toast.success("Recomendación creada con éxito.");
      navigate("/recomendacionesusuarios"); 
    } catch (error) {
      console.error("Error al crear la recomendación:", error);
      toast.error("Hubo un error al crear la recomendación.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Crear Recomendación
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Nombre
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Nombre de la recomendación"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Autor
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200"
              value={autor}
              onChange={(e) => setAutor(e.target.value)}
              placeholder="Autor del contenido"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Comentario
            </label>
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200"
              value={comentario}
              onChange={(e) => setComentario(e.target.value)}
              placeholder="Escribe un comentario sobre el contenido"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Año de Publicación
            </label>
            <input
              type="date"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200"
              value={añoPublicacion}
              onChange={(e) => setAñoPublicacion(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Tipo de Multimedia
            </label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200"
              value={tipoMultimedia}
              onChange={(e) => setTipoMultimedia(e.target.value)}
              required
            >
              <option value="">Selecciona un tipo</option>
              <option value="Película">Película</option>
              <option value="Libro">Libro</option>
              <option value="Serie">Serie</option>
              <option value="Álbum">Álbum</option>
              <option value="Podcast">Podcast</option>
              <option value="Cómic">Cómic</option>
              <option value="Anime">Anime</option>
              <option value="Manga">Manga</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-600 transition"
          >
            Crear Recomendación
          </button>
        </form>
      </div>
    </div>
  );
}
