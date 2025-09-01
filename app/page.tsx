"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaInstagram, FaWhatsapp, FaArrowUp } from "react-icons/fa";

export default function Home() {
  // ---------------------------
  // Estados del formulario
  // ---------------------------
  const [nombre, setNombre] = useState<string>("");
  const [telefono, setTelefono] = useState<string>("");
  const [servicio, setServicio] = useState<string>("");
  const [fecha, setFecha] = useState<string>("");
  const [hora, setHora] = useState<string>("");

  const serviciosReserva = [
    "Corte",
    "Corte + Barba",
    "Corte + Barba + Cejas",
    "Solo Cejas",
    "Solo Barba",
  ];

  const horasDisponibles = Array.from({ length: 12 }, (_, i) => 9 + i).map(
    (h) => `${h}:00`
  );

  const reservar = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(
      `✅ Reserva confirmada:\nCliente: ${nombre}\nTel: ${telefono}\nServicio: ${servicio}\nDía: ${fecha}\nHora: ${hora}`
    );
  };

  // ---------------------------
  // Servicios de barbería
  // ---------------------------
  const servicios = [
    {
      nombre: "Corte",
      precio: "₡6,000",
      descripcion: "Corte clásico o moderno, lavado, secado y peinado.",
    },
    {
      nombre: "Corte + Barba",
      precio: "₡8,000",
      descripcion:
        "Incluye diseño de barba, toalla caliente y productos premium.",
    },
    {
      nombre: "Corte + Barba + Cejas",
      precio: "₡8,000",
      descripcion: "Corte completo de cabello, barba y diseño de cejas.",
    },
    {
      nombre: "Solo Barba",
      precio: "₡5,000",
      descripcion:
        "Rasurado o diseño de barba con espuma, after shave y aceite.",
    },
    {
      nombre: "Solo Cejas",
      precio: "₡3,000",
      descripcion: "Diseño y definición de cejas, acabado limpio y natural.",
    },
  ];

  // ---------------------------
  // Modal para confirmar reserva
  // ---------------------------
  const [servicioSeleccionado, setServicioSeleccionado] = useState<{
    nombre: string;
    precio: string;
    descripcion: string;
  } | null>(null);

  // ---------------------------
  // Galería con autoplay + flechas + swipe
  // ---------------------------
  const imagenes = [
    "/galeria1.jpg",
    "/galeria2.jpg",
    "/galeria3.jpg",
    "/galeria4.jpg",
  ];
  const [index, setIndex] = useState<number>(0);

  const prev = () => setIndex((index - 1 + imagenes.length) % imagenes.length);
  const next = () => setIndex((index + 1) % imagenes.length);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % imagenes.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [imagenes.length]);

  return (
    <main className="bg-black text-white">
      {/* =====================================================
          NAVBAR
      ===================================================== */}
      <header className="fixed top-0 left-0 w-full bg-black bg-opacity-80 backdrop-blur-md z-50 shadow-md">
        <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="TavoBarber Logo"
              width={40}
              height={40}
            />
            <span className="text-xl font-extrabold uppercase tracking-widest">
              TavoBarber
            </span>
          </div>
          <ul className="hidden md:flex gap-6 font-semibold">
            <li>
              <a
                href="#servicios"
                className="hover:text-yellow-400 transition"
              >
                Servicios
              </a>
            </li>
            <li>
              <a
                href="#reservas"
                className="hover:text-yellow-400 transition"
              >
                Reservas
              </a>
            </li>
            <li>
              <a
                href="#testimonios"
                className="hover:text-yellow-400 transition"
              >
                Testimonios
              </a>
            </li>
            <li>
              <a
                href="#contacto"
                className="hover:text-yellow-400 transition"
              >
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* =====================================================
          HERO PRINCIPAL
      ===================================================== */}
      <section
        className="relative h-screen flex items-center justify-center"
        id="top"
      >
        <Image
          src="/barberia.jpg"
          alt="Barbería TavoBarber"
          fill
          className="object-cover brightness-50"
        />
        <div className="relative text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold uppercase drop-shadow-lg">
            TavoBarber_CustomCuts
          </h1>
          <p className="mt-4 text-lg tracking-widest text-gray-300">
            Custom Cuts & Premium Style ✂️🔥
          </p>
          <a
            href="#reservas"
            className="mt-6 inline-block px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-lg font-bold hover:scale-105 transition"
          >
            Reservar Ahora
          </a>
        </div>
      </section>

      {/* =====================================================
          SECCIÓN PRESENTACIÓN
      ===================================================== */}
      <section className="bg-[#f9f6ef] text-center py-16 px-6 text-black">
        <h2 className="text-4xl md:text-5xl font-extrabold uppercase mb-6">
          NO SOLO UN <span className="text-yellow-600">CORTE</span>, UNA
          EXPERIENCIA
        </h2>
        <p className="max-w-3xl mx-auto mb-4">
          Somos una barbería <b>Old School</b> en donde lo más importante es que
          vivas una experiencia única. Hemos creado un ambiente en donde
          nuestros clientes se pueden relajar, escuchar buena música.
        </p>
        <p className="max-w-3xl mx-auto mb-8">
          Nuestro lema refleja nuestra filosofía de trabajo: ofrecer siempre un
          servicio de calidad que combine estilo, precisión y comodidad para que
          cada cliente se sienta especial.
        </p>
        <a
          href="#reservas"
          className="px-6 py-3 bg-yellow-600 text-white font-bold rounded-lg shadow hover:bg-yellow-700 transition"
        >
          PROGRAME SU CITA
        </a>
      </section>

      {/* =====================================================
          SERVICIOS con modal
      ===================================================== */}
      <section id="servicios" className="bg-black text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold uppercase mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
            Servicios premium: corte, barba y estilo con productos de primera. 💈
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {servicios.map((s, i) => (
              <div
                key={i}
                className="bg-black border border-yellow-600 rounded-xl p-6 shadow-xl hover:scale-105 hover:shadow-yellow-500/20 transition cursor-pointer"
                onClick={() => setServicioSeleccionado(s)}
              >
                <h3 className="text-xl font-bold mb-2">{s.nombre}</h3>
                <p className="text-lg text-yellow-400 mb-4">{s.precio}</p>
                <p className="text-gray-300 text-sm">{s.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          MODAL
      ===================================================== */}
      {servicioSeleccionado && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white text-black rounded-lg shadow-xl p-6 max-w-sm w-full">
            <h3 className="text-xl font-bold mb-4">Confirmar reserva</h3>
            <p className="mb-6">
              Seleccionaste <b>{servicioSeleccionado.nombre}</b> (
              <span className="text-yellow-600">
                {servicioSeleccionado.precio}
              </span>
              ).<br />
              ¿Quieres reservar este servicio?
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setServicioSeleccionado(null)}
                className="px-4 py-2 rounded border border-gray-400 hover:bg-gray-200"
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  setServicio(servicioSeleccionado.nombre);
                  setServicioSeleccionado(null);
                  document
                    .getElementById("reservas")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-4 py-2 rounded bg-yellow-500 text-white font-bold hover:bg-yellow-600"
              >
                Sí, reservar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================
          RESERVAS
      ===================================================== */}
      <section id="reservas" className="bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-center mb-8 uppercase">
            Reserva tu cita
          </h2>
          <form
            onSubmit={reservar}
            className="bg-black border border-gray-700 p-8 rounded-xl shadow-lg space-y-4"
          >
            <input
              type="text"
              placeholder="Nombre"
              className="w-full p-2 border border-gray-600 bg-black text-white rounded focus:border-yellow-500"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />

            <input
              type="tel"
              placeholder="Teléfono / WhatsApp"
              className="w-full p-2 border border-gray-600 bg-black text-white rounded focus:border-yellow-500"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              required
            />

            <select
              className="w-full p-2 border border-gray-600 bg-black text-white rounded focus:border-yellow-500"
              value={servicio}
              onChange={(e) => setServicio(e.target.value)}
              required
            >
              <option value="" disabled>
                -- Selecciona un servicio --
              </option>
              {serviciosReserva.map((s, i) => (
                <option key={i} value={s} className="text-white">
                  {s}
                </option>
              ))}
            </select>

            <input
              type="date"
              className="w-full p-2 border border-gray-600 bg-black text-white rounded focus:border-yellow-500"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              required
            />

            <select
              className="w-full p-2 border border-gray-600 bg-black text-white rounded focus:border-yellow-500"
              value={hora}
              onChange={(e) => setHora(e.target.value)}
              required
            >
              <option value="" disabled>
                -- Selecciona la hora --
              </option>
              {horasDisponibles.map((h, i) => (
                <option key={i} value={h} className="text-white">
                  {h}
                </option>
              ))}
            </select>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-500 to-yellow-700 py-2 rounded-lg font-bold hover:scale-105 transition"
            >
              Confirmar Reserva
            </button>
          </form>
        </div>
      </section>

      {/* =====================================================
          TESTIMONIOS
      ===================================================== */}
      <section id="testimonios" className="bg-gray-100 text-black py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold mb-6 uppercase">
            Lo que dicen nuestros clientes
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-yellow-500 rounded-xl p-6 shadow-md bg-white hover:shadow-lg transition">
              <p className="italic text-gray-700 mb-4">
                “Excelente servicio personalizado, fácil reservar por WhatsApp.
                Muy preciso y el resultado genial.”
              </p>
              <h4 className="font-bold">– Andrés Ramírez</h4>
            </div>
            <div className="border border-yellow-500 rounded-xl p-6 shadow-md bg-white hover:shadow-lg transition">
              <p className="italic text-gray-700 mb-4">
                “Los visito mensualmente y siempre salgo satisfecho. Personal
                muy amable y conocedor.”
              </p>
              <h4 className="font-bold">– Luis Calderón</h4>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          GALERÍA
      ===================================================== */}
      <section id="galeria" className="bg-black py-12">
        <h2 className="text-3xl font-extrabold text-center mb-8 uppercase">
          Galería
        </h2>

        <div
          className="relative max-w-4xl mx-auto"
          onTouchStart={(e: React.TouchEvent<HTMLDivElement>) => {
            (window as unknown as { touchStartX?: number }).touchStartX =
              e.touches[0].clientX;
          }}
          onTouchEnd={(e: React.TouchEvent<HTMLDivElement>) => {
            const startX =
              (window as unknown as { touchStartX?: number }).touchStartX ?? 0;
            const endX = e.changedTouches[0].clientX;
            if (startX - endX > 50) next();
            else if (endX - startX > 50) prev();
          }}
        >
          <Image
            src={imagenes[index]}
            alt={`Imagen ${index + 1}`}
            width={800}
            height={500}
            className="w-full h-[500px] object-contain rounded-lg"
          />

          <button
            onClick={prev}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black transition"
          >
            ◀
          </button>
          <button
            onClick={next}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black transition"
          >
            ▶
          </button>

          <div className="flex justify-center gap-2 mt-4">
            {imagenes.map((_, i) => (
              <span
                key={i}
                className={`w-3 h-3 rounded-full ${
                  i === index ? "bg-yellow-500" : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACTO + FOOTER
      ===================================================== */}
      <section id="contacto" className="bg-black py-12 text-center">
        <h2 className="text-2xl font-bold mb-4 uppercase">Contáctanos</h2>
        <p className="text-gray-400 mb-6">
          Reserva por WhatsApp o síguenos en Instagram para ver nuestro trabajo.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="https://wa.me/50686084560"
            target="_blank"
            className="inline-block px-6 py-3 bg-gradient-to-r from-green-500 to-green-700 rounded-lg font-bold hover:scale-105 transition"
          >
            WhatsApp
          </a>
          <a
            href="https://instagram.com/tavobarber_customcuts_"
            target="_blank"
            className="inline-block px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-700 rounded-lg font-bold hover:scale-105 transition"
          >
            Instagram
          </a>
        </div>
      </section>

      <footer className="bg-black text-white py-10">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
          <h3 className="text-2xl font-extrabold">TavoBarber_CustomCuts</h3>
          <div className="flex gap-6 text-2xl">
            <a
              href="https://instagram.com/tavobarber_customcuts_"
              target="_blank"
              className="hover:text-yellow-500"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/50686084560"
              target="_blank"
              className="hover:text-green-500"
            >
              <FaWhatsapp />
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Todos los derechos reservados
          </p>
          <a
            href="#top"
            className="p-3 border border-white rounded-full hover:bg-white hover:text-black transition"
          >
            <FaArrowUp />
          </a>
        </div>
      </footer>

      <a
        href="https://wa.me/50686084560"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition"
      >
        <FaWhatsapp size={28} />
      </a>
    </main>
  );
}

