// Intento en lo posible no ocupar barrel files y hacer las impoortaciones directamente, obteniendo las siguientes ventajas:

// 1.- Rutas Relativas Claras. 
// 2.- Menor Configuración.
// 3- Evitar conflictos con archivos que posean el mismo nombre en diferentes 
// directorios.
// 4.- Ciclos poco complejos y más rápidos


{/* Import Toaster para las notificaciones al agregar, eliminar o actualizar una recomendación: personal o de usuario. */}

import { Toaster } from "react-hot-toast";
import { BrowserRouter, Routes, Route } from "react-router-dom";

{/* Import Componentes Página Principal (Screen) */}
import {Index} from "./components/Index";
import {AboutMe} from "./components/AboutMe";
import {Header} from './components/Header';
import {Educacion} from './components/Educacion'


import {Contacto} from './components/Contacto';

{/* Import Recomendaciones Personales*/}
import {RecomendacionesPersonalesPage} from "./pages/RecomendacionesPersonalesPage";
import {RecomendacionesPersonalesFormPage} from './pages/RecomendacionesPersonalesFormPage';

{/* Import Recomendaciones Personales*/}
import {RecomendacionesUsuariosFormPage}from './pages/RecomendacionesUsuariosFormPage'
import {RecomendacionesUsuariosPage} from './pages/RecomendacionesUsuariosPage'

{/* Import Rutas Protegidas */}

function App() {
  return (
    <BrowserRouter>
      <Routes>

         {/* Rutas Principales */}
        <Route path="/index" element={<Index />}></Route>
        <Route path="/Header" element={<Header />}></Route>
        <Route path="/AboutMe" element={<AboutMe />}></Route>
        <Route path="/Educacion" element={<Educacion />}></Route>       
        <Route path="/Contacto" element={<Contacto />}></Route>       

        {/* Rutas Recomendaciones Personales */}
        <Route path="/recomendacionespersonales" element={<RecomendacionesPersonalesPage />}></Route> 
        <Route path="/recomendacionespersonales-crear" element={<RecomendacionesPersonalesFormPage />}></Route> 

        {/* Rutas Recomendaciones Usuarios */}
        <Route path="/recomendacionesusuarios" element={<RecomendacionesUsuariosPage />}></Route> 
        <Route path="/recomendacionesusuarios-crear" element={<RecomendacionesUsuariosFormPage />}></Route> 


        {/* Ruta por si el usuario busca una dirección no existente */}
        <Route path="*" element= {<div>Página no encontrada</div>} />

      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
