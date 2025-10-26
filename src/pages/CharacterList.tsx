//componente de página: obtiene la lista de personajes desde la API de Rick and Morty usando fetch y el hook useEffect.

//Usa el hook useState para almacenar el array de personajes
import React, { useEffect, useState } from "react";
import type { Character } from "../types";

//Renderiza el logo y, para cada personaje, una tarjeta usando el componente CharacterCard.

import CharacterCard from "../components/CharacterCard";
import logo from "../assets/Rick_and_Morty.webp";

const CharacterList: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <div>
      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <img
          src={logo}
          alt="Logo personalizado"
          style={{ maxWidth: "300px", width: "100%", marginBottom: "100px" }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        {characters
          //quitamos en penúltimo porque la imagen no es la adecuada
          .filter((_c, i, arr) => i < arr.length - 5)
          .filter((_c, i, arr) => i !== arr.length - 2)
          .map((c) => (
            <CharacterCard key={c.id} character={c} />
          ))}
      </div>
    </div>
  );
};

export default CharacterList;
