import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const AuthContexto = createContext();

export function AuthProveedor({ children }) {
  const [usuario, setUsuario] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setUsuario(user);
      setCargando(false);
    });
    return unsub;
  }, []);

  return (
    <AuthContexto.Provider value={{ usuario, cargando }}>
      {!cargando && children}
    </AuthContexto.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContexto);
}