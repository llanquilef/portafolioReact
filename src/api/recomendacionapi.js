import axios from "axios";

// Recomendación Personal
{
  /* Esta función obtiene todas las recomendaciones que he realizado para que me conozcan mejor, utilizando la API REST de Django. */
}
export const getAllRecomendacionesPersonales = () => {
  return axios
    .get("http://127.0.0.1:8000/api/v1/recomendacionespersonales/")
    .then((response) => {
      console.log("Respuesta de la API:", response.data); // Verifica qué está devolviendo la API
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