import { useState } from "react";
import { Link } from "react-router-dom";

const plantasDisponibles = [
  { id: 1, nombre: "Maíz", maya: "Ixi'im", emoji: "🌽", lugar: "centro" },
  { id: 2, nombre: "Frijol", maya: "Iib", emoji: "🫘", lugar: "alrededor" },
  { id: 3, nombre: "Calabaza", maya: "K'uum", emoji: "🎃", lugar: "suelo" },
  { id: 4, nombre: "Chile", maya: "Iik", emoji: "🌶️", lugar: "orilla" },
  { id: 5, nombre: "Chaya", maya: "Chaay", emoji: "🌿", lugar: "orilla2" },
  { id: 6, nombre: "Camote", maya: "Iis", emoji: "🍠", lugar: "suelo2" },
];

const zonasMilpa = [
  { id: "centro", label: "Centro", maya: "Nohol", descripcion: "Planta alta que da sombra", descripcionMaya: "Paak'al nohoch ku ts'aik yiik'al", plantaCorrecta: 1, color: "bg-yellow-100 border-yellow-400" },
  { id: "alrededor", label: "Alrededor del maíz", maya: "Peek' ixi'im", descripcion: "Se trepa por las plantas altas", descripcionMaya: "Ku xíimbal yok'ol le nohoch paak'alo'ob", plantaCorrecta: 2, color: "bg-green-100 border-green-400" },
  { id: "suelo", label: "En el suelo", maya: "Yok'ol lu'um", descripcion: "Cubre la tierra y la protege", descripcionMaya: "Ku taapal le lu'um yéetel ku kanáantik", plantaCorrecta: 3, color: "bg-lime-100 border-lime-400" },
  { id: "orilla", label: "En la orilla", maya: "Tu k'ante'", descripcion: "Protege los bordes de la milpa", descripcionMaya: "Ku kanáantik u nojol le kool", plantaCorrecta: 4, color: "bg-red-100 border-red-400" },
];

