import { useState } from "react";
import { Link } from "react-router-dom";

const pares = [
  { es: "Agua",      maya: "Ja'",       emoji: "💧" },
  { es: "Cenote",    maya: "Ts'ono'ot", emoji: "🌊" },
  { es: "Pez",       maya: "Kay",       emoji: "🐟" },
  { es: "Tierra",    maya: "Lu'um",     emoji: "🌍" },
  { es: "Árbol",     maya: "Che'",      emoji: "🌳" },
  { es: "Sol",       maya: "K'in",      emoji: "☀️" },
  { es: "Luna",      maya: "Uj",        emoji: "🌙" },
  { es: "Tortuga",   maya: "Aak",       emoji: "🐢" },
  { es: "Flor",      maya: "Lol",       emoji: "🌺" },
  { es: "Jaguar",    maya: "Balam",     emoji: "🐆" },
];

const colores = [
  "bg-blue-100 border-blue-400",
  "bg-green-100 border-green-400",
  "bg-yellow-100 border-yellow-400",
  "bg-purple-100 border-purple-400",
  "bg-pink-100 border-pink-400",
  "bg-orange-100 border-orange-400",
  "bg-teal-100 border-teal-400",
  "bg-red-100 border-red-400",
  "bg-indigo-100 border-indigo-400",
  "bg-lime-100 border-lime-400",
];

function generarCartas() {
  const cartas = [];
  pares.forEach((par, i) => {
    cartas.push({ id: `es-${i}`, texto: par.es, emoji: par.emoji, grupo: i, tipo: "es", color: colores[i] });
    cartas.push({ id: `maya-${i}`, texto: par.maya, emoji: par.emoji, grupo: i, tipo: "maya", color: colores[i] });
  });
  return cartas.sort(() => Math.random() - 0.5);
}

