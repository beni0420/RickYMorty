//punto de entrada de la app con React + Vite.

import { StrictMode } from "react";

//createRoot de React 18 para renderizar el componente principal (App) dentro del elemento con id root (div en index.html).
import { createRoot } from "react-dom/client";
//Importa los estilos globales y monta toda la estructura React en la página.
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
