import { Link } from "react-router-dom";

export default function Saberes() {
  const temas = [
    {
      emoji: "🌽",
      titulo: "La Milpa Maya",
      maya: "Le Kool Maya",
      descripcion: "Aprende sobre el sistema de cultivo más importante de la cultura maya con juegos interactivos.",
      descripcionMaya: "Ka'ansaj u yuum u paak'al maaya'ob yéetel báaxal",
      ruta: "/game/milpa",
      color: "hover:bg-[#FFF9C4] border-yellow-200",
      btn: "bg-yellow-600 hover:bg-yellow-800",
    },
    {
      emoji: "🌿",
      titulo: "Plantas Medicinales",
      maya: "Le Paak'al Ts'aak",
      descripcion: "Descubre las plantas que los mayas usaban para curar enfermedades y mantener la salud.",
      descripcionMaya: "Ka'ansaj le paak'alo'ob ku kaxtikil u ts'aak le maaya'ob",
      ruta: "/saberes/plantas",
      color: "hover:bg-[#E8F5E9] border-green-200",
      btn: "bg-green-700 hover:bg-green-900",
    },
  ];

  return (
    <div className="min-h-screen bg-orange-50">

      {/* HERO */}
      <div className="relative bg-gradient-to-br from-[#854F0B] to-[#E9C46A] px-8 py-12 overflow-hidden">
        <div className="absolute top-4 right-8 text-[100px] opacity-10">🌽</div>
        <div className="absolute bottom-4 left-8 text-[80px] opacity-10">🌿</div>
        <div className="absolute top-20 left-1/3 text-[60px] opacity-10">⭐</div>

        <Link to="/" className="text-yellow-100 font-bold text-lg hover:text-white transition relative z-10">
          ← Volver al inicio
        </Link>

        <div className="relative z-10 mt-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-2">
            🌽 Saberes Ancestrales
          </h1>
          <p className="italic text-yellow-100 text-lg mb-3">Nukuch K'aaba'</p>
          <p className="text-yellow-50 text-lg max-w-xl">
            Explora los conocimientos que los mayas han transmitido de generación en generación.
          </p>
          <p className="italic text-yellow-200 text-sm mt-1">
            Ka'ansaj le na'atil maaya'ob ku bisik tu pach u ja'abil
          </p>
        </div>
      </div>

      {/* OLA */}
      <div className="w-full overflow-hidden -mt-1">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg">
          <path fill="#854F0B" d="M0,40 C480,80 960,0 1440,40 L1440,0 L0,0 Z"/>
        </svg>
      </div>

      {/* TARJETAS */}
      <div className="px-8 pb-16 -mt-4">
        <p className="text-center text-orange-800 font-bold text-xl mb-2">
          ¿Qué quieres explorar?
        </p>
        <p className="text-center italic text-[#A98467] text-sm mb-10">
          Ba'ax a k'áat a kanik? — ¿Qué quieres aprender?
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {temas.map((tema, index) => (
            <div
              key={index}
              className={`bg-white rounded-3xl shadow-xl border-2 overflow-hidden transition duration-300 hover:-translate-y-3 hover:shadow-2xl ${tema.color}`}
            >
              <div className="bg-gradient-to-br from-orange-100 to-yellow-50 p-8 flex flex-col items-center">
                <div className="text-7xl mb-3 drop-shadow">{tema.emoji}</div>
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-orange-800 mb-1">{tema.titulo}</h2>
                <p className="italic text-[#A98467] text-sm mb-4">{tema.maya}</p>
                <p className="text-gray-600 leading-relaxed mb-1">{tema.descripcion}</p>
                <p className="text-xs italic text-[#A98467] leading-relaxed mb-6">{tema.descripcionMaya}</p>
                <Link
                  to={tema.ruta}
                  className={`${tema.btn} text-white px-6 py-3 rounded-2xl font-bold hover:scale-105 transition duration-300 w-full text-center block`}
                >
                  Explorar 🌿
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Banner */}
        <div className="mt-12 max-w-4xl mx-auto bg-gradient-to-r from-[#854F0B] to-[#E9C46A] rounded-[30px] p-8 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-2 left-4 text-6xl opacity-10">🌺</div>
          <div className="absolute bottom-2 right-4 text-6xl opacity-10">⭐</div>
          <p className="text-5xl mb-3">🏛️</p>
          <h3 className="text-3xl font-bold text-white mb-2">Sabiduría Maya</h3>
          <p className="italic text-yellow-100 mb-3">U na'atil maaya'ob</p>
          <p className="text-yellow-50 max-w-xl mx-auto">
            Los mayas desarrollaron conocimientos avanzados en agricultura, medicina, astronomía y arquitectura que siguen siendo relevantes hoy en día.
          </p>
        </div>
      </div>
    </div>
  );
}