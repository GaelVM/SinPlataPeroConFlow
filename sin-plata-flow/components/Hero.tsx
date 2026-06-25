"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center">

      {/* Fondo */}
      <div className="absolute inset-0 bg-gradient-to-br from-black to-[#081426]" />

      {/* Contenido */}
      <div className="relative z-10 px-6">
        
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold gold"
        >
          SIN PLATA <br /> PERO CON FLOW
        </motion.h1>

        <p className="mt-6 max-w-xl text-gray-300">
          No medimos la riqueza por el dinero.
          La medimos por las rutas, la hermandad y las historias.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="bg-[#D4AF37] text-black px-6 py-3 rounded-xl font-bold">
            ÚNETE
          </button>

          <button className="border border-white px-6 py-3 rounded-xl">
            EXPLORAR
          </button>
        </div>
      </div>
    </section>
  );
}