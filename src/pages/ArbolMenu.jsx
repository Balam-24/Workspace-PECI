import { Link } from "react-router-dom";

export default function ArbolMenu() {
  const juegos = [
    {
      emoji: "🗺️",
      titulo: "Mapa de la Selva",
      maya: "U mapa'il le k'áaxo'",
      descripcion: "Explora diferentes zonas de la selva maya y descubre qué árbol vive en cada una.",
      ruta: "/game/arbol/mapa",
      color: "hover:bg-[#E8F5E9] border-green-200",
      btn: "bg-green-700 hover:bg-green-900",
    },
    {
      emoji: "❓",
      titulo: "Trivia de la Selva",
      maya: "Trivia k'áax",
      descripcion: "Responde preguntas sobre los árboles y la selva maya. ¿Cuánto sabes?",
      ruta: "/game/arbol/trivia",
      color: "hover:bg-[#FFF9C4] border-yellow-200",
      btn: "bg-yellow-600 hover:bg-yellow-800",
    },
  ];

  return (
    <div className="min-h-screen bg-[#E8F5E9] flex flex-col items-center justify-center p-10">
      <Link to="/medio-ambiente" className="text-green-800 font-bold self-start mb-8">
        ← Volver
      </Link>
      <div className="text-7xl mb-4">🌳</div>
      <h1 className="text-5xl font-bold text-green-800 mb-1 text-center">Planta un Árbol</h1>
      <p className="italic text-[#A98467] mb-3 text-center">Pak' che'</p>
      <p className="text-green-700 mb-12 text-center max-w-md">Elige el juego que quieres jugar</p>
      <div className="grid md:grid-cols-2 gap-8 w-full max-w-2xl">
        {juegos.map((juego, index) => (
          <div key={index} className={`bg-white rounded-3xl p-8 shadow-xl border-2 transition duration-300 hover:-translate-y-2 hover:shadow-2xl ${juego.color}`}>
            <div className="text-6xl mb-4 text-center">{juego.emoji}</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-1 text-center">{juego.titulo}</h2>
            <p className="italic text-[#A98467] text-sm text-center mb-4">{juego.maya}</p>
            <p className="text-gray-600 text-center mb-6">{juego.descripcion}</p>
            <div className="flex justify-center">
              <Link to={juego.ruta} className={`${juego.btn} text-white px-8 py-3 rounded-2xl font-bold hover:scale-105 transition duration-300`}>
                Jugar
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}