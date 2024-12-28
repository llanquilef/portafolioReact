import axios from "axios";

// Esta función obtiene todas las recomendaciones realizadas por los usuarios, utilizando la REST API de Django.

export const getAllRecomendacionesUsuarios = () => {
  return axios.get("http://127.0.0.1:8000/api/v1/recomendacionesUsuario/");
};

// Esta función les permite a los usuarios poder crear una recomendación multimedia de lo que sea que le interese que este cubierto en los TIPOS_MULTIMEDIA que establecí en models.py, todo conectado a la API REST de Django.

export const createR_Usuarios = (r_usuarios) => {
  return axios.post(
    "http://localhost:8000/api/v1/recomendacionesUsuarios/",
    r_usuarios
  );
};

// Esta función obtiene todas las recomendaciones realizadas por mí (Javier Rival Llanquilef), utilizando la REST API de Django.

export const getAllRecomendacionesPersonales = () => {
  return axios.get("http://127.0.0.1:8000/api/v1/recomendacionesPersonales/");
};

// Esta función es para poder crear una recomendación personal conectada a la API REST de Django.

export const createR_Personales = (r_personales) => {
  return axios.post(
    "http://localhost:8000/api/v1/recomendacionesPersonales/",
    r_personales
  );
};
