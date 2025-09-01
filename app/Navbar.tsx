"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-sm border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO */}
        <h1 className="text-2xl font-extrabold uppercase tracking-widest text-white">
          TavoBarber
        </h1>

        {/* LINKS */}
        <div className="space-x-6 uppercase font-semibold text-sm">
          <a href="#servicios" className="hover:text-gray-300 transition">
            Servicios
          </a>
          <a href="#reserva" className="hover:text-gray-300 transition">
            Reservar
          </a>
          <a
            href="https://instagram.com/tavobarber_cut_fade"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition"
          >
            Instagram
          </a>
          <a
            href="https://wa.me/506XXXXXXXX?text=Hola,%20quiero%20una%20cita"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
}
