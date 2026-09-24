import { useAuth } from "../contexto/AuthContexto";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";

export default function Progreso() {
  const { usuario } = useAuth();
  const navigate = useNavigate();

  const cerrarSesion = async () => {
    await signOut(auth);
    navigate("/login");
  };

  if (!usuario) {
    navigate("/login");
    return null;
  }

  return (
    <div className="min-h-screen bg-[#F4F0E6]">

      {/* HEADER */}
      <div className="bg-gradient-to-br from-[#1E3D32] to-[#2C5F4D] px-8 py-10 relative overflow-hidden">
        <div className="absolute top-4 right-8 text-[80px] opacity-10">🏆</div>
        <Link to="/" className="text-green-300 font-bold hover:text-white transition">
          ← Volver al inicio
        </Link>
        <div className="flex items-center gap-6 mt-6">
          <img
            src={usuario.photoURL}
            alt={usuario.displayName}
            className="w-20 h-20 rounded-full border-4 border-[#E9C46A] shadow-xl"
          />
          <div>
            <h1 className="text-3xl font-bold text-white">{usuario.displayName}</h1>
            <p className="text-green-300 text-sm">{usuario.email}</p>
            <p className="italic text-[#E9C46A] text-sm mt-1">Ko'ox kanik — ¡Vamos a aprender!</p>
          </div>
        </div>
      </div>

      {/* CONTENIDO */}
      <div className="max-w-4xl mx-auto px-8 py-10">

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mb-10">
          <div className="bg-white rounded-3xl p-6 text-center shadow-lg">
            <p className="text-4xl font-bold text-[#2C5F4D]">0</p>
            <p className="text-gray-500 text-sm mt-1">Juegos completados</p>
          </div>
          <div className="bg-white rounded-3xl p-6 text-center shadow-lg">
            <p className="text-4xl font-bold text-[#E9C46A]">0</p>
            <p className="text-gray-500 text-sm mt-1">Puntos totales</p>
          </div>
          <div className="bg-white rounded-3xl p-6 text-center shadow-lg">
            <p className="text-4xl font-bold text-[#A98467]">0</p>
            <p className="text-gray-500 text-sm mt-1">Logros</p>
          </div>
        </div>

        {/* Juegos */}
        <h2 className="text-2xl font-bold text-[#1E3D32] mb-6">🎮 Mis juegos</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          {[
            { nombre: "Clasifica la Basura", emoji: "♻️", ruta: "/game/reciclaje" },
            { nombre: "Salva el Cenote", emoji: "💧", ruta: "/game/cenote" },
            { nombre: "Memorama Maya", emoji: "🃏", ruta: "/game/cenote/memorama" },
            { nombre: "Mapa de la Selva", emoji: "🗺️", ruta: "/game/arbol/mapa" },
            { nombre: "Trivia de la Selva", emoji: "❓", ruta: "/game/arbol/trivia" },
          ].map((j, i) => (
            <Link
              key={i}
              to={j.ruta}
              className="bg-white rounded-2xl p-5 flex items-center gap-4 shadow hover:shadow-lg hover:scale-105 transition duration-300"
            >
              <span className="text-4xl">{j.emoji}</span>
              <div>
                <p className="font-bold text-[#1E3D32]">{j.nombre}</p>
                <p className="text-xs text-gray-400">Sin jugar aún</p>
              </div>
              <span className="ml-auto text-gray-300">→</span>
            </Link>
          ))}
        </div>

        {/* Cerrar sesión */}
        <button
          onClick={cerrarSesion}
          className="w-full bg-red-100 text-red-700 py-3 rounded-2xl font-bold hover:bg-red-200 transition"
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  );
}