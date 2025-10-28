import React from "react";
import type { Character } from "../types";
import "./CharacterCard.css";

type Props = {
  character: Character;
  onSelect: () => void;
};

const CharacterCard: React.FC<Props> = ({ character, onSelect }) => {
  return (
    <div className="card" onClick={onSelect} style={{ cursor: "pointer" }}>
      <img
        src={character.image}
        alt={character.name}
        style={{ width: "185px", height: "auto" }}
        className="card-image"
      />
      <div className="card-details">
        <h3>{character.name}</h3>
        <p>Status: {character.status}</p>
        <p>Species: {character.species}</p>
      </div>
    </div>
  );
};

export default CharacterCard;
