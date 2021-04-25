import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = ({ resetHome }) => {
  return (
    <nav className="nav-bar">
      <NavLink exact to="/" className="nav-bar__home" onClick={resetHome}>
        <img className="nav-bar__home--img" src="/doghouse.svg" alt="doghouse" />
      </NavLink>
      <h1 className="nav-bar__title">Dream Up Pup</h1>
      <img className="nav-bar__shelf--img" src="/books.svg" alt="three books on a shelf" />
    </nav>
  );
}

export default Header;