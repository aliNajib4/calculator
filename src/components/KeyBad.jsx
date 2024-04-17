import { Fragment } from "react";
import PropTypes from "prop-types";

const KeyBad = ({ KEYS }) => {
  return (
    <main>
      {KEYS.map((key) => (
        <Fragment key={key}>
          <button>{key}</button>
        </Fragment>
      ))}
    </main>
  );
};

KeyBad.propTypes = {
  KEYS: PropTypes.array.isRequired,
};

export default KeyBad;
