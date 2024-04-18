import Header from "./components/Header";
import Out from "./components/Out";
import KeyBad from "./components/KeyBad";
import "./styles/App.scss";
import { useState } from "react";

const THEMES = [1, 2, 3];
const KEYS = [
  "7",
  "8",
  "9",
  "DEL",
  "4",
  "5",
  "6",
  "+",
  "1",
  "2",
  "3",
  "-",
  ".",
  "0",
  "/",
  "*",
  "RESET",
  "=",
];
function App() {
  const [theme, setTheme] = useState(1);
  const [value, setValue] = useState("");

  const handleKey = async (key) => {
    switch (key) {
      case "DEL":
      case "Backspace":
        setValue(value.slice(0, -1));
        break;
      case "RESET":
        setValue("");
        break;
      case "=":
      case "Enter":
        try {
          setValue(Math.round(eval(value)).toString());
        } catch (e) {
          setValue("Error");
          await new Promise((resolve) => setTimeout(resolve, 500));
          setValue(value);
        }
        break;
      default:
        if (key === "." && value.includes(".")) return;
        if (!isNaN(+key) && value.startsWith("0")) return setValue(key);
        if (value.length >= 10) return;

        setValue(value + key);
        break;
    }
  };

  return (
    <div
      className={"main Theme-" + theme}
      onKeyDown={(e) =>
        (KEYS.includes(e.key) || e.key === "Backspace" || e.key === "Enter") &&
        handleKey(e.key)
      }
    >
      <div className="calculator">
        <Header THEMES={THEMES} setTheme={setTheme} />
        <Out value={value} />
        <KeyBad KEYS={KEYS} handleKey={handleKey} />
      </div>
    </div>
  );
}

export default App;
