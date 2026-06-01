import { useState } from "react";
import { Link } from "react-router-dom";

const preguntas = [
  {
    pregunta: "¿Cómo se dice 'árbol' en maya?",
    maya: "Bix u k'aaba' árbol ti' maaya?",
    opciones: ["Che'", "Lol", "Ka'an", "Lu'um"],
    correcta: 0,
  },
  {
    pregunta: "¿Cuál es el árbol sagrado de los mayas?",
    maya: "Máax u yuum che' kili'ich maaya?",
    opciones: ["Pino", "Ceiba", "Roble", "Cedro"],
    correcta: 1,
  },
  {
    pregunta: "¿Para qué sirven los árboles en la selva?",
    maya: "Ba'ax u bisik le che'obo' ich k'áax?",
    opciones: ["Solo para madera", "Dan oxígeno, refugio y alimento", "Solo dan sombra", "No sirven de nada"],
    correcta: 1,
  },
  {
    pregunta: "¿Cómo se dice 'selva' en maya?",
    maya: "Bix u k'aaba' selva ti' maaya?",
    opciones: ["Ja'", "Lu'um", "K'áax", "Uj"],
    correcta: 2,
  },
  {
    pregunta: "¿Qué animal vive en la selva maya y es sagrado?",
    maya: "Máax u yuum ba'alche' ku kaajal ich k'áax maya?",
    opciones: ["León", "Balam (Jaguar)", "Oso", "Lobo"],
    correcta: 1,
  },
  {
    pregunta: "¿Cuántos años puede vivir una ceiba?",
    maya: "Jay p'éel ja'ab ku kaajal u kuxtal u yaxche'?",
    opciones: ["10 años", "50 años", "Más de 500 años", "100 años"],
    correcta: 2,
  },
  {
    pregunta: "¿Qué pasa cuando talamos muchos árboles?",
    maya: "Ba'ax ku yúuchul wa ts'o'ok u k'ol che'obo'?",
    opciones: ["El aire se purifica", "Los animales pierden su hogar", "Llueve más", "Nada malo pasa"],
    correcta: 1,
  },
  {
    pregunta: "¿Cómo se dice 'semilla' en maya?",
    maya: "Bix u k'aaba' semilla ti' maaya?",
    opciones: ["Pek'", "Ixi'im", "P'epen", "Lol"],
    correcta: 1,
  },
];

export default function TriviaArbol() {
  const [actual, setActual] = useState(0);
  const [puntaje, setPuntaje] = useState(0);
  const [seleccion, setSeleccion] = useState(null);
  const [terminado, setTerminado] = useState(false);

  const pregunta = preguntas[actual];

  const responder = (index) => {
    if (seleccion !== null) return;
    setSeleccion(index);
    if (index === pregunta.correcta) setPuntaje(p => p + 10);
    setTimeout(() => {
      setSeleccion(null);
      if (actual + 1 >= preguntas.length) setTerminado(true);
      else setActual(a => a + 1);
    }, 1200);
  };

  const reiniciar = () => {
    setActual(0);
    setPuntaje(0);
    setSeleccion(null);
    setTerminado(false);
  };

  const porcentaje = Math.round((puntaje / (preguntas.length * 10)) * 100);

  if (terminado) {
    return (
      <div className="min-h-screen bg-[#E8F5E9] flex flex-col items-center justify-center p-10 text-center">
        <div className="bg-white rounded-[40px] shadow-2xl p-12 max-w-xl w-full">
          <div className="text-8xl mb-4">{porcentaje >= 80 ? "🏆" : porcentaje >= 50 ? "👍" : "💪"}</div>
          <h2 className="text-4xl font-bold text-green-800 mb-1">¡Trivia terminada!</h2>
          <p className="italic text-[#A98467] mb-6">Ts'o'ok le trivia</p>
          <div className="bg-green-50 rounded-2xl p-4 mb-6">
            <p className="text-5xl font-bold text-green-700">{puntaje} pts</p>
            <p className="text-gray-500 mt-1">{porcentaje}% correcto</p>
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
            <button onClick={reiniciar} className="bg-[#2C5F4D] text-white px-8 py-3 rounded-2xl font-bold hover:scale-105 transition">
              Jugar de nuevo
            </button>
            <Link to="/game/arbol/mapa" className="bg-[#E9C46A] text-[#1E3D32] px-8 py-3 rounded-2xl font-bold hover:scale-105 transition">
              Jugar Mapa 🗺️
            </Link>
            <Link to="/medio-ambiente" className="bg-green-100 text-green-800 px-8 py-3 rounded-2xl font-bold hover:scale-105 transition">
              Volver
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#E8F5E9] p-6 flex flex-col items-center">
      <div className="w-full max-w-2xl flex justify-between items-center mb-6">
        <Link to="/game/arbol" className="text-green-800 font-bold">← Volver</Link>
        <div className="bg-white rounded-2xl px-5 py-2 shadow font-bold text-green-800">⭐ {puntaje} pts</div>
      </div>

      <h1 className="text-4xl font-bold text-green-800 mb-1 text-center">❓ Trivia de la Selva</h1>
      <p className="italic text-[#A98467] mb-6 text-center">Trivia k'áax</p>

      <div className="w-full max-w-2xl bg-white rounded-full h-3 mb-8 overflow-hidden shadow">
        <div className="bg-green-500 h-3 rounded-full transition-all duration-500"
          style={{ width: `${(actual / preguntas.length) * 100}%` }} />
      </div>

      <div className="bg-white rounded-[35px] shadow-2xl p-8 max-w-2xl w-full mb-6">
        <p className="text-xs text-gray-400 mb-1 text-center">{actual + 1} / {preguntas.length}</p>
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-1">{pregunta.pregunta}</h2>
        <p className="italic text-[#A98467] text-sm text-center mb-8">{pregunta.maya}</p>

        <div className="grid grid-cols-2 gap-4">
          {pregunta.opciones.map((opcion, index) => (
            <button
              key={index}
              onClick={() => responder(index)}
              className={`p-4 rounded-2xl font-medium text-left transition duration-200 border-2
                ${seleccion === null
                  ? "bg-green-50 border-green-200 hover:bg-green-100 hover:scale-105"
                  : index === pregunta.correcta
                    ? "bg-green-200 border-green-500 text-green-800"
                    : seleccion === index
                      ? "bg-red-100 border-red-400 text-red-700"
                      : "bg-gray-50 border-gray-200 opacity-50"}
              `}
            >
              {opcion}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}