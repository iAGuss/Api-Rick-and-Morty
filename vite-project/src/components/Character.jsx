import React from "react";
import "./character.css";
function Character(character) {
  return (
    <div className="Carta">
      <h2>{character.name}</h2>
      <img src={character.image} alt="" />
      <p>{character.universe}</p>
    </div>
  );
}

export default Character;
