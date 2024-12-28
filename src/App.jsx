// Intento en lo posible no ocupar barrel files y hacer las impoortaciones directamente, obteniendo las siguientes ventajas:

// 1.- Rutas Relativas Claras. 
// 2.- Menor Configuración.
// 3- Evitar conflictos con archivos que posean el mismo nombre en diferentes 
// directorios.
// 4.- Ciclos poco complejos y más rápidos

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Index } from "./components/Index";
import { AboutMe } from "./components/AboutMe";
import { Header } from './components/Header';
import { Educacion } from './components/Educacion'
import { Toaster } from "react-hot-toast";
import { Contacto } from './components/Contacto'


function App() {
  return (
    <BrowserRouter>
      <Routes>

         {/* Rutas Principales */}
        <Route path="/index1" element={<Index />}></Route>
        <Route path="/Header" element={<Header />}></Route>
        <Route path="/AboutMe" element={<AboutMe />}></Route>
        <Route path="/Educacion" element={<Educacion />}></Route>       
        <Route path="/Contacto" element={<Contacto />}></Route>       


        {/* Ruta por si el usuario busca una dirección no existente */}
        <Route path="*" element= {<div>Página no encontrada</div>} />

      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
