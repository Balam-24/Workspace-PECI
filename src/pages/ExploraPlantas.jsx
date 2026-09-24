import { useState } from "react";
import { Link } from "react-router-dom";

const plantas = [
  {
    nombre: "Chaya",
    maya: "Chaay",
    emoji: "🌿",
    color: "bg-green-100 border-green-300",
    para: "Diabetes y presión alta",
    paraMaya: "Kuxtal yéetel k'ojol k'i'ik'",
    como: "Se hierven las hojas y se toma como té",
    comoMaya: "Ku chukbaltik u le'il yéetel ku uk'ul bey té",
    dato: "La chaya tiene más vitamina C que la naranja",
    datoMaya: "Le chaay yaan u mas vitamina C ich chik'in",
  },
  {
    nombre: "Sábila",
    maya: "Salviya",
    emoji: "🌵",
    color: "bg-lime-100 border-lime-300",
    para: "Quemaduras y heridas en la piel",
    paraMaya: "K'áak' yéetel k'ojol tu pool pek'",
    como: "Se aplica el gel de la hoja directamente en la piel",
    comoMaya: "Ku ts'aik u gel u le'il tu yok'ol pek'",
    dato: "Los mayas la llamaban la planta de la inmortalidad",
    datoMaya: "Le maaya'ob ku k'aaba'tik u paak'al kuxtal",
  },
  {
    nombre: "Ruda",
    maya: "Ruda",
    emoji: "🌱",
    color: "bg-teal-100 border-teal-300",
    para: "Dolores de cabeza y nervios",
    paraMaya: "K'ojol pol yéetel xikin",
    como: "Se frota en la frente o se toma como té",
    comoMaya: "Ku ts'aik tu pol wáaj ku uk'ul bey té",
    dato: "Su olor fuerte ahuyenta los malos espíritus según la tradición maya",
    datoMaya: "U bak'el chowak ku xíimbaltik le ik'o'ob k'aas",
  },
  {
    nombre: "Epazote",
    maya: "Apasot",
    emoji: "🍃",
    color: "bg-emerald-100 border-emerald-300",
    para: "Dolor de estómago y parásitos",
    paraMaya: "K'ojol nak' yéetel k'aas bicho",
    como: "Se hierve con frijoles o se toma como té",
    comoMaya: "Ku chukbaltik yéetel iib wáaj ku uk'ul bey té",
    dato: "Los mayas lo usaban para cocinar y curar al mismo tiempo",
    datoMaya: "Le maaya'ob ku kaxtik tu hanal yéetel tu ts'aak",
  },
  {
    nombre: "Albahaca",
    maya: "Albaaka",
    emoji: "🌺",
    color: "bg-cyan-100 border-cyan-300",
    para: "Fiebre y dolor de garganta",
    paraMaya: "Ch'ujuk yéetel k'ojol kaal",
    como: "Se hace té con las hojas frescas",
    comoMaya: "Ku beetik té yéetel u le'il k'as",
    dato: "Su aroma relaja y ayuda a dormir mejor",
    datoMaya: "U bak'el ku kanáantik u wenel",
  },
  {
    nombre: "Hierba Buena",
    maya: "Yerbabuena",
    emoji: "🍵",
    color: "bg-green-100 border-green-400",
    para: "Náuseas y malestar estomacal",
    paraMaya: "K'ojol nak' yéetel puul",
    como: "Se toma como té caliente después de comer",
    comoMaya: "Ku uk'ul bey té k'áak' ts'o'ok u hanal",
    dato: "Es una de las plantas medicinales más usadas en Yucatán",
    datoMaya: "Jump'éel u mas kaxtikil paak'al ts'aak tu Yucatán",
  },
];

