import { useParams, Link } from "react-router-dom";

export default function Game() {
  const { id } = useParams();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F4F0E6]">

      <h1 className="text-5xl font-bold text-[#1E3D32] mb-5">
        Juego: {id}
      </h1>

      <p className="text-xl mb-8">
        Aquí irá el juego real 🎮
      </p>

      <Link
        to="/medio-ambiente"
        className="bg-[#2C5F4D] text-white px-6 py-3 rounded-2xl"
      >
        Volver
      </Link>
    </div>
  );
}