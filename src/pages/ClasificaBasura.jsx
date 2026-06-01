import { useState } from "react";
import { Link } from "react-router-dom";

const basuras = [
  { id: 1,  nombre: "Botella de plástico", maya: "Botella plástico",  emoji: "🍶", tipo: "reciclable" },
  { id: 2,  nombre: "Cáscara de naranja",  maya: "Corteza ch'iich'",  emoji: "🍊", tipo: "organico" },
  { id: 3,  nombre: "Lata de refresco",    maya: "Lata k'aas",        emoji: "🥤", tipo: "reciclable" },
  { id: 4,  nombre: "Bolsa de papas",      maya: "Bolsa wa'",         emoji: "🛍️", tipo: "noreciclable" },
  { id: 5,  nombre: "Hoja de árbol",       maya: "Luum che'",         emoji: "🍂", tipo: "organico" },
  { id: 6,  nombre: "Pila usada",          maya: "Pila k'aas",        emoji: "🔋", tipo: "peligroso" },
  { id: 7,  nombre: "Periódico",           maya: "Hu'un",             emoji: "📰", tipo: "reciclable" },
  { id: 8,  nombre: "Resto de comida",     maya: "Ts'o'ok hanal",     emoji: "🍱", tipo: "organico" },
  { id: 9,  nombre: "Foco quemado",        emoji: "💡",               maya: "Sak u'yik'al",  tipo: "peligroso" },
  { id: 10, nombre: "Cartón",              maya: "Cartón",            emoji: "📦", tipo: "reciclable" },
  { id: 11, nombre: "Colilla de cigarro",  maya: "K'aas",             emoji: "🚬", tipo: "noreciclable" },
  { id: 12, nombre: "Cáscara de plátano", maya: "Corteza ha'as",      emoji: "🍌", tipo: "organico" },
];

const contenedores = [
  { tipo: "reciclable",   label: "Reciclable",    maya: "Páajtal u ts'o'ok",  emoji: "♻️", color: "bg-blue-100 border-blue-400",   text: "text-blue-800" },
  { tipo: "organico",     label: "Orgánico",       maya: "Yéetel k'áax",       emoji: "🌱", color: "bg-green-100 border-green-400", text: "text-green-800" },
  { tipo: "noreciclable", label: "No reciclable",  maya: "Ma' páajtal",        emoji: "🗑️", color: "bg-gray-100 border-gray-400",   text: "text-gray-800" },
  { tipo: "peligroso",    label: "Peligroso",      maya: "K'aas",              emoji: "☣️", color: "bg-red-100 border-red-400",     text: "text-red-800" },
];

