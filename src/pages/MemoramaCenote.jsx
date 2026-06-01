import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const pares = [
  { es: "Agua",      maya: "Ja'" },
  { es: "Cenote",    maya: "Ts'ono'ot" },
  { es: "Pez",       maya: "Kay" },
  { es: "Tierra",    maya: "Lu'um" },
  { es: "Árbol",     maya: "Che'" },
  { es: "Sol",       maya: "K'in" },
  { es: "Luna",      maya: "Uj" },
  { es: "Tortuga",   maya: "Aak" },
  { es: "Flor",      maya: "Lol" },
  { es: "Jaguar",    maya: "Balam" },
];

const colores = [
  "bg-blue-100 border-blue-300",
  "bg-green-100 border-green-300",
  "bg-yellow-100 border-yellow-300",
  "bg-purple-100 border-purple-300",
  "bg-pink-100 border-pink-300",
  "bg-orange-100 border-orange-300",
  "bg-teal-100 border-teal-300",
  "bg-red-100 border-red-300",
  "bg-indigo-100 border-indigo-300",
  "bg-lime-100 border-lime-300",
];

function generarCartas() {
  const cartas = [];
  pares.forEach((par, i) => {
    cartas.push({ id: `es-${i}`, texto: par.es,   grupo: i, tipo: "es",   color: colores[i] });
    cartas.push({ id: `maya-${i}`, texto: par.maya, grupo: i, tipo: "maya", color: colores[i] });
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
    if (encontradas.find(e => e === carta.grupo)) return;

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
      <div className="min-h-screen bg-[#E3F2FD] flex flex-col items-center justify-center p-10 text-center">
        <div className="bg-white rounded-[40px] shadow-2xl p-12 max-w-xl w-full">
          <div className="text-8xl mb-4">🏆</div>
          <h2 className="text-4xl font-bold text-blue-800 mb-1">¡Lo lograste!</h2>
          <p className="italic text-[#A98467] mb-6">Ts'o'ok le báaxal — ¡Terminaste!</p>
          <div className="bg-blue-50 rounded-2xl p-4 mb-6">
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
            <button onClick={reiniciar} className="bg-[#2C5F4D] text-white px-8 py-3 rounded-2xl font-bold hover:scale-105 transition">
              Jugar de nuevo
            </button>
            <Link to="/medio-ambiente" className="bg-blue-100 text-blue-800 px-8 py-3 rounded-2xl font-bold hover:scale-105 transition">
              Volver
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#E3F2FD] p-6 flex flex-col items-center">
      <div className="w-full max-w-3xl flex justify-between items-center mb-6">
        <Link to="/medio-ambiente" className="text-blue-800 font-bold">← Volver</Link>
        <div className="bg-white rounded-2xl px-5 py-2 shadow font-bold text-blue-800">
          🧠 {intentos} intentos
        </div>
      </div>

      <h1 className="text-4xl font-bold text-blue-800 mb-1 text-center">🃏 Memorama del Cenote</h1>
      <p className="italic text-[#A98467] mb-2 text-center">Memorama ts'ono'ot</p>
      <p className="text-blue-700 mb-2 text-center">Une cada palabra en español con su par en maya</p>
      <p className="text-sm italic text-[#A98467] mb-8 text-center">Ts'aik u k'aaba' español yéetel u k'aaba' maya</p>

      <div className="grid grid-cols-4 gap-3 w-full max-w-3xl">
        {cartas.map((carta) => (
          <div
            key={carta.id}
            onClick={() => voltear(carta)}
            className={`h-24 rounded-2xl border-2 flex flex-col items-center justify-center cursor-pointer
              font-bold text-center px-2 transition duration-300 shadow
              ${estaVolteada(carta)
                ? estaEncontrada(carta)
                  ? `${carta.color} scale-95 opacity-80`
                  : `${carta.color} scale-105`
                : "bg-[#2C5F4D] border-[#1E3D32] hover:scale-105"
              }
            `}
          >
            {estaVolteada(carta) ? (
              <>
                <span className={`text-sm ${estaEncontrada(carta) ? "text-gray-600" : "text-gray-800"}`}>
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

      <p className="mt-8 text-blue-800 font-medium">
        {encontradas.length} / {pares.length} pares encontrados
      </p>
    </div>
  );
}