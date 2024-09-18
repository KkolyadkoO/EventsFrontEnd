import './styles.css';
import {Link} from 'react-router-dom';
import {useContext} from "react";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";


const Header = () => {
    const {store} = useContext(Context);


    return (<div className="header">
            <div className="logo">
                <Link to="/">Events.by</Link>
            </div>
            <div className="auth-buttons">
                {!store.isAuth ? (<>
                        <Link to="/login">Log in</Link>
                        <Link to="/register">Register</Link>
                    </>
                ) : (
                    <button id="logout" onClick={() => store.Logout()}>Log out</button>
                )}
            </div>
        </div>
    );
}

export default observer(Header);