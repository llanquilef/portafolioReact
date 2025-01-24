# Portafolio Persona
Este proyecto es el frontend de mi portafolio personal, desarrollado con React y Vite. La aplicación permite a los usuarios explorar mis habilidades, educación, proyectos y recomendaciones multimedia. Además, los usuarios pueden agregar, editar y eliminar sus propias recomendaciones.

## Tecnologías Utilizadas

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **Vite**: Herramienta de construcción rápida para proyectos de frontend.
- **Tailwind CSS**: Framework de CSS para un diseño rápido y eficiente.
- **Axios**: Cliente HTTP para realizar solicitudes a la API.
- **React Router**: Biblioteca para manejar la navegación en la aplicación.
- **React Hot Toast**: Biblioteca para mostrar notificaciones.

## Funcionalidades

- **Página Principal**: Muestra información sobre mí, mis habilidades, educación y formas de contacto.
- **Recomendaciones Personales**: Lista de recomendaciones multimedia que he realizado.
- **Recomendaciones de Usuarios**: Los usuarios pueden agregar, editar y eliminar sus propias recomendaciones 
multimedia.

## Estructura del Proyecto

frontend/
├── .env
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── public/
├── README.md
├── src/
│   ├── api/
│   │   └── recomendacionapi.js
│   ├── assets/
│   ├── components/
│   │   ├── AboutMe.jsx
│   │   ├── Contacto.jsx
│   │   ├── Educacion.jsx
│   │   ├── Header.jsx
│   │   ├── Habilidades.jsx
│   │   ├── Index.jsx
│   │   ├── Recomendaciones.jsx
│   │   ├── RecomendacionesPersonalesList.jsx
│   │   ├── RecomendacionesUsuariosList.jsx
│   ├── pages/
│   │   ├── RecomendacionesPersonalesFormPage.jsx
│   │   ├── RecomendacionesPersonalesPage.jsx
│   │   ├── RecomendacionesUsuariosFormPage.jsx
│   │   ├── RecomendacionesUsuariosPage.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
├── tailwind.config.js
└── vite.config.js