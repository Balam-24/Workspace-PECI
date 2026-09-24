import { useState } from "react";
import { signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [esRegistro, setEsRegistro] = useState(false);
  const [error, setError] = useState("");

  const loginConGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (error) {
      setError("Error al iniciar con Google");
    }
  };

  const handleSubmit = async () => {
    setError("");
    try {
      if (esRegistro) {
        const resultado = await createUserWithEmailAndPassword(auth, correo, contrasena);
        await updateProfile(resultado.user, { displayName: nombre });
      } else {
        await signInWithEmailAndPassword(auth, correo, contrasena);
      }
      navigate("/");
    } catch (err) {
      if (err.code === "auth/user-not-found") setError("Usuario no encontrado");
      else if (err.code === "auth/wrong-password") setError("Contraseña incorrecta");
      else if (err.code === "auth/email-already-in-use") setError("El correo ya está registrado");
      else if (err.code === "auth/weak-password") setError("La contraseña debe tener al menos 6 caracteres");
      else setError("Error al iniciar sesión");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1E3D32] to-[#2C5F4D] flex flex-col items-center justify-center p-6">
      
      {/* Decoraciones */}
      <div className="absolute top-10 left-10 text-[80px] opacity-10">🌿</div>
      <div className="absolute bottom-10 right-10 text-[80px] opacity-10">🐆</div>

      <div className="bg-white rounded-[40px] shadow-2xl p-10 max-w-md w-full text-center">
        
        <img src="/logo.png" alt="MayaPlay" className="h-28 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-[#1E3D32] mb-1">
          {esRegistro ? "Crear cuenta" : "¡Bienvenido!"}
        </h1>
        <p className="italic text-[#A98467] text-sm mb-6">
          {esRegistro ? "Ts'o'ok u páajtal — Comenzar" : "Ka'aten — Bienvenido"}
        </p>

        {/* Formulario */}
        <div className="space-y-4 mb-4">
          {esRegistro && (
            <input
              type="text"
              placeholder="Tu nombre"
              value={nombre}
              onChange={e => setNombre(e.target.value)}
              className="w-full border-2 border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:border-[#2C5F4D] text-gray-700"
            />
          )}
          <input
            type="email"
            placeholder="Correo electrónico"
            value={correo}
            onChange={e => setCorreo(e.target.value)}
            className="w-full border-2 border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:border-[#2C5F4D] text-gray-700"
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={contrasena}
            onChange={e => setContrasena(e.target.value)}
            className="w-full border-2 border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:border-[#2C5F4D] text-gray-700"
          />
        </div>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <button
          onClick={handleSubmit}
          className="w-full bg-[#2C5F4D] text-white py-3 rounded-2xl font-bold hover:bg-[#1E3D32] hover:scale-105 transition duration-300 mb-4"
        >
          {esRegistro ? "Registrarse" : "Iniciar sesión"}
        </button>

        <p className="text-gray-400 text-sm mb-4">— o —</p>

        <button
          onClick={loginConGoogle}
          className="flex items-center justify-center gap-3 w-full bg-white border-2 border-gray-200 rounded-2xl px-6 py-3 font-bold text-gray-700 hover:bg-gray-50 hover:scale-105 transition duration-300 shadow mb-6"
        >
          <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
          Continuar con Google
        </button>

        <button
          onClick={() => setEsRegistro(!esRegistro)}
          className="text-[#2C5F4D] text-sm font-medium hover:underline"
        >
          {esRegistro ? "¿Ya tienes cuenta? Inicia sesión" : "¿No tienes cuenta? Regístrate"}
        </button>
      </div>
    </div>
  );
}