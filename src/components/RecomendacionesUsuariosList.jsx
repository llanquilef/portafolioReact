import React, { useState, useEffect } from "react";
import {
  deleteRecomendacionUsuario,
  getAllRecomendacionesUsuarios,
  updateRecomendacion,
} from "../api/recomendacionapi";
import { toast } from "react-hot-toast";

export function R_UsuariosList() {
  const [recomendaciones, setRecomendaciones] = useState([]);
  const [editandoId, setEditandoId] = useState(null);
  const [datosEditados, setDatosEditados] = useState({
    nombre: "",
    autor: "",
    comentario: "",
    añoPublicacion: "",
    tipoMultimedia: "",
  });

  useEffect(() => {
    async function fetchRecomendaciones() {
      try {
        const data = await getAllRecomendacionesUsuarios();
        setRecomendaciones(data || []);
      } catch (error) {
        toast.error("Error al cargar las recomendaciones");
      }
    }

    fetchRecomendaciones();
  }, []);
  const handleDelete = async (id) => {
    if (
      window.confirm("¿Estás seguro de que deseas eliminar esta recomendación?")
    ) {
      try {
        const response = await deleteRecomendacionUsuario(id);
        if (response.status === 200 || response.status === 204) {
          toast.success("Recomendación eliminada con éxito");
          setRecomendaciones((prevRecomendaciones) =>
            prevRecomendaciones.filter(
              (recomendacion) => recomendacion.id !== id
            )
          );
        }
      } catch (error) {
        toast.error("Error al eliminar la recomendación");
      }
    }
  };
  const handleEditClick = (recomendacion) => {
    setEditandoId(recomendacion.id);
    setDatosEditados({ ...recomendacion });
  };

  const handleUpdate = async (id) => {
    try {
      const response = await updateRecomendacion(id, datosEditados);
      if (response) {
        setRecomendaciones((prevRecomendaciones) =>
          prevRecomendaciones.map((recomendacion) =>
            recomendacion.id === id
              ? { ...recomendacion, ...datosEditados }
              : recomendacion
          )
        );
        toast.success("Recomendación actualizada con éxito.");
        setEditandoId(null);
      }
    } catch (error) {
      toast.error("Error al actualizar la recomendación");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatosEditados((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="p-6 font-sans bg-black min-h-screen">
      <div className="absolute top-4 right-6 flex space-x-4">
        <a
          href="/index"
          className="bg-emerald-500 text-white px-4 py-2 rounded-2xl hover:bg-emerald-400 transition-all"
        >
          Inicio
        </a>
        <a
          href="/recomendacionesusuarios-crear"
          className="bg-blue-500 text-white px-4 py-2 rounded-2xl hover:bg-blue-400 transition-all"
        >
          Crear Recomendación
        </a>
      </div>

      <h1 className="text-center text-2xl font-bold text-white mt-12">
        Recomendaciones Usuarios
      </h1>
      <div className="grid grid-cols-1 ml-5 mt-12 justify-center text-emerald-200 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {recomendaciones.map(
          ({
            id,
            nombre,
            autor,
            comentario,
            añoPublicacion,
            tipoMultimedia,
          }) => (
            <div
              key={id}
              className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              {editandoId === id ? (
                <div>
                  <input
                    type="text"
                    name="nombre"
                    value={datosEditados.nombre}
                    onChange={handleChange}
                    className="w-full mb-2 px-2 py-1 rounded"
                    placeholder="Nombre"
                  />
                  <input
                    type="text"
                    name="autor"
                    value={datosEditados.autor}
                    onChange={handleChange}
                    className="w-full mb-2 px-2 py-1 rounded"
                    placeholder="Autor"
                  />
                  <input
                    type="text"
                    name="comentario"
                    value={datosEditados.comentario}
                    onChange={handleChange}
                    className="w-full mb-2 px-2 py-1 rounded"
                    placeholder="Comentario"
                  />
                  <input
                    type="text"
                    name="añoPublicacion"
                    value={datosEditados.añoPublicacion}
                    onChange={handleChange}
                    className="w-full mb-2 px-2 py-1 rounded"
                    placeholder="Año de Publicación"
                  />
                  <input
                    type="text"
                    name="tipoMultimedia"
                    value={datosEditados.tipoMultimedia}
                    onChange={handleChange}
                    className="w-full mb-2 px-2 py-1 rounded"
                    placeholder="Tipo de Multimedia"
                  />
                  <button
                    className="w-full px-4 py-2 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-400 transition"
                    onClick={() => handleUpdate(id)}
                  >
                    Guardar
                  </button>
                  <button
                    className="w-full px-4 py-2 mt-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition"
                    onClick={() => setEditandoId(null)}
                  >
                    Cancelar
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-emerald-400 mb-3">
                    {nombre}
                  </h3>
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
                  <button
                    className="w-full px-4 py-2 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-400 transition"
                    onClick={() =>
                      handleEditClick({
                        id,
                        nombre,
                        autor,
                        comentario,
                        añoPublicacion,
                        tipoMultimedia,
                      })
                    }
                  >
                    Editar
                  </button>
                  <button
                    className="w-full px-4 py-2 mt-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition"
                    onClick={() => handleDelete(id)}
                  >
                    Eliminar
                  </button>
                </>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
}
