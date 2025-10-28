import React from "react";
import CharacterList from "./pages/CharacterList";

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
