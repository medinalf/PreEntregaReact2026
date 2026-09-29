import "./Header.css";

export const Header = () => {
  return (
    <Header>
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>
    </Header>
  );
};
