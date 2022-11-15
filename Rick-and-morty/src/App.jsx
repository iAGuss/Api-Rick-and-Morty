import "./App.css";
import CharacterList from "./components/CharacterList";
import Character from "./components/Character";

function App() {
  return (
    <div className="bg-dark text-white">
      <h1 className="text-cente display-1 py-4">Rick and Morty</h1>
      <CharacterList />
      <Character />
    </div>
  );
}

export default App;
