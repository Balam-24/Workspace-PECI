import { useState, useMemo } from "react";
import { Link } from "react-router-dom";

const plantas = [
  {
    nombre: "Maíz",
    maya: "Ixi'im",
    emoji: "🌽",
    pistas: [
      { es: "Es el cultivo más sagrado para los mayas", maya: "Leti' u yuum u paak'al maaya'ob" },
      { es: "De él se hacen tortillas y tamales", maya: "Ti' ku beetik waaj yéetel pibiwaaj" },
      { es: "Crece alto y tiene mazorcas amarillas", maya: "Ku kaajal nohoch yéetel ixi'im k'an" },
    ],
    opciones: ["Maíz / Ixi'im", "Frijol / Iib", "Calabaza / K'uum", "Chile / Iik"],
    correcto: "Maíz / Ixi'im",
  },
  {
    nombre: "Frijol",
    maya: "Iib",
    emoji: "🫘",
    pistas: [
      { es: "Se trepa por las plantas de maíz", maya: "Ku xíimbal yok'ol le ixi'im" },
      { es: "Es redondo y pequeño", maya: "Boolon yéetel chik'an" },
      { es: "Da mucha proteína a la dieta maya", maya: "Ku ts'aik nojoch fuerza ti' k nak'" },
    ],
    opciones: ["Maíz / Ixi'im", "Frijol / Iib", "Chaya / Chaay", "Camote / Iis"],
    correcto: "Frijol / Iib",
  },
  {
    nombre: "Calabaza",
    maya: "K'uum",
    emoji: "🎃",
    pistas: [
      { es: "Crece en el suelo y cubre la tierra", maya: "Ku kaajal yok'ol lu'um yéetel ku taapal" },
      { es: "Sus semillas se comen tostadas", maya: "U pepen ku jaantal bus" },
      { es: "Es grande, redonda y naranja o verde", maya: "Nohoch, boolon yéetel chak o ya'ax" },
    ],
    opciones: ["Calabaza / K'uum", "Maíz / Ixi'im", "Chile / Iik", "Jícama / Chiikam"],
    correcto: "Calabaza / K'uum",
  },
  {
    nombre: "Chile",
    maya: "Iik",
    emoji: "🌶️",
    pistas: [
      { es: "Es picante y da sabor a la comida", maya: "Chowak yéetel ku ts'aik sabor ti' hanal" },
      { es: "Los mayas lo usan en casi todos sus platillos", maya: "Le maaya'ob ku kaxtik ich amal hanal" },
      { es: "Es rojo, verde o amarillo", maya: "Chak, ya'ax wáaj k'an" },
    ],
    opciones: ["Frijol / Iib", "Chile / Iik", "Calabaza / K'uum", "Chaya / Chaay"],
    correcto: "Chile / Iik",
  },
  {
    nombre: "Chaya",
    maya: "Chaay",
    emoji: "🌿",
    pistas: [
      { es: "Es una planta medicinal muy usada en Yucatán", maya: "Jump'éel paak'al ts'aak ku kaxtikil tu Yucatán" },
      { es: "Sus hojas se comen cocidas", maya: "U le'il ku jaantal ts'o'ok u k'aak'" },
      { es: "Tiene más hierro que la espinaca", maya: "Yaan u mas hierro ichil espinaca" },
    ],
    opciones: ["Chaya / Chaay", "Maíz / Ixi'im", "Frijol / Iib", "Calabaza / K'uum"],
    correcto: "Chaya / Chaay",
  },
  {
    nombre: "Camote",
    maya: "Iis",
    emoji: "🍠",
    pistas: [
      { es: "Crece bajo la tierra", maya: "Ku kaajal yok'ol lu'um" },
      { es: "Es dulce y de color morado o naranja", maya: "Ch'uhuk yéetel ek'chak wáaj chak" },
      { es: "Se come asado o en atole", maya: "Ku jaantal bus wáaj ich atole" },
    ],
    opciones: ["Chile / Iik", "Camote / Iis", "Chaya / Chaay", "Maíz / Ixi'im"],
    correcto: "Camote / Iis",
  },
  {
    nombre: "Jícama",
    maya: "Chiikam",
    emoji: "🥔",
    pistas: [
      { es: "Es redonda y crece bajo la tierra", maya: "Boolon yéetel ku kaajal yok'ol lu'um" },
      { es: "Por dentro es blanca y crujiente", maya: "Ich u sak yéetel chowak" },
      { es: "Se come fresca con limón y chile", maya: "Ku jaantal k'as yéetel limon yéetel iik" },
    ],
    opciones: ["Jícama / Chiikam", "Camote / Iis", "Frijol / Iib", "Chile / Iik"],
    correcto: "Jícama / Chiikam",
  },
  {
    nombre: "Achiote",
    maya: "Kuxub",
    emoji: "🌺",
    pistas: [
      { es: "Da un color rojo a la comida", maya: "Ku ts'aik chak u beh ti' hanal" },
      { es: "Se usa para marinar carnes como el cochinita pibil", maya: "Ku kaxtikil tu cochinita pibil" },
      { es: "Sus semillas son rojas y pequeñas", maya: "U pepen chak yéetel chik'an" },
    ],
    opciones: ["Chaya / Chaay", "Achiote / Kuxub", "Calabaza / K'uum", "Maíz / Ixi'im"],
    correcto: "Achiote / Kuxub",
  },
];

