import { useState, useMemo } from "react";
import { Link } from "react-router-dom";

const preguntas = [
  {
    pregunta: "¿Cómo se dice 'árbol' en maya?",
    maya: "Bix u k'aaba' árbol ti' maaya?",
    emoji: "🌳",
    opciones: [
      { es: "Che'", maya: "Árbol" },
      { es: "Lol", maya: "Flor" },
      { es: "Ka'an", maya: "Cielo" },
      { es: "Lu'um", maya: "Tierra" },
    ],
    correcta: 0,
  },
  {
    pregunta: "¿Cuál es el árbol sagrado de los mayas?",
    maya: "Máax u yuum che' kili'ich maaya?",
    emoji: "🌲",
    opciones: [
      { es: "Pino", maya: "huhub" },
      { es: "Ceiba", maya: "Yaxche'" },
      { es: "Roble", maya: "béek" },
      { es: "Cedro", maya: "k'u'uche'"}
    ],
    correcta: 1,
  },
  {
    pregunta: "¿Para qué sirven los árboles en la selva?",
    maya: "Ba'ax u bisik le che'obo' ich k'áax?",
    emoji: "🌿",
    opciones: [
      { es: "Solo para madera", maya: "Che' tun" },
      { es: "Dan oxígeno, refugio y alimento", maya: "Iik', kúuchil yéetel hanal" },
      { es: "Solo dan sombra", maya: "Yiik'al tun" },
      { es: "No sirven de nada", maya: "Ma' ba'al" },
    ],
    correcta: 1,
  },
  {
    pregunta: "¿Cómo se dice 'selva' en maya?",
    maya: "Bix u k'aaba' selva ti' maaya?",
    emoji: "🌴",
    opciones: [
      { es: "Ja'", maya: "Agua" },
      { es: "Lu'um", maya: "Tierra" },
      { es: "K'áax", maya: "Selva" },
      { es: "Uj", maya: "Luna" },
    ],
    correcta: 2,
  },
  {
    pregunta: "¿Qué animal vive en la selva maya y es sagrado?",
    maya: "Máax u yuum ba'alche' ku kaajal ich k'áax maya?",
    emoji: "🐆",
    opciones: [
      { es: "León", maya:"koh " },
      { es: "Jaguar", maya: "Balam" },
      { es: "Oso", maya: "Sam hool" },
      { es: "Lobo", maya: "" },
    ],
    correcta: 1,
  },
  {
    pregunta: "¿Cuántos años puede vivir una ceiba?",
    maya: "Jay p'éel ja'ab ku kaajal u kuxtal u yaxche'?",
    emoji: "🌲",
    opciones: [
      { es: "10 años", maya: "Lajun ja'ab" },
      { es: "50 años", maya: "Ho'lajun ja'ab" },
      { es: "Más de 500 años", maya: "Yaan 500 ja'ab" },
      { es: "100 años", maya: "Jun bak' ja'ab" },
    ],
    correcta: 2,
  },
  {
    pregunta: "¿Qué pasa cuando talamos muchos árboles?",
    maya: "Ba'ax ku yúuchul wa ts'o'ok u k'ol che'obo'?",
    emoji: "🪓",
    opciones: [
      { es: "El aire se purifica", maya: "U limpiartik le iik'" },
      { es: "Los animales pierden su hogar", maya: "Le ba'alche'ob ku xíimbal" },
      { es: "Llueve más", maya: "Ku jo'bol" },
      { es: "Nada malo pasa", maya: "Ma' ba'al k'aas" },
    ],
    correcta: 1,
  },
  {
    pregunta: "¿Cómo se dice 'semilla' en maya?",
    maya: "Bix u k'aaba' semilla ti' maaya?",
    emoji: "🌱",
    opciones: [
      { es: "Pek'", maya: "Perro" },
      { es: "Ixi'im", maya: "Maíz/Semilla" },
      { es: "P'epen", maya: "Mariposa" },
      { es: "Lol", maya: "Flor" },
    ],
    correcta: 1,
  },
  {
    pregunta: "¿De qué árbol viene el chicle?",
    maya: "Tu'ux ku luk'ul le chicle?",
    emoji: "🍂",
    opciones: [
      { es: "Ceiba", maya: "Yaxche'" },
      { es: "Mangle", maya: "Pok'che'" },
      { es: "Chicozapote", maya: "Ya'" },
      { es: "Jabín", maya: "Jabín" },
    ],
    correcta: 2,
  },
  {
    pregunta: "¿Cómo se llama la Ceiba en maya?",
    maya: "Bix u k'aaba' Ceiba ti' maaya?",
    emoji: "🌲",
    opciones: [
      { es: "Pok'che'", maya: "Mangle" },
      { es: "Yaxche'", maya: "Ceiba" },
      { es: "Kopté", maya: "Ciricote" },
      { es: "Ts'alam", maya: "Tzalam" },
    ],
    correcta: 1,
  },
];

