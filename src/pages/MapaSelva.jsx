import { useState } from "react";
import { Link } from "react-router-dom";

const zonas = [
  {
    id: 1,
    nombre: "Zona Costera",
    maya: "K'áax k'aak'nab",
    emoji: "🌊",
    color: "bg-blue-100 border-blue-300",
    btnColor: "bg-blue-600",
    arbol: {
      nombre: "Mangle",
      maya: "Pok'che'",
      imagen: "/mangle.avif",
      descripcion: "El mangle crece en las costas y protege las playas de la erosión. Sus raíces son hogar de peces y cangrejos.",
      descripcionMaya: "Le pok'che' ku kaajal ti' k'aak'nab yéetel ku kanáantik le yok'ol kaab.",
      dato: "Sus raíces parecen zancos y pueden vivir en agua salada.",
    },
  },
  {
    id: 2,
    nombre: "Selva Alta",
    maya: "Noh k'áax",
    emoji: "🌳",
    color: "bg-green-100 border-green-300",
    btnColor: "bg-green-700",
    arbol: {
      nombre: "Ceiba",
      maya: "Yaxche'",
      emoji: "🌲",
      descripcion: "La Ceiba es el árbol sagrado de los mayas. Conecta el inframundo, la tierra y el cielo. Puede medir más de 60 metros.",
      descripcionMaya: "Le yaxche' u yuum che' maaya. Ku ts'aik kaaj ich yok'ol kab, kanal yéetel yok'ol kab.",
      dato: "Los mayas creían que la Ceiba sostenía el universo.",
    },
  },
  {
    id: 3,
    nombre: "Selva Mediana",
    maya: "Chun k'áax",
    emoji: "🌴",
    color: "bg-lime-100 border-lime-300",
    btnColor: "bg-lime-700",
    arbol: {
      nombre: "Chicozapote",
      maya: "Ya'",
      emoji: "🍂",
      descripcion: "Del chicozapote se extrae el chicle, base del chicle moderno. Los mayas lo masticaban hace miles de años.",
      descripcionMaya: "Ti' le ya' ku luk'ul le chicle. Le maaya'ob ku jaants'ik ti' ja'ab ka'a p'éel mil.",
      dato: "¡El chicle que masticas hoy viene de este árbol!",
    },
  },
  {
    id: 4,
    nombre: "Zona de Cenotes",
    maya: "K'áax ts'ono'ot",
    emoji: "💧",
    color: "bg-cyan-100 border-cyan-300",
    btnColor: "bg-cyan-700",
    arbol: {
      nombre: "Ramón",
      maya: "Ojoche",
      emoji: "🌱",
      descripcion: "El árbol Ramón crece cerca de los cenotes y fue alimento esencial para los mayas. Sus semillas se comen como maíz.",
      descripcionMaya: "Le ojoche ku kaajal peek' ts'ono'ot yéetel bíin u hanal maaya.",
      dato: "Sus semillas tienen más proteína que el maíz.",
    },
  },
  {
    id: 5,
    nombre: "Milpa Maya",
    maya: "Kool",
    emoji: "🌽",
    color: "bg-yellow-100 border-yellow-300",
    btnColor: "bg-yellow-600",
    arbol: {
      nombre: "Ciricote",
      maya: "Kopté",
      emoji: "🪵",
      descripcion: "El Ciricote es un árbol que crece en las milpas mayas. Su madera es muy resistente y se usa para hacer muebles y herramientas.",
      descripcionMaya: "Le kopté ku kaajal ich kool. U le'il ku páajtal u ts'aik meyaj.",
      dato: "Su madera es tan dura que no se pudre fácilmente.",
    },
  },
  {
    id: 6,
    nombre: "Zona Arqueológica",
    maya: "Kúuchil nohoch otoch",
    emoji: "🏛️",
    color: "bg-orange-100 border-orange-300",
    btnColor: "bg-orange-600",
    arbol: {
      nombre: "Jabín",
      maya: "Jabín",
      emoji: "🌸",
      descripcion: "El Jabín florece con flores rosas y moradas alrededor de las zonas arqueológicas mayas. Es símbolo de resistencia.",
      descripcionMaya: "Le jabín ku siis lol ek' yéetel chak peek' u kúuchil nohoch otoch maya.",
      dato: "Florece en la temporada seca cuando otros árboles no pueden.",
    },
  },
];

