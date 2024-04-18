import PropTypes from "prop-types";

const KeyBad = ({ KEYS, handleKey }) => {
  return (
    <main>
      {KEYS.map((key) => (
        <button
          key={key}
          className={"key-" + (key === "=" ? "EQUAL" : key)}
          onClick={() => handleKey(key)}
        >
          {key === "*" ? "×" : key}
        </button>
      ))}
    </main>
  );
};

KeyBad.propTypes = {
  KEYS: PropTypes.array.isRequired,
  handleKey: PropTypes.func.isRequired,
};

export default KeyBad;