function mezclar(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

export default function TriviaArbol() {
  const preguntasMezcladas = useMemo(() => mezclar(preguntas), []);
  const [actual, setActual] = useState(0);
  const [puntaje, setPuntaje] = useState(0);
  const [seleccion, setSeleccion] = useState(null);
  const [terminado, setTerminado] = useState(false);

  const pregunta = preguntasMezcladas[actual];

  const responder = (index) => {
    if (seleccion !== null) return;
    setSeleccion(index);
    if (index === pregunta.correcta) setPuntaje(p => p + 10);
    setTimeout(() => {
      setSeleccion(null);
      if (actual + 1 >= preguntasMezcladas.length) setTerminado(true);
      else setActual(a => a + 1);
    }, 1200);
  };

  const reiniciar = () => {
    setActual(0);
    setPuntaje(0);
    setSeleccion(null);
    setTerminado(false);
  };

  const porcentaje = Math.round((puntaje / (preguntasMezcladas.length * 10)) * 100);

  if (terminado) {
    return (
      <div className="min-h-screen bg-[#E8F5E9] flex flex-col items-center justify-center p-10 text-center">
        <div className="bg-white rounded-[40px] shadow-2xl p-12 max-w-xl w-full relative overflow-hidden">
          <div className="absolute top-4 right-4 text-6xl opacity-10">🌳</div>
          <div className="text-8xl mb-4">{porcentaje >= 80 ? "🏆" : porcentaje >= 50 ? "👍" : "💪"}</div>
          <h2 className="text-4xl font-bold text-green-800 mb-1">¡Trivia terminada!</h2>
          <p className="italic text-[#A98467] mb-6">Ts'o'ok le trivia</p>
          <div className="bg-green-50 rounded-2xl p-4 mb-6 border border-green-200">
            <p className="text-5xl font-bold text-green-700">{puntaje} pts</p>
            <p className="text-gray-500 mt-1">{porcentaje}% correcto</p>
            <div className="w-full bg-gray-200 rounded-full h-3 mt-3">
              <div className="bg-green-500 h-3 rounded-full" style={{width: `${porcentaje}%`}}/>
            </div>
          </div>
          <div className="bg-[#FFF9E6] border-l-4 border-[#E9C46A] rounded-2xl p-6 text-left mb-6">
            <p className="text-lg font-bold text-[#2C5F4D] mb-2">🌳 Reflexión</p>
            <p className="text-gray-700 leading-relaxed">
              {porcentaje >= 80
                ? "¡Eres un verdadero guardián de la selva maya! Los árboles son la memoria viva de nuestra tierra. Cuidarlos es cuidar nuestra historia."
                : porcentaje >= 50
                ? "¡Vas bien! La selva maya es uno de los ecosistemas más importantes del mundo. Cada árbol que protegemos es un futuro que salvamos."
                : "¡Sigue aprendiendo! La selva maya nos enseña que todo está conectado. Los árboles, los animales y las personas somos uno."}
            </p>
            <p className="text-sm italic text-[#A98467] mt-3">
              Le k'áax maya u puksi'ik'al k lu'um — La selva maya es el corazón de nuestra tierra
            </p>
          </div>
          <div className="flex gap-4 justify-center flex-wrap">
            <button onClick={reiniciar} className="bg-[#1B5E20] text-white px-8 py-3 rounded-2xl font-bold hover:scale-105 transition shadow-lg">
              Jugar de nuevo 🔄
            </button>
            <Link to="/game/arbol/mapa" className="bg-[#E9C46A] text-[#1E3D32] px-8 py-3 rounded-2xl font-bold hover:scale-105 transition shadow-lg">
              Completa en Maya 🔤
            </Link>
            <Link to="/game/arbol" className="bg-green-100 text-green-800 px-8 py-3 rounded-2xl font-bold hover:scale-105 transition shadow-lg">
              Volver
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#E8F5E9] flex flex-col items-center">

      {/* HERO */}
      <div className="w-full bg-gradient-to-br from-[#1B5E20] to-[#2E7D32] px-6 py-8 relative overflow-hidden">
        <div className="absolute top-2 right-6 text-[80px] opacity-10">❓</div>
        <div className="absolute bottom-2 left-6 text-[60px] opacity-10">🌳</div>
        <div className="max-w-2xl mx-auto relative z-10">
          <Link to="/game/arbol" className="text-green-100 font-bold hover:text-white transition">← Volver</Link>
          <h1 className="text-4xl font-bold text-white mt-3 mb-1">❓ Trivia de la Selva</h1>
          <p className="italic text-green-100 mb-2">Trivia k'áax</p>
        </div>
      </div>

      {/* STATS */}
      <div className="sticky top-0 z-50 w-full bg-[#1B5E20] px-6 py-3 shadow-lg">
        <div className="max-w-2xl mx-auto flex gap-4 justify-between items-center">
          <div className="bg-white/20 rounded-2xl px-4 py-2 text-white font-bold">⭐ {puntaje} pts</div>
          <div className="flex-1">
            <div className="w-full bg-white/20 rounded-full h-3">
              <div className="bg-[#E9C46A] h-3 rounded-full transition-all duration-500"
                style={{ width: `${(actual / preguntasMezcladas.length) * 100}%` }} />
            </div>
          </div>
          <div className="bg-white/20 rounded-2xl px-4 py-2 text-white font-bold">
            {actual + 1}/{preguntasMezcladas.length}
          </div>
        </div>
      </div>

      <div className="p-6 flex flex-col items-center w-full max-w-2xl">

        {/* Pregunta */}
        <div className="bg-white rounded-[35px] shadow-2xl p-8 w-full mb-6 text-center">
          <div className="text-7xl mb-4">{pregunta.emoji}</div>
          <p className="text-xs text-gray-400 mb-2">{actual + 1} / {preguntasMezcladas.length}</p>
          <h2 className="text-2xl font-bold text-gray-800 mb-1">{pregunta.pregunta}</h2>
          <p className="italic text-[#A98467] text-sm">{pregunta.maya}</p>
        </div>

        {/* Opciones */}
        <div className="grid grid-cols-2 gap-4 w-full">
          {pregunta.opciones.map((opcion, index) => (
            <button
              key={index}
              onClick={() => responder(index)}
              className={`p-5 rounded-2xl font-bold text-center transition duration-200 border-2
                ${seleccion === null
                  ? "bg-white border-green-200 hover:bg-green-50 hover:scale-105 shadow"
                  : index === pregunta.correcta
                    ? "bg-green-200 border-green-500 text-green-800"
                    : seleccion === index
                      ? "bg-red-100 border-red-400 text-red-700"
                      : "bg-gray-50 border-gray-200 opacity-50"}
              `}
            >
              <p className="font-bold text-gray-800 text-sm">{opcion.es}</p>
              {opcion.maya && (
                <p className="text-xs italic text-[#A98467] mt-1">{opcion.maya}</p>
              )}
            </button>
          ))}
        </div>

        {seleccion !== null && (
          <p className={`mt-4 text-xl font-bold ${seleccion === pregunta.correcta ? "text-green-600" : "text-red-500"}`}>
            {seleccion === pregunta.correcta
              ? "✅ ¡Correcto! — Jach ma'alob!"
              : `❌ Era: ${pregunta.opciones[pregunta.correcta].es} — Ma' leti'`}
          </p>
        )}
      </div>
    </div>
  );
}