import { useState, useMemo } from "react";
import { Link } from "react-router-dom";

const todasLasBasuras = [
  { id: 1,  nombre: "Botella de plástico",  maya: "Botella plástico",   emoji: "🍶", tipo: "reciclable" },
  { id: 2,  nombre: "Cáscara de naranja",   maya: "Corteza ch'iich'",   emoji: "🍊", tipo: "organico" },
  { id: 3,  nombre: "Lata de refresco",     maya: "Lata k'aas",         emoji: "🥤", tipo: "reciclable" },
  { id: 4,  nombre: "Bolsa de papas",       maya: "Bolsa wa'",          emoji: "🛍️", tipo: "noreciclable" },
  { id: 5,  nombre: "Hoja de árbol",        maya: "Luum che'",          emoji: "🍂", tipo: "organico" },
  { id: 6,  nombre: "Pila usada",           maya: "Pila k'aas",         emoji: "🔋", tipo: "peligroso" },
  { id: 7,  nombre: "Periódico",            maya: "Hu'un",              emoji: "📰", tipo: "reciclable" },
  { id: 8,  nombre: "Resto de comida",      maya: "Ts'o'ok hanal",      emoji: "🍱", tipo: "organico" },
  { id: 9,  nombre: "Foco quemado",         maya: "Sak u'yik'al",       emoji: "💡", tipo: "peligroso" },
  { id: 10, nombre: "Cartón",               maya: "Cartón",             emoji: "📦", tipo: "reciclable" },
  { id: 11, nombre: "Colilla de cigarro",   maya: "K'aas",              emoji: "🚬", tipo: "noreciclable" },
  { id: 12, nombre: "Cáscara de plátano",   maya: "Corteza ha'as",      emoji: "🍌", tipo: "organico" },
  { id: 13, nombre: "Botella de vidrio",    maya: "Botella vidrio",     emoji: "🍾", tipo: "reciclable" },
  { id: 14, nombre: "Cáscara de mango",     maya: "Corteza maango",     emoji: "🥭", tipo: "organico" },
  { id: 15, nombre: "Jeringa usada",        maya: "K'aas ich'ak",       emoji: "💉", tipo: "peligroso" },
  { id: 16, nombre: "Bolsa de plástico",    maya: "Bolsa plástico",     emoji: "🛍️", tipo: "noreciclable" },
  { id: 17, nombre: "Lata de atún",         maya: "Lata kaay",          emoji: "🥫", tipo: "reciclable" },
  { id: 18, nombre: "Restos de verdura",    maya: "Ts'o'ok iib",        emoji: "🥦", tipo: "organico" },
  { id: 19, nombre: "Medicamento vencido",  maya: "K'aas ts'aak",       emoji: "💊", tipo: "peligroso" },
  { id: 20, nombre: "Unicel",               maya: "K'aas unicel",       emoji: "📫", tipo: "noreciclable" },
  { id: 21, nombre: "Revista",              maya: "Hu'un nojoch",       emoji: "📖", tipo: "reciclable" },
  { id: 22, nombre: "Cáscara de sandía",    maya: "Corteza chaak",      emoji: "🍉", tipo: "organico" },
  { id: 23, nombre: "Pintura vieja",        maya: "K'aas pintura",      emoji: "🪣", tipo: "peligroso" },
  { id: 24, nombre: "Popote de plástico",   maya: "K'aas popote",       emoji: "🥤", tipo: "noreciclable" },
];

const contenedores = [
  { tipo: "reciclable",   label: "Reciclable",   maya: "Páajtal u ts'o'ok", emoji: "♻️", color: "bg-blue-100 border-blue-400",   text: "text-blue-800",  glow: "hover:shadow-blue-300" },
  { tipo: "organico",     label: "Orgánico",     maya: "Yéetel k'áax",      emoji: "🌱", color: "bg-green-100 border-green-400", text: "text-green-800", glow: "hover:shadow-green-300" },
  { tipo: "noreciclable", label: "No reciclable",maya: "Ma' páajtal",       emoji: "🗑️", color: "bg-gray-100 border-gray-400",   text: "text-gray-800",  glow: "hover:shadow-gray-300" },
  { tipo: "peligroso",    label: "Peligroso",    maya: "K'aas",             emoji: "☣️", color: "bg-red-100 border-red-400",     text: "text-red-800",   glow: "hover:shadow-red-300" },
];

