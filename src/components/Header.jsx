import PropTypes from "prop-types";
const Header = ({ THEMES }) => {
  return (
    <header>
      <h1 className="logo">calc</h1>
      <div className="theme">
        <div className="text">THEME</div>
        <div className="types">
          {THEMES.map((n) => (
            <div key={n} className={`theme${n}`}>
              <span>{n}</span>
              <input type="radio" id="theme" />
            </div>
          ))}
          <div className="themeNow"></div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  THEMES: PropTypes.array.isRequired,
};

export default Header;
