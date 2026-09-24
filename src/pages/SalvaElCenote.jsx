import { useState } from "react";
import { Link } from "react-router-dom";

const acciones = [
  { id: 1,  texto: "Tirar basura al cenote",        maya: "Ts'aik sóolel ich ts'ono'ot",      tipo: "mala" },
  { id: 2,  texto: "Usar bloqueador biodegradable",  maya: "Káax bloqueador biodegradable",    tipo: "buena" },
  { id: 3,  texto: "No tirar químicos al agua",      maya: "Ma' ts'aik químicos ich ja'",      tipo: "buena" },
  { id: 4,  texto: "Verter aceite en el cenote",     maya: "Ts'aik aceite ich ts'ono'ot",      tipo: "mala" },
  { id: 5,  texto: "Recoger basura alrededor",       maya: "Meyaj u líik'il sóolel",           tipo: "buena" },
  { id: 6,  texto: "Lavar ropa en el cenote",        maya: "Ch'a'aik nook' ich ts'ono'ot",     tipo: "mala" },
  { id: 7,  texto: "Respetar los animales del agua", maya: "Yéetel u ba'alche' ich ja'",       tipo: "buena" },
  { id: 8,  texto: "Meter comida al cenote",         maya: "Ts'aik hanal ich ts'ono'ot",       tipo: "mala" },
  { id: 9,  texto: "Visitar con guía local",         maya: "Xíimbal yéetel guía local",        tipo: "buena" },
  { id: 10, texto: "Contaminar el agua subterránea", maya: "K'aas u ts'o'ok u ja' yok'ol kab", tipo: "mala" },
];

