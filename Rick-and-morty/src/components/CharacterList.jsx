import React from "react";
import "./characterlist.css"
import { useEffect, useState } from "react";
import Character from "./Character";
function CharacterList() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      setCharacters(data.results);
    }
    fetchData();
  }, []);
  return (
    <div className="row">
      {characters.map((character) => (
        <div key={character.id}>
          <Character
            key={character.id}
            name={character.name}
            image={character.image}
          />
        </div>
      ))}
    </div>
  );
}

export default CharacterList;
