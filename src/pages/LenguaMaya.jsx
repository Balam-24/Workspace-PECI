import { Link } from "react-router-dom";

export default function LenguaMaya() {
  const juegos = [
    {
      emoji: "🃏",
      titulo: "Memorama Maya",
      maya: "Memorama Maaya",
      descripcion: "Encuentra los pares de palabras en español y en maya.",
      descripcionMaya: "Kaxtik u pares u k'aaba' español yéetel maya",
      ruta: "/game/cenote/memorama",
      fondo: "bg-gradient-to-br from-purple-400 to-indigo-600",
      color: "hover:bg-[#EDE7F6] border-purple-200",
      btn: "bg-purple-700 hover:bg-purple-900",
      decorEmoji: ["🃏", "⭐", "🌟"],
      activo: true,
    },
    {
      emoji: "🔤",
      titulo: "Aprende Palabras",
      maya: "Ka'ansaj u k'aaba'",
      descripcion: "Aprende vocabulario maya de forma divertida.",
      descripcionMaya: "Ka'ansaj u t'aan maya yéetel báaxal",
      ruta: "/lengua-maya/palabras",
      fondo: "bg-gradient-to-br from-yellow-400 to-orange-500",
      color: "hover:bg-[#FFF9C4] border-yellow-200",
      btn: "bg-yellow-600 hover:bg-yellow-800",
      decorEmoji: ["🔤", "📚", "✏️"],
      activo: true,
    },
    {
      emoji: "🧠",
      titulo: "Trivia Maya",
      maya: "Trivia Maaya",
      descripcion: "Pon a prueba tus conocimientos sobre la cultura maya.",
      descripcionMaya: "Kaxtik ba'ax a wojel yéetel u miatsil maya",
      ruta: "/lengua-maya/trivia",
      fondo: "bg-gradient-to-br from-pink-400 to-rose-600",
      color: "hover:bg-[#FFF0F0] border-pink-200",
      btn: "bg-pink-600 hover:bg-pink-800",
      decorEmoji: ["🧠", "💡", "🌟"],
      activo: true
    },
  ];

  return (
    <div className="min-h-screen bg-[#F4F0E6]">

      {/* HERO */}
      <div className="relative bg-gradient-to-br from-[#6A2F8C] to-[#9B59B6] px-8 py-14 overflow-hidden">
        <div className="absolute top-4 right-8 text-[120px] opacity-10">🗣️</div>
        <div className="absolute bottom-4 left-8 text-[80px] opacity-10">📚</div>
        <div className="absolute top-20 left-1/3 text-[60px] opacity-10">⭐</div>
        <div className="absolute bottom-10 right-40 text-[70px] opacity-10">🌟</div>

        <Link to="/" className="text-purple-100 font-bold text-lg hover:text-white transition relative z-10">
          ← Volver al inicio
        </Link>

        <div className="relative z-10 mt-6 text-center">
          <div className="text-8xl mb-4 drop-shadow-2xl">🗣️</div>
          <div className="inline-block bg-white/10 text-purple-100 text-sm font-bold px-4 py-1 rounded-full mb-4">
            📚 Aprende la Lengua Maya
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-2">
            Juegos de Lengua Maya
          </h1>
          <p className="italic text-purple-100 text-xl mb-4">Báaxal Maayat'aan</p>
          <p className="text-purple-50 text-lg max-w-xl mx-auto">
            Aprende palabras y expresiones mayas mientras juegas y te diviertes.
          </p>
          <p className="italic text-purple-200 text-sm mt-2">
            Ka'ansaj u t'aan maya yéetel báaxal — Ko'ox kanik!
          </p>
        </div>
      </div>

      {/* OLA */}
      <div className="w-full overflow-hidden -mt-1">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg">
          <path fill="#4A235A" d="M0,40 C480,80 960,0 1440,40 L1440,0 L0,0 Z"/>
        </svg>
      </div>

      {/* TARJETAS */}
      <div className="px-8 pb-16 -mt-4">
        <p className="text-center text-purple-800 font-bold text-xl mb-2">
          🎮 Elige tu juego
        </p>
        <p className="text-center italic text-[#A98467] text-sm mb-10">
          Ko'ox báaxal — ¡Vamos a jugar!
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {juegos.map((juego, index) => (
            <div
              key={index}
              className={`bg-white rounded-[30px] shadow-2xl border-2 overflow-hidden transition duration-300 hover:-translate-y-4 hover:shadow-3xl ${juego.color}`}
            >
              {/* Header colorido */}
              <div className={`${juego.fondo} p-8 relative overflow-hidden`}>
                {juego.decorEmoji.map((e, i) => (
                  <span
                    key={i}
                    className="absolute opacity-20"
                    style={{
                      top: i === 0 ? "8px" : i === 1 ? "40px" : "10px",
                      right: i === 0 ? "12px" : i === 1 ? "60px" : "90px",
                      fontSize: i === 0 ? "60px" : i === 1 ? "40px" : "50px",
                    }}
                  >
                    {e}
                  </span>
                ))}
                <div className="text-8xl mb-2 drop-shadow-lg relative z-10 text-center">
                  {juego.emoji}
                </div>
                {!juego.activo && (
                  <div className="absolute top-3 right-3 bg-white/30 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Próximamente
                  </div>
                )}
              </div>

              {/* Contenido */}
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-1">{juego.titulo}</h2>
                <p className="italic text-[#A98467] text-sm mb-4">{juego.maya}</p>
                <p className="text-gray-600 leading-relaxed mb-1 text-sm">{juego.descripcion}</p>
                <p className="text-xs italic text-[#A98467] leading-relaxed mb-6">{juego.descripcionMaya}</p>

                {juego.activo ? (
                  <Link
                    to={juego.ruta}
                    className={`${juego.btn} text-white px-6 py-3 rounded-2xl font-bold hover:scale-105 transition duration-300 w-full text-center block text-lg shadow-lg`}
                  >
                    ¡Jugar ahora! 🎮
                  </Link>
                ) : (
                  <button className="bg-gray-200 text-gray-500 px-6 py-3 rounded-2xl font-bold w-full cursor-not-allowed text-lg">
                    Próximamente...
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Banner */}
        <div className="mt-12 max-w-5xl mx-auto bg-gradient-to-r from-[#4A235A] to-[#7B3F9E] rounded-[30px] p-8 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-2 left-4 text-6xl opacity-10">🌺</div>
          <div className="absolute bottom-2 right-4 text-6xl opacity-10">⭐</div>
          <p className="text-5xl mb-3">🗣️</p>
          <h3 className="text-3xl font-bold text-white mb-2">¿Sabías que...?</h3>
          <p className="italic text-purple-100 mb-3">Ba'ax a wojel wáaj...</p>
          <p className="text-purple-50 max-w-xl mx-auto">
            El maya yucateco es hablado por más de 800,000 personas en México. ¡Es una de las lenguas indígenas más vivas del país!
          </p>
          <p className="italic text-purple-200 text-sm mt-3">
            Le maaya t'aan ku t'anik yaan 800,000 máak tu México — Jump'éel u mas kuxan t'aan
          </p>
        </div>
      </div>
    </div>
  );
}