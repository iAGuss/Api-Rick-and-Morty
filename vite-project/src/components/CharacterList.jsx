import React from "react";
import { useEffect, useState } from "react";
import Character from "./Character";
import "./character.css";
function CharacterList() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    async function fetchdata() {
      const response = await fetch(
        "https://dragon-ball-super-api.herokuapp.com/api/characters"
      );
      const data = await response.json();
      setCharacters(data);
    }
    fetchdata();
  }, []);
  return (
    <div className="todo-carta">
      {characters.map((character) => {
        return (
          <div className="col-md-4" key={character.id}>
            <Character
              name={character.name}
              image={character.imageUrl}
              universe={character.universe}
            />
          </div>
        );
      })}
    </div>
  );
}

export default CharacterList;
