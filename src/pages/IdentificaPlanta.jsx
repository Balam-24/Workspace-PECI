import { useState, useMemo } from "react";
import { Link } from "react-router-dom";

const casos = [
  {
    sintoma: "Me duele mucho la cabeza y tengo fiebre",
    sintomaMaya: "K'ojol in pol yéetel ch'ujuk",
    emoji: "🤒",
    respuesta: "Albahaca",
    respuestaMaya: "Albaaka",
    opciones: [
      { nombre: "Albahaca", maya: "Albaaka", emoji: "🌺" },
      { nombre: "Epazote", maya: "Apasot", emoji: "🍃" },
      { nombre: "Sábila", maya: "Salviya", emoji: "🌵" },
      { nombre: "Chaya", maya: "Chaay", emoji: "🌿" },
    ],
    explicacion: "La albahaca ayuda a bajar la fiebre y calmar el dolor de cabeza con su té caliente.",
    explicacionMaya: "Le albaaka ku yáantik u xu'ul le ch'ujuk yéetel k'ojol pol yéetel u té k'áak'.",
  },
  {
    sintoma: "Me quemé la mano con agua caliente",
    sintomaMaya: "K'áak' in k'ab yéetel ja' k'áak'",
    emoji: "🔥",
    respuesta: "Sábila",
    respuestaMaya: "Salviya",
    opciones: [
      { nombre: "Ruda", maya: "Ruda", emoji: "🌱" },
      { nombre: "Sábila", maya: "Salviya", emoji: "🌵" },
      { nombre: "Hierba Buena", maya: "Yerbabuena", emoji: "🍵" },
      { nombre: "Albahaca", maya: "Albaaka", emoji: "🌺" },
    ],
    explicacion: "El gel de la sábila refresca y cura las quemaduras rápidamente.",
    explicacionMaya: "U gel u salviya ku chelaj yéetel ku ts'aak le k'áak' chichan.",
  },
  {
    sintoma: "Tengo dolor de estómago y náuseas después de comer",
    sintomaMaya: "K'ojol in nak' yéetel puul ts'o'ok u hanal",
    emoji: "🤢",
    respuesta: "Hierba Buena",
    respuestaMaya: "Yerbabuena",
    opciones: [
      { nombre: "Chaya", maya: "Chaay", emoji: "🌿" },
      { nombre: "Hierba Buena", maya: "Yerbabuena", emoji: "🍵" },
      { nombre: "Ruda", maya: "Ruda", emoji: "🌱" },
      { nombre: "Epazote", maya: "Apasot", emoji: "🍃" },
    ],
    explicacion: "La hierba buena calma el estómago y quita las náuseas tomada como té caliente.",
    explicacionMaya: "Le yerbabuena ku chelaj le nak' yéetel ku xu'ul le puul bey té k'áak'.",
  },
  {
    sintoma: "Tengo los nervios alterados y no puedo dormir",
    sintomaMaya: "Yaan in xikin yéetel ma' páajtal in wenel",
    emoji: "😰",
    respuesta: "Ruda",
    respuestaMaya: "Ruda",
    opciones: [
      { nombre: "Epazote", maya: "Apasot", emoji: "🍃" },
      { nombre: "Sábila", maya: "Salviya", emoji: "🌵" },
      { nombre: "Ruda", maya: "Ruda", emoji: "🌱" },
      { nombre: "Chaya", maya: "Chaay", emoji: "🌿" },
    ],
    explicacion: "La ruda calma los nervios y ayuda a dormir mejor frotada en la frente.",
    explicacionMaya: "Le ruda ku chelaj le xikin yéetel ku yáantik u wenel ku ts'aik tu pol.",
  },
  {
    sintoma: "Mi abuela tiene la presión alta y azúcar",
    sintomaMaya: "In nool yaan u k'i'ik' nohoch yéetel ch'ujuk k'i'ik'",
    emoji: "👵",
    respuesta: "Chaya",
    respuestaMaya: "Chaay",
    opciones: [
      { nombre: "Chaya", maya: "Chaay", emoji: "🌿" },
      { nombre: "Albahaca", maya: "Albaaka", emoji: "🌺" },
      { nombre: "Hierba Buena", maya: "Yerbabuena", emoji: "🍵" },
      { nombre: "Ruda", maya: "Ruda", emoji: "🌱" },
    ],
    explicacion: "La chaya ayuda a controlar la presión arterial y el azúcar en la sangre.",
    explicacionMaya: "Le chaay ku yáantik u kanáantik le k'i'ik' yéetel u ch'ujuk k'i'ik'.",
  },
  {
    sintoma: "Tengo dolor de panza y creo que tengo parásitos",
    sintomaMaya: "K'ojol in nak' yéetel yaan k'aas bicho",
    emoji: "🪱",
    respuesta: "Epazote",
    respuestaMaya: "Apasot",
    opciones: [
      { nombre: "Sábila", maya: "Salviya", emoji: "🌵" },
      { nombre: "Chaya", maya: "Chaay", emoji: "🌿" },
      { nombre: "Epazote", maya: "Apasot", emoji: "🍃" },
      { nombre: "Albahaca", maya: "Albaaka", emoji: "🌺" },
    ],
    explicacion: "El epazote elimina los parásitos del estómago y calma el dolor.",
    explicacionMaya: "Le apasot ku xu'ul le k'aas bicho ich nak' yéetel ku chelaj le k'ojol.",
  },
];

