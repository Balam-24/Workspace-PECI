import { useState, useMemo } from "react";
import { Link } from "react-router-dom";

const preguntas = [
  {
    pregunta: "¿Cómo se dice 'agua' en maya?",
    maya: "Bix u k'aaba' 'agua' ti' maaya?",
    opciones: ["Ja'", "K'in", "Lu'um", "Iik'"],
    correcta: 0,
    emoji: "💧",
  },
  {
    pregunta: "¿Qué significa 'Balam' en español?",
    maya: "Ba'ax u k'aaba' 'Balam' ti' español?",
    opciones: ["Águila", "Jaguar", "Serpiente", "Venado"],
    correcta: 1,
    emoji: "🐆",
  },
  {
    pregunta: "¿Cómo se dice 'sol' en maya?",
    maya: "Bix u k'aaba' 'sol' ti' maaya?",
    opciones: ["Uj", "K'in", "Iik'", "K'áak'"],
    correcta: 1,
    emoji: "☀️",
  },
  {
    pregunta: "¿Qué significa 'Ja'' en español?",
    maya: "Ba'ax u k'aaba' 'Ja'' ti' español?",
    opciones: ["Fuego", "Tierra", "Agua", "Viento"],
    correcta: 2,
    emoji: "💧",
  },
  {
    pregunta: "¿Cómo se dice 'maíz' en maya?",
    maya: "Bix u k'aaba' 'maíz' ti' maaya?",
    opciones: ["Iib", "Ixi'im", "K'uum", "Iik"],
    correcta: 1,
    emoji: "🌽",
  },
  {
    pregunta: "¿Qué significa 'Pepen' en español?",
    maya: "Ba'ax u k'aaba' 'Pepen' ti' español?",
    opciones: ["Pájaro", "Tortuga", "Mariposa", "Pez"],
    correcta: 2,
    emoji: "🦋",
  },
  {
    pregunta: "¿Cómo se dice 'luna' en maya?",
    maya: "Bix u k'aaba' 'luna' ti' maaya?",
    opciones: ["K'in", "Uj", "Lu'um", "Lol"],
    correcta: 1,
    emoji: "🌙",
  },
  {
    pregunta: "¿Qué significa 'Kaab' en español?",
    maya: "Ba'ax u k'aaba' 'Kaab' ti' español?",
    opciones: ["Maíz", "Agua", "Miel", "Fuego"],
    correcta: 2,
    emoji: "🍯",
  },
  {
    pregunta: "¿Cómo se dice 'jaguar' en maya?",
    maya: "Bix u k'aaba' 'jaguar' ti' maaya?",
    opciones: ["Keh", "Aak", "Balam", "Kan"],
    correcta: 2,
    emoji: "🐆",
  },
  {
    pregunta: "¿Qué significa 'Lol' en español?",
    maya: "Ba'ax u k'aaba' 'Lol' ti' español?",
    opciones: ["Árbol", "Flor", "Tierra", "Viento"],
    correcta: 1,
    emoji: "🌺",
  },
  {
    pregunta: "¿Cómo se dice 'tortilla' en maya?",
    maya: "Bix u k'aaba' 'tortilla' ti' maaya?",
    opciones: ["Hanal", "Waaj", "Bak'", "Iib"],
    correcta: 1,
    emoji: "🫓",
  },
  {
    pregunta: "¿Qué significa 'Che'' en español?",
    maya: "Ba'ax u k'aaba' 'Che'' ti' español?",
    opciones: ["Flor", "Agua", "Árbol", "Fuego"],
    correcta: 2,
    emoji: "🌳",
  },
];

