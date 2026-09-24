import { Link } from "react-router-dom";

export default function Saberes() {
  return (
    <div className="min-h-screen bg-orange-50 p-10">

      <Link to="/" className="text-orange-800 font-bold text-lg">
        ← Volver al inicio
      </Link>

      <h1 className="text-5xl font-bold text-orange-800 mb-10 mt-5">
        🌽 Saberes Ancestrales
      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="bg-white p-8 rounded-3xl shadow-lg">
          🌽 La Milpa Maya
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-lg">
          🌿 Plantas Medicinales
        </div>

      </div>

    </div>
  );
}