import React, { useState, useEffect } from 'react';
import { getAllRecomendacionesPersonales } from '../api/recomendacionapi';

{/* PERSONAL LIST RECOMENDATIONS / LISTADO RECOMEDACIONES PERSONALES */}
export function R_PersonalesList() {
  const [recomendaciones, setRecomendaciones] = useState([]);

  useEffect(() => {
    async function fetchRecomendaciones() {
      try {
        const data = await getAllRecomendacionesPersonales();
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
      <a href="/index" className="absolute top-4 right-6 bg-emerald-500 text-white px-4 py-2 rounded-2xl hover:bg-emerald-400 transition-all">Inicio</a>

      {/* Título / Title */}
      <h1 className="text-center text-4xl font-bold text-white mt-10">Mis Recomendaciones</h1>

      {/* Contenedor Lista Recomendaciones Personales / Container Recomendation List */}
      <div className="grid grid-cols-1 ml-5 mt-12 justify-center text-emerald-200 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {recomendaciones.map(({ id, nombre, autor, comentario, añoPublicacion, tipoMultimedia }) => (
          <div
            key={id}
            className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            {/* Nombre Multimedia / Multimedia Name */}
            <h3 className="text-xl font-bold text-emerald-400 mb-3">{nombre}</h3>

            {/* Autor Multimedia / Multimedia Author */}
            <p className="text-white">
              <strong>Autor:</strong> {autor}
            </p>

            {/* Comentario Multimedia / Multimedia Comment */}
            <p className="text-white">
              <strong>Comentario:</strong> {comentario}
            </p>

            {/* Año Publicación Multimedia / Multimedia Publishing Year */}
            <p className="text-white">
              <strong>Año de Publicación:</strong> {añoPublicacion}
            </p>

            {/* Tipo Multimedia / Multimedia Type */}
            <p className="text-white">
              <strong>Tipo de Multimedia:</strong> {tipoMultimedia}
            </p>

          </div>
        ))}
      </div>
    </div>
  );
}
