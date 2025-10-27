//componente raíz de React, el punto de entrada de la app.

import React from "react";
import CharacterList from "./pages/CharacterList";

//Establece el estilo global del fondo oscuro y familia de fuente, y monta el componente CharacterList en pantalla.

const App: React.FC = () => (
  <div
    style={{
      fontFamily: "Arial, sans-serif",
      minHeight: "100vh",
    }}
  >
    <CharacterList />
  </div>
);

export default App;
