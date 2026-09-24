import { useState } from "react";
import { Link } from "react-router-dom";

const juegos = [
  { nombre: "Clasifica la Basura", emoji: "♻️", ruta: "/game/reciclaje" },
  { nombre: "Salva el Cenote", emoji: "💧", ruta: "/game/cenote/arrastra" },
  { nombre: "Memorama Cenote", emoji: "🃏", ruta: "/game/cenote/memorama" },
  { nombre: "Mapa de la Selva", emoji: "🗺️", ruta: "/game/arbol/mapa" },
  { nombre: "Trivia de la Selva", emoji: "❓", ruta: "/game/arbol/trivia" },
  { nombre: "Memorama Maya", emoji: "🌿", ruta: "/game/cenote/memorama" },
];

const lecturaMaya = [
  { español: "Bienvenido", maya: "Ka'aten", pronunciacion: "Ka-a-ten" },
  { español: "Agua", maya: "Ja'", pronunciacion: "Ja" },
  { español: "Árbol", maya: "Che'", pronunciacion: "Che" },
  { español: "Jaguar", maya: "Balam", pronunciacion: "Ba-lam" },
  { español: "Tierra", maya: "Lu'um", pronunciacion: "Lu-um" },
  { español: "Sol", maya: "K'in", pronunciacion: "K-in" },
  { español: "Luna", maya: "Uj", pronunciacion: "Uj" },
  { español: "Maíz", maya: "Ixi'im", pronunciacion: "I-xi-im" },
  { español: "Cenote", maya: "Ts'ono'ot", pronunciacion: "Ts-o-no-ot" },
  { español: "Selva", maya: "K'áax", pronunciacion: "K-aax" },
  { español: "Flor", maya: "Lol", pronunciacion: "Lol" },
  { español: "Pez", maya: "Kay", pronunciacion: "Kay" },
];

export default function MenuFlotante() {
  const [abierto, setAbierto] = useState(false);
  const [tab, setTab] = useState("juegos");
  const [mensajes, setMensajes] = useState([
    { rol: "asistente", texto: "¡Hola! Soy Balam 🐆 Tu guía maya. La IA estará disponible próximamente." }
  ]);
  const [input, setInput] = useState("");

  const enviar = async () => {
    if (!input.trim()) return;
    setMensajes(prev => [...prev, { rol: "usuario", texto: input }]);
    setInput("");
    setMensajes(prev => [...prev, { rol: "asistente", texto: "La IA estará disponible próximamente 🐆" }]);
  };

  return (
    <>
      {abierto && (
        <div className="fixed bottom-24 right-4 z-50 w-80 md:w-96 bg-white rounded-[25px] shadow-2xl border-2 border-[#E9C46A] overflow-hidden">
          <div className="bg-gradient-to-r from-[#1E3D32] to-[#2C5F4D] px-4 py-3 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🐆</span>
              <div>
                <p className="text-white font-bold text-sm">MayaPlay</p>
                <p className="text-green-300 text-xs italic">Ko'ox kanik — Vamos a aprender</p>
              </div>
            </div>
            <button onClick={() => setAbierto(false)} className="text-white text-xl font-bold hover:text-red-300 transition">✕</button>
          </div>

          <div className="flex border-b border-gray-200">
            {[
              { id: "juegos", label: "🎮 Juegos" },
              { id: "ia", label: "🤖 IA Maya" },
              { id: "maya", label: "📖 Lectura" },
            ].map(t => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`flex-1 py-2 text-xs font-bold transition ${
                  tab === t.id ? "bg-[#E9C46A] text-[#1E3D32]" : "bg-gray-50 text-gray-500 hover:bg-gray-100"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="h-80 overflow-y-auto">
            {tab === "juegos" && (
              <div className="p-4 grid grid-cols-2 gap-3">
                {juegos.map((j, i) => (
                  <Link
                    key={i}
                    to={j.ruta}
                    onClick={() => setAbierto(false)}
                    className="bg-[#F4F0E6] rounded-2xl p-3 text-center hover:bg-[#E9C46A] hover:scale-105 transition duration-200 shadow"
                  >
                    <div className="text-3xl mb-1">{j.emoji}</div>
                    <p className="text-xs font-bold text-[#1E3D32]">{j.nombre}</p>
                  </Link>
                ))}
              </div>
            )}

            {tab === "ia" && (
              <div className="flex flex-col h-full">
                <div className="flex-1 p-3 overflow-y-auto space-y-2" style={{maxHeight: "220px"}}>
                  {mensajes.map((m, i) => (
                    <div key={i} className={`flex ${m.rol === "usuario" ? "justify-end" : "justify-start"}`}>
                      <div className={`max-w-[80%] px-3 py-2 rounded-2xl text-xs leading-relaxed ${
                        m.rol === "usuario"
                          ? "bg-[#2C5F4D] text-white rounded-br-none"
                          : "bg-[#F4F0E6] text-gray-800 rounded-bl-none"
                      }`}>
                        {m.rol === "asistente" && <span className="mr-1">🐆</span>}
                        {m.texto}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-3 border-t flex gap-2">
                  <input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={e => e.key === "Enter" && enviar()}
                    placeholder="Pregunta algo en maya..."
                    className="flex-1 text-xs border border-gray-200 rounded-xl px-3 py-2 focus:outline-none focus:border-[#2C5F4D]"
                  />
                  <button
                    onClick={enviar}
                    className="bg-[#2C5F4D] text-white px-3 py-2 rounded-xl text-xs font-bold hover:bg-[#1E3D32] transition"
                  >
                    ➤
                  </button>
                </div>
              </div>
            )}

            {tab === "maya" && (
              <div className="p-4 space-y-2">
                <p className="text-xs text-gray-500 italic text-center mb-3">Toca una palabra para escucharla</p>
                {lecturaMaya.map((p, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      const u = new SpeechSynthesisUtterance(p.maya);
                      u.lang = "es-MX";
                      u.rate = 0.7;
                      window.speechSynthesis.speak(u);
                    }}
                    className="w-full flex justify-between items-center bg-[#F4F0E6] rounded-2xl px-4 py-2 hover:bg-[#E9C46A] transition duration-200"
                  >
                    <div className="text-left">
                      <p className="text-sm font-bold text-[#1E3D32]">{p.maya}</p>
                      <p className="text-xs text-[#A98467] italic">{p.pronunciacion}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500">{p.español}</p>
                      <span className="text-lg">🔊</span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      <button
        onClick={() => setAbierto(!abierto)}
        className="fixed bottom-4 right-4 z-50 w-16 h-16 bg-gradient-to-br from-[#2C5F4D] to-[#1E3D32] rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition duration-300 border-4 border-[#E9C46A]"
      >
        <span className="text-3xl">{abierto ? "✕" : "🐆"}</span>
      </button>
    </>
  );
}