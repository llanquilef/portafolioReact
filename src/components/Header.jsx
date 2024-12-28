import React from "react";
import { Mail } from "lucide-react";
import profileImage from '../assets/selfie2.jpg';

export function Header() {
  return (
    <header className="relative py-20 text-center animate-fade-up">

      
      {/* Imagen de Perfil */}
      <div className="flex justify-center mb-8">
        <img
          src={profileImage}
          alt="Javier Rival Llanquilef"
          className="w-25 max-h-64 rounded-full border-4 border-zinc-50"
        />
      </div>

      {/* Mi nombre */}
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Javier Rival Llanquilef
      </h1>

      {/* Institución / Carrera */}
      <p className="text-xl md:text-2xl text-gray-600 mb-8">
        Estudiante Egresado Inacap | Analista Programador
      </p>

      {/* Iconos */}
      <div className="flex justify-center gap-6">
        {/* Correo */}
        <a href="mailto:llanquilef.cl@gmail.com" className="text-zinc-950">
          <Mail className="w-6 h-6" />
        </a>

        {/* GitHub */}
        <a href="https://github.com/llanquilef" className="text-zinc-950">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
            <path d="M12 .5C5.63.5.5 5.63.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.21.71-3.9-1.55-3.9-1.55-.53-1.35-1.28-1.71-1.28-1.71-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.72-1.55-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.44-2.3 1.17-3.11-.12-.29-.51-1.47.11-3.07 0 0 .97-.31 3.18 1.2a11.11 11.11 0 0 1 5.78 0c2.21-1.51 3.18-1.2 3.18-1.2.62 1.6.23 2.78.11 3.07.73.81 1.17 1.85 1.17 3.11 0 4.43-2.7 5.41-5.27 5.7.42.36.78 1.1.78 2.22v3.29c0 .31.21.66.79.56C20.71 21.39 24 17.08 24 12 24 5.63 18.37.5 12 .5z" />
          </svg>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/javier-rival-llanquilef-b1b362342/"
          className="text-zinc-950"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
            <path d="M19 0h-14c-2.762 0-5 2.238-5 5v14c0 2.762 2.238 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.762-2.238-5-5-5zm-11.67 19h-3.33v-9h3.33v9zm-1.667-10.24c-1.048 0-1.9-.854-1.9-1.904s.852-1.904 1.9-1.904c1.048 0 1.9.854 1.9 1.904s-.852 1.904-1.9 1.904zm13.337 10.24h-3.33v-4.781c0-1.139-.021-2.605-1.586-2.605-1.586 0-1.83 1.241-1.83 2.526v4.86h-3.33v-9h3.195v1.23h.046c.445-.841 1.531-1.727 3.153-1.727 3.374 0 4 2.218 4 5.103v4.394z" />
          </svg>
        </a>
      </div>
    </header>
  );
}