export default function MemoramaCenote() {
  const [cartas, setCartas] = useState(generarCartas);
  const [volteadas, setVolteadas] = useState([]);
  const [encontradas, setEncontradas] = useState([]);
  const [intentos, setIntentos] = useState(0);
  const [terminado, setTerminado] = useState(false);
  const [bloqueado, setBloqueado] = useState(false);

  const voltear = (carta) => {
    if (bloqueado) return;
    if (volteadas.find(v => v.id === carta.id)) return;
    if (encontradas.includes(carta.grupo)) return;

    const nuevas = [...volteadas, carta];
    setVolteadas(nuevas);

    if (nuevas.length === 2) {
      setBloqueado(true);
      setIntentos(i => i + 1);
      if (nuevas[0].grupo === nuevas[1].grupo) {
        setTimeout(() => {
          setEncontradas(prev => {
            const updated = [...prev, nuevas[0].grupo];
            if (updated.length === pares.length) setTerminado(true);
            return updated;
          });
          setVolteadas([]);
          setBloqueado(false);
        }, 700);
      } else {
        setTimeout(() => {
          setVolteadas([]);
          setBloqueado(false);
        }, 1000);
      }
    }
  };

  const reiniciar = () => {
    setCartas(generarCartas());
    setVolteadas([]);
    setEncontradas([]);
    setIntentos(0);
    setTerminado(false);
    setBloqueado(false);
  };

  const estaVolteada = (carta) =>
    volteadas.find(v => v.id === carta.id) || encontradas.includes(carta.grupo);

  const estaEncontrada = (carta) => encontradas.includes(carta.grupo);

  if (terminado) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-10 text-center" style={{background: "linear-gradient(135deg, #0D47A1, #1565C0)"}}>
        <div className="bg-white rounded-[40px] shadow-2xl p-12 max-w-xl w-full relative overflow-hidden">
          <div className="absolute top-4 right-4 text-6xl opacity-10">🃏</div>
          <div className="text-8xl mb-4">🏆</div>
          <h2 className="text-4xl font-bold text-blue-800 mb-1">¡Lo lograste!</h2>
          <p className="italic text-[#A98467] mb-6">Ts'o'ok le báaxal — ¡Terminaste!</p>
          <div className="bg-blue-50 rounded-2xl p-4 mb-6 border border-blue-200">
            <p className="text-3xl font-bold text-blue-700">{intentos} intentos</p>
            <p className="text-gray-500 mt-1">
              {intentos <= 12 ? "¡Memoria increíble! 🧠" : intentos <= 18 ? "¡Muy bien! 👍" : "¡Sigue practicando! 💪"}
            </p>
          </div>
          <div className="bg-[#FFF9E6] border-l-4 border-[#E9C46A] rounded-2xl p-6 text-left mb-6">
            <p className="text-lg font-bold text-[#2C5F4D] mb-2">🌊 Reflexión</p>
            <p className="text-gray-700 leading-relaxed">
              Conocer las palabras mayas nos conecta con la sabiduría de nuestros ancestros. El idioma maya lleva miles de años describiendo el mundo natural que nos rodea.
            </p>
            <p className="text-sm italic text-[#A98467] mt-3">
              Le maaya t'aan ku ts'aik k'aaba' ti' le yok'ol kab — La lengua maya le da nombre al mundo
            </p>
          </div>
          <div className="flex gap-4 justify-center flex-wrap">
            <button onClick={reiniciar} className="bg-[#0D47A1] text-white px-8 py-3 rounded-2xl font-bold hover:scale-105 transition shadow-lg">
              Jugar de nuevo 🔄
            </button>
            <Link to="/game/cenote" className="bg-[#E9C46A] text-[#1E3D32] px-8 py-3 rounded-2xl font-bold hover:scale-105 transition shadow-lg">
              Volver
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center" style={{backgroundColor: "#BBDEFB"}}>

      {/* HERO */}
      <div className="w-full px-6 py-8 relative overflow-hidden" style={{background: "linear-gradient(135deg, #0D47A1, #1565C0)"}}>
        <div className="absolute top-2 right-6 text-[80px] opacity-10">🃏</div>
        <div className="absolute bottom-2 left-6 text-[60px] opacity-10">🌊</div>
        <div className="max-w-3xl mx-auto relative z-10">
          <Link to="/game/cenote" className="text-blue-100 font-bold hover:text-white transition">← Volver</Link>
          <h1 className="text-4xl font-bold text-white mt-3 mb-1">🃏 Memorama del Cenote</h1>
          <p className="italic text-blue-100 mb-2">Memorama ts'ono'ot</p>
          <p className="text-blue-50 text-sm">Une cada palabra en español con su par en maya</p>
          <p className="italic text-blue-200 text-xs mt-1">Ts'aik u k'aaba' español yéetel u k'aaba' maya</p>
        </div>
      </div>

      {/* STATS */}
      <div className="sticky top-0 z-50 w-full px-6 py-3 shadow-lg" style={{backgroundColor: "#0A3270"}}>
        <div className="max-w-3xl mx-auto flex justify-between items-center">
          <div className="bg-white/20 rounded-2xl px-4 py-2 text-white font-bold">🧠 {intentos} intentos</div>
          <div className="bg-white/20 rounded-2xl px-4 py-2 text-white font-bold">
            {encontradas.length}/{pares.length} pares
          </div>
        </div>
      </div>

      <div className="p-6 flex flex-col items-center w-full max-w-3xl">

        <div className="grid grid-cols-4 gap-3 w-full">
          {cartas.map((carta) => (
            <div
              key={carta.id}
              onClick={() => voltear(carta)}
              className={`h-28 rounded-2xl border-2 flex flex-col items-center justify-center cursor-pointer
                font-bold text-center px-2 transition duration-300 shadow-lg
                ${estaVolteada(carta)
                  ? estaEncontrada(carta)
                    ? `${carta.color} scale-95 opacity-80 shadow-none`
                    : `${carta.color} scale-105 shadow-xl`
                  : "hover:scale-105 hover:shadow-xl"
                }
              `}
              style={!estaVolteada(carta) ? {background: "linear-gradient(135deg, #0D47A1, #1565C0)", borderColor: "#0A3270"} : {}}
            >
              {estaVolteada(carta) ? (
                <>
                  <span className="text-2xl mb-1">{carta.emoji}</span>
                  <span className={`text-sm font-bold ${estaEncontrada(carta) ? "text-gray-500" : "text-gray-800"}`}>
                    {carta.texto}
                  </span>
                  <span className="text-xs text-gray-400 mt-1">
                    {carta.tipo === "es" ? "Español" : "Maya"}
                  </span>
                </>
              ) : (
                <span className="text-3xl">🌊</span>
              )}
            </div>
          ))}
        </div>

        <p className="mt-8 text-blue-900 font-bold text-lg">
          {encontradas.length} / {pares.length} pares encontrados
        </p>
      </div>
    </div>
  );
}