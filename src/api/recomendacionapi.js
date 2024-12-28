import axios from "axios";

// Recomendación Personal
{
  /* Esta función obtiene todas las recomendaciones que he realizado para que me conozcan mejor, utilizando la API REST de Django. */
}
export const getAllRecomendacionesPersonales = () => {
  return axios
    .get("http://127.0.0.1:8000/api/v1/recomendacionespersonales/")
    .then((response) => {
      return response.data;
    });
};

{
  /* Esta función es para poder crear una recomendación personal conectada a la API REST de Django.*/
}
export const createR_Personales = (r_personales) => {
  return axios.post(
    "http://localhost:8000/api/v1/recomendacionespersonales/",
    r_personales
  );
};

// Recomendación Usuario 
{
  /* Esta función obtiene todas las recomendaciones que los usuarios han realizado, utilizando la API REST de Django y Autenticación de Usuario para su implementación.*/
}

export const getAllRecomendacionesUsuarios = () => {
  return axios
    .get("http://127.0.0.1:8000/api/v1/recomendacionesusuarios/")
    .then((response) => {
      return response.data;
    });
};

{
  /* Esta función es para que el usuario pueda crear y dejarme una recomendación multimedia, todo esto conectado a la API REST de Django.*/
}
export const createR_Usuarios = (r_usuarios) => {
  return axios.post(
    "http://localhost:8000/api/v1/recomendacionesusuarios/",
    r_usuarios
  );
};