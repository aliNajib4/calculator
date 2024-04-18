import PropTypes from "prop-types";
const Header = ({ THEMES, setTheme }) => {
  return (
    <header>
      <h1 className="logo">calc</h1>
      <div className="theme">
        <div className="text">THEME</div>
        <div className="themeType">
          <div className="nums">
            {THEMES.map((n) => (
              <span key={n}></span>
            ))}
          </div>
          <div className={`themes`}>
            {THEMES.map((n) => (
              <input
                key={n}
                type="radio"
                id="theme"
                name="theme"
                onClick={() => setTheme(n)}
              />
            ))}
            <div className="themeNow"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  THEMES: PropTypes.array.isRequired,
  setTheme: PropTypes.func.isRequired,
};

export default Header;
