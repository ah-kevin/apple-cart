import React, {
  Component,
  PropTypes
} from 'react';
import { Link } from 'react-router';
class Header extends Component {
  render () {
    return (
      <header className="clearfix">
        React App Demo
        <nav className="clearfix">
          <div className="nav-item">
            <Link to="Home">Home</Link>
          </div>
          <div className="nav-item">
            <Link to="Info">Info</Link>
          </div>
        </nav>
      </header>
    );
  }
}

Header.propTypes = {};
Header.defaultProps = {};

export default Header;