function mezclar(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

export default function ClasificaBasura() {
  const basuras = useMemo(() => mezclar(todasLasBasuras).slice(0, 12), []);

  const [actual, setActual] = useState(0);
  const [puntaje, setPuntaje] = useState(0);
  const [respuesta, setRespuesta] = useState(null);
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
    window.location.reload();
  };

  const porcentaje = Math.round((puntaje / (basuras.length * 10)) * 100);

  if (terminado) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#DDE5D0] to-[#c5d4b5] flex flex-col items-center justify-center p-10 text-center">
        <div className="bg-white rounded-[40px] shadow-2xl p-12 max-w-xl w-full relative overflow-hidden">
          <div className="absolute top-4 right-4 text-6xl opacity-10">♻️</div>
          <div className="absolute bottom-4 left-4 text-6xl opacity-10">🌿</div>

          <div className="text-8xl mb-4">
            {porcentaje >= 80 ? "🏆" : porcentaje >= 50 ? "👍" : "💪"}
          </div>
          <h2 className="text-4xl font-bold text-green-800 mb-1">¡Juego terminado!</h2>
          <p className="italic text-[#A98467] mb-6">Ts'o'ok le báaxal</p>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-4 mb-6 border border-green-200">
            <p className="text-5xl font-bold text-green-700">{puntaje} pts</p>
            <p className="text-gray-500 mt-1">{porcentaje}% correcto</p>
            <div className="w-full bg-gray-200 rounded-full h-3 mt-3">
              <div className="bg-green-500 h-3 rounded-full transition-all" style={{width: `${porcentaje}%`}}/>
            </div>
          </div>

          <div className="bg-[#FFF9E6] border-l-4 border-[#E9C46A] rounded-2xl p-6 text-left mb-6">
            <p className="text-lg font-bold text-[#2C5F4D] mb-2">🌿 Reflexión</p>
            <p className="text-gray-700 leading-relaxed">
              {porcentaje >= 80
                ? "¡Excelente! Clasificar la basura correctamente reduce la contaminación y protege los cenotes y la selva maya."
                : porcentaje >= 50
                ? "¡Buen intento! Recuerda que separar la basura es clave para cuidar el medio ambiente."
                : "¡No te rindas! La naturaleza maya necesita tu ayuda. ¡Inténtalo de nuevo!"}
            </p>
            <p className="text-sm italic text-[#A98467] mt-3">
              {porcentaje >= 80
                ? "Jach ma'alob! U ts'a'abal ma'alob sojol ku xu'ulsik le contaminación."
                : "Ko'ox kanik u kúuchil le lu'um"}
            </p>
          </div>

          <div className="flex gap-4 justify-center">
            <button onClick={reiniciar} className="bg-[#2C5F4D] text-white px-8 py-3 rounded-2xl font-bold hover:scale-105 transition shadow-lg">
              Jugar de nuevo 🔄
            </button>
            <Link to="/medio-ambiente" className="bg-[#E9C46A] text-[#1E3D32] px-8 py-3 rounded-2xl font-bold hover:scale-105 transition shadow-lg">
              Volver
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#DDE5D0] to-[#c5d4b5] flex flex-col items-center">

      {/* PARTÍCULAS */}
{[
  { emoji: "♻️", top: "10%",  left: "5%",  size: "80px", dur: "4s" },
  { emoji: "🌿", top: "20%",  left: "90%", size: "75px", dur: "5s" },
  { emoji: "🌱", top: "50%",  left: "3%",  size: "60px", dur: "6s" },
  { emoji: "🍃", top: "70%",  left: "92%", size: "50px", dur: "3.5s" },
  { emoji: "♻️", top: "80%",  left: "10%", size: "50px", dur: "7s" },
  { emoji: "🌎", top: "35%",  left: "88%", size: "60px", dur: "5.5s" },
  { emoji: "🍂", top: "60%",  left: "6%",  size: "50px", dur: "4.5s" },
  { emoji: "🌿", top: "90%",  left: "85%", size: "70px", dur: "6.5s" },
].map((p, i) => (
  <span
    key={i}
    className="particle"
    style={{
      top: p.top,
      left: p.left,
      fontSize: p.size,
      animationDuration: p.dur,
      animationDelay: `${i * 0.5}s`,
    }}
  >
    {p.emoji}
  </span>
))}

      {/* HERO */}
<div className="w-full bg-gradient-to-br from-[#1E3D32] to-[#2C5F4D] px-6 py-8 relative overflow-hidden">
  <div className="absolute top-2 right-6 text-[80px] opacity-10">♻️</div>
  <div className="absolute bottom-2 left-6 text-[60px] opacity-10">🌿</div>

  <div className="max-w-2xl mx-auto relative z-10">
    <Link to="/medio-ambiente" className="text-green-300 font-bold hover:text-white transition">
      ← Volver
    </Link>
    <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-1">
      ♻️ Clasifica la Basura
    </h1>
    <p className="italic text-green-300 mb-4">Ts'o'ok u páajtal le basura</p>
  </div>
</div>

{/* STATS FIJOS */}
<div className="sticky top-0 z-50 w-full bg-[#1E3D32] px-6 py-3 shadow-lg">
  <div className="max-w-2xl mx-auto flex gap-4 justify-between items-center">
    <div className="bg-white/20 rounded-2xl px-4 py-2 text-white font-bold text-lg">
      ⭐ {puntaje} pts
    </div>
    <div className="flex-1">
      <div className="w-full bg-white/20 rounded-full h-3">
        <div
          className="bg-[#E9C46A] h-3 rounded-full transition-all duration-500"
          style={{ width: `${(actual / basuras.length) * 100}%` }}
        />
      </div>
    </div>
    <div className="bg-white/20 rounded-2xl px-4 py-2 text-white font-bold text-lg">
      📦 {actual + 1}/{basuras.length}
    </div>
  </div>
</div>

      <div className="p-6 flex flex-col items-center w-full max-w-2xl">

        {/* Tarjeta del item */}
        <div className={`bg-white rounded-[35px] shadow-2xl p-10 mb-6 text-center w-full transition-all duration-300
          ${respuesta === "correcto" ? "bg-green-50 scale-105 shadow-green-200" : ""}
          ${respuesta === "incorrecto" ? "bg-red-50 shadow-red-200" : ""}
          ${shake ? "animate-bounce" : ""}
          relative overflow-hidden
        `}>
          <div className="absolute top-3 right-3 text-4xl opacity-10">🌿</div>
          <div className="text-9xl mb-4 drop-shadow">{item.emoji}</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-1">{item.nombre}</h2>
          <p className="italic text-[#A98467] text-sm">{item.maya}</p>
          {respuesta && (
            <div className={`mt-4 text-2xl font-bold ${respuesta === "correcto" ? "text-green-600" : "text-red-500"}`}>
              {respuesta === "correcto" ? "✅ ¡Correcto!" : "❌ ¡Inténtalo!"}
            </div>
          )}
        </div>

        {/* Instrucción */}
        <p className="text-green-900 font-bold mb-5 text-center text-lg">
          ¿Dónde va? <span className="italic text-[#A98467] font-normal">— Tu'ux ku bin?</span>
        </p>

        {/* Contenedores */}
        <div className="grid grid-cols-2 gap-4 w-full">
          {contenedores.map((c) => (
            <button
              key={c.tipo}
              onClick={() => clasificar(c.tipo)}
              className={`${c.color} ${c.text} ${c.glow} border-2 rounded-[25px] p-5 text-center font-bold hover:scale-105 transition duration-200 shadow-lg hover:shadow-xl`}
            >
              <div className="text-4xl mb-2">{c.emoji}</div>
              <div className="text-lg">{c.label}</div>
              <div className="text-xs italic opacity-70 mt-1">{c.maya}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
} 