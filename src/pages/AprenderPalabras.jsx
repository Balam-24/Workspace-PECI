import { useState } from "react";
import { Link } from "react-router-dom";

const categorias = [
  {
    nombre: "Naturaleza",
    maya: "K'áax",
    emoji: "🌿",
    palabras: [
      { es: "Agua", maya: "Ja'", emoji: "💧" },
      { es: "Árbol", maya: "Che'", emoji: "🌳" },
      { es: "Sol", maya: "K'in", emoji: "☀️" },
      { es: "Luna", maya: "Uj", emoji: "🌙" },
      { es: "Tierra", maya: "Lu'um", emoji: "🌍" },
      { es: "Flor", maya: "Lol", emoji: "🌺" },
      { es: "Viento", maya: "Iik'", emoji: "💨" },
      { es: "Fuego", maya: "K'áak'", emoji: "🔥" },
    ],
  },
  {
    nombre: "Animales",
    maya: "Ba'alche'ob",
    emoji: "🐆",
    palabras: [
      { es: "Jaguar", maya: "Balam", emoji: "🐆" },
      { es: "Pájaro", maya: "Ch'iich'", emoji: "🐦" },
      { es: "Pez", maya: "Kay", emoji: "🐟" },
      { es: "Serpiente", maya: "Kan", emoji: "🐍" },
      { es: "Tortuga", maya: "Aak", emoji: "🐢" },
      { es: "Mariposa", maya: "Pepen", emoji: "🦋" },
      { es: "Perro", maya: "Pek'", emoji: "🐕" },
      { es: "Venado", maya: "Keh", emoji: "🦌" },
    ],
  },
  {
    nombre: "Familia",
    maya: "Láak'o'ob",
    emoji: "👨‍👩‍👧",
    palabras: [
      { es: "Mamá", maya: "Naah", emoji: "👩" },
      { es: "Papá", maya: "Taata", emoji: "👨" },
      { es: "Abuelo", maya: "Nool", emoji: "👴" },
      { es: "Abuela", maya: "Chiich", emoji: "👵" },
      { es: "Hijo", maya: "Paal", emoji: "👦" },
      { es: "Hermano", maya: "Suku'un", emoji: "👦" },
      { es: "Amigo", maya: "Láak'", emoji: "🤝" },
      { es: "Niño", maya: "Paal", emoji: "🧒" },
    ],
  },
  {
    nombre: "Comida",
    maya: "Hanal",
    emoji: "🌽",
    palabras: [
      { es: "Maíz", maya: "Ixi'im", emoji: "🌽" },
      { es: "Tortilla", maya: "Waaj", emoji: "🫓" },
      { es: "Frijol", maya: "Iib", emoji: "🫘" },
      { es: "Chile", maya: "Iik", emoji: "🌶️" },
      { es: "Miel", maya: "Kaab", emoji: "🍯" },
      { es: "Agua", maya: "Ja'", emoji: "💧" },
      { es: "Calabaza", maya: "K'uum", emoji: "🎃" },
      { es: "Carne", maya: "Bak'", emoji: "🥩" },
    ],
  },
];