export default function ClasificaBasura() {
  const [actual, setActual] = useState(0);
  const [puntaje, setPuntaje] = useState(0);
  const [respuesta, setRespuesta] = useState(null); // "correcto" | "incorrecto"
  const [terminado, setTerminado] = useState(false);
  const [shake, setShake] = useState(false);

  const item = basuras[actual];

  const clasificar = (tipo) => {
    if (respuesta) return;

    if (tipo === item.tipo) {
      setRespuesta("correcto");
      setPuntaje(p => p + 10);
    } else {
      setRespuesta("incorrecto");
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }

    setTimeout(() => {
      setRespuesta(null);
      if (actual + 1 >= basuras.length) {
        setTerminado(true);
      } else {
        setActual(a => a + 1);
      }
    }, 1200);
  };

  const reiniciar = () => {
    setActual(0);
    setPuntaje(0);
    setRespuesta(null);
    setTerminado(false);
  };

  const porcentaje = Math.round((puntaje / (basuras.length * 10)) * 100);

  if (terminado) {
    return (
      <div className="min-h-screen bg-[#DDE5D0] flex flex-col items-center justify-center p-10 text-center">
        <div className="bg-white rounded-[40px] shadow-2xl p-12 max-w-xl w-full">
          <div className="text-8xl mb-4">
            {porcentaje >= 80 ? "🏆" : porcentaje >= 50 ? "👍" : "💪"}
          </div>

          <h2 className="text-4xl font-bold text-green-800 mb-1">
            ¡Juego terminado!
          </h2>
          <p className="italic text-[#A98467] mb-6">
            Ts'o'ok le báaxal
          </p>

          <div className="bg-green-50 rounded-2xl p-4 mb-6">
            <p className="text-5xl font-bold text-green-700">{puntaje} pts</p>
            <p className="text-gray-500 mt-1">{porcentaje}% correcto</p>
          </div>

          {/* Reflexión */}
          <div className="bg-[#FFF9E6] border-l-4 border-[#E9C46A] rounded-2xl p-6 text-left mb-6">
            <p className="text-lg font-bold text-[#2C5F4D] mb-2">
              🌿 Reflexión
            </p>
            <p className="text-gray-700 leading-relaxed">
              {porcentaje >= 80
                ? "¡Excelente! Clasificar la basura correctamente reduce la contaminación y protege los cenotes y la selva maya. Cada acción pequeña tiene un gran impacto en nuestra tierra."
                : porcentaje >= 50
                ? "¡Buen intento! Recuerda que separar la basura es clave para cuidar el medio ambiente. La tierra maya nos da todo, nosotros debemos devolverle el cuidado."
                : "¡No te rindas! Aprender a clasificar la basura lleva práctica. La naturaleza maya necesita tu ayuda. ¡Inténtalo de nuevo!"
              }
            </p>
            <p className="text-sm italic text-[#A98467] mt-3">
              {porcentaje >= 80
                ? "Jach ma'alob! U ts'a'abal ma'alob sojol ku xu'ulsik le contaminación yéetel ku kanáantik le cenotes yéetel le selva maya. Amal chan ba'al ku beetik yaan jump'éel nojoch impacto ti' k planeta."
                : "Ko'ox kanik u kúuchil le lu'um"}
            </p>
          </div>

          <div className="flex gap-4 justify-center">
            <button
              onClick={reiniciar}
              className="bg-[#2C5F4D] text-white px-8 py-3 rounded-2xl font-bold hover:scale-105 transition"
            >
              Jugar de nuevo
            </button>
            <Link
              to="/medio-ambiente"
              className="bg-[#E9C46A] text-[#1E3D32] px-8 py-3 rounded-2xl font-bold hover:scale-105 transition"
            >
              Volver
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#DDE5D0] p-6 flex flex-col items-center">

      {/* Header */}
      <div className="w-full max-w-2xl flex justify-between items-center mb-6">
        <Link to="/medio-ambiente" className="text-green-800 font-bold">
          ← Volver
        </Link>
        <div className="bg-white rounded-2xl px-5 py-2 shadow font-bold text-green-800">
          ⭐ {puntaje} pts
        </div>
      </div>

      {/* Título */}
      <h1 className="text-4xl font-bold text-green-800 mb-1 text-center">
        ♻️ Clasifica la Basura
      </h1>
      <p className="italic text-[#A98467] mb-2 text-center">
        Ts'o'ok u páajtal le basura
      </p>

      {/* Progreso */}
      <div className="w-full max-w-2xl bg-white rounded-full h-3 mb-8 overflow-hidden shadow">
        <div
          className="bg-green-500 h-3 rounded-full transition-all duration-500"
          style={{ width: `${((actual) / basuras.length) * 100}%` }}
        />
      </div>

      {/* Tarjeta del item */}
      <div className={`bg-white rounded-[35px] shadow-2xl p-10 mb-8 text-center max-w-sm w-full transition-all duration-300
        ${respuesta === "correcto" ? "bg-green-50 scale-105" : ""}
        ${respuesta === "incorrecto" ? "bg-red-50" : ""}
        ${shake ? "animate-bounce" : ""}
      `}>
        <div className="text-8xl mb-4">{item.emoji}</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-1">{item.nombre}</h2>
        <p className="italic text-[#A98467] text-sm">{item.maya}</p>

        {respuesta && (
          <div className={`mt-4 text-xl font-bold ${respuesta === "correcto" ? "text-green-600" : "text-red-500"}`}>
            {respuesta === "correcto" ? "✅ ¡Correcto!" : "❌ ¡Inténtalo!"}
          </div>
        )}
      </div>

      {/* Instrucción */}
      <p className="text-green-900 font-medium mb-5 text-center">
        ¿Dónde va? <span className="italic text-[#A98467]">— Tu'ux ku bin?</span>
      </p>

      {/* Contenedores */}
      <div className="grid grid-cols-2 gap-4 w-full max-w-2xl">
        {contenedores.map((c) => (
          <button
            key={c.tipo}
            onClick={() => clasificar(c.tipo)}
            className={`${c.color} ${c.text} border-2 rounded-[25px] p-5 text-center font-bold hover:scale-105 transition duration-200 shadow`}
          >
            <div className="text-4xl mb-2">{c.emoji}</div>
            <div className="text-lg">{c.label}</div>
            <div className="text-xs italic opacity-70 mt-1">{c.maya}</div>
          </button>
        ))}
      </div>

      {/* Contador */}
      <p className="mt-8 text-green-800 font-medium">
        {actual + 1} / {basuras.length}
      </p>
    </div>
  );
}