function mezclar(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

export default function AdivinaPlanta() {
  const plantasMezcladas = useMemo(() => mezclar(plantas), []);
  const [actual, setActual] = useState(0);
  const [pistaActual, setPistaActual] = useState(0);
  const [seleccion, setSeleccion] = useState(null);
  const [puntaje, setPuntaje] = useState(0);
  const [terminado, setTerminado] = useState(false);

  const planta = plantasMezcladas[actual];

  const responder = (opcion) => {
    if (seleccion) return;
    setSeleccion(opcion);
    if (opcion === planta.correcto) {
      setPuntaje(p => p + (pistaActual === 0 ? 30 : pistaActual === 1 ? 20 : 10));
    }
    setTimeout(() => {
      setSeleccion(null);
      setPistaActual(0);
      if (actual + 1 >= plantasMezcladas.length) setTerminado(true);
      else setActual(a => a + 1);
    }, 1200);
  };

  const reiniciar = () => window.location.reload();
  const porcentaje = Math.round((puntaje / (plantasMezcladas.length * 30)) * 100);

  if (terminado) {
    return (
      <div className="min-h-screen bg-[#FFF9E6] flex flex-col items-center justify-center p-10 text-center">
        <div className="bg-white rounded-[40px] shadow-2xl p-12 max-w-xl w-full relative overflow-hidden">
          <div className="absolute top-4 right-4 text-6xl opacity-10">🌽</div>
          <div className="text-8xl mb-4">{porcentaje >= 80 ? "🏆" : porcentaje >= 50 ? "👍" : "💪"}</div>
          <h2 className="text-4xl font-bold text-yellow-800 mb-1">¡Juego terminado!</h2>
          <p className="italic text-[#A98467] mb-6">Ts'o'ok le báaxal</p>
          <div className="bg-yellow-50 rounded-2xl p-4 mb-6 border border-yellow-200">
            <p className="text-5xl font-bold text-yellow-700">{puntaje} pts</p>
            <p className="text-gray-500 mt-1">{porcentaje}% correcto</p>
          </div>
          <div className="bg-[#FFF9E6] border-l-4 border-[#E9C46A] rounded-2xl p-6 text-left mb-6">
            <p className="text-lg font-bold text-[#2C5F4D] mb-2">🌽 Reflexión</p>
            <p className="text-gray-700 leading-relaxed">
              {porcentaje >= 80
                ? "¡Excelente! La milpa maya es un sistema de cultivo sabio que ha alimentado a nuestro pueblo por miles de años."
                : porcentaje >= 50
                ? "¡Buen intento! Las plantas de la milpa son fundamentales para la cultura maya."
                : "¡No te rindas! La milpa es la base de la alimentación maya. ¡Inténtalo de nuevo!"}
            </p>
            <p className="text-sm italic text-[#A98467] mt-3">
              Le kool maya u yuum u hanal k kaajal — La milpa maya es el corazón de nuestra alimentación
            </p>
          </div>
          <div className="flex gap-4 justify-center flex-wrap">
            <button onClick={reiniciar} className="bg-yellow-600 text-white px-8 py-3 rounded-2xl font-bold hover:scale-105 transition">
              Jugar de nuevo 🔄
            </button>
            <Link to="/game/milpa" className="bg-[#E9C46A] text-[#1E3D32] px-8 py-3 rounded-2xl font-bold hover:scale-105 transition">
              Volver
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF9E6] flex flex-col items-center">

      {/* HERO */}
      <div className="w-full bg-gradient-to-br from-[#854F0B] to-[#E9C46A] px-6 py-8 relative overflow-hidden">
        <div className="absolute top-2 right-6 text-[80px] opacity-10">🌽</div>
        <div className="absolute bottom-2 left-6 text-[60px] opacity-10">🌿</div>
        <div className="max-w-2xl mx-auto relative z-10">
          <Link to="/game/milpa" className="text-yellow-100 font-bold hover:text-white transition">← Volver</Link>
          <h1 className="text-4xl font-bold text-white mt-3 mb-1">🎴 Adivina la Planta</h1>
          <p className="italic text-yellow-100 mb-2">Na'at le paak'al</p>
        </div>
      </div>

      {/* STATS */}
      <div className="sticky top-0 z-50 w-full bg-[#854F0B] px-6 py-3 shadow-lg">
        <div className="max-w-2xl mx-auto flex gap-4 justify-between items-center">
          <div className="bg-white/20 rounded-2xl px-4 py-2 text-white font-bold">⭐ {puntaje} pts</div>
          <div className="flex-1">
            <div className="w-full bg-white/20 rounded-full h-3">
              <div className="bg-[#E9C46A] h-3 rounded-full transition-all duration-500"
                style={{ width: `${(actual / plantasMezcladas.length) * 100}%` }} />
            </div>
          </div>
          <div className="bg-white/20 rounded-2xl px-4 py-2 text-white font-bold">
            {actual + 1}/{plantasMezcladas.length}
          </div>
        </div>
      </div>

      <div className="p-6 flex flex-col items-center w-full max-w-2xl">

        {/* Pistas */}
        <div className="bg-white rounded-[35px] shadow-2xl p-8 mb-6 w-full">
          <p className="text-center text-yellow-700 font-bold mb-4">
            🔍 Pista {pistaActual + 1} de {planta.pistas.length}
          </p>
          <p className="text-xl text-center text-gray-800 font-medium mb-2">
            "{planta.pistas[pistaActual].es}"
          </p>
          <p className="text-sm italic text-center text-[#A98467] mb-6">
            "{planta.pistas[pistaActual].maya}"
          </p>
          {pistaActual < planta.pistas.length - 1 && (
            <button
              onClick={() => setPistaActual(p => p + 1)}
              className="w-full bg-yellow-50 text-yellow-700 border-2 border-yellow-200 py-2 rounded-2xl font-bold hover:bg-yellow-100 transition text-sm"
            >
              Ver otra pista (-10 pts) — Kaxtik jump'éel yaan (-10 pts)
            </button>
          )}
        </div>

        {/* Instrucción */}
        <p className="text-yellow-800 font-bold mb-1 text-center text-lg">
          ¿Qué planta es?
        </p>
        <p className="italic text-[#A98467] text-sm mb-5 text-center">
          Ba'ax paak'al lelo'?
        </p>

        {/* Opciones */}
        <div className="grid grid-cols-2 gap-4 w-full">
          {planta.opciones.map((opcion, i) => (
            <button
              key={i}
              onClick={() => responder(opcion)}
              className={`p-5 rounded-2xl font-bold text-sm border-2 transition duration-200
                ${seleccion === null
                  ? "bg-white border-yellow-200 hover:bg-yellow-50 hover:scale-105"
                  : opcion === planta.correcto
                    ? "bg-green-100 border-green-500 text-green-800"
                    : seleccion === opcion
                      ? "bg-red-100 border-red-400 text-red-700"
                      : "bg-gray-50 border-gray-200 opacity-50"}
              `}
            >
              {opcion}
            </button>
          ))}
        </div>

        {seleccion && (
          <p className={`mt-4 text-xl font-bold ${seleccion === planta.correcto ? "text-green-600" : "text-red-500"}`}>
            {seleccion === planta.correcto
              ? "✅ ¡Correcto! — Jach ma'alob!"
              : `❌ Era: ${planta.nombre} / ${planta.maya} — Ma' leti' — Leti' le ${planta.nombre} / ${planta.maya}`}
          </p>
        )}
      </div>
    </div>
  );
}