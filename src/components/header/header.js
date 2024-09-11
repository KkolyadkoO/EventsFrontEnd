import './header.css';
import { Link } from 'react-router-dom';
const Header = () => {
    return ( <div className="header">
        <div className="logo">
          Events.by
        </div>
        <div className="auth-buttons">
          <Link to="/login">Log in</Link>
          <a href="#">Log out</a>
        </div>
      </div> 
      );
}
 
export default Header;