export default function SalvaElCenote() {
  const [clasificadas, setClasificadas] = useState([]);
  const [arrastrado, setArrastrado] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [terminado, setTerminado] = useState(false);
  const [puntaje, setPuntaje] = useState(0);

  const pendientes = acciones.filter(a => !clasificadas.find(c => c.id === a.id));

  const onDragStart = (accion) => setArrastrado(accion);

  const onDrop = (tipo) => {
    if (!arrastrado) return;
    const correcto = arrastrado.tipo === tipo;
    setFeedback({ id: arrastrado.id, correcto });
    if (correcto) setPuntaje(p => p + 10);
    setClasificadas(prev => [...prev, arrastrado]);
    setArrastrado(null);
    setTimeout(() => {
      setFeedback(null);
      if (clasificadas.length + 1 >= acciones.length) setTerminado(true);
    }, 900);
  };

  const reiniciar = () => {
    setClasificadas([]);
    setArrastrado(null);
    setFeedback(null);
    setTerminado(false);
    setPuntaje(0);
  };

  const porcentaje = Math.round((puntaje / (acciones.length * 10)) * 100);

  if (terminado) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-10 text-center" style={{background: "linear-gradient(135deg, #0D47A1, #1565C0)"}}>
        <div className="bg-white rounded-[40px] shadow-2xl p-12 max-w-xl w-full relative overflow-hidden">
          <div className="absolute top-4 right-4 text-6xl opacity-10">💧</div>
          <div className="text-8xl mb-4">{porcentaje >= 80 ? "🏆" : porcentaje >= 50 ? "👍" : "💪"}</div>
          <h2 className="text-4xl font-bold text-blue-800 mb-1">¡Cenote salvado!</h2>
          <p className="italic text-[#A98467] mb-6">Ts'o'ok le báaxal</p>
          <div className="bg-blue-50 rounded-2xl p-4 mb-6 border border-blue-200">
            <p className="text-5xl font-bold text-blue-700">{puntaje} pts</p>
            <p className="text-gray-500 mt-1">{porcentaje}% correcto</p>
            <div className="w-full bg-gray-200 rounded-full h-3 mt-3">
              <div className="bg-blue-500 h-3 rounded-full transition-all" style={{width: `${porcentaje}%`}}/>
            </div>
          </div>
          <div className="bg-[#FFF9E6] border-l-4 border-[#E9C46A] rounded-2xl p-6 text-left mb-6">
            <p className="text-lg font-bold text-[#2C5F4D] mb-2">💧 Reflexión</p>
            <p className="text-gray-700 leading-relaxed">
              {porcentaje >= 80
                ? "¡Eres un guardián del cenote! Los cenotes son el corazón del mundo maya. Cada acción que tomamos cerca de ellos puede protegerlos o dañarlos para siempre."
                : porcentaje >= 50
                ? "Vas por buen camino. Recuerda que los cenotes tardaron miles de años en formarse. Cuidarlos es respetar la historia y el futuro de nuestra tierra."
                : "¡No te rindas! Los cenotes necesitan tu ayuda. Aprender qué los daña es el primer paso para protegerlos."}
            </p>
            <p className="text-sm italic text-[#A98467] mt-3">
              Le ts'ono'ot u puksi'ik'al u lu'um maya — El cenote es el corazón de la tierra maya
            </p>
          </div>
          <div className="flex gap-4 justify-center flex-wrap">
            <button onClick={reiniciar} className="bg-[#0D47A1] text-white px-8 py-3 rounded-2xl font-bold hover:scale-105 transition shadow-lg">
              Jugar de nuevo 🔄
            </button>
            <Link to="/game/cenote/memorama" className="bg-[#E9C46A] text-[#1E3D32] px-8 py-3 rounded-2xl font-bold hover:scale-105 transition shadow-lg">
              Jugar Memorama 🃏
            </Link>
            <Link to="/game/cenote" className="bg-blue-100 text-blue-800 px-8 py-3 rounded-2xl font-bold hover:scale-105 transition shadow-lg">
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
        <div className="absolute top-2 right-6 text-[80px] opacity-10">💧</div>
        <div className="absolute bottom-2 left-6 text-[60px] opacity-10">🌊</div>
        <div className="absolute top-10 left-1/3 text-[50px] opacity-10">🐠</div>
        <div className="max-w-3xl mx-auto relative z-10">
          <Link to="/game/cenote" className="text-blue-100 font-bold hover:text-white transition">← Volver</Link>
          <h1 className="text-4xl font-bold text-white mt-3 mb-1">💧 Salva el Cenote</h1>
          <p className="italic text-blue-100 mb-2">Taakpajal le ts'ono'ot</p>
        </div>
      </div>

      {/* STATS */}
      <div className="sticky top-0 z-50 w-full px-6 py-3 shadow-lg" style={{backgroundColor: "#0A3270"}}>
        <div className="max-w-3xl mx-auto flex gap-4 justify-between items-center">
          <div className="bg-white/20 rounded-2xl px-4 py-2 text-white font-bold">⭐ {puntaje} pts</div>
          <div className="flex-1">
            <div className="w-full bg-white/20 rounded-full h-3">
              <div className="bg-[#E9C46A] h-3 rounded-full transition-all duration-500"
                style={{ width: `${(clasificadas.length / acciones.length) * 100}%` }} />
            </div>
          </div>
          <div className="bg-white/20 rounded-2xl px-4 py-2 text-white font-bold">
            {clasificadas.length}/{acciones.length}
          </div>
        </div>
      </div>

      <div className="p-6 flex flex-col items-center w-full max-w-3xl">

        <p className="text-blue-900 font-bold mb-1 text-center text-lg">
          Arrastra cada acción al lugar correcto
        </p>
        <p className="text-sm italic text-[#A98467] mb-8 text-center">
          Jaats'uts u ts'aik bix u bin — Arrastra hacia donde corresponde
        </p>

        {/* Zonas de drop */}
        <div className="grid grid-cols-2 gap-6 w-full mb-8">
          {["buena", "mala"].map((tipo) => (
            <div
              key={tipo}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => onDrop(tipo)}
              className={`min-h-[220px] rounded-3xl border-4 border-dashed p-4 transition duration-300
                ${tipo === "buena"
                  ? "border-green-400 bg-green-50"
                  : "border-red-400 bg-red-50"}
                ${arrastrado ? "scale-105 shadow-xl" : ""}
              `}
            >
              <p className={`text-xl font-bold text-center mb-1 ${tipo === "buena" ? "text-green-700" : "text-red-700"}`}>
                {tipo === "buena" ? "✅ Buena acción" : "❌ Mala acción"}
              </p>
              <p className={`text-xs italic text-center mb-4 ${tipo === "buena" ? "text-green-500" : "text-red-400"}`}>
                {tipo === "buena" ? "Ts'aik wáaj ku yáantik" : "Ts'aik wáaj ku k'aasik"}
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {clasificadas
                  .filter(c => c.tipo === tipo)
                  .map(c => (
                    <div key={c.id} className={`px-3 py-1 rounded-xl text-sm font-medium
                      ${tipo === "buena" ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"}`}>
                      {c.texto}
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Acciones pendientes */}
        <p className="text-blue-900 font-bold mb-4 text-center">Acciones para clasificar:</p>
        <div className="flex flex-wrap gap-4 justify-center">
          {pendientes.map((accion) => (
            <div
              key={accion.id}
              draggable
              onDragStart={() => onDragStart(accion)}
              className={`bg-white rounded-2xl px-5 py-4 shadow-lg cursor-grab active:cursor-grabbing
                hover:scale-105 transition duration-200 text-center max-w-[180px] border-2
                ${feedback?.id === accion.id
                  ? feedback.correcto ? "bg-green-100 border-green-400" : "bg-red-100 border-red-400"
                  : "border-blue-200"}
              `}
            >
              <p className="font-bold text-gray-800 text-sm">{accion.texto}</p>
              <p className="text-xs italic text-[#A98467] mt-1">{accion.maya}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}