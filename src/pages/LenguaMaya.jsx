export default function LenguaMaya() {
  return (
    <div className="min-h-screen bg-yellow-50 p-10">

      <h1 className="text-5xl font-bold text-yellow-800 mb-10">
        🗣️ Juegos de Lengua Maya
      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="bg-white p-8 rounded-3xl shadow-lg">
          🃏 Memorama Maya
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-lg">
          🔤 Aprende Palabras
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-lg">
          🧠 Trivia Maya
        </div>

      </div>

    </div>
  );
}