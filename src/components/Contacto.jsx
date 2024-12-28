import React from 'react'
import { Mail, Phone } from "lucide-react";


export function Contacto() {
  return (
    <section className="py-20 bg-amber-200" id="contact">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Contacto</h2>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="space-y-6">

            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-black" />
              <a
                href="mailto:llanquilef.cl@gmail.com"
                className="text-xl hover:text-amber-200 transition-colors"
              >
                llanquilef.cl@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-black" />
              <a
                href="tel:+1234567890"
                className="text-xl hover:text-amber-200 transition-colors"
              >
                +56976220214
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}