import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthProveedor } from "./contexto/AuthContexto.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProveedor>
      <App />
    </AuthProveedor>
  </StrictMode>
);