import "./Header.css";

const Header = ({ title }) => {
  return (
    <div className="header">
      <div className="header-left-side">
        <p>Djalma Web</p>
        <h1>{title}</h1>
        <a href="https://coru.net/" target="_blank">
          Browse documentation
        </a>
      </div>
    </div>
  );
};

export default Header;