export default function MapaSelva() {
  const [zonaActiva, setZonaActiva] = useState(null);
  const [visitadas, setVisitadas] = useState([]);

  const explorar = (zona) => {
    setZonaActiva(zona);
    if (!visitadas.includes(zona.id)) {
      setVisitadas(prev => [...prev, zona.id]);
    }
  };

  return (
    <div className="min-h-screen bg-[#E8F5E9] p-6 flex flex-col items-center">
      <div className="w-full max-w-4xl flex justify-between items-center mb-6">
        <Link to="/game/arbol" className="text-green-800 font-bold">← Volver</Link>
        <div className="bg-white rounded-2xl px-5 py-2 shadow font-bold text-green-800">
          🗺️ {visitadas.length} / {zonas.length} zonas
        </div>
      </div>

      <h1 className="text-4xl font-bold text-green-800 mb-1 text-center">🗺️ Mapa de la Selva</h1>
      <p className="italic text-[#A98467] mb-2 text-center">U mapa'il le k'áaxo'</p>
      <p className="text-green-700 mb-8 text-center">Toca cada zona para descubrir su árbol</p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-4xl mb-8">
        {zonas.map((zona) => (
          <button
            key={zona.id}
            onClick={() => explorar(zona)}
            className={`${zona.color} border-2 rounded-3xl p-5 text-center transition duration-300 hover:scale-105 hover:shadow-xl
              ${zonaActiva?.id === zona.id ? "ring-4 ring-green-400 scale-105" : ""}
              ${visitadas.includes(zona.id) ? "opacity-90" : ""}
            `}
          >
            <div className="text-4xl mb-2">{zona.emoji}</div>
            <p className="font-bold text-gray-800 text-sm">{zona.nombre}</p>
            <p className="text-xs italic text-[#A98467]">{zona.maya}</p>
            {visitadas.includes(zona.id) && (
              <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded-full mt-2 inline-block">✓ Visitada</span>
            )}
          </button>
        ))}
      </div>

      {zonaActiva && (
        <div className="bg-white rounded-[35px] shadow-2xl p-8 max-w-2xl w-full">

          {/* Imagen o emoji arriba */}
          <div className="text-center mb-4">
            {zonaActiva.arbol.imagen ? (
              <img
                src={zonaActiva.arbol.imagen}
                alt={zonaActiva.arbol.nombre}
                className="w-40 h-40 object-contain mx-auto"
              />
            ) : (
              <span className="text-6xl">{zonaActiva.arbol.emoji}</span>
            )}
          </div>

          <h2 className="text-3xl font-bold text-green-800 text-center mb-1">
            {zonaActiva.arbol.nombre}
          </h2>
          <p className="italic text-[#A98467] text-center mb-6">
            {zonaActiva.arbol.maya}
          </p>
          <p className="text-gray-700 leading-relaxed mb-2">
            {zonaActiva.arbol.descripcion}
          </p>
          <p className="text-sm italic text-[#A98467] leading-relaxed mb-6">
            {zonaActiva.arbol.descripcionMaya}
          </p>

          {/* Dato curioso */}
          <div className="bg-[#FFF9E6] border-l-4 border-[#E9C46A] rounded-2xl p-4 mb-6">
            <p className="text-sm font-bold text-[#2C5F4D] mb-1">💡 ¿Sabías que...?</p>
            <p className="text-gray-700 text-sm">{zonaActiva.arbol.dato}</p>
          </div>

          <div className="text-center">
            <p className="text-green-600 font-medium text-sm">
              {visitadas.length === zonas.length
                ? "🏆 ¡Exploraste toda la selva maya!"
                : `Te faltan ${zonas.length - visitadas.length} zonas por explorar`}
            </p>
          </div>
        </div>
      )}

      {!zonaActiva && (
        <div className="bg-white rounded-[35px] p-8 max-w-2xl w-full text-center shadow-lg">
          <p className="text-6xl mb-4">👆</p>
          <p className="text-gray-500">Toca una zona del mapa para descubrir su árbol</p>
          <p className="italic text-[#A98467] text-sm mt-2">Táan u yojel le k'áax — Conoce la selva</p>
        </div>
      )}

      {visitadas.length === zonas.length && (
        <div className="mt-6 flex gap-4 flex-wrap justify-center">
          <Link to="/game/arbol/trivia" className="bg-[#E9C46A] text-[#1E3D32] px-8 py-3 rounded-2xl font-bold hover:scale-105 transition">
            Jugar Trivia ❓
          </Link>
          <Link to="/medio-ambiente" className="bg-green-700 text-white px-8 py-3 rounded-2xl font-bold hover:scale-105 transition">
            Volver
          </Link>
        </div>
      )}
    </div>
  );
}