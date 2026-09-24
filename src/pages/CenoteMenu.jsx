import { Link } from "react-router-dom";

export default function CenoteMenu() {
  const juegos = [
    {
      emoji: "🧩",
      titulo: "Salva el Cenote",
      maya: "Taakpajal le ts'ono'ot",
      descripcion: "Arrastra las acciones buenas y malas para proteger el cenote.",
      descripcionMaya: "Jaats'uts u ts'aik le beetiko'ob ku yáantik yéetel ku k'aasik le ts'ono'ot",
      ruta: "/game/cenote/arrastra",
      fondo: "bg-gradient-to-br from-blue-400 to-cyan-600",
      color: "hover:bg-[#E3F2FD] border-blue-200",
      btn: "bg-blue-700 hover:bg-blue-900",
      decorEmoji: ["💧", "🐠", "🌊"],
    },
    {
      emoji: "🃏",
      titulo: "Memorama del Cenote",
      maya: "Memorama ts'ono'ot",
      descripcion: "Encuentra los pares de palabras en español y en maya.",
      descripcionMaya: "Kaxtik u pares u k'aaba' español yéetel maya",
      ruta: "/game/cenote/memorama",
      fondo: "bg-gradient-to-br from-purple-400 to-indigo-600",
      color: "hover:bg-[#EDE7F6] border-purple-200",
      btn: "bg-purple-600 hover:bg-purple-800",
      decorEmoji: ["🃏", "⭐", "🌟"],
    },
  ];

  return (
    <div className="min-h-screen" style={{backgroundColor: "#BBDEFB"}}>

      {/* HERO */}
      <div className="relative px-8 py-14 overflow-hidden" style={{background: "linear-gradient(135deg, #0D47A1, #1565C0)"}}>
        <div className="absolute top-4 right-8 text-[120px] opacity-10">💧</div>
        <div className="absolute bottom-4 left-8 text-[80px] opacity-10">🌊</div>
        <div className="absolute top-20 left-1/3 text-[60px] opacity-10">🐠</div>
        <div className="absolute bottom-10 right-40 text-[70px] opacity-10">🐢</div>

        <Link to="/medio-ambiente" className="text-blue-100 font-bold text-lg hover:text-white transition relative z-10">
          ← Volver
        </Link>

        <div className="relative z-10 mt-6 text-center">
          <div className="text-8xl mb-4 drop-shadow-2xl">💧</div>
          <div className="inline-block bg-white/10 text-blue-100 text-sm font-bold px-4 py-1 rounded-full mb-4">
            🌊 Medio Ambiente
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-2">
            El Cenote
          </h1>
          <p className="italic text-blue-100 text-xl mb-4">Le ts'ono'ot</p>
          <p className="text-blue-50 text-lg max-w-xl mx-auto">
            Los cenotes son sagrados para la cultura maya. ¡Apréndelos jugando!
          </p>
          <p className="italic text-blue-200 text-sm mt-2">
            Le ts'ono'ot kili'ichtak ti' u miatsil maaya'ob — Ko'ox kanik báaxal
          </p>
        </div>
      </div>

      {/* OLA */}
      <div className="w-full overflow-hidden -mt-1">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg">
          <path fill="#0D47A1" d="M0,40 C480,80 960,0 1440,40 L1440,0 L0,0 Z"/>
        </svg>
      </div>

      {/* TARJETAS */}
      <div className="px-8 pb-16 -mt-4">
        <p className="text-center text-blue-900 font-bold text-xl mb-2">
          🎮 Elige tu juego
        </p>
        <p className="text-center italic text-[#A98467] text-sm mb-10">
          Ko'ox báaxal — ¡Vamos a jugar!
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
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
                  ¡Jugar ahora! 🎮
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Banner */}
        <div className="mt-12 max-w-3xl mx-auto rounded-[30px] p-8 text-center shadow-2xl relative overflow-hidden" style={{background: "linear-gradient(135deg, #0D47A1, #1565C0)"}}>
          <div className="absolute top-2 left-4 text-6xl opacity-10">🌊</div>
          <div className="absolute bottom-2 right-4 text-6xl opacity-10">🐢</div>
          <p className="text-5xl mb-3">💧</p>
          <h3 className="text-3xl font-bold text-white mb-2">¿Sabías que...?</h3>
          <p className="italic text-blue-100 mb-3">Ba'ax a wojel wáaj...</p>
          <p className="text-blue-50 max-w-xl mx-auto">
            Yucatán tiene más de 6,000 cenotes. Son la principal fuente de agua dulce de la península y son sagrados para la cultura maya.
          </p>
          <p className="italic text-blue-200 text-sm mt-3">
            Yucatán yaan u yaan 6,000 ts'ono'ot — U noj kúuchil u ts'aik ja' ch'ujuk
          </p>
        </div>
      </div>
    </div>
  );
}