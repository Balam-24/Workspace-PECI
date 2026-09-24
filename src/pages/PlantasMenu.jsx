import { Link } from "react-router-dom";

export default function PlantasMenu() {
  const juegos = [
    {
      emoji: "📖",
      titulo: "Explora las Plantas",
      maya: "Kaxtik le paak'alo'ob",
      descripcion: "Aprende para qué sirve cada planta medicinal maya tocando las tarjetas.",
      descripcionMaya: "Ka'ansaj ba'ax ku beetik amal paak'al ts'aak maya",
      ruta: "/saberes/plantas/explora",
      fondo: "bg-gradient-to-br from-green-400 to-teal-600",
      color: "hover:bg-[#E8F5E9] border-green-300",
      btn: "bg-green-700 hover:bg-green-900",
      decorEmoji: ["🌿", "🌺", "🍃"],
    },
    {
      emoji: "🔍",
      titulo: "Identifica la Planta",
      maya: "Na'at le paak'al ts'aak",
      descripcion: "Te mostramos síntomas y tú eliges qué planta medicinal usar para curar.",
      descripcionMaya: "K ts'aik u k'ojol yéetel ta kaxtik ba'ax paak'al ku ts'aak",
      ruta: "/saberes/plantas/identifica",
      fondo: "bg-gradient-to-br from-teal-400 to-cyan-600",
      color: "hover:bg-[#E0F7F4] border-teal-300",
      btn: "bg-teal-700 hover:bg-teal-900",
      decorEmoji: ["💊", "🌱", "✨"],
    },
  ];

  return (
    <div className="min-h-screen bg-[#2C5F4D]">

      {/* HERO */}
      <div className="relative bg-gradient-to-br from-[#0F6E56] to-[#1D9E75] px-8 py-14 overflow-hidden">
        <div className="absolute top-4 right-8 text-[120px] opacity-10">🌿</div>
        <div className="absolute bottom-4 left-8 text-[80px] opacity-10">🌺</div>
        <div className="absolute top-20 left-1/3 text-[60px] opacity-10">⭐</div>

        <Link to="/saberes" className="text-green-100 font-bold text-lg hover:text-white transition relative z-10">
          ← Volver
        </Link>

        <div className="relative z-10 mt-6 text-center">
          <div className="text-8xl mb-4 drop-shadow-2xl">🌿</div>
          <div className="inline-block bg-white/10 text-green-100 text-sm font-bold px-4 py-1 rounded-full mb-4">
            🌽 Saberes Ancestrales
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-2">
            Plantas Medicinales
          </h1>
          <p className="italic text-green-100 text-xl mb-4">Le Paak'al Ts'aak</p>
          <p className="text-green-50 text-lg max-w-xl mx-auto">
            Los mayas conocían el poder curativo de las plantas. ¡Aprende sus secretos jugando!
          </p>
          <p className="italic text-green-200 text-sm mt-2">
            Le maaya'ob u wojel u ts'aak le paak'alo'ob — Ko'ox kanik báaxal
          </p>
        </div>
      </div>

      {/* OLA */}
      <div className="w-full overflow-hidden -mt-1">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg">
          <path fill="#0F6E56" d="M0,40 C480,80 960,0 1440,40 L1440,0 L0,0 Z"/>
        </svg>
      </div>

      {/* TARJETAS */}
     <div className="px-8 pb-16 -mt-4">
  <p className="text-center text-white font-bold text-xl mb-2">
    🎮 ¿Qué quieres hacer?
  </p>
        <p className="text-center italic text-[#A98467] text-sm mb-10">
          Ba'ax a k'áat a beetik? — ¿Qué quieres hacer?
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {juegos.map((juego, index) => (
            <div
              key={index}
              className={`bg-white rounded-[30px] shadow-2xl border-2 overflow-hidden transition duration-300 hover:-translate-y-4 hover:shadow-3xl ${juego.color}`}
            >
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
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-1">{juego.titulo}</h2>
                <p className="italic text-[#A98467] text-sm mb-4">{juego.maya}</p>
                <p className="text-gray-600 leading-relaxed mb-1 text-sm">{juego.descripcion}</p>
                <p className="text-xs italic text-[#A98467] leading-relaxed mb-6">{juego.descripcionMaya}</p>
                <Link
                  to={juego.ruta}
                  className={`${juego.btn} text-white px-6 py-3 rounded-2xl font-bold hover:scale-105 transition duration-300 w-full text-center block text-lg shadow-lg`}
                >
                  ¡Vamos! 🌿
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Banner */}
        <div className="mt-12 max-w-4xl mx-auto bg-gradient-to-r from-[#0F6E56] to-[#1D9E75] rounded-[30px] p-8 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-2 left-4 text-6xl opacity-10">🌺</div>
          <div className="absolute bottom-2 right-4 text-6xl opacity-10">🍃</div>
          <p className="text-5xl mb-3">🌿</p>
          <h3 className="text-3xl font-bold text-white mb-2">¿Sabías que...?</h3>
          <p className="italic text-green-100 mb-3">Ba'ax a wojel wáaj...</p>
          <p className="text-green-50 max-w-xl mx-auto">
            Los mayas usaban más de 300 plantas diferentes para curar enfermedades. Muchas de estas plantas se siguen usando en la medicina moderna.
          </p>
          <p className="italic text-green-200 text-sm mt-3">
            Le maaya'ob ku kaxtik yaan 300 paak'al ts'aak — Beetik yaan ichil le ts'aak nojoch
          </p>
        </div>
      </div>
    </div>
  );
}