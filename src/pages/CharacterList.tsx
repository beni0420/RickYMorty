//componente de página: obtiene la lista de personajes desde la API de Rick and Morty usando fetch y el hook useEffect.

//Usa el hook useState para almacenar el array de personajes
import React, { useEffect, useState } from "react";
import type { Character } from "../types";
import Modal from "../components/modal/Modal";

//Renderiza el logo y, para cada personaje, una tarjeta usando el componente CharacterCard.

import CharacterCard from "../components/CharacterCard";
import logo from "../assets/Rick_and_Morty.webp";

const CharacterList: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    null
  );

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
        {characters.slice(0, characters.length - 6).map((character) => (
          <CharacterCard
            key={character.id}
            character={character}
            onSelect={() => setSelectedCharacter(character)}
          />
        ))}
      </div>

      <Modal
        isOpen={!!selectedCharacter}
        onClose={() => setSelectedCharacter(null)}
      >
        {selectedCharacter && (
          <div style={{ textAlign: "center" }}>
            <h2>{selectedCharacter.name}</h2>
            <img
              src={selectedCharacter.image}
              alt={selectedCharacter.name}
              style={{ width: "100%" }}
            />
            <p>Status: {selectedCharacter.status}</p>
            <p>Species: {selectedCharacter.species}</p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default CharacterList;
