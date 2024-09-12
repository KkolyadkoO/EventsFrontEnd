import './Header.css';
import { Link } from 'react-router-dom';
const Header = () => {
    return ( <div className="header">
        <div className="logo">
        <Link to="/">Events.by</Link>
        </div>
        <div className="auth-buttons">
          <Link to="/login">Log in</Link>
          <Link to="/register">Register</Link>
        </div>
      </div> 
      );
}
 
export default Header;