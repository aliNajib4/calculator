import Header from "./components/Header";
import Out from "./components/Out";
import KeyBad from "./components/KeyBad";
import "./styles/App.css";

function App() {
  const THEMES = [1, 2, 3];
  const KEYS = [7, 8, 9, "DEL", 4, 5, 6, "+", 1, 2, 3, "-", ".", 0, "/", "×"];
  return (
    <div className="Theme-1">
      <Header THEMES={THEMES} />
      <Out />
      <KeyBad KEYS={KEYS} />
    </div>
  );
}

export default App;
