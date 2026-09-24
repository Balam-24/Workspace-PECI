import { Link } from "react-router-dom";

export default function LenguaMaya() {
  return (
    <div className="min-h-screen bg-yellow-50 p-10">

      <Link to="/" className="text-yellow-800 font-bold text-lg">
        ← Volver al inicio
      </Link>

      <h1 className="text-5xl font-bold text-yellow-800 mb-10 mt-5">
        🗣️ Juegos de Lengua Maya
      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="bg-white p-8 rounded-3xl shadow-lg hover:scale-105 hover:bg-[#EDE7F6] transition duration-300">
          <div className="text-5xl mb-4">🃏</div>
          <h2 className="text-xl font-bold text-yellow-800 mb-2">Memorama Maya</h2>
          <p className="text-gray-600 text-sm mb-6">Encuentra los pares de palabras en español y en maya.</p>
          <Link
            to="/game/cenote/memorama"
            className="inline-block bg-yellow-600 text-white px-6 py-3 rounded-2xl font-bold hover:bg-yellow-800 hover:scale-105 transition duration-300"
          >
            Jugar
          </Link>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-lg hover:scale-105 hover:bg-[#FFF9C4] transition duration-300">
          <div className="text-5xl mb-4">🔤</div>
          <h2 className="text-xl font-bold text-yellow-800 mb-2">Aprende Palabras</h2>
          <p className="text-gray-600 text-sm mb-6">Aprende vocabulario maya de forma divertida.</p>
          <button className="bg-yellow-600 text-white px-6 py-3 rounded-2xl font-bold opacity-50 cursor-not-allowed">
            Próximamente
          </button>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-lg hover:scale-105 hover:bg-[#FFF3E0] transition duration-300">
          <div className="text-5xl mb-4">🧠</div>
          <h2 className="text-xl font-bold text-yellow-800 mb-2">Trivia Maya</h2>
          <p className="text-gray-600 text-sm mb-6">Pon a prueba tus conocimientos sobre la cultura maya.</p>
          <button className="bg-yellow-600 text-white px-6 py-3 rounded-2xl font-bold opacity-50 cursor-not-allowed">
            Próximamente
          </button>
        </div>

      </div>

    </div>
  );
}