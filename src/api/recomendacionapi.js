import axios from "axios";

// PERSONAL RECOMENDATION / RECOMENDACIÓN PERSONAL 

// GET ALL PERSONAL RECOMENDATION / OBTENER TODAS LAS RECOMENDACIONES PERSONALES
{
  /* Esta función obtiene todas las recomendaciones que he realizado para que me conozcan mejor, utilizando la API REST de Django. */
}
export const getAllRecomendacionesPersonales = () => {
  return axios
    .get("https://portafolio-8zz7.onrender.com/api/v1/recomendacionespersonales/")
    .then((response) => {
      return response.data;
    });
};

// CREAR/CREATE PERSONAL RECOMENDATION / RECOMENDACIÓN PERSONAL

{
  /* Esta función es para poder crear una recomendación personal conectada a la API REST de Django.*/
}
export const createR_Personales = (r_personales) => {
  return axios.post(
    "https://portafolio-8zz7.onrender.com/api/v1/recomendacionespersonales/",
    r_personales
  );
};


// RECOMENDACIÓN USUARIO / USER RECOMENDATION 

// GET ALL USER RECOMENDATION / OBTENER TODAS LAS RECOMENDACIONES USUARIOS
{
  /* Esta función obtiene todas las recomendaciones que los usuarios han realizado, utilizando la API REST de Django y Autenticación de Usuario para su implementación.*/
}
export const getAllRecomendacionesUsuarios = () => {
  return axios
    .get("https://portafolio-8zz7.onrender.com/api/v1/recomendacionesusuarios/")
    .then((response) => {
      return response.data;
    });
};

// CREAR/CREATE USER RECOMENDATION / RECOMENDACIÓN USUARIO

{
  /* Esta función es para que el usuario pueda crear y dejarme una recomendación multimedia, todo esto conectado a la API REST de Django.*/
}
export const createR_Usuarios = (r_usuarios) => {
  return axios.post(
    "https://portafolio-8zz7.onrender.com/api/v1/recomendacionesusuarios/",
    r_usuarios
  );
};

// ELIMINAR/DELETE USER RECOMENDATION / RECOMENDACIÓN USUARIO
{
  /* Esta función es para que el usuario pueda eliminar una o algunas de las recomendaciones que pudo haber realizado conectado a la API REST de Django.*/
}
export const deleteRecomendacionUsuario = async (id) => {
  try {
    const response = await axios.delete(`https://portafolio-8zz7.onrender.com/api/v1/recomendacionesusuarios/${id}/`);
    return response;
  } catch (error) {
    console.error("Error al eliminar la recomendacion:", error.response?.data || error.message);
    throw error; 
  }
};

// ACTUALIZAR/UPDATE USER RECOMENDATION / RECOMENDACIÓN USUARIO
{
  /* Esta función es para que el usuario pueda actualizar una, algunas o todas las recomendaciones que pudo haber realizado conectado a la API REST de Django.*/
}
export const updateRecomendacion = async (id, updatedRecomendacion) => {
  try {
    const response = await axios.put(
      `https://portafolio-8zz7.onrender.com/api/v1/recomendacionesusuarios/${id}/`,
    updatedRecomendacion
    );
    return response.data; // Validar que se devuelvan los datos correctos
  } catch (error) {
    console.error("Error al actualizar la recomendación:", error.response?.data || error.message);
    throw error;
  }
};
