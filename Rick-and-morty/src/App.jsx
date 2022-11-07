import "./App.css";
import CharacterList from "./components/CharacterList";
import Character from "./components/Character";

function App() {
  return (
    <div className="App">
      <h1>Rick and Morty</h1>
      <CharacterList />
      <Character />
    </div>
  );
}

export default App;