export default function ExploraPlantas() {
  const [activa, setActiva] = useState(null);
  const [visitadas, setVisitadas] = useState([]);

  const explorar = (planta) => {
    setActiva(planta);
    if (!visitadas.includes(planta.nombre)) {
      setVisitadas(prev => [...prev, planta.nombre]);
    }
  };

 return (
   <div className="min-h-screen flex flex-col items-center" style={{backgroundColor: "#1E3A5F"}}>

{/* HERO */}
<div className="w-full px-6 py-8 relative overflow-hidden" style={{backgroundColor: "#1E3A5F"}}>
        <div className="absolute top-2 right-6 text-[80px] opacity-10">🌿</div>
        <div className="absolute bottom-2 left-6 text-[60px] opacity-10">🌺</div>
        <div className="max-w-4xl mx-auto relative z-10">
          <Link to="/saberes/plantas" className="text-green-100 font-bold hover:text-white transition">← Volver</Link>
          <h1 className="text-4xl font-bold text-white mt-3 mb-1">📖 Explora las Plantas</h1>
          <p className="italic text-green-100 mb-2">Kaxtik le paak'alo'ob</p>
          <p className="text-green-50 text-sm">Toca cada planta para aprender sus secretos medicinales</p>
          <p className="italic text-green-200 text-xs mt-1">Taach u paak'al — ba'ax ku ts'aik ts'aak</p>
        </div>
      </div>

      {/* CONTADOR */}
      <div className="sticky top-0 z-50 w-full px-6 py-3 shadow-lg" style={{backgroundColor: "#163252"}}>
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <p className="text-white font-bold">🌿 Plantas exploradas</p>
          <div className="bg-white/20 rounded-2xl px-4 py-2 text-white font-bold">
            {visitadas.length} / {plantas.length}
          </div>
        </div>
      </div>

      <div className="p-6 w-full max-w-4xl">

        {/* Grid de plantas */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {plantas.map((planta, i) => (
            <button
              key={i}
              onClick={() => explorar(planta)}
              className={`${planta.color} border-2 rounded-3xl p-5 text-center transition duration-300 hover:scale-105 hover:shadow-xl
                ${activa?.nombre === planta.nombre ? "ring-4 ring-green-400 scale-105" : ""}
              `}
            >
              <div className="text-5xl mb-2">{planta.emoji}</div>
              <p className="font-bold text-gray-800 text-sm">{planta.nombre}</p>
              <p className="text-xs italic text-[#A98467]">{planta.maya}</p>
              {visitadas.includes(planta.nombre) && (
                <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded-full mt-2 inline-block">✓ Explorada</span>
              )}
            </button>
          ))}
        </div>

        {/* Detalle de planta */}
        {activa && (
          <div className="bg-white rounded-[35px] shadow-2xl p-8 w-full">
            <div className="text-center mb-4">
              <span className="text-7xl">{activa.emoji}</span>
            </div>
            <h2 className="text-3xl font-bold text-green-800 text-center mb-1">{activa.nombre}</h2>
            <p className="italic text-[#A98467] text-center mb-6">{activa.maya}</p>

            <div className="space-y-4">
              <div className="bg-green-50 rounded-2xl p-4 border-l-4 border-green-400">
                <p className="font-bold text-green-800 mb-1">💊 ¿Para qué sirve?</p>
                <p className="text-gray-700">{activa.para}</p>
                <p className="text-sm italic text-[#A98467] mt-1">{activa.paraMaya}</p>
              </div>

              <div className="bg-teal-50 rounded-2xl p-4 border-l-4 border-teal-400">
                <p className="font-bold text-teal-800 mb-1">🍵 ¿Cómo se usa?</p>
                <p className="text-gray-700">{activa.como}</p>
                <p className="text-sm italic text-[#A98467] mt-1">{activa.comoMaya}</p>
              </div>

              <div className="bg-[#FFF9E6] rounded-2xl p-4 border-l-4 border-[#E9C46A]">
                <p className="font-bold text-[#854F0B] mb-1">💡 ¿Sabías que...?</p>
                <p className="text-gray-700">{activa.dato}</p>
                <p className="text-sm italic text-[#A98467] mt-1">{activa.datoMaya}</p>
              </div>
            </div>

            {visitadas.length === plantas.length && (
              <div className="mt-6 text-center">
                <p className="text-2xl font-bold text-green-700 mb-4">🏆 ¡Exploraste todas las plantas!</p>
                <Link
                  to="/saberes/plantas/identifica"
                  className="inline-block bg-green-700 text-white px-8 py-3 rounded-2xl font-bold hover:scale-105 transition"
                >
                  Ahora juega Identifica la Planta 🔍
                </Link>
              </div>
            )}
          </div>
        )}

        {!activa && (
          <div className="bg-white rounded-[35px] p-8 w-full text-center shadow-lg">
            <p className="text-6xl mb-4">👆</p>
            <p className="text-gray-500">Toca una planta para descubrir sus secretos</p>
            <p className="italic text-[#A98467] text-sm mt-2">Taach u paak'al — ku yojel u ts'aak</p>
          </div>
        )}
      </div>
    </div>
  );
}