export default function ConstruyeMilpa() {
  const [arrastrado, setArrastrado] = useState(null);
  const [colocadas, setColocadas] = useState({});
  const [feedback, setFeedback] = useState(null);
  const [puntaje, setPuntaje] = useState(0);
  const [terminado, setTerminado] = useState(false);

  const plantasUsadas = Object.values(colocadas).map(p => p.id);
  const plantasDisp = plantasDisponibles.filter(p => !plantasUsadas.includes(p.id) && ["centro","alrededor","suelo","orilla"].includes(p.lugar));

  const onDrop = (zona) => {
    if (!arrastrado) return;
    const correcto = arrastrado.lugar === zona.id;
    setFeedback({ zonaId: zona.id, correcto });
    if (correcto) {
      setPuntaje(p => p + 20);
      setColocadas(prev => ({ ...prev, [zona.id]: arrastrado }));
    }
    setArrastrado(null);
    setTimeout(() => {
      setFeedback(null);
      if (correcto && Object.keys(colocadas).length + 1 >= zonasMilpa.length) {
        setTerminado(true);
      }
    }, 1000);
  };

  const reiniciar = () => window.location.reload();

  if (terminado) {
    return (
      <div className="min-h-screen bg-[#FFF9E6] flex flex-col items-center justify-center p-10 text-center">
        <div className="bg-white rounded-[40px] shadow-2xl p-12 max-w-xl w-full">
          <div className="text-8xl mb-4">🏆</div>
          <h2 className="text-4xl font-bold text-yellow-800 mb-1">¡Milpa completa!</h2>
          <p className="italic text-[#A98467] mb-6">Ts'o'ok le kool — ¡Terminaste!</p>
          <div className="bg-yellow-50 rounded-2xl p-4 mb-6 border border-yellow-200">
            <p className="text-5xl font-bold text-yellow-700">{puntaje} pts</p>
          </div>
          <div className="bg-[#FFF9E6] border-l-4 border-[#E9C46A] rounded-2xl p-6 text-left mb-6">
            <p className="text-lg font-bold text-[#2C5F4D] mb-2">🌽 Reflexión</p>
            <p className="text-gray-700 leading-relaxed">
              ¡Construiste una milpa maya! La milpa es sabia — cada planta ayuda a las demás. El maíz da soporte al frijol, el frijol da nutrientes a la tierra, y la calabaza cubre el suelo para mantener la humedad.
            </p>
            <p className="text-sm italic text-[#A98467] mt-3">
              Le kool maya u na'atil k nool — La milpa maya es la sabiduría de nuestros abuelos
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
        <div className="max-w-3xl mx-auto relative z-10">
          <Link to="/game/milpa" className="text-yellow-100 font-bold hover:text-white transition">← Volver</Link>
          <h1 className="text-4xl font-bold text-white mt-3 mb-1">🌽 Construye tu Milpa</h1>
          <p className="italic text-yellow-100 mb-2">Pak' le kool</p>
        </div>
      </div>

      {/* STATS */}
      <div className="sticky top-0 z-50 w-full bg-[#854F0B] px-6 py-3 shadow-lg">
        <div className="max-w-3xl mx-auto flex justify-between items-center">
          <div className="bg-white/20 rounded-2xl px-4 py-2 text-white font-bold">⭐ {puntaje} pts</div>
          <div className="bg-white/20 rounded-2xl px-4 py-2 text-white font-bold">
            {Object.keys(colocadas).length}/{zonasMilpa.length} zonas
          </div>
        </div>
      </div>

      <div className="p-6 w-full max-w-3xl">

        <p className="text-center text-yellow-800 font-bold mb-1">
          Arrastra cada planta a su lugar en la milpa
        </p>
        <p className="text-center italic text-[#A98467] text-sm mb-8">
          Jaats'uts u ts'aik le paak'alo'ob ich u kúuchil — Coloca las plantas en su lugar
        </p>

        {/* Zonas */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {zonasMilpa.map((zona) => (
            <div
              key={zona.id}
              onDragOver={e => e.preventDefault()}
              onDrop={() => onDrop(zona)}
              className={`${zona.color} border-2 rounded-3xl p-5 min-h-[160px] transition duration-300
                ${arrastrado ? "scale-105 shadow-xl" : ""}
                ${feedback?.zonaId === zona.id
                  ? feedback.correcto ? "bg-green-200 border-green-500" : "bg-red-100 border-red-400"
                  : ""}
              `}
            >
              <p className="font-bold text-gray-800 mb-1">{zona.label}</p>
              <p className="text-xs italic text-[#A98467] mb-1">{zona.maya}</p>
              <p className="text-xs text-gray-500 mb-1">{zona.descripcion}</p>
              <p className="text-xs italic text-[#A98467] mb-3">{zona.descripcionMaya}</p>
              {colocadas[zona.id] && (
                <div className="bg-white rounded-2xl p-2 text-center">
                  <span className="text-3xl">{colocadas[zona.id].emoji}</span>
                  <p className="text-xs font-bold text-gray-700">{colocadas[zona.id].nombre}</p>
                  <p className="text-xs italic text-[#A98467]">{colocadas[zona.id].maya}</p>
                </div>
              )}
              {feedback?.zonaId === zona.id && (
                <p className={`text-center font-bold text-sm mt-1 ${feedback.correcto ? "text-green-700" : "text-red-600"}`}>
                  {feedback.correcto ? "✅ ¡Correcto! — Jach ma'alob!" : "❌ ¡Inténtalo! — Ko'ox kaxtik!"}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Plantas disponibles */}
        <p className="text-center text-yellow-800 font-bold mb-1">Plantas disponibles</p>
        <p className="text-center italic text-[#A98467] text-sm mb-4">Le paak'alo'ob yaan — Las plantas disponibles</p>
        <div className="flex flex-wrap gap-4 justify-center">
          {plantasDisp.map((planta) => (
            <div
              key={planta.id}
              draggable
              onDragStart={() => setArrastrado(planta)}
              className="bg-white rounded-2xl px-5 py-4 shadow-lg cursor-grab active:cursor-grabbing hover:scale-105 transition duration-200 text-center border-2 border-yellow-200"
            >
              <div className="text-4xl mb-1">{planta.emoji}</div>
              <p className="font-bold text-gray-800 text-sm">{planta.nombre}</p>
              <p className="text-xs italic text-[#A98467]">{planta.maya}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}