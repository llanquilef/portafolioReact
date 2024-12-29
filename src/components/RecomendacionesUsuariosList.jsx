import React, { useState, useEffect } from 'react';
import { getAllRecomendacionesUsuarios } from '../api/recomendacionapi';

export function R_UsuariosList() {
  const [recomendaciones, setRecomendaciones] = useState([]);

  useEffect(() => {
    async function fetchRecomendaciones() {
      try {
        const data = await getAllRecomendacionesUsuarios();
        setRecomendaciones(data || []);
      } catch (error) {
        console.error("Error al cargar recomendaciones:", error);
      }
    }

    fetchRecomendaciones();
  }, []);

  return (
    <div className="p-6 font-sans bg-black min-h-screen">
      {/* Botón Inicio */}
      <a
        href="/index"
        className="absolute top-12 right-20 bg-emerald-500 text-white px-4 py-2 rounded-2xl hover:bg-emerald-400 transition-all"
      >
        Inicio
      </a>
      <h1 className="text-center text-4xl font-bold text-white mt-5">Recomendaciones Usuarios</h1>
      <div className="grid grid-cols-1 ml-5 mt-12 justify-center text-emerald-200 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {recomendaciones.map(({ id, nombre, autor, comentario, añoPublicacion, tipoMultimedia }) => (
          <div
            key={id}
            className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-emerald-400 mb-3">{nombre}</h3>
            <p className="text-white">
              <strong>Autor:</strong> {autor}
            </p>
            <p className="text-white">
              <strong>Comentario:</strong> {comentario}
            </p>
            <p className="text-white">
              <strong>Año de Publicación:</strong> {añoPublicacion}
            </p>
            <p className="text-white">
              <strong>Tipo de Multimedia:</strong> {tipoMultimedia}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
