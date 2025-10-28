import React, { useEffect, useState } from "react";
import type { Character } from "../types";
import Modal from "../components/modal/Modal";

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

  const handleSelect = (character: Character) => {
    if (character.id % 2 === 0) {
      setSelectedCharacter(character);
    } else {
      const newTab = window.open("", "_blank");
      if (newTab) {
        newTab.document.title = character.name;

        newTab.document.head.innerHTML = `
        <style>
          body {
            margin: 0;
            height: 100vh;
            background-image: url('/background.jpg');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            font-family: Arial, sans-serif;
            color: white;
            text-align: center;
            padding: 2rem;
          }
          img {
            max-width: 100%;
            border-radius: 10px;
          }
        </style>
      `;

        newTab.document.body.innerHTML = `
          <h1>${character.name}</h1>
          <img src="${character.image}" style="max-width:100%" />
          <p><strong>Status:</strong> ${character.status}</p>
          <p><strong>Species:</strong> ${character.species}</p>
        `;
        newTab.focus();
      }
    }
  };

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
            onSelect={() => handleSelect(character)}
          />
        ))}
      </div>

      <Modal
        isOpen={!!selectedCharacter}
        onClose={() => setSelectedCharacter(null)}
        title={selectedCharacter?.name}
      >
        {selectedCharacter && (
          <div style={{ textAlign: "center" }}>
            <img
              src={selectedCharacter.image}
              alt={selectedCharacter.name}
              style={{ width: "100%", borderRadius: "15px" }}
            />
            <p>
              <strong>Status:</strong> {selectedCharacter.status}
            </p>
            <p>
              <strong>Species:</strong> {selectedCharacter.species}
            </p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default CharacterList;
