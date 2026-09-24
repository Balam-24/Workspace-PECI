import { Link } from "react-router-dom";

export default function MedioAmbiente() {
  const juegos = [
    {
      emoji: "♻️",
      titulo: "Clasifica la Basura",
      maya: "Ts'o'ok u páajtal le basura",
      descripcion: "Aprender a separar la basura ayuda a reducir la contaminación y protege los animales y plantas de nuestra región maya.",
      descripcionMaya: "U kanik u jatsik le sojolo' ku yáantik u xu'ulul le contaminación yéetel ku kanáantik le ba'alche'obo' yéetel le paak'alo'ob yaan te' k región mayao'.",
      ruta: "/game/reciclaje",
      fondo: "bg-gradient-to-br from-green-400 to-emerald-600",
      sombra: "shadow-green-200",
      borde: "border-green-300",
      boton: "bg-green-700 hover:bg-green-900",
      badge: "bg-green-100 text-green-800",
      badgeTexto: "♻️ Reciclaje",
      decorEmoji: ["🌿", "🌱", "🍃"],
    },
    {
      emoji: "💧",
      titulo: "Salva el Cenote",
      maya: "Taakpajal le ts'ono'ot",
      descripcion: "Los cenotes son sagrados para la cultura maya y son la principal fuente de agua dulce en la península de Yucatán. ¡Debemos cuidarlos!",
      descripcionMaya: "Le cenote'obo' kili'ichtak ti' u miatsil maaya'ob yéetel leti'ob u noj kúuchil u ts'aik ja' ch'ujuk tu petenil Yucatán. ¡K'a'abéet k kanáantiko'ob!",
      ruta: "/game/cenote",
      fondo: "bg-gradient-to-br from-blue-400 to-cyan-600",
      sombra: "shadow-blue-200",
      borde: "border-blue-300",
      boton: "bg-blue-700 hover:bg-blue-900",
      badge: "bg-blue-100 text-blue-800",
      badgeTexto: "💧 Agua",
      decorEmoji: ["🐠", "🌊", "🐢"],
    },
    {
      emoji: "🌳",
      titulo: "Planta un Árbol",
      maya: "Pak' che'",
      descripcion: "Los árboles purifican el aire, dan refugio a los animales y son parte esencial de la selva maya que ha existido por miles de años.",
      descripcionMaya: "Le che'obo' ku limpiartik le iik'o', ku ts'áaiko'ob kúuchil ti' ba'alche'ob, yéetel leti'obe' jump'éel nu'ukulil k'a'abéet ti' le k'áaxo'ob maya'ob ts'o'ok u yantal ichil u milesil ja'abo'ob.",
      ruta: "/game/arbol",
      fondo: "bg-gradient-to-br from-lime-400 to-green-600",
      sombra: "shadow-lime-200",
      borde: "border-lime-300",
      boton: "bg-lime-700 hover:bg-lime-900",
      badge: "bg-lime-100 text-lime-800",
      badgeTexto: "🌳 Selva",
      decorEmoji: ["🦋", "🌺", "🐆"],
    },
  ];

  return (
    <div className="min-h-screen bg-[#DDE5D0]">

      {/* HERO */}
      <div className="relative bg-gradient-to-br from-[#1E3D32] to-[#2C5F4D] px-8 py-12 overflow-hidden">
        <div className="absolute top-4 right-8 text-[120px] opacity-10 animate-spin" style={{animationDuration:"20s"}}>🌍</div>
        <div className="absolute bottom-4 left-8 text-[80px] opacity-10">🌿</div>
        <div className="absolute top-20 left-1/3 text-[60px] opacity-10">🦜</div>

        <Link to="/" className="inline-flex items-center gap-2 text-green-300 font-bold text-lg hover:text-white transition mb-6 relative z-10">
          ← Volver al inicio
        </Link>

        <div className="relative z-10">
          <div className="inline-block bg-white/10 text-green-200 text-sm font-bold px-4 py-1 rounded-full mb-4">
            🌎 Protege nuestra tierra
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-2">
            Juegos del
            <span className="block text-[#E9C46A]">Medio Ambiente 🌿</span>
          </h1>
          <p className="italic text-green-300 text-lg mb-3">U Kúuchil Lu'um</p>
          <p className="text-green-100 text-lg max-w-xl">
            La naturaleza es un regalo sagrado. Aprende jugando cómo podemos protegerla cada día.
          </p>
        </div>
      </div>

      {/* OLA */}
      <div className="w-full overflow-hidden -mt-1">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg">
          <path fill="#1E3D32" d="M0,40 C480,80 960,0 1440,40 L1440,0 L0,0 Z"/>
        </svg>
      </div>

      {/* TARJETAS */}
      <div className="px-8 pb-16 -mt-4">

        <p className="text-center text-green-800 font-bold text-xl mb-8">
           Elige tu aventura
          <span className="block text-sm font-normal italic text-[#A98467] mt-1">Ko'ox báaxal — ¡Vamos a jugar!</span>
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {juegos.map((juego, index) => (
            <div
              key={index}
              className={`bg-white rounded-[30px] shadow-2xl ${juego.sombra} border-2 ${juego.borde} overflow-hidden transition duration-300 hover:-translate-y-4 hover:shadow-3xl`}
            >
              {/* Header colorido */}
              <div className={`${juego.fondo} p-8 relative overflow-hidden`}>
                {/* Emojis decorativos */}
                {juego.decorEmoji.map((e, i) => (
                  <span
                    key={i}
                    className="absolute opacity-20 text-5xl"
                    style={{
                      top: i === 0 ? "8px" : i === 1 ? "40px" : "10px",
                      right: i === 0 ? "12px" : i === 1 ? "60px" : "90px",
                      fontSize: i === 0 ? "60px" : i === 1 ? "40px" : "50px",
                    }}
                  >
                    {e}
                  </span>
                ))}
                <div className="text-8xl mb-2 drop-shadow-lg relative z-10">
                  {juego.emoji}
                </div>
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${juego.badge} relative z-10`}>
                  {juego.badgeTexto}
                </span>
              </div>

              {/* Contenido */}
              <div className="p-7">
                <h2 className="text-2xl font-bold text-gray-800 mb-1">
                  {juego.titulo}
                </h2>
                <p className="text-sm italic text-[#A98467] mb-4 font-medium">
                  {juego.maya}
                </p>
                <p className="text-gray-600 leading-relaxed mb-1 text-sm">
                  {juego.descripcion}
                </p>
                <p className="text-xs italic text-[#A98467] leading-relaxed mb-6">
                  {juego.descripcionMaya}
                </p>

                <Link
                  to={juego.ruta}
                  className={`${juego.boton} text-white px-6 py-3 rounded-2xl font-bold hover:scale-105 transition duration-300 w-full text-center block text-lg shadow-lg`}
                >
                  ¡Jugar ahora! 
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* BANNER INFERIOR */}
        <div className="mt-14 max-w-4xl mx-auto bg-gradient-to-r from-[#2C5F4D] to-[#1E3D32] rounded-[30px] p-8 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-2 left-4 text-6xl opacity-10">🌺</div>
          <div className="absolute bottom-2 right-4 text-6xl opacity-10">🦋</div>
          <div className="absolute top-2 right-20 text-5xl opacity-10">⭐</div>
          <p className="text-5xl mb-3">🌎</p>
          <h3 className="text-3xl font-bold text-white mb-2">
            ¡Cada acción cuenta!
          </h3>
          <p className="italic text-green-300 mb-3">Jump'éel meyaj ku yáantik le lu'um</p>
          <p className="text-green-100 max-w-xl mx-auto">
            Pequeñas acciones como reciclar, cuidar el agua y plantar árboles hacen una gran diferencia para nuestra tierra maya.
          </p>
        </div>
      </div>
    </div>
  );
}