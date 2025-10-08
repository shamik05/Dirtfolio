import './Header.css';

function Header () {
  return (
    <header className="Header">
      <ul className="Header__List">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="secret">Secret</a></li>
      </ul>
    </header>
  )
};

export default Header;