function mezclar(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

export default function IdentificaPlanta() {
  const casos_mezclados = useMemo(() => mezclar(casos), []);
  const [actual, setActual] = useState(0);
  const [seleccion, setSeleccion] = useState(null);
  const [puntaje, setPuntaje] = useState(0);
  const [terminado, setTerminado] = useState(false);

  const caso = casos_mezclados[actual];

  const responder = (opcion) => {
    if (seleccion) return;
    setSeleccion(opcion);
    if (opcion === caso.respuesta) setPuntaje(p => p + 20);
    setTimeout(() => {
      setSeleccion(null);
      if (actual + 1 >= casos_mezclados.length) setTerminado(true);
      else setActual(a => a + 1);
    }, 2000);
  };

  const reiniciar = () => window.location.reload();
  const porcentaje = Math.round((puntaje / (casos_mezclados.length * 20)) * 100);

  if (terminado) {
    return (
      <div className="min-h-screen bg-[#F0FFF4]col items-center justify-center p-10 text-center">
        <div className="bg-white rounded-[40px] shadow-2xl p-12 max-w-xl w-full relative overflow-hidden">
          <div className="absolute top-4 right-4 text-6xl opacity-10">🌿</div>
          <div className="text-8xl mb-4">{porcentaje >= 80 ? "🏆" : porcentaje >= 50 ? "👍" : "💪"}</div>
          <h2 className="text-4xl font-bold text-green-800 mb-1">¡Juego terminado!</h2>
          <p className="italic text-[#A98467] mb-6">Ts'o'ok le báaxal</p>
          <div className="bg-green-50 rounded-2xl p-4 mb-6 border border-green-200">
            <p className="text-5xl font-bold text-green-700">{puntaje} pts</p>
            <p className="text-gray-500 mt-1">{porcentaje}% correcto</p>
          </div>
          <div className="bg-[#FFF9E6] border-l-4 border-[#E9C46A] rounded-2xl p-6 text-left mb-6">
            <p className="text-lg font-bold text-[#2C5F4D] mb-2">🌿 Reflexión</p>
            <p className="text-gray-700 leading-relaxed">
              {porcentaje >= 80
                ? "¡Eres un experto en plantas medicinales mayas! Los mayas desarrollaron una medicina natural muy avanzada que sigue siendo útil hoy en día."
                : porcentaje >= 50
                ? "¡Buen trabajo! Conocer las plantas medicinales es un tesoro de la cultura maya. Sigue aprendiendo sobre ellas."
                : "¡No te rindas! Las plantas medicinales mayas tienen muchos secretos. Te recomiendo explorarlas primero antes de jugar."}
            </p>
            <p className="text-sm italic text-[#A98467] mt-3">
              Le paak'al ts'aak maya u yuum u na'atil k nool — Las plantas medicinales son la sabiduría de nuestros abuelos
            </p>
          </div>
          <div className="flex gap-4 justify-center flex-wrap">
            <button onClick={reiniciar} className="bg-green-700 text-white px-8 py-3 rounded-2xl font-bold hover:scale-105 transition">
              Jugar de nuevo 🔄
            </button>
            <Link to="/saberes/plantas" className="bg-[#E9C46A] text-[#1E3D32] px-8 py-3 rounded-2xl font-bold hover:scale-105 transition">
              Volver
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center" style={{backgroundColor: "#9B59B6"}}>

      {/* HERO */}
      <div className="w-full bg-gradient-to-br from-[#0F6E56] to-[#1D9E75] px-6 py-8 relative overflow-hidden">
        <div className="absolute top-2 right-6 text-[80px] opacity-10">🌿</div>
        <div className="absolute bottom-2 left-6 text-[60px] opacity-10">💊</div>
        <div className="max-w-2xl mx-auto relative z-10">
          <Link to="/saberes/plantas" className="text-green-100 font-bold hover:text-white transition">← Volver</Link>
          <h1 className="text-4xl font-bold text-white mt-3 mb-1">🔍 Identifica la Planta</h1>
          <p className="italic text-green-100 mb-2">Na'at le paak'al ts'aak</p>
        </div>
      </div>

      {/* STATS */}
      <div className="sticky top-0 z-50 w-full bg-[#0F6E56] px-6 py-3 shadow-lg">
        <div className="max-w-2xl mx-auto flex gap-4 justify-between items-center">
          <div className="bg-white/20 rounded-2xl px-4 py-2 text-white font-bold">⭐ {puntaje} pts</div>
          <div className="flex-1">
            <div className="w-full bg-white/20 rounded-full h-3">
              <div className="bg-[#E9C46A] h-3 rounded-full transition-all duration-500"
                style={{ width: `${(actual / casos_mezclados.length) * 100}%` }} />
            </div>
          </div>
          <div className="bg-white/20 rounded-2xl px-4 py-2 text-white font-bold">
            {actual + 1}/{casos_mezclados.length}
          </div>
        </div>
      </div>

      <div className="p-6 flex flex-col items-center w-full max-w-2xl">

        {/* Caso */}
        <div className="bg-white rounded-[35px] shadow-2xl p-8 mb-6 w-full text-center">
          <div className="text-7xl mb-4">{caso.emoji}</div>
          <p className="text-xl font-bold text-gray-800 mb-2">"{caso.sintoma}"</p>
          <p className="text-sm italic text-[#A98467]">"{caso.sintomaMaya}"</p>

          {seleccion && (
            <div className={`mt-4 p-4 rounded-2xl ${seleccion === caso.respuesta ? "bg-green-50 border-2 border-green-400" : "bg-red-50 border-2 border-red-400"}`}>
              <p className={`font-bold text-lg ${seleccion === caso.respuesta ? "text-green-700" : "text-red-600"}`}>
                {seleccion === caso.respuesta ? "✅ ¡Correcto! — Jach ma'alob!" : `❌ Era: ${caso.respuesta} / ${caso.respuestaMaya}`}
              </p>
              <p className="text-gray-600 text-sm mt-2">{caso.explicacion}</p>
              <p className="text-xs italic text-[#A98467] mt-1">{caso.explicacionMaya}</p>
            </div>
          )}
        </div>

        {/* Instrucción */}
        <p className="text-white font-bold mb-1 text-center text-lg">
  ¿Qué planta lo cura?
</p>
        <p className="italic text-purple-200 text-sm mb-5 text-center">
  Ba'ax paak'al ku ts'aak? — ¿Qué planta lo cura?
</p>

        {/* Opciones */}
        <div className="grid grid-cols-2 gap-4 w-full">
          {caso.opciones.map((opcion, i) => (
            <button
              key={i}
              onClick={() => responder(opcion.nombre)}
              className={`p-5 rounded-2xl font-bold border-2 transition duration-200 text-center
                ${seleccion === null
                  ? "bg-white border-green-200 hover:bg-green-50 hover:scale-105"
                  : opcion.nombre === caso.respuesta
                    ? "bg-green-100 border-green-500 text-green-800"
                    : seleccion === opcion.nombre
                      ? "bg-red-100 border-red-400 text-red-700"
                      : "bg-gray-50 border-gray-200 opacity-50"}
              `}
            >
              <div className="text-4xl mb-2">{opcion.emoji}</div>
              <p className="text-sm font-bold text-gray-800">{opcion.nombre}</p>
              <p className="text-xs italic text-[#A98467]">{opcion.maya}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}