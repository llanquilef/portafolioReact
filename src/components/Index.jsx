import React from 'react';
import { Header } from "./Header";
import { AboutMe } from "./AboutMe";
import { Habilidades } from "./Habilidades";
import { Educacion } from './Educacion'
import { Contacto } from './Contacto'
import { Recomendaciones } from './Recomendaciones'

{/* INDEX */}
export function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <AboutMe/>
        <Habilidades />
        <Educacion />
        <Contacto />
        <Recomendaciones />
      </main>
    </div>
  );
}