export default function AprenderPalabras() {
  const [categoriaActiva, setCategoriaActiva] = useState(0);
  const [palabraActiva, setPalabraActiva] = useState(null);
  const [aprendidas, setAprendidas] = useState([]);
  const [mostrarMaya, setMostrarMaya] = useState(false);

  const categoria = categorias[categoriaActiva];

  const seleccionar = (palabra) => {
    setPalabraActiva(palabra);
    setMostrarMaya(false);
    const key = `${categoriaActiva}-${palabra.es}`;
    if (!aprendidas.includes(key)) {
      setAprendidas(prev => [...prev, key]);
    }
    // Pronunciar en maya
    const u = new SpeechSynthesisUtterance(palabra.maya);
    u.lang = "es-MX";
    u.rate = 0.7;
    window.speechSynthesis.speak(u);
  };

  const totalAprendidas = aprendidas.length;
  const totalPalabras = categorias.reduce((acc, c) => acc + c.palabras.length, 0);

  return (
    <div className="min-h-screen" style={{backgroundColor: "#90CAF9"}}>
      {/* HERO */}
      <div className="relative px-8 py-10 overflow-hidden" style={{backgroundColor: "#1565C0"}}>
        <div className="absolute top-4 right-8 text-[100px] opacity-10">🔤</div>
        <div className="absolute bottom-4 left-8 text-[80px] opacity-10">📚</div>
        <div className="max-w-4xl mx-auto relative z-10">
          <Link to="/lengua-maya" className="text-purple-100 font-bold hover:text-white transition">← Volver</Link>
          <h1 className="text-4xl font-bold text-white mt-3 mb-1">🔤 Aprende Palabras</h1>
          <p className="italic text-purple-100 mb-2">Ka'ansaj u k'aaba'</p>
          <p className="text-purple-50 text-sm">Toca una palabra para aprender cómo se dice en maya y escucharla</p>
        </div>
      </div>

      {/* STATS */}
    <div className="sticky top-0 z-50 w-full px-6 py-3 shadow-lg" style={{backgroundColor: "#0D47A1"}}>
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <p className="text-white font-bold">📚 Palabras aprendidas</p>
          <div className="bg-white/20 rounded-2xl px-4 py-2 text-white font-bold">
            {totalAprendidas} / {totalPalabras}
          </div>
        </div>
      </div>

      <div className="p-6 max-w-4xl mx-auto">

        {/* Categorías */}
        <div className="flex gap-3 mb-8 flex-wrap justify-center">
          {categorias.map((cat, i) => (
            <button
              key={i}
              onClick={() => { setCategoriaActiva(i); setPalabraActiva(null); }}
              className={`px-5 py-3 rounded-2xl font-bold transition duration-200 ${
                categoriaActiva === i
                  ? "bg-[#0D47A1] text-white shadow-lg scale-105"
                  : "bg-white text-gray-700 border-2 border-purple-200 hover:bg-purple-50"
              }`}
            >
              {cat.emoji} {cat.nombre}
              <span className="block text-xs italic opacity-70">{cat.maya}</span>
            </button>
          ))}
        </div>

        {/* Palabras */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {categoria.palabras.map((palabra, i) => {
            const key = `${categoriaActiva}-${palabra.es}`;
            const aprendida = aprendidas.includes(key);
            return (
              <button
                key={i}
                onClick={() => seleccionar(palabra)}
                className={`bg-white rounded-2xl p-4 text-center shadow transition duration-200 hover:scale-105 hover:shadow-lg border-2
                  ${palabraActiva?.es === palabra.es ? "border-purple-400 bg-purple-50 scale-105" : "border-transparent"}
                  ${aprendida ? "border-green-300" : ""}
                `}
              >
                <div className="text-4xl mb-2">{palabra.emoji}</div>
                <p className="font-bold text-gray-800 text-sm">{palabra.es}</p>
                {aprendida && <span className="text-xs text-green-600">✓ Aprendida</span>}
              </button>
            );
          })}
        </div>

        {/* Detalle de palabra */}
        {palabraActiva && (
          <div className="bg-white rounded-[35px] shadow-2xl p-8 text-center">
            <div className="text-8xl mb-4">{palabraActiva.emoji}</div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">{palabraActiva.es}</h2>

            <button
              onClick={() => setMostrarMaya(!mostrarMaya)}
              className="bg-[#6A2F8C] text-white px-8 py-3 rounded-2xl font-bold hover:scale-105 transition mb-4"
            >
              {mostrarMaya ? "Ocultar maya" : "¿Cómo se dice en maya? 🔊"}
            </button>

            {mostrarMaya && (
              <div className="bg-purple-50 rounded-2xl p-6 mt-2">
                <p className="text-5xl font-bold text-[#6A2F8C] mb-2">{palabraActiva.maya}</p>
                <button
                  onClick={() => {
                    const u = new SpeechSynthesisUtterance(palabraActiva.maya);
                    u.lang = "es-MX";
                    u.rate = 0.6;
                    window.speechSynthesis.speak(u);
                  }}
                  className="bg-purple-100 text-purple-800 px-4 py-2 rounded-xl font-bold hover:scale-105 transition text-sm"
                >
                  🔊 Escuchar de nuevo
                </button>
              </div>
            )}
          </div>
        )}

        {!palabraActiva && (
          <div className="bg-white rounded-[35px] p-8 text-center shadow-lg">
            <p className="text-6xl mb-4">👆</p>
            <p className="text-gray-500">Toca una palabra para aprender cómo se dice en maya</p>
            <p className="italic text-[#A98467] text-sm mt-2">Taach u k'aaba' — ka'ansaj bix u t'aan maya</p>
          </div>
        )}
      </div>
    </div>
  );
}