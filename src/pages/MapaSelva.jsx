import { useState, useMemo } from "react";
import { Link } from "react-router-dom";

const arboles = [
  { es: "Ceiba",       maya: "Yaxche'",  emoji: "🌲", dato: "Árbol sagrado de los mayas" },
  { es: "Mangle",      maya: "Pok'che'", emoji: "🌿", dato: "Crece en las costas" },
  { es: "Chicozapote", maya: "Ya'",      emoji: "🍂", dato: "De él viene el chicle" },
  { es: "Ramón",       maya: "Ojoche",   emoji: "🌱", dato: "Sus semillas se comen como maíz" },
  { es: "Ciricote",    maya: "Kopté",    emoji: "🪵", dato: "Madera muy resistente" },
  { es: "Jabín",       maya: "Jabín",    emoji: "🌸", dato: "Florece en temporada seca" },
  { es: "Chaka",       maya: "Chaak",    emoji: "🌳", dato: "Su corteza se usa como medicina" },
  { es: "Tzalam",      maya: "Ts'alam",  emoji: "🌴", dato: "Madera usada en construcción maya" },
];

function mezclar(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

export default function MapaSelva() {
  const [fase, setFase] = useState("aprender"); // aprender | jugar | terminado
  const [actual, setActual] = useState(0);
  const [letrasElegidas, setLetrasElegidas] = useState([]);
  const [feedback, setFeedback] = useState(null);
  const [puntaje, setPuntaje] = useState(0);
  const arbolesJuego = useMemo(() => mezclar(arboles), []);

  const arbol = arbolesJuego[actual];

  const letrasCorrectas = arbol?.maya.split("") || [];
  const letrasDisponibles = useMemo(() => {
    if (!arbol) return [];
    const extras = "aeiouklmnpstch'".split("").filter(l => !arbol.maya.includes(l)).slice(0, 4);
    return mezclar([...new Set([...arbol.maya.split(""), ...extras])]);
  }, [arbol]);

  const elegirLetra = (letra) => {
    if (feedback) return;
    const nuevas = [...letrasElegidas, letra];
    setLetrasElegidas(nuevas);

    if (nuevas.length === letrasCorrectas.length) {
      const correcto = nuevas.join("") === arbol.maya;
      setFeedback(correcto ? "correcto" : "incorrecto");
      if (correcto) setPuntaje(p => p + 20);
      setTimeout(() => {
        setFeedback(null);
        setLetrasElegidas([]);
        if (actual + 1 >= arbolesJuego.length) {
          setFase("terminado");
        } else {
          setActual(a => a + 1);
        }
      }, 1200);
    }
  };

  const borrarUltima = () => {
    if (feedback) return;
    setLetrasElegidas(prev => prev.slice(0, -1));
  };

  const reiniciar = () => {
    setFase("aprender");
    setActual(0);
    setLetrasElegidas([]);
    setFeedback(null);
    setPuntaje(0);
  };

  const porcentaje = Math.round((puntaje / (arbolesJuego.length * 20)) * 100);

  // PANTALLA APRENDER
  if (fase === "aprender") {
    return (
      <div className="min-h-screen bg-[#E8F5E9] flex flex-col items-center">
        <div className="w-full bg-gradient-to-br from-[#1B5E20] to-[#2E7D32] px-6 py-8 relative overflow-hidden">
          <div className="absolute top-2 right-6 text-[80px] opacity-10">🌳</div>
          <div className="absolute bottom-2 left-6 text-[60px] opacity-10">🌿</div>
          <div className="max-w-3xl mx-auto relative z-10">
            <Link to="/game/arbol" className="text-green-100 font-bold hover:text-white transition">← Volver</Link>
            <h1 className="text-4xl font-bold text-white mt-3 mb-1">📚 Aprende los Árboles</h1>
            <p className="italic text-green-100 mb-2">Ka'ansaj le che'ob maya</p>
            <p className="text-green-50 text-sm">Estudia los nombres en maya antes de jugar</p>
          </div>
        </div>

        <div className="p-6 w-full max-w-3xl">
          <p className="text-center text-green-800 font-bold text-lg mb-2">
            Memoriza estos árboles y sus nombres en maya
          </p>
          <p className="text-center italic text-[#A98467] text-sm mb-8">
            Na'atik le che'ob yéetel u k'aaba' maya
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {arboles.map((a, i) => (
              <div key={i} className="bg-white rounded-2xl p-4 text-center shadow-lg border-2 border-green-200">
                <div className="text-4xl mb-2">{a.emoji}</div>
                <p className="font-bold text-gray-800 text-sm">{a.es}</p>
                <p className="text-lg font-bold text-green-700 mt-1">{a.maya}</p>
                <p className="text-xs italic text-[#A98467] mt-1">{a.dato}</p>
              </div>
            ))}
          </div>

          <button
            onClick={() => setFase("jugar")}
            className="w-full bg-green-700 text-white py-4 rounded-2xl font-bold text-xl hover:scale-105 transition shadow-lg"
          >
            ¡Ya lo sé, a jugar! 🎯
          </button>
        </div>
      </div>
    );
  }

  // PANTALLA TERMINADO
  if (fase === "terminado") {
    return (
      <div className="min-h-screen bg-[#E8F5E9] flex flex-col items-center justify-center p-10 text-center">
        <div className="bg-white rounded-[40px] shadow-2xl p-12 max-w-xl w-full relative overflow-hidden">
          <div className="absolute top-4 right-4 text-6xl opacity-10">🌳</div>
          <div className="text-8xl mb-4">{porcentaje >= 80 ? "🏆" : porcentaje >= 50 ? "👍" : "💪"}</div>
          <h2 className="text-4xl font-bold text-green-800 mb-1">¡Juego terminado!</h2>
          <p className="italic text-[#A98467] mb-6">Ts'o'ok le báaxal</p>
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
                ? "¡Excelente! Conoces los nombres mayas de los árboles. Cada palabra maya que aprendes ayuda a mantener viva esta lengua milenaria."
                : porcentaje >= 50
                ? "¡Buen intento! Los árboles mayas tienen nombres muy especiales. ¡Sigue practicando!"
                : "¡No te rindas! Puedes repasar la lista y volver a intentarlo."}
            </p>
            <p className="text-sm italic text-[#A98467] mt-3">
              Le che'ob maya u k'aaba' ku kuxtal ich k t'aan — Los árboles mayas viven en nuestra lengua
            </p>
          </div>
          <div className="flex gap-4 justify-center flex-wrap">
            <button onClick={reiniciar} className="bg-green-700 text-white px-8 py-3 rounded-2xl font-bold hover:scale-105 transition shadow-lg">
              Jugar de nuevo 🔄
            </button>
            <Link to="/game/arbol/trivia" className="bg-[#E9C46A] text-[#1E3D32] px-8 py-3 rounded-2xl font-bold hover:scale-105 transition shadow-lg">
              Jugar Trivia ❓
            </Link>
            <Link to="/game/arbol" className="bg-green-100 text-green-800 px-8 py-3 rounded-2xl font-bold hover:scale-105 transition shadow-lg">
              Volver
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // PANTALLA JUEGO
  return (
    <div className="min-h-screen bg-[#E8F5E9] flex flex-col items-center">

      {/* HERO */}
      <div className="w-full bg-gradient-to-br from-[#1B5E20] to-[#2E7D32] px-6 py-8 relative overflow-hidden">
        <div className="absolute top-2 right-6 text-[80px] opacity-10">🌳</div>
        <div className="max-w-2xl mx-auto relative z-10">
          <Link to="/game/arbol" className="text-green-100 font-bold hover:text-white transition">← Volver</Link>
          <h1 className="text-4xl font-bold text-white mt-3 mb-1">🔤 Completa en Maya</h1>
          <p className="italic text-green-100 mb-2">Ts'o'ok u k'aaba' maya</p>
        </div>
      </div>

      {/* STATS */}
      <div className="sticky top-0 z-50 w-full bg-[#1B5E20] px-6 py-3 shadow-lg">
        <div className="max-w-2xl mx-auto flex gap-4 justify-between items-center">
          <div className="bg-white/20 rounded-2xl px-4 py-2 text-white font-bold">⭐ {puntaje} pts</div>
          <div className="flex-1">
            <div className="w-full bg-white/20 rounded-full h-3">
              <div className="bg-[#E9C46A] h-3 rounded-full transition-all duration-500"
                style={{ width: `${(actual / arbolesJuego.length) * 100}%` }} />
            </div>
          </div>
          <div className="bg-white/20 rounded-2xl px-4 py-2 text-white font-bold">
            {actual + 1}/{arbolesJuego.length}
          </div>
        </div>
      </div>

      <div className="p-6 flex flex-col items-center w-full max-w-2xl">

        {/* Tarjeta árbol */}
        <div className={`bg-white rounded-[35px] shadow-2xl p-8 mb-6 w-full text-center transition duration-300
          ${feedback === "correcto" ? "bg-green-50 border-2 border-green-400" : ""}
          ${feedback === "incorrecto" ? "bg-red-50 border-2 border-red-400" : ""}
        `}>
          <div className="text-7xl mb-4">{arbol.emoji}</div>
          <h2 className="text-3xl font-bold text-gray-800 mb-1">{arbol.es}</h2>
          <p className="text-gray-500 text-sm mb-6 italic">{arbol.dato}</p>

          {/* Espacios para letras */}
          <div className="flex gap-2 justify-center flex-wrap mb-4">
            {letrasCorrectas.map((letra, i) => (
              <div
                key={i}
                className={`w-10 h-10 border-b-4 flex items-center justify-center font-bold text-lg
                  ${letrasElegidas[i]
                    ? feedback === "correcto" ? "text-green-600 border-green-400"
                    : feedback === "incorrecto" ? "text-red-600 border-red-400"
                    : "text-green-800 border-green-600"
                    : "border-gray-300 text-transparent"}
                `}
              >
                {letrasElegidas[i] || "_"}
              </div>
            ))}
          </div>

          {feedback && (
            <p className={`text-xl font-bold ${feedback === "correcto" ? "text-green-600" : "text-red-500"}`}>
              {feedback === "correcto"
                ? "✅ ¡Correcto! — Jach ma'alob!"
                : `❌ Era: ${arbol.maya} — Ma' leti'`}
            </p>
          )}
        </div>

        {/* Instrucción */}
        <p className="text-green-800 font-bold mb-1 text-center">
          ¿Cómo se dice en maya?
        </p>
        <p className="italic text-[#A98467] text-sm mb-5 text-center">
          Bix u k'aaba' ti' maaya?
        </p>

        {/* Letras disponibles */}
        <div className="flex flex-wrap gap-3 justify-center mb-4">
          {letrasDisponibles.map((letra, i) => (
            <button
              key={i}
              onClick={() => elegirLetra(letra)}
              disabled={!!feedback}
              className="w-12 h-12 bg-white border-2 border-green-300 rounded-xl font-bold text-lg text-green-800 hover:bg-green-50 hover:scale-110 transition duration-200 shadow"
            >
              {letra}
            </button>
          ))}
        </div>

        {/* Borrar */}
        {letrasElegidas.length > 0 && !feedback && (
          <button
            onClick={borrarUltima}
            className="bg-red-100 text-red-700 px-6 py-2 rounded-2xl font-bold hover:scale-105 transition"
          >
            ⬅️ Borrar última
          </button>
        )}

        {/* Ver lista */}
        <button
          onClick={() => setFase("aprender")}
          className="mt-4 text-green-700 text-sm font-medium hover:underline"
        >
          📚 Ver lista de árboles
        </button>
      </div>
    </div>
  );
}