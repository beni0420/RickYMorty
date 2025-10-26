import React from "react";
//componente presentacional: recibe un objeto "character" como prop y renderiza una tarjeta para un solo personaje.
import type { Character } from "../types";
import "./CharacterCard.css";

type Props = {
  character: Character;
};

//Presenta la imagen, nombre, estado y especie de un personaje.
const CharacterCard: React.FC<Props> = ({ character }) => {
  return (
    <div className="card">
      <img
        src={character.image}
        alt={character.name}
        style={{ width: "180px", height: "auto" }}
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
