import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Header.css';

const Header = ({ resetHome }) => {
  return (
    <>
    <nav className="nav-bar">
      <NavLink exact to="/" className="nav-bar__home" onClick={resetHome}>
        <img className="nav-bar__home--img" src="/doghouse.svg" alt="doghouse" />
      </NavLink>
      <div className="nav-bar__title--container">
        <h1 className="nav-bar__title">Dream Up Pup</h1>
        {' '}
        <img className="nav-bar__pawprint--img" src="/pawprint.svg" alt="paw print" />
      </div>
      <img className="nav-bar__shelf--img" src="/books.svg" alt="three books on a shelf" />
    </nav>
    <hr className="horizontal-rule" />
    </>
  );
}

export default Header;

Header.propTypes = {
  resetHome: PropTypes.func.isRequired
};