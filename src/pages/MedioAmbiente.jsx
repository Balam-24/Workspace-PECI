import { Link } from "react-router-dom";

export default function MedioAmbiente() {
  const juegos = [
    {
      emoji: "♻️",
      titulo: "Clasifica la Basura",
      maya: "Ts'o'ok u páajtal le basura",
      descripcion: "Aprender a separar la basura ayuda a reducir la contaminación y protege los animales y plantas de nuestra región maya.",
      descripcionMaya: "U kanik u jatsik le sojolo' ku yáantik u xu'ulul le contaminación yéetel ku kanáantik le ba'alche'obo' yéetel le paak'alo'ob yaan te' k región mayao'.",
      ruta: "/game/reciclaje",
      color: "hover:bg-[#E8F5E9]",
    },
    {
      emoji: "💧",
      titulo: "Salva el Cenote",
      maya: "Taakpajal le ts'ono'ot",
      descripcion: "Los cenotes son sagrados para la cultura maya y son la principal fuente de agua dulce en la península de Yucatán. ¡Debemos cuidarlos!",
      descripcionMaya:"Le cenote'obo' kili'ichtak ti' u miatsil maaya'ob yéetel leti'ob u noj kúuchil u ts'aik ja' ch'ujuk tu petenil Yucatán. ¡K'a'abéet k kanáantiko'ob!",
      ruta: "/game/cenote",
      color: "hover:bg-[#E3F2FD]",
    },
    {
      emoji: "🌳",
      titulo: "Planta un Árbol",
      maya: "Pak' che'",
      descripcion: "Los árboles purifican el aire, dan refugio a los animales y son parte esencial de la selva maya que ha existido por miles de años.",
      descripcionMaya: "Le che'obo' ku limpiartik le iik'o', ku ts'áaiko'ob kúuchil ti' ba'alche'ob, yéetel leti'obe' jump'éel nu'ukulil k'a'abéet ti' le k'áaxo'ob maya'ob ts'o'ok u yantal ichil u milesil ja'abo'ob.",
      ruta: "/game/arbol",
      color: "hover:bg-[#F1F8E9]",
    },
  ];

  return (
    <div className="min-h-screen bg-[#DDE5D0] p-10">

      <Link to="/" className="text-green-800 font-bold text-lg">
        ← Volver al inicio
      </Link>

      <h1 className="text-5xl font-bold text-green-800 mb-4 mt-5">
        🌿 Juegos del Medio Ambiente
      </h1>

      <p className="text-green-900 text-lg mb-10 max-w-2xl">
        La naturaleza es un regalo sagrado. Aprende jugando cómo podemos protegerla cada día.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {juegos.map((juego, index) => (
          <div
            key={index}
            className={`bg-white rounded-3xl p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl ${juego.color}`}
          >
            <div className="text-6xl mb-4">{juego.emoji}</div>

            <h2 className="text-2xl font-bold text-green-800 mb-1">
              {juego.titulo}
            </h2>

            <p className="text-sm italic text-[#A98467] mb-4">
              {juego.maya}
            </p>

            <p className="text-gray-600 leading-relaxed mb-1">
              {juego.descripcion}
            </p>
            <p className="text-sm italic text-[#A98467] leading-relaxed mb-6">{juego.descripcionMaya}</p>

            <Link
              to={juego.ruta}
              className="inline-block bg-[#2C5F4D] text-white px-6 py-3 rounded-2xl font-bold hover:bg-[#1E3D32] hover:scale-105 transition duration-300"
            >
              Jugar
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}