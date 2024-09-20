import './styles.css';
import {Link, useNavigate} from 'react-router-dom';
import {useContext} from "react";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";


const Header = () => {
    const {store} = useContext(Context);
    const navigate = useNavigate();
    const handleOnClick = () => {
        store.Logout()
        navigate("/");
    }

    return (<div className="header">
            <div className="logo">
                <Link to="/">Events.by</Link>
            </div>
            <div className="auth-buttons">
                {!store.isAuth ? (
                    <>
                        <Link to="/login">Log in</Link>
                        <Link to="/register">Register</Link>
                    </>
                ) : (
                    <>
                        <Link to="/profile">{store.user.userName}</Link>
                        <button id="logout" onClick={handleOnClick}>Log out</button>
                    </>
                )}
            </div>
        </div>
    );
}

export default observer(Header);