import PropTypes from "prop-types";
import copy from "copy-to-clipboard";

const Out = ({ value }) => {
  return (
    <div className="out">
      <input
        readOnly
        type="text"
        name="out"
        id="out"
        value={value.replaceAll("*", "×")}
      />
      <button onClick={() => copy(value)}>C</button>
    </div>
  );
};

Out.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Out;
