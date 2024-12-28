import axios from "axios";

// Esta función obtiene todas las recomendaciones realizadas por mí (Javier Rival Llanquilef), utilizando la REST API de Django.
export const getAllRecomendacionesPersonales = () => {
  return axios.get("http://127.0.0.1:8000/api/v1/recomendacionesPersonales/");
};

// Esta función es para poder crear una recomendación personal conectada a la API REST de Django.
export const createR_Personales = (r_personales) => {
  return axios.post("http://localhost:8000/api/v1/recomendacionesPersonales/", r_personales);
};