function mezclar(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

export default function TriviaMaya() {
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

  const reiniciar = () => window.location.reload();
  const porcentaje = Math.round((puntaje / (preguntasMezcladas.length * 10)) * 100);

  if (terminado) {
    return (
      <div className="min-h-screen bg-[#F4F0E6] flex flex-col items-center justify-center p-10 text-center">
        <div className="bg-white rounded-[40px] shadow-2xl p-12 max-w-xl w-full relative overflow-hidden">
          <div className="absolute top-4 right-4 text-6xl opacity-10">🗣️</div>
          <div className="text-8xl mb-4">{porcentaje >= 80 ? "🏆" : porcentaje >= 50 ? "👍" : "💪"}</div>
          <h2 className="text-4xl font-bold text-purple-800 mb-1">¡Trivia terminada!</h2>
          <p className="italic text-[#A98467] mb-6">Ts'o'ok le trivia maaya</p>
          <div className="bg-purple-50 rounded-2xl p-4 mb-6 border border-purple-200">
            <p className="text-5xl font-bold text-purple-700">{puntaje} pts</p>
            <p className="text-gray-500 mt-1">{porcentaje}% correcto</p>
            <div className="w-full bg-gray-200 rounded-full h-3 mt-3">
              <div className="bg-purple-500 h-3 rounded-full transition-all" style={{width: `${porcentaje}%`}}/>
            </div>
          </div>
          <div className="bg-[#FFF9E6] border-l-4 border-[#E9C46A] rounded-2xl p-6 text-left mb-6">
            <p className="text-lg font-bold text-[#2C5F4D] mb-2">🗣️ Reflexión</p>
            <p className="text-gray-700 leading-relaxed">
              {porcentaje >= 80
                ? "¡Eres un experto en lengua maya! Cada palabra que aprendes ayuda a mantener viva esta lengua milenaria."
                : porcentaje >= 50
                ? "¡Buen trabajo! La lengua maya tiene miles de palabras hermosas. ¡Sigue aprendiendo!"
                : "¡No te rindas! Aprender una lengua toma tiempo. ¡Practica con Aprende Palabras primero!"}
            </p>
            <p className="text-sm italic text-[#A98467] mt-3">
              Le maaya t'aan ku kuxtal yéetel to'one'ex — La lengua maya vive con nosotros
            </p>
          </div>
          <div className="flex gap-4 justify-center flex-wrap">
            <button onClick={reiniciar} className="bg-[#6A2F8C] text-white px-8 py-3 rounded-2xl font-bold hover:scale-105 transition">
              Jugar de nuevo 🔄
            </button>
            <Link to="/lengua-maya/palabras" className="bg-purple-100 text-purple-800 px-8 py-3 rounded-2xl font-bold hover:scale-105 transition">
              Aprende Palabras 🔤
            </Link>
            <Link to="/lengua-maya" className="bg-[#E9C46A] text-[#1E3D32] px-8 py-3 rounded-2xl font-bold hover:scale-105 transition">
              Volver
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center" style={{backgroundColor: "#FCE4EC"}}>

      {/* HERO */}
      <div className="w-full px-6 py-8 relative overflow-hidden" style={{background: "linear-gradient(135deg, #C2185B, #E91E63)"}}>
        <div className="absolute top-2 right-6 text-[80px] opacity-10">🧠</div>
        <div className="absolute bottom-2 left-6 text-[60px] opacity-10">💡</div>
        <div className="max-w-2xl mx-auto relative z-10">
          <Link to="/lengua-maya" className="text-purple-100 font-bold hover:text-white transition">← Volver</Link>
          <h1 className="text-4xl font-bold text-white mt-3 mb-1">🧠 Trivia Maya</h1>
          <p className="italic text-purple-100 mb-2">Trivia Maaya</p>
        </div>
      </div>

      {/* STATS */}
      <div className="sticky top-0 z-50 w-full px-6 py-3 shadow-lg" style={{backgroundColor: "#880E4F"}}>
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
        <div className="bg-white rounded-[35px] shadow-2xl p-8 mb-6 w-full text-center">
          <div className="text-7xl mb-4">{pregunta.emoji}</div>
          <p className="text-xs text-gray-400 mb-1">{actual + 1} / {preguntasMezcladas.length}</p>
          <h2 className="text-2xl font-bold text-gray-800 mb-1">{pregunta.pregunta}</h2>
          <p className="italic text-[#A98467] text-sm">{pregunta.maya}</p>
        </div>

        {/* Opciones */}
        <div className="grid grid-cols-2 gap-4 w-full">
          {pregunta.opciones.map((opcion, index) => (
            <button
              key={index}
              onClick={() => responder(index)}
              className={`p-5 rounded-2xl font-bold text-lg border-2 transition duration-200
                ${seleccion === null
                  ? "bg-white border-purple-200 hover:bg-purple-50 hover:scale-105"
                  : index === pregunta.correcta
                    ? "bg-green-100 border-green-500 text-green-800"
                    : seleccion === index
                      ? "bg-red-100 border-red-400 text-red-700"
                      : "bg-gray-50 border-gray-200 opacity-50"}
              `}
            >
              {opcion}
            </button>
          ))}
        </div>

        {seleccion !== null && (
          <p className={`mt-4 text-xl font-bold ${seleccion === pregunta.correcta ? "text-green-600" : "text-red-500"}`}>
            {seleccion === pregunta.correcta
              ? "✅ ¡Correcto! — Jach ma'alob!"
              : `❌ Era: ${pregunta.opciones[pregunta.correcta]} — Ma' leti'`}
          </p>
        )}
      </div>
    </div>
  );
}