import React from "react";
import "./characterlist.css";
import { useEffect, useState } from "react";
import Character from "./Character";

function NavPage(props) {
  return (
    <header className="d-flex justify-content-between align-items-center ">
      <p>page: {props.page}</p>
      <button
        className="btn btn-primary btn-sm"
        onClick={() => props.setpage(props.page + 1)}
      >
        page {props.page + 1}
      </button>
    </header>
  );
}
//
function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data = await response.json();
      setCharacters(data.results);
      setLoading(false);
    }
    fetchData();
  }, [page]);

  return (
    <div className="container ">
      <NavPage page={page} setpage={setPage} />

      {loading ? (
        <h1>loading....</h1>
      ) : (
        <div className="row">
          {characters.map((character) => {
            return (
              <div className="col-md-4" key={character.id}>
                <Character
                  name={character.name}
                  image={character.image}
                  species={character.species}
                />
              </div>
            );
          })}
        </div>
      )}
      <NavPage page={page} setpage={setPage} />
    </div>
  );
}

export default CharacterList;
