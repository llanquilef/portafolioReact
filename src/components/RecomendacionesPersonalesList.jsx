import React, { useState, useEffect } from 'react'; 
import { getAllRecomendacionesPersonales } from '../api/recomendacionapi'; 

export function R_PersonalesList() {
  const [recomendaciones_personales, setRecomendacionesPersonales] = useState([]);

  useEffect(() => {
    async function loadRecomendacionesPersonales() {
      try {
        const recP = await getAllRecomendacionesPersonales(); 
        setRecomendacionesPersonales(recP || []); 
      } catch (error) {
        console.error("Error al cargar recomendaciones personales:", error);
      }
    }

    loadRecomendacionesPersonales();
  }, []);

  return (
    <div>
      <h1>Lista de Recomendaciones Personales</h1>
      <ul>
        {recomendaciones_personales.map((rec) => (
          <li key={rec.id}>
            <strong>{rec.nombre}</strong> - {rec.tipoMultimedia}
          </li>
        ))}
      </ul>
    </div>
  );
}
