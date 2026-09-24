import { Link } from "react-router-dom";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
  const reproducir = () => {
    const audio = new Audio("/bienvenida .mp3");
    audio.play();
    document.removeEventListener("click", reproducir);
  };

  document.addEventListener("click", reproducir);

  return () => {
    document.removeEventListener("click", reproducir);
  };
}, []);

  const sections = [
    {
      title: "Cuidado del Medio Ambiente",
      maya: "U Kúuchil Lu'um",
      description: "Aprende a cuidar el agua, los animales y la naturaleza mediante juegos interactivos.",
      emoji: "🌿",
      hover: "hover:bg-[#E8F5E9]",
      delay: "fade-in-up-1",
    },
    {
      title: "Lengua Maya",
      maya: "Maayat'aan",
      description: "Descubre palabras y expresiones mayas mientras juegas y aprendes.",
      emoji: "🗣️",
      hover: "hover:bg-[#EDE7F6]",
      delay: "fade-in-up-2",
    },
    {
      title: "Saberes Ancestrales",
      maya: "Nukuch K'aaba'",
      description: "Explora conocimientos mayas sobre agricultura, medicina y cultura.",
      emoji: "🌽",
      hover: "hover:bg-[#FFF9C4]",
      delay: "fade-in-up-3",
    },
  ];

     const juegos = [
      { nombre: "Memorama Maya",       imagen: "/maya.png",  hover: "hover:bg-[#FFE4E1]", ruta: "/game/cenote/memorama" },
      { nombre: "Salva el Cenote",     emoji: "💧",          hover: "hover:bg-[#E3F2FD]", ruta: "/game/cenote/arrastra" },
      { nombre: "Clasifica la Basura", emoji: "♻️",          hover: "hover:bg-[#E8F5E9]", ruta: "/game/reciclaje" },
      { nombre: "La Milpa Maya",       emoji: "🌽",          hover: "hover:bg-[#FFF9C4]", ruta: "/game/milpa" },
       ];

  return (
    <div className="min-h-screen bg-[#F4F0E6] text-[#2C4A3E]">

      {/* NAVBAR */}
      <nav className="bg-[#1E3D32] text-white shadow-xl">
        <div className="flex justify-between items-center px-4 py-5">
          <div className="flex items-center gap-3">
  <img src="/logo.png" alt="MayaPlay" className="h-16" />
  <h1 className="text-3xl font-bold tracking-wide text-white">MayaPlay</h1>
</div>
          <div className="hidden md:flex gap-8 font-medium">
            <Link to="/" className="hover:text-[#D4A373] transition">Inicio</Link>
            <Link to="/medio-ambiente" className="hover:text-[#D4A373] transition">Juegos</Link>
            <Link to="/lengua-maya" className="hover:text-[#D4A373] transition">Lengua Maya</Link>
            <Link to="/progreso" className="hover:text-[#D4A373] transition">Progreso</Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative h-[650px] flex items-center justify-center bg-gradient-to-br from-[#2C5F4D] to-[#1E3D32] overflow-hidden">

        {/* Fondo maya */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/az-subtle.png')]" />

        {/* Decoraciones girando */}
        <div className="absolute top-10 left-10 text-[100px] opacity-10 spin-slow">🌿</div>
        <div className="absolute bottom-10 left-20 text-[80px] opacity-10 spin-slow">🌽</div>
        <div className="absolute top-10 right-40 text-[70px] opacity-10 spin-slow">🐆</div>
        <div className="absolute top-40 left-40 text-[60px] opacity-10 spin-slow">⭐</div>
        <div className="absolute bottom-20 right-80 text-[90px] opacity-10 spin-slow">🌺</div>
        <div className="absolute top-60 right-20 text-[50px] opacity-10 spin-slow">🦋</div>
        <div className="absolute bottom-40 left-60 text-[65px] opacity-10 spin-slow">🌙</div>

        {/* Jaguar flotando */}
        <div className="absolute bottom-0 -right-4 z-10 jaguar-float">
          <img src="/jaguar.png" alt="Jaguar Maya" className="w-52 md:w-80 drop-shadow-2xl" />
        </div>

{/* Burbuja mensaje */}
<div className="absolute bottom-20 left-4 md:translate-x-0 md:top-auto md:bottom-48 md:left-auto md:right-65 bg-white px-4 py-3 md:px-6 md:py-4 rounded-[30px] shadow-xl z-20 border-4 border-[#E9C46A] w-[160px] md:w-auto md:max-w-[280px] pop-in">
  <p className="font-bold text-[#2C5F4D] text-sm md:text-lg">🐆 ¡Hola!</p>
  <p className="text-xs md:text-sm text-gray-700 mt-1 md:mt-2">¡Vamos a aprender jugando!</p>
  <p className="text-xs md:text-sm font-semibold text-[#A98467] mt-1 md:mt-2 italic">Ko'ox kanik yéetel báaxal</p>
</div>
        {/* Contenido */}
        <div className="relative z-10 text-center px-6 slide-up">
          <h2 className="text-3xl md:text-7xl font-bold text-white leading-tight">
            Aprende la Cultura Maya
            <span className="block text-[#E9C46A]">Jugando 🌿</span>
          </h2>
          
        </div>
      </section>

      {/* SECCIONES */}
      <section className="max-w-7xl mx-auto py-20 px-8">
        <h3 className="text-5xl font-bold text-center mb-14 slide-up">
          Explora las Secciones
        </h3>
        <div className="grid md:grid-cols-3 gap-10">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`bg-white rounded-[35px] p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition duration-300 ${section.hover} ${section.delay}`}
            >
              <div className="text-6xl mb-5">{section.emoji}</div>
              <h4 className="text-3xl font-bold mb-2">{section.title}</h4>
              <p className="italic text-[#A98467] text-lg mb-4">{section.maya}</p>
              <p className="text-gray-600 leading-relaxed">{section.description}</p>
              <Link
                to={index === 0 ? "/medio-ambiente" : index === 1 ? "/lengua-maya" : "/saberes"}
                className="inline-block mt-6 bg-[#2C5F4D] text-white px-6 py-3 rounded-2xl hover:bg-[#1E3D32] hover:scale-105 transition duration-300"
              >
                Explorar
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* JUEGOS DESTACADOS */}
      <section className="bg-[#DDE5D0] py-20">
        <div className="max-w-7xl mx-auto px-8">
          <h3 className="text-5xl font-bold text-center mb-14">
            Juegos Destacados 🎮
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {juegos.map((game, index) => (
              <div
                key={index}
                className={`bg-white rounded-[30px] p-6 text-center shadow-lg hover:scale-105 transition duration-300 ${game.hover}`}
              >
                <div className="mb-4 flex justify-center">
                  {game.imagen ? (
                    <img src={game.imagen} alt={game.nombre} className="w-20 h-20 object-contain" />
                  ) : (
                    <span className="text-6xl">{game.emoji}</span>
                  )}
                </div>
                <h4 className="font-bold text-xl mb-4">{game.nombre}</h4>
                
                <Link
                  to={game.ruta}
                  className="inline-block bg-[#E9C46A] px-5 py-3 rounded-xl font-bold hover:scale-110 transition duration-300"
                >
                  Jugar
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1E3D32] text-white py-10 text-center">
        <h4 className="text-2xl font-bold">EcoMaya Kids 🌿</h4>
        <p className="mt-3 text-gray-300">Aprender jugando sobre cultura maya y el medio ambiente.</p>
      </footer>
    </div>
  );
}

